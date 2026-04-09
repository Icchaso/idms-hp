import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { roadmap } from "@/content/history";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "学会について",
  description: `${site.name}の理念・代表挨拶・ビジョンをご紹介します。`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="学会について"
        description="東洋医学と西洋医学の融合による新しい医療のかたちを追求する、私たちの理念をご紹介します。"
      />

      {/* 代表挨拶 */}
      <section className="py-20 lg:py-32 bg-white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <div className="aspect-[3/4] bg-navy-50 border border-navy-100 flex items-center justify-center text-mute text-sm">
                <span className="text-center px-4">
                  代表者写真
                  <br />
                  <span className="text-xs">（後日差し替え）</span>
                </span>
              </div>
              <div className="mt-6 text-center">
                <p className="font-serif text-sm tracking-wider text-mute">{site.representative.title}</p>
                <p className="font-serif text-xl font-bold text-navy-900 mt-1">
                  {site.representative.name}
                </p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <SectionHeading
                eyebrow="Message"
                title="代表挨拶"
                className="mb-8"
              />
              <div className="prose prose-navy max-w-none text-base text-ink leading-loose space-y-6">
                <p>
                  東洋医学はその実績があるにも関わらず、経験や勘に頼っているというイメージから、
                  非科学的という印象を持たれてきました。そのため市場は閉鎖的で、国家資格者が増える一方、
                  治療家の平均施術売上は10年前の半分にまで落ち込んでいます。
                </p>
                <p>
                  この状況を変えるためには、東洋医学と西洋医学のいいとこ取りをすることで、
                  それぞれの強みを活かしたアプローチを開発する必要があります。
                  私たちは、検査機器の活用と栄養学に基づく科学的な根拠を組み合わせることで、
                  治療家が自信を持って施術を提供できる環境を整えてまいります。
                </p>
                <p>
                  まずは治療家の売上と利益の向上を実現し、次に若者が夢を持って参入できる業界構造へと変容させていく。
                  そして最終的には、東洋医学の利点を世界へと発信していく。
                  これが私たちの目指す未来です。
                </p>
                <p className="text-right font-serif">
                  {site.representative.title}　{site.representative.name}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ミッション・ビジョン・バリュー */}
      <section className="py-20 lg:py-32 bg-snow">
        <Container>
          <SectionHeading
            eyebrow="Mission & Vision"
            title="私たちが目指すこと"
            align="center"
            className="mb-16"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                label: "Mission",
                title: "東西医学の融合",
                body: "東洋医学と西洋医学のいいとこ取りで、それぞれの強みを活かしたアプローチを開発します。",
              },
              {
                label: "Vision",
                title: "業界構造の変容",
                body: "治療家の売上と利益を向上させ、若者が夢を持って参入できる業界へと変革します。",
              },
              {
                label: "Value",
                title: "世界への発信",
                body: "海外への技術輸出を経て、東洋医学の利点を全世界へと届けていきます。",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white border border-navy-100 p-8 lg:p-10 flex flex-col gap-4"
              >
                <span className="font-serif text-xs uppercase tracking-[0.3em] text-gold-600">
                  {item.label}
                </span>
                <h3 className="font-serif text-xl lg:text-2xl font-bold text-navy-900 leading-tight">
                  {item.title}
                </h3>
                <span className="block h-px w-10 bg-gold-500" aria-hidden="true" />
                <p className="text-sm text-mute leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ロードマップ */}
      <section className="py-20 lg:py-32 bg-white">
        <Container>
          <SectionHeading
            eyebrow="Roadmap"
            title="2027 / 2030 へのロードマップ"
            description="海外からの相談実績を踏まえ、東洋医学を世界へ発信していくための長期的な計画です。"
            align="center"
            className="mb-16"
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {roadmap.map((item) => (
              <div
                key={item.year}
                className="border-t-2 border-gold-500 bg-snow p-8 lg:p-10 flex flex-col gap-4"
              >
                <span className="font-serif text-5xl font-bold text-navy-900 leading-none">
                  {item.year}
                </span>
                <h3 className="font-serif text-xl font-bold text-navy-900 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-mute leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
