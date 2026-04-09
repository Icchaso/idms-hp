import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type CardProps = {
  className?: string;
  children: ReactNode;
};

/** 細い罫線 + 白背景の上品なカード。学会的なミニマル装飾。 */
export function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        "group relative bg-white border border-navy-100 p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-gold-400 hover:shadow-[0_8px_30px_rgba(11,37,69,0.06)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
