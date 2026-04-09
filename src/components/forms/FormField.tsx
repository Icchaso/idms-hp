import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type FormFieldProps = {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  hint?: string;
  className?: string;
  children: ReactNode;
};

/**
 * フォーム要素の共通ラッパー。ラベル・必須マーク・エラー・ヒントを統一表示。
 */
export function FormField({
  label,
  htmlFor,
  required,
  error,
  hint,
  className,
  children,
}: FormFieldProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label
        htmlFor={htmlFor}
        className="font-serif text-sm font-bold text-navy-900 tracking-wider flex items-center gap-2"
      >
        {label}
        {required && (
          <span className="text-[10px] font-sans bg-gold-500 text-navy-950 px-1.5 py-0.5">
            必須
          </span>
        )}
      </label>
      {hint && <p className="text-xs text-mute">{hint}</p>}
      {children}
      {error && (
        <p role="alert" className="text-xs text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
