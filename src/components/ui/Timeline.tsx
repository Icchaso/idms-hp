import { cn } from "@/lib/utils";

export type TimelineItem = {
  date: string;
  title: string;
  description?: string;
};

type TimelineProps = {
  items: readonly TimelineItem[];
  className?: string;
};

/** 縦型タイムライン。沿革・ロードマップで共用。 */
export function Timeline({ items, className }: TimelineProps) {
  return (
    <ol className={cn("relative", className)}>
      {/* 縦の軸線 */}
      <span
        aria-hidden="true"
        className="absolute left-3 sm:left-4 top-2 bottom-2 w-px bg-navy-200"
      />
      {items.map((item, index) => (
        <li key={`${item.date}-${index}`} className="relative pl-12 sm:pl-16 pb-10 last:pb-0">
          {/* マーカー */}
          <span
            aria-hidden="true"
            className="absolute left-1.5 sm:left-2.5 top-2 h-3 w-3 rounded-full border-2 border-gold-500 bg-white"
          />
          <div className="flex flex-col gap-2">
            <span className="font-serif text-sm font-semibold tracking-wider text-gold-600">
              {item.date}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-navy-900 leading-tight">
              {item.title}
            </h3>
            {item.description && (
              <p className="text-sm sm:text-base text-mute leading-relaxed">
                {item.description}
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
