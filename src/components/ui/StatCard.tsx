import { cn } from "@/lib/utils";
import { CountUp } from "./CountUp";

type StatCardProps = {
  value: string;
  unit?: string;
  label: string;
  className?: string;
};

/**
 * 数字を主役に大きく見せる実績カード。
 * 値が純粋な数値文字列（"60", "267" など）なら CountUp で動的にカウント。
 * "週4" のような数値以外はそのまま静的表示。
 */
export function StatCard({ value, unit, label, className }: StatCardProps) {
  const numeric = /^\d+$/.test(value) ? Number(value) : null;

  return (
    <div
      className={cn(
        "group flex flex-col items-center gap-2 border-t-2 border-gold-500 bg-white py-8 px-4 transition-all duration-500 hover:bg-snow",
        className,
      )}
    >
      <div className="flex items-baseline gap-1 font-serif text-navy-900 transition-transform duration-500 group-hover:scale-105">
        <span className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-none tabular-nums">
          {numeric !== null ? <CountUp value={numeric} /> : value}
        </span>
        {unit && <span className="text-lg sm:text-xl font-medium">{unit}</span>}
      </div>
      <p className="text-xs sm:text-sm text-mute tracking-wider mt-2">{label}</p>
    </div>
  );
}
