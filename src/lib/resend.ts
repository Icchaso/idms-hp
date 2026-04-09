import { Resend } from "resend";

/**
 * Resend クライアントのシングルトン。
 * 環境変数 RESEND_API_KEY が必須。Vercel ダッシュボードで設定する。
 */
let cached: Resend | null = null;

export function getResend(): Resend {
  if (cached) return cached;
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY が設定されていません");
  }
  cached = new Resend(apiKey);
  return cached;
}

export const emailConfig = {
  /** 管理者宛アドレス（ここに問い合わせが届く） */
  to: process.env.CONTACT_TO_EMAIL ?? "site@idms.or.jp",
  /** 送信元アドレス（Resend で認証済みのドメインを使うこと） */
  from: process.env.CONTACT_FROM_EMAIL ?? "noreply@idms.or.jp",
};
