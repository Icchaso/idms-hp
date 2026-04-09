import { z } from "zod";

/**
 * お問い合わせフォームのバリデーションスキーマ。
 * クライアント・サーバー両方で同じスキーマを使用することで整合性を担保する。
 */
export const contactSchema = z.object({
  name: z
    .string()
    .min(1, "お名前を入力してください")
    .max(100, "お名前は100文字以内で入力してください"),
  company: z.string().max(200, "会社名は200文字以内で入力してください").optional().or(z.literal("")),
  email: z
    .string()
    .min(1, "メールアドレスを入力してください")
    .email("メールアドレスの形式が正しくありません")
    .max(200),
  phone: z.string().max(30, "電話番号は30文字以内で入力してください").optional().or(z.literal("")),
  category: z.enum(
    ["consultation", "media", "partnership", "other"],
    { message: "お問い合わせ種別を選択してください" },
  ),
  message: z
    .string()
    .min(10, "お問い合わせ内容は10文字以上で入力してください")
    .max(2000, "お問い合わせ内容は2000文字以内で入力してください"),
  // ハニーポット（Bot対策）。人間は触らない隠しフィールド。
  website: z.string().max(0).optional(),
  // 同意チェック
  consent: z.literal(true, { message: "プライバシーポリシーへの同意が必要です" }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

/** カテゴリ表示用ラベル */
export const categoryLabels: Record<ContactFormValues["category"], string> = {
  consultation: "事業・コンサルティングのご相談",
  media: "取材・メディア",
  partnership: "提携・協業のご相談",
  other: "その他",
};
