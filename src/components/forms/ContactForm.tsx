"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, categoryLabels, type ContactFormValues } from "@/lib/validation";
import { FormField } from "./FormField";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full px-4 py-3.5 bg-white border border-navy-200 text-ink text-sm focus:outline-none focus:border-navy-700 transition-colors";

/**
 * お問い合わせフォーム本体。
 * クライアントで zod バリデーション → /api/contact に POST → /contact/thanks に遷移。
 */
export function ContactForm() {
  const router = useRouter();
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
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

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? "送信に失敗しました。時間をおいて再度お試しください。");
      }

      router.push("/contact/thanks");
    } catch (err) {
      const message = err instanceof Error ? err.message : "送信に失敗しました。";
      setSubmitError(message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6" noValidate>
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

      {submitError && (
        <div
          role="alert"
          className="border border-red-300 bg-red-50 text-red-800 text-sm px-4 py-3"
        >
          {submitError}
        </div>
      )}

      <div className="pt-4">
        <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
          {isSubmitting ? "送信中..." : "送信する"}
        </Button>
      </div>
    </form>
  );
}
