import { site } from "@/content/site";

/**
 * 構造化データ (JSON-LD)。
 * MedicalOrganization スキーマを採用し、検索エンジンに医療系学術団体として正しく認識させる。
 * RootLayout で全ページに埋め込む。
 */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: site.name,
    alternateName: [site.shortName, site.nameEn],
    description: site.description,
    url: site.url,
    logo: `${site.url}/images/logo.png`,
    image: `${site.url}/images/logo.png`,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      postalCode: site.address.zip,
      addressCountry: "JP",
      addressRegion: site.address.region,
      addressLocality: site.address.city,
      streetAddress: site.address.street,
    },
    founder: {
      "@type": "Person",
      name: site.representative.name,
      jobTitle: site.representative.title,
    },
    sameAs: [site.social.instagram, site.social.facebook, site.social.litlink],
    areaServed: {
      "@type": "Country",
      name: "日本",
    },
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
