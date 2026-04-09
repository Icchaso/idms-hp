import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { businessItems, oligoScan, serviceLinks } from "@/content/business";

export const metadata: Metadata = {
  title: "事業内容",
  description:
    "治療家への教育・治療院プロデュース・医療連携・サプリメント普及・万博活動など、IDMSの事業内容をご紹介します。検査機器OligoScanの詳細もご案内します。",
};

export default function BusinessPage() {
  const practitionerServices = serviceLinks.filter((s) => s.audience === "practitioner");
  const patientServices = serviceLinks.filter((s) => s.audience === "patient");

  return (
    <>
      <PageHeader
        eyebrow="Business"
        title="事業内容"
        description="検査機器と栄養学の科学的アプローチを軸に、治療家・医療機関・社会へ価値を届けています。"
      />

      {/* 5本柱 */}
      <section className="py-20 lg:py-32 bg-white">
        <Container>
          <div className="space-y-16 lg:space-y-24">
            {businessItems.map((item, index) => (
              <article
                key={item.id}
                className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start"
              >
                <div className="lg:col-span-4">
                  <span className="font-serif text-sm tracking-[0.3em] text-gold-600">
                    {String(index + 1).padStart(2, "0")} / {item.subtitle}
                  </span>
                  <h2 className="font-serif text-2xl lg:text-3xl font-bold text-navy-900 leading-tight mt-4">
                    {item.title}
                  </h2>
                  <span className="block h-px w-12 bg-gold-500 mt-6" aria-hidden="true" />
                </div>

                <div className="lg:col-span-8">
                  <p className="text-base text-ink leading-loose">{item.description}</p>
                  <ul className="mt-6 space-y-3">
                    {item.details.map((detail) => (
                      <li
                        key={detail}
                        className="text-sm text-navy-700 leading-relaxed pl-6 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-3 before:h-px before:bg-gold-500"
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* OligoScan セクション */}
      <section className="py-20 lg:py-32 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" aria-hidden="true">
          <div className="absolute -top-32 -right-32 w-120 h-120 rounded-full border border-gold-500" />
          <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full border border-gold-500" />
        </div>
        <Container className="relative">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="font-serif text-xs sm:text-sm uppercase tracking-[0.3em] text-gold-300">
                Inspection Equipment
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight mt-4">
                {oligoScan.name}
              </h2>
              <span className="block h-px w-12 bg-gold-500 mt-6" aria-hidden="true" />
              <p className="text-base text-navy-100 leading-loose mt-6">{oligoScan.tagline}</p>
              <p className="text-sm text-navy-200 leading-relaxed mt-6">{oligoScan.description}</p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-px bg-navy-700 border border-navy-700">
                {oligoScan.features.map((feature) => (
                  <div key={feature.title} className="bg-navy-900 p-6 lg:p-8">
                    <h3 className="font-serif text-base font-bold text-gold-300 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-navy-100 leading-relaxed mt-3">{feature.body}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 border-l-2 border-gold-500 pl-6 py-2">
                <p className="text-sm text-navy-100 leading-relaxed">{oligoScan.context}</p>
              </div>
              <p className="text-xs text-navy-300 mt-6">{oligoScan.pricingNote}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* サービスLP一覧（治療家向け） */}
      <section className="py-20 lg:py-32 bg-snow">
        <Container>
          <SectionHeading
            eyebrow="Programs for Practitioners"
            title="治療家向けプログラム"
            description="検査機器・栄養学・経営支援を組み合わせた、治療家のための実践的なプログラムです。"
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {practitionerServices.map((service) => (
              <a
                key={service.id}
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-navy-100 p-8 transition-all duration-300 hover:border-gold-400 hover:shadow-[0_8px_30px_rgba(11,37,69,0.06)] flex flex-col gap-4"
              >
                <span className="font-serif text-xs uppercase tracking-[0.3em] text-gold-600">
                  {service.subtitle}
                </span>
                <h3 className="font-serif text-lg lg:text-xl font-bold text-navy-900 leading-tight">
                  {service.title}
                </h3>
                <span className="block h-px w-10 bg-gold-500" aria-hidden="true" />
                <p className="text-sm text-mute leading-relaxed">{service.description}</p>
                <span className="mt-auto text-xs text-navy-700 group-hover:text-gold-600 transition-colors tracking-wider">
                  詳細を見る →
                </span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* 一般顧客向け */}
      {patientServices.length > 0 && (
        <section className="py-20 lg:py-32 bg-white">
          <Container>
            <SectionHeading
              eyebrow="Programs for Patients"
              title="一般のお客様向けプログラム"
              description="提携院で受けられる、一般のお客様向けの専門プログラムです。"
              className="mb-12"
            />
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
              {patientServices.map((service) => (
                <a
                  key={service.id}
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-snow border border-navy-100 p-8 transition-all duration-300 hover:border-gold-400 hover:shadow-[0_8px_30px_rgba(11,37,69,0.06)] flex flex-col gap-4"
                >
                  <span className="font-serif text-xs uppercase tracking-[0.3em] text-gold-600">
                    {service.subtitle}
                  </span>
                  <h3 className="font-serif text-lg lg:text-xl font-bold text-navy-900 leading-tight">
                    {service.title}
                  </h3>
                  <span className="block h-px w-10 bg-gold-500" aria-hidden="true" />
                  <p className="text-sm text-mute leading-relaxed">{service.description}</p>
                  <span className="mt-auto text-xs text-navy-700 group-hover:text-gold-600 transition-colors tracking-wider">
                    詳細を見る →
                  </span>
                </a>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBanner />
    </>
  );
}
