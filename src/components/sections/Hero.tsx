import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

/**
 * TOPヒーロー。
 *
 * - モバイル: ロゴを大きな透かしとして背景に配置、テキスト中央揃え
 * - PC: 左テキスト・右ロゴの横並びレイアウト
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      {/* 背景画像 */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        priority
        className="object-cover opacity-20"
        sizes="100vw"
      />
      {/* グラデーションオーバーレイ */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-navy-900/80 to-navy-900"
        aria-hidden="true"
      />

      {/* 背景の装飾円（ゴールド・ゆっくり回転） */}
      <div className="absolute inset-0 opacity-[0.10]" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-120 h-120 rounded-full border border-gold-500 animate-slow-spin" />
        <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full border border-gold-500 animate-slow-spin-reverse" />
      </div>

      {/* モバイル用：ロゴを透かしとして背景に配置（lg以上では非表示） */}
      <div className="absolute inset-0 flex items-center justify-end lg:hidden" aria-hidden="true">
        <div className="relative w-72 h-72 -mr-12 opacity-[0.08]">
          <Image
            src="/images/logo-mark.jpg"
            alt=""
            width={640}
            height={640}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>

      <Container className="relative">
        <div className="flex flex-col items-center text-center lg:grid lg:grid-cols-12 lg:text-left lg:items-center gap-8 lg:gap-12 py-20 sm:py-24 lg:py-32">

          {/* PC用ロゴ — lgで表示 */}
          <div className="hidden lg:flex lg:order-2 lg:col-span-5 justify-end hero-fade-up hero-fade-up-1">
            <div className="relative w-md h-112 flex items-center justify-center">
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full border border-gold-300/30 animate-slow-spin"
              />
              <span
                aria-hidden="true"
                className="absolute inset-6 rounded-full border border-gold-300/20 animate-slow-spin-reverse"
              />
              <span
                aria-hidden="true"
                className="absolute inset-12 rounded-full border border-gold-400/15"
              />
              <div className="relative w-84 h-84">
                <span
                  aria-hidden="true"
                  className="absolute -inset-4 rounded-full bg-gold-300/12 blur-2xl"
                />
                <Image
                  src="/images/logo-mark.jpg"
                  alt={`${site.name} ロゴ`}
                  width={640}
                  height={640}
                  priority
                  className="relative w-full h-full rounded-full object-cover ring-[3px] ring-gold-400/80 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.7),0_0_0_1px_rgba(201,161,74,0.25)]"
                />
              </div>
            </div>
          </div>

          {/* テキストコンテンツ */}
          <div className="lg:order-1 lg:col-span-7 flex flex-col items-center lg:items-start gap-4 sm:gap-6">
            <span className="font-serif text-[10px] sm:text-sm uppercase tracking-[0.3em] text-gold-300 hero-fade-up hero-fade-up-1 lg:hero-fade-up-2">
              {site.nameEn}
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight hero-fade-up hero-fade-up-2 lg:hero-fade-up-3">
              東洋・西洋医学の融合で、
              <br />
              <span className="text-gold-300">治療家と人々の健康</span>を
              <br />
              次のステージへ。
            </h1>
            <span
              className="block h-px w-16 bg-gold-500 hero-fade-up hero-fade-up-3 lg:hero-fade-up-4"
              aria-hidden="true"
            />
            <p className="text-sm sm:text-base lg:text-lg text-navy-100 leading-relaxed max-w-xl hero-fade-up hero-fade-up-4 lg:hero-fade-up-5">
              一般社団法人難治性疾患医学会（IDMS）は、検査機器の活用と栄養学講習を通じて、
              全国の治療家と医療機関の連携を支える学術団体です。
            </p>
            <div className="flex gap-3 sm:gap-4 mt-2 hero-fade-up hero-fade-up-5 lg:hero-fade-up-6">
              <Button href="/about" variant="gold" size="md" className="sm:px-8 sm:py-4 sm:text-lg">
                学会について
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="md"
                className="border-white text-white hover:bg-white hover:text-navy-900 sm:px-8 sm:py-4 sm:text-lg"
              >
                お問い合わせ
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
