import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

/** 全ページ底部に置けるお問い合わせ誘導バナー。 */
export function CtaBanner() {
  return (
    <section className="bg-navy-900 text-white">
      <Container>
        <div className="py-16 lg:py-24 flex flex-col items-center text-center gap-6">
          <span className="font-serif text-xs uppercase tracking-[0.3em] text-gold-300">
            Contact
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
            東西医学の融合に、
            <br className="sm:hidden" />
            ご興味のある方へ。
          </h2>
          <span className="block h-px w-12 bg-gold-500" aria-hidden="true" />
          <p className="text-sm sm:text-base text-navy-100 max-w-xl leading-relaxed">
            治療家・企業・メディアからのお問い合わせを受け付けております。
            <br className="hidden sm:block" />
            まずはお気軽にご連絡ください。
          </p>
          <div className="mt-2">
            <Button href="/contact" variant="gold" size="lg">
              お問い合わせはこちら
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
