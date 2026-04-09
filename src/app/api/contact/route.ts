import { NextResponse } from "next/server";
import { contactSchema, categoryLabels } from "@/lib/validation";
import { getResend, emailConfig } from "@/lib/resend";
import { site } from "@/content/site";

/** 簡易レート制限（IP単位、in-memory） */
const requestLog = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1分
const RATE_LIMIT_MAX = 5; // 1分あたり5回まで

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const history = requestLog.get(ip) ?? [];
  const recent = history.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (recent.length >= RATE_LIMIT_MAX) return true;
  recent.push(now);
  requestLog.set(ip, recent);
  return false;
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  // IP取得
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "短時間に多数の送信が検出されました。しばらくしてから再度お試しください。" },
      { status: 429 },
    );
  }

  // バリデーション
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "リクエストの形式が正しくありません" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0]?.message ?? "入力内容を確認してください";
    return NextResponse.json({ error: firstIssue }, { status: 400 });
  }

  const data = parsed.data;

  // ハニーポット引っかかりはサイレントに成功扱い（Bot対策）
  if (data.website && data.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const categoryLabel = categoryLabels[data.category];

  // 管理者宛メール本文
  const adminText = [
    `${site.name} 公式サイトからお問い合わせがありました。`,
    "",
    `■ お名前: ${data.name}`,
    `■ 会社・団体名: ${data.company || "（未記入）"}`,
    `■ メールアドレス: ${data.email}`,
    `■ 電話番号: ${data.phone || "（未記入）"}`,
    `■ お問い合わせ種別: ${categoryLabel}`,
    "",
    "■ お問い合わせ内容:",
    data.message,
    "",
    "---",
    `IP: ${ip}`,
    `受信日時: ${new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" })}`,
  ].join("\n");

  const adminHtml = `
    <div style="font-family: -apple-system, 'Hiragino Sans', sans-serif; max-width: 600px;">
      <h2 style="color: #0B2545; border-bottom: 2px solid #C9A14A; padding-bottom: 8px;">
        ${escapeHtml(site.name)} お問い合わせ
      </h2>
      <table cellpadding="8" style="border-collapse: collapse; width: 100%;">
        <tr><td style="background:#f7f8fa; font-weight: bold;">お名前</td><td>${escapeHtml(data.name)}</td></tr>
        <tr><td style="background:#f7f8fa; font-weight: bold;">会社・団体名</td><td>${escapeHtml(data.company || "（未記入）")}</td></tr>
        <tr><td style="background:#f7f8fa; font-weight: bold;">メールアドレス</td><td>${escapeHtml(data.email)}</td></tr>
        <tr><td style="background:#f7f8fa; font-weight: bold;">電話番号</td><td>${escapeHtml(data.phone || "（未記入）")}</td></tr>
        <tr><td style="background:#f7f8fa; font-weight: bold;">種別</td><td>${escapeHtml(categoryLabel)}</td></tr>
      </table>
      <h3 style="color: #0B2545; margin-top: 24px;">お問い合わせ内容</h3>
      <p style="white-space: pre-wrap; background: #f7f8fa; padding: 16px; border-left: 3px solid #C9A14A;">${escapeHtml(data.message)}</p>
      <p style="color: #6b7280; font-size: 12px; margin-top: 24px;">
        IP: ${escapeHtml(ip)}<br>
        受信日時: ${new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" })}
      </p>
    </div>
  `;

  // ユーザー宛自動返信
  const userText = [
    `${data.name} 様`,
    "",
    `${site.name}へお問い合わせいただき、ありがとうございます。`,
    "下記の内容でお問い合わせを受け付けました。",
    "担当者より追ってご連絡いたしますので、いましばらくお待ちください。",
    "",
    "----------------------------------------",
    `■ お名前: ${data.name}`,
    `■ 会社・団体名: ${data.company || "（未記入）"}`,
    `■ メールアドレス: ${data.email}`,
    `■ 電話番号: ${data.phone || "（未記入）"}`,
    `■ お問い合わせ種別: ${categoryLabel}`,
    "",
    "■ お問い合わせ内容:",
    data.message,
    "----------------------------------------",
    "",
    "※このメールは自動送信されています。",
    "※心当たりのない場合は、お手数ですが本メールを破棄してください。",
    "",
    site.name,
    site.address.full,
    `${site.url}`,
  ].join("\n");

  try {
    const resend = getResend();

    // 管理者宛
    await resend.emails.send({
      from: `${site.name} <${emailConfig.from}>`,
      to: emailConfig.to,
      replyTo: data.email,
      subject: `【お問い合わせ】${categoryLabel} - ${data.name}様`,
      text: adminText,
      html: adminHtml,
    });

    // ユーザー宛自動返信
    await resend.emails.send({
      from: `${site.name} <${emailConfig.from}>`,
      to: data.email,
      subject: `【${site.shortName}】お問い合わせありがとうございます`,
      text: userText,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Resend send failed:", err);
    return NextResponse.json(
      { error: "送信中にエラーが発生しました。時間をおいて再度お試しください。" },
      { status: 500 },
    );
  }
}
