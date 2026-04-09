"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, categoryLabels, type ContactFormValues } from "@/lib/validation";
import { FormField } from "./FormField";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

const inputClass =
  "w-full px-4 py-3 bg-white border border-navy-200 text-ink text-sm focus:outline-none focus:border-navy-700 transition-colors";

/**
 * お問い合わせフォーム本体（preview-static ブランチ版）。
 * 静的ホスティング (Surge) ではバックエンドが無いため、送信ボタンを押すと
 * プレビュー版である旨を alert で表示します。
 * 本番（main ブランチ）では /api/contact 経由で Resend に送信されます。
 */
export function ContactForm() {
  const [previewNotice, setPreviewNotice] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      category: undefined,
      message: "",
      website: "",
      consent: false as unknown as true,
    },
  });

  const onSubmit = () => {
    setPreviewNotice(true);
    if (typeof window !== "undefined") {
      window.alert(
        `これはプレビュー版のサイトのため、お問い合わせの送信機能は無効化されています。\n\nお急ぎの場合は ${site.email} までメールでご連絡ください。`,
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6" noValidate>
      <div
        role="note"
        className="border-l-4 border-gold-500 bg-gold-50 px-4 py-3 text-sm text-navy-900 leading-relaxed"
      >
        <strong className="font-bold">プレビュー版について：</strong>{" "}
        このサイトはプレビュー用のため、お問い合わせフォームの送信機能は無効化されています。
        お急ぎの場合は{" "}
        <a href={`mailto:${site.email}`} className="underline hover:text-gold-700">
          {site.email}
        </a>{" "}
        までメールでご連絡ください。
      </div>

      {/* ハニーポット（隠しフィールド） */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <FormField label="お名前" htmlFor="name" required error={errors.name?.message}>
        <input
          id="name"
          type="text"
          autoComplete="name"
          className={inputClass}
          {...register("name")}
        />
      </FormField>

      <FormField label="会社・団体名" htmlFor="company" error={errors.company?.message}>
        <input
          id="company"
          type="text"
          autoComplete="organization"
          className={inputClass}
          {...register("company")}
        />
      </FormField>

      <div className="grid sm:grid-cols-2 gap-6">
        <FormField label="メールアドレス" htmlFor="email" required error={errors.email?.message}>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={inputClass}
            {...register("email")}
          />
        </FormField>

        <FormField label="電話番号" htmlFor="phone" error={errors.phone?.message}>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            {...register("phone")}
          />
        </FormField>
      </div>

      <FormField
        label="お問い合わせ種別"
        htmlFor="category"
        required
        error={errors.category?.message}
      >
        <select id="category" className={inputClass} {...register("category")} defaultValue="">
          <option value="" disabled>
            選択してください
          </option>
          {Object.entries(categoryLabels).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </FormField>

      <FormField
        label="お問い合わせ内容"
        htmlFor="message"
        required
        hint="10文字以上2000文字以内"
        error={errors.message?.message}
      >
        <textarea
          id="message"
          rows={8}
          className={cn(inputClass, "resize-y leading-relaxed")}
          {...register("message")}
        />
      </FormField>

      <FormField label="" htmlFor="consent" error={errors.consent?.message}>
        <label className="flex items-start gap-3 cursor-pointer text-sm text-ink">
          <input
            id="consent"
            type="checkbox"
            className="mt-1 h-4 w-4 accent-navy-900"
            {...register("consent")}
          />
          <span className="leading-relaxed">
            <Link href="/privacy" className="text-navy-900 underline hover:text-gold-600">
              プライバシーポリシー
            </Link>
            に同意します
          </span>
        </label>
      </FormField>

      {previewNotice && (
        <div
          role="alert"
          className="border border-gold-500 bg-gold-50 text-navy-900 text-sm px-4 py-3"
        >
          このサイトはプレビュー版のため送信できません。
          <a href={`mailto:${site.email}`} className="underline ml-1 hover:text-gold-700">
            {site.email}
          </a>{" "}
          までメールでご連絡ください。
        </div>
      )}

      <div className="pt-4">
        <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
          送信する（プレビュー版）
        </Button>
      </div>
    </form>
  );
}
