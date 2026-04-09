import { cn } from "@/lib/utils";

type Align = "left" | "center";

type SectionHeadingProps = {
  /** 英語サブタイトル（小さく上に表示） */
  eyebrow?: string;
  /** 日本語のメインタイトル */
  title: string;
  /** 任意のリード文 */
  description?: string;
  align?: Align;
  className?: string;
  /** 見出しタグ。ページ内で h1 を1つだけにするための制御用 */
  as?: "h1" | "h2" | "h3";
};

/**
 * セクションタイトル。日本語タイトル + 英語のアイブロウ + 装飾線で
 * 学会らしい格調を持たせる。
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Heading = "h2",
}: SectionHeadingProps) {
  const alignClasses = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={cn("flex flex-col gap-4", alignClasses, className)}>
      {eyebrow && (
        <span className="font-serif text-xs sm:text-sm uppercase tracking-[0.3em] text-gold-600">
          {eyebrow}
        </span>
      )}
      <Heading className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 leading-tight">
        {title}
      </Heading>
      <span
        className={cn(
          "block h-px w-12 bg-gold-500",
          align === "center" && "mx-auto",
        )}
        aria-hidden="true"
      />
      {description && (
        <p
          className={cn(
            "max-w-2xl text-mute leading-relaxed text-sm sm:text-base",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
