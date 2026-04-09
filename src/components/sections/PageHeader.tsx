import { Container } from "@/components/layout/Container";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

/**
 * 下層ページ共通のページヘッダー。
 * ネイビー背景に英語アイブロウ + 日本語タイトルで統一感を出す。
 */
export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="bg-navy-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-[320px] h-[320px] rounded-full border border-gold-500" />
      </div>
      <Container className="relative">
        <div className="py-20 lg:py-28 flex flex-col gap-4">
          <span className="font-serif text-xs sm:text-sm uppercase tracking-[0.3em] text-gold-300">
            {eyebrow}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            {title}
          </h1>
          <span className="block h-px w-12 bg-gold-500 mt-2" aria-hidden="true" />
          {description && (
            <p className="text-sm sm:text-base text-navy-100 leading-relaxed max-w-2xl mt-2">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
