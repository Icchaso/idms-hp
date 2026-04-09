import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { companyRows } from "@/content/company";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "法人概要",
  description: `${site.name}の法人概要・所在地・代表者情報をご覧いただけます。`,
};

export default function CompanyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Company"
        title="法人概要"
        description="一般社団法人難治性疾患医学会の基本情報です。"
      />

      <section className="py-20 lg:py-32 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              eyebrow="Profile"
              title="法人情報"
              align="center"
              className="mb-12"
            />
            <dl className="border-t border-navy-200">
              {companyRows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 py-5 border-b border-navy-100"
                >
                  <dt className="sm:col-span-3 font-serif text-sm sm:text-base font-bold text-navy-900 tracking-wider">
                    {row.label}
                  </dt>
                  <dd className="sm:col-span-9 text-sm sm:text-base text-ink leading-relaxed">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* アクセス（Google Maps 埋め込み） */}
      <section className="py-20 lg:py-32 bg-snow">
        <Container>
          <SectionHeading
            eyebrow="Access"
            title="所在地・アクセス"
            description={site.address.full}
            align="center"
            className="mb-12"
          />
          <div className="max-w-4xl mx-auto aspect-video border border-navy-100 bg-white">
            <iframe
              title="所在地マップ"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(site.address.full)}&output=embed`}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            />
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
