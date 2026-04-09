import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

/**
 * TOPヒーロー。学会の理念を1ステートメントで提示し、
 * 信頼感のある左テキスト・右ロゴ／モチーフのレイアウト。
 *
 * テキストは順次フェードイン、装飾円はゆっくり回転、ロゴは呼吸する。
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      {/* 背景の装飾円（ゴールド・ゆっくり回転） */}
      <div className="absolute inset-0 opacity-[0.06]" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-120 h-120 rounded-full border border-gold-500 animate-slow-spin" />
        <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full border border-gold-500 animate-slow-spin-reverse" />
      </div>

      <Container className="relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center py-20 lg:py-32">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="font-serif text-xs sm:text-sm uppercase tracking-[0.3em] text-gold-300 hero-fade-up hero-fade-up-1">
              {site.nameEn}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight hero-fade-up hero-fade-up-2">
              東洋医学と西洋医学の融合で、
              <br />
              <span className="text-gold-300">治療家と人々の健康</span>
              <br />
              を次のステージへ。
            </h1>
            <span
              className="block h-px w-16 bg-gold-500 hero-fade-up hero-fade-up-3"
              aria-hidden="true"
            />
            <p className="text-base sm:text-lg text-navy-100 leading-relaxed max-w-xl hero-fade-up hero-fade-up-4">
              一般社団法人難治性疾患医学会（IDMS）は、検査機器の活用と栄養学講習を通じて、
              全国の治療家と医療機関の連携を支える学術団体です。
            </p>
            <div className="flex flex-wrap gap-4 mt-2 hero-fade-up hero-fade-up-5">
              <Button href="/about" variant="gold" size="lg">
                学会について
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-navy-900"
              >
                お問い合わせ
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end hero-fade-up hero-fade-up-6">
            <div className="relative w-65 h-65 sm:w-80 sm:h-80 lg:w-95 lg:h-95 flex items-center justify-center">
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full border border-gold-300/30 animate-slow-spin"
              />
              <span
                aria-hidden="true"
                className="absolute inset-6 rounded-full border border-gold-300/20 animate-slow-spin-reverse"
              />
              <Image
                src="/images/logo.png"
                alt={`${site.name} ロゴ`}
                width={320}
                height={320}
                priority
                className="relative bg-white/95 p-6 rounded-full w-50 h-50 sm:w-60 sm:h-60 lg:w-70 lg:h-70 object-contain animate-breathe"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
