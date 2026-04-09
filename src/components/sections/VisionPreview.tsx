import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { roadmap } from "@/content/history";

/** TOPページのビジョン要約セクション。 */
export function VisionPreview() {
  return (
    <section className="py-20 lg:py-32 bg-snow">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Our Vision"
              title="東洋医学の利点を、世界へ"
              description="治療家の売上向上から業界構造の変容、そして海外への技術輸出まで。長期的な視野で東洋医学の発展に貢献します。"
              className="mb-8"
            />
            <Button href="/about" variant="primary" size="md">
              ビジョンを読む
            </Button>
          </div>

          <div className="lg:col-span-7">
            <ul className="space-y-6">
              {roadmap.map((item) => (
                <li
                  key={item.year}
                  className="flex gap-6 sm:gap-8 border-l-2 border-gold-500 pl-6 sm:pl-8 py-2"
                >
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-navy-900 leading-none shrink-0">
                    {item.year}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-navy-900 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-mute leading-relaxed">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
