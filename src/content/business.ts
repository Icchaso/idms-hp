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
