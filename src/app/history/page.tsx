import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/ui/Timeline";
import { StatCard } from "@/components/ui/StatCard";
import { stats } from "@/content/business";
import { timeline, roadmap } from "@/content/history";

export const metadata: Metadata = {
  title: "実績・沿革",
  description:
    "IDMSの活動実績と沿革。2023年の事業開始からの主な実績と、2027/2030年に向けたロードマップをご紹介します。",
};

export default function HistoryPage() {
  return (
    <>
      <PageHeader
        eyebrow="History"
        title="実績・沿革"
        description="2023年の事業開始から短期間で多くの実績を積み上げてきました。これまでの歩みと、これからの展望をご紹介します。"
      />

      {/* 数字で見る */}
      <section className="py-20 lg:py-32 bg-white">
        <Container>
          <SectionHeading
            eyebrow="By the Numbers"
            title="数字で見る実績"
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-navy-100 border border-navy-100">
            {stats.map((stat) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                unit={stat.unit}
                label={stat.label}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* 沿革タイムライン */}
      <section className="py-20 lg:py-32 bg-snow">
        <Container>
          <SectionHeading
            eyebrow="Timeline"
            title="沿革"
            description="2023年の事業開始から現在まで、私たちが歩んできた道のりです。"
            className="mb-16"
          />
          <div className="max-w-3xl">
            <Timeline items={timeline} />
          </div>
        </Container>
      </section>

      {/* ロードマップ */}
      <section className="py-20 lg:py-32 bg-white">
        <Container>
          <SectionHeading
            eyebrow="Future"
            title="今後の展望"
            description="海外への技術輸出と東洋医学の世界発信を見据えた、長期的なビジョンです。"
            className="mb-16"
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {roadmap.map((item) => (
              <div
                key={item.year}
                className="border-t-2 border-gold-500 bg-snow p-8 lg:p-10"
              >
                <span className="font-serif text-5xl font-bold text-navy-900 leading-none block mb-4">
                  {item.year}
                </span>
                <h3 className="font-serif text-xl font-bold text-navy-900 leading-tight mb-3">
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
