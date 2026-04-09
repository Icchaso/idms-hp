import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { businessPillars } from "@/content/business";

/** TOPページの3本柱事業セクション。 */
export function BusinessPillars() {
  return (
    <section className="py-20 lg:py-32 bg-snow">
      <Container>
        <SectionHeading
          eyebrow="Our Business"
          title="3つの事業の柱"
          description="教育・プロデュース・連携。3つの軸で治療家と医療機関の発展を支援します。"
          align="center"
          className="mb-16"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {businessPillars.map((pillar, index) => (
            <Card key={pillar.id} className="flex flex-col gap-6">
              <span className="font-serif text-sm tracking-[0.3em] text-gold-600">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-xl lg:text-2xl font-bold text-navy-900 leading-tight">
                {pillar.title}
              </h3>
              <span className="block h-px w-10 bg-gold-500" aria-hidden="true" />
              <p className="text-sm text-mute leading-relaxed">{pillar.description}</p>
              <ul className="space-y-2 mt-auto">
                {pillar.details.map((detail) => (
                  <li
                    key={detail}
                    className="text-xs text-navy-700 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-px before:bg-gold-500"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button href="/business" variant="outline" size="md">
            事業内容を詳しく見る
          </Button>
        </div>
      </Container>
    </section>
  );
}
