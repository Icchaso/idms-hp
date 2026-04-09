/**
 * 事業内容データ。TOP の3本柱表示と /business ページの両方で参照されます。
 */

export type BusinessPillar = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
};

/** TOPページに表示する事業の3本柱 */
export const businessPillars: BusinessPillar[] = [
  {
    id: "education",
    title: "治療家への教育・講習",
    subtitle: "Education for Practitioners",
    description:
      "検査機器の活用と実践に向けた栄養学講習を通じて、治療家が科学的根拠に基づいた施術を提供できるよう支援しています。",
    details: [
      "週4回のZOOM勉強会を継続開催",
      "検査機器の活用方法と読み解きの研修",
      "栄養学に基づいた施術メニューの設計",
    ],
  },
  {
    id: "produce",
    title: "治療院プロデュース",
    subtitle: "Clinic Produce",
    description:
      "全国約60社の整体院・整骨院・鍼灸院に対して、集客・メニュー開発・検査の解説・医療連携など包括的なプロデュースを行っています。",
    details: [
      "業界最大手フランチャイズや大手加盟店も含む顧問先",
      "内臓ケアメニューの開発と導入支援",
      "医療機関との連携体制の構築",
    ],
  },
  {
    id: "alliance",
    title: "医療連携・国際展開",
    subtitle: "Medical Alliance",
    description:
      "再生医療専門クリニックとの連携をはじめ、東洋医学と西洋医学の融合による新たなアプローチを推進。海外への技術輸出も視野に入れています。",
    details: [
      "大阪心斎橋の再生医療専門クリニックと連携締結",
      "万博実行委員会として健康増進活動を推進",
      "2027年までに海外技術輸出体制を構築予定",
    ],
  },
];

/** /business ページに表示する事業項目（より詳細） */
export const businessItems: BusinessPillar[] = [
  ...businessPillars,
  {
    id: "supplement",
    title: "サプリメント普及",
    subtitle: "Supplement",
    description:
      "関連会社で開発するサプリメントの普及を通じて、治療現場と一般生活者の健康増進を支援しています。",
    details: [
      "栄養学講習と連動した製品設計",
      "治療家を通じた質の高い情報提供",
    ],
  },
  {
    id: "expo",
    title: "万博実行委員会活動",
    subtitle: "EXPO Committee",
    description:
      "万博のメイン会場でのパレードの実行委員を任されており、健康と美容の発信を行いながら、健康増進の輪を全国・全世界へ広げています。",
    details: [
      "メイン会場パレードの実行委員",
      "健康・美容領域の情報発信",
    ],
  },
];

/** 数字で見る実績（TOP / history で使用） */
export const stats = [
  { value: "60", unit: "社", label: "顧問先治療院数" },
  { value: "180", unit: "社", label: "提携団体" },
  { value: "週4", unit: "回", label: "ZOOM勉強会" },
  { value: "267", unit: "万円", label: "1日最高売上実績" },
] as const;

/**
 * 検査機器 OligoScan の詳細情報。
 * 事業の中核である「検査機器の活用と栄養学講習」の根幹をなす機器。
 */
export const oligoScan = {
  name: "OligoScan（オリゴスキャン）",
  tagline: "手のひらに光をあてるだけで、体内のミネラルと有害金属を測定",
  description:
    "手のひらに光をあてるだけで、体内の必須ミネラル20元素と有害金属14元素を約3分で測定できる無侵襲の検査機器です。IDMSは、この検査機器の活用と栄養学講習を組み合わせることで、治療家が科学的根拠に基づいた施術を提供できる環境を整えています。",
  features: [
    {
      title: "短時間での測定",
      body: "手のひらに光をあてるだけで約3分で結果が得られます。",
    },
    {
      title: "必須ミネラル20元素",
      body: "体の機能維持に必要なミネラル20種類を一度に測定できます。",
    },
    {
      title: "有害金属14元素",
      body: "水銀・鉛・カドミウム・ヒ素・アルミニウム等の蓄積量を可視化します。",
    },
    {
      title: "全国の医療機関で導入",
      body: "全国230以上の病院・歯科医院で採用されている信頼性の高い検査機器です。",
    },
  ],
  context:
    "大気汚染・化粧品・食品などから体内に蓄積される有害金属は、認知症、疲労感、めまい、睡眠障害、うつ症状などを引き起こす可能性があると指摘されています。OligoScan で現状を可視化することで、治療家は栄養学に基づいた具体的なアプローチを設計できます。",
  pricingNote: "検査の料金や提供形態は、提携する治療院ごとに異なります。詳細はお問い合わせください。",
} as const;

/**
 * 治療家向けに提供されているサービスLP一覧。
 * lit.link 経由で公開されている各種ランディングページを集約。
 */
export type ServiceLink = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  audience: "practitioner" | "patient";
};

export const serviceLinks: ServiceLink[] = [
  {
    id: "origoscan",
    title: "売上・利益改善 / OligoScan活用",
    subtitle: "Sales & Profit Improvement",
    description:
      "OligoScan を活用して治療院の売上・利益を改善するためのプログラム。検査機器の使い方から、メニュー設計、集客までを支援します。",
    url: "https://idms.or.jp/origoscan/",
    audience: "practitioner",
  },
  {
    id: "blood-test",
    title: "血液検査の読み解きと改善",
    subtitle: "Blood Test Improvement",
    description:
      "血液検査のデータを正しく読み解き、栄養学に基づいた改善アプローチを設計するための講座。",
    url: "https://idms.or.jp/blood_test",
    audience: "practitioner",
  },
  {
    id: "sleep",
    title: "睡眠の質を脳幹から変える講座",
    subtitle: "Sleep Improvement",
    description:
      "睡眠の質を根本的に改善するためのアプローチを学ぶ、治療家向けの専門講座です。",
    url: "https://idms.or.jp/sleep_improvement/",
    audience: "practitioner",
  },
  {
    id: "study-group",
    title: "勉強会・堀川塾",
    subtitle: "Study Group",
    description:
      "「治療院を満員にする秘訣」を学ぶ、治療家向けの実践的な勉強会。週4回のZOOM開催を継続しています。",
    url: "https://idms.or.jp/offer/",
    audience: "practitioner",
  },
  {
    id: "footcare",
    title: "全く新しい外反母趾の根本改善",
    subtitle: "Foot Care",
    description:
      "外反母趾の根本改善を目指す、一般顧客向けの施術プログラム。西田辺の提携院で受けられます。",
    url: "https://idms.or.jp/footcare_lp/nishitanabe/",
    audience: "patient",
  },
];
