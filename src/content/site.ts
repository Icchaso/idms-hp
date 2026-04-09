/**
 * サイト全体のメタ情報を集約するファイル。
 * 文言・URL・SNS・ナビゲーション項目はここを編集すれば全ページに反映されます。
 */

export const site = {
  name: "一般社団法人難治性疾患医学会",
  shortName: "IDMS",
  nameEn: "Intractable Disease Medical Society",
  tagline: "東洋医学と西洋医学の融合で、治療家と人々の健康を次のステージへ。",
  description:
    "一般社団法人難治性疾患医学会（IDMS）は、東洋医学と西洋医学のいいとこ取りを掲げ、検査機器の活用と栄養学講習を通じて全国の治療家と医療機関の連携を支える学術団体です。",
  url: "https://idms.or.jp",
  ogImage: "/images/og-image.png",
  email: "site@idms.or.jp",
  address: {
    zip: "545-0053",
    region: "大阪府",
    city: "大阪市阿倍野区",
    street: "松崎町3-10-6 ルネグラン阿倍野松崎町1102号",
    full: "〒545-0053 大阪市阿倍野区松崎町3-10-6 ルネグラン阿倍野松崎町1102号",
  },
  representative: {
    name: "廣瀨 和則",
    title: "代表理事",
  },
  social: {
    line: "https://lin.ee/sOp6b62",
    instagram: "https://www.instagram.com/kazu890717/",
    facebook: "https://www.facebook.com/kazunori.hirose.79",
    litlink: "https://lit.link/IDMS",
  },
} as const;

export type SiteConfig = typeof site;

/** グローバルナビゲーション */
export const navigation = [
  { label: "学会について", href: "/about" },
  { label: "事業内容", href: "/business" },
  { label: "ネットワーク", href: "/network" },
  { label: "実績・沿革", href: "/history" },
  { label: "法人概要", href: "/company" },
  { label: "お問い合わせ", href: "/contact" },
] as const;

/** フッター用ナビゲーション（プライバシーポリシー含む） */
export const footerLinks = [
  ...navigation,
  { label: "プライバシーポリシー", href: "/privacy" },
] as const;
