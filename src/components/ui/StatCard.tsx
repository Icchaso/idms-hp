import { cn } from "@/lib/utils";

type StatCardProps = {
  value: string;
  unit?: string;
  label: string;
  className?: string;
};

/** 数字を主役に大きく見せる実績カード */
export function StatCard({ value, unit, label, className }: StatCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-2 border-t-2 border-gold-500 bg-white py-8 px-4",
        className,
      )}
    >
      <div className="flex items-baseline gap-1 font-serif text-navy-900">
        <span className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none">
          {value}
        </span>
        {unit && <span className="text-lg sm:text-xl font-medium">{unit}</span>}
      </div>
      <p className="text-xs sm:text-sm text-mute tracking-wider mt-2">{label}</p>
    </div>
  );
}
