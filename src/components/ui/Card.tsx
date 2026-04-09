import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type CardProps = {
  className?: string;
  children: ReactNode;
};

/**
 * 細い罫線 + 白背景の上品なカード。学会的なミニマル装飾。
 * ホバー時に枠がゴールドに変わり、わずかに浮き上がる。
 */
export function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        "group relative bg-white border border-navy-100 p-6 sm:p-8 lg:p-10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-gold-400 hover:shadow-[0_16px_40px_-12px_rgba(11,37,69,0.18)] hover:-translate-y-1",
        className,
      )}
    >
      {/* ホバー時に上から伸びるゴールドのアクセント線 */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-px w-0 bg-gold-500 transition-all duration-700 group-hover:w-full"
      />
      {children}
    </div>
  );
}
