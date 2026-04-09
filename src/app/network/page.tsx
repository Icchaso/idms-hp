import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { networkEntries, networkCategoryLabels, type NetworkEntry } from "@/content/network";

export const metadata: Metadata = {
  title: "ネットワーク",
  description:
    "IDMSのグループ会社と顧問先（プロデュース実績）一覧。整体院・整骨院・就労支援・飲食・アパレルなど多様な事業領域で連携しています。",
};

function NetworkCard({ entry }: { entry: NetworkEntry }) {
  return (
    <article className="bg-white border border-navy-100 p-6 lg:p-8 flex flex-col gap-4 transition-all duration-300 hover:border-gold-400 hover:shadow-[0_8px_30px_rgba(11,37,69,0.06)]">
      <div className="flex flex-col gap-1">
        <span className="font-serif text-xs uppercase tracking-[0.3em] text-gold-600">
          {entry.industry}
        </span>
        <h3 className="font-serif text-lg lg:text-xl font-bold text-navy-900 leading-tight mt-1">
          {entry.name}
        </h3>
        <span className="text-xs text-mute mt-1">{entry.area}</span>
      </div>
      <span className="block h-px w-10 bg-gold-500" aria-hidden="true" />
      <p className="text-sm text-ink leading-relaxed">{entry.description}</p>

      {entry.highlights && entry.highlights.length > 0 && (
        <ul className="flex flex-wrap gap-2 mt-2">
          {entry.highlights.map((tag) => (
            <li
              key={tag}
              className="text-[10px] tracking-wider px-2 py-1 bg-navy-50 text-navy-900 border border-navy-100"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}

      {(entry.tel || entry.address || entry.url) && (
        <dl className="text-xs text-mute leading-relaxed border-t border-navy-100 pt-4 mt-2 space-y-1">
          {entry.tel && (
            <div className="flex gap-2">
              <dt className="font-bold text-navy-900 shrink-0">TEL</dt>
              <dd>
                <a href={`tel:${entry.tel}`} className="hover:text-gold-600 transition-colors">
                  {entry.tel}
                </a>
              </dd>
            </div>
          )}
          {entry.address && (
            <div className="flex gap-2">
              <dt className="font-bold text-navy-900 shrink-0">所在地</dt>
              <dd>{entry.address}</dd>
            </div>
          )}
        </dl>
      )}

      {entry.url && (
        <a
          href={entry.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-navy-700 hover:text-gold-600 transition-colors tracking-wider mt-auto"
        >
          公式サイト・LPを見る →
        </a>
      )}
    </article>
  );
}

export default function NetworkPage() {
  const groupCompanies = networkEntries.filter((e) => e.category === "group");
  const clients = networkEntries.filter((e) => e.category === "client");

  return (
    <>
      <PageHeader
        eyebrow="Network"
        title="ネットワーク"
        description="グループ会社と全国の顧問先で構成される、IDMSのネットワークをご紹介します。整体院・整骨院・就労支援・飲食・アパレルまで、多様な事業領域で連携しています。"
      />

      {/* グループ会社 */}
      <section className="py-20 lg:py-32 bg-white">
        <Container>
          <SectionHeading
            eyebrow={networkCategoryLabels.group.en}
            title={networkCategoryLabels.group.ja}
            description="IDMSグループとして運営する事業所・店舗の一覧です。"
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groupCompanies.map((entry) => (
              <NetworkCard key={entry.id} entry={entry} />
            ))}
          </div>
        </Container>
      </section>

      {/* 顧問先・プロデュース実績 */}
      <section className="py-20 lg:py-32 bg-snow">
        <Container>
          <SectionHeading
            eyebrow={networkCategoryLabels.client.en}
            title={networkCategoryLabels.client.ja}
            description="プロデュース・コンサルティング実績のある治療院の一例です。実際の顧問先は全国60社以上にのぼります。"
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {clients.map((entry) => (
              <NetworkCard key={entry.id} entry={entry} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
