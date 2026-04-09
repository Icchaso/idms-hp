import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCard } from "@/components/ui/StatCard";
import { stats } from "@/content/business";

/** 数字で見るIDMSセクション。実績を端的に伝える。 */
export function StatsSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <Container>
        <SectionHeading
          eyebrow="By the Numbers"
          title="数字で見るIDMS"
          description="2023年の事業開始からの主な実績。全国の治療家と医療機関を支援しています。"
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
  );
}
