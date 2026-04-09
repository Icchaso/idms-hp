import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { businessItems } from "@/content/business";

export const metadata: Metadata = {
  title: "事業内容",
  description:
    "治療家への教育・治療院プロデュース・医療連携・サプリメント普及・万博活動など、IDMSの事業内容をご紹介します。",
};

export default function BusinessPage() {
  return (
    <>
      <PageHeader
        eyebrow="Business"
        title="事業内容"
        description="検査機器と栄養学の科学的アプローチを軸に、治療家・医療機関・社会へ価値を届けています。"
      />

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

      <CtaBanner />
    </>
  );
}
