/**
 * 沿革・実績タイムラインデータ。
 * 新しい実績ができたらこの配列に1件追記するだけで /history と TOP に反映されます。
 */

export type TimelineEvent = {
  date: string; // 表示用 (例: "2023年4月")
  iso: string; // ソート・構造化データ用 (例: "2023-04")
  title: string;
  description: string;
};

export const timeline: TimelineEvent[] = [
  {
    date: "2023年4月",
    iso: "2023-04",
    title: "整体院プロデュース事業を開始",
    description:
      "前身の健康関連企業にて整体院・整骨院・鍼灸院のプロデュースを開始。初月で35社の顧問契約を獲得。",
  },
  {
    date: "2023年6月",
    iso: "2023-06",
    title: "業界最大手企業からの紹介",
    description:
      "実績が評価され、顧問先から業界最大手フランチャイズ企業の紹介を受ける。",
  },
  {
    date: "2023年9月",
    iso: "2023-09",
    title: "内臓ケアメニューの提供開始",
    description:
      "内臓をケアする手法をメニュー化して提供を開始。顧問先が45社に拡大。",
  },
  {
    date: "2023年11月",
    iso: "2023-11",
    title: "1日267万円の売上実績",
    description:
      "内臓ケアメニューを導入した整体院で、1日に267万円の売上が上がる事例が発生。",
  },
  {
    date: "2023年12月",
    iso: "2023-12",
    title: "顧問先60社に到達",
    description:
      "11月の実績が業界内で注目され、顧問先が60社まで拡大。",
  },
  {
    date: "2024年1月",
    iso: "2024-01",
    title: "一部上場企業との合同セミナー実施",
    description:
      "通販システムを展開する一部上場企業からのオファーで合同セミナーを実施。顧問先からの紹介で180社の団体も担当に。",
  },
  {
    date: "2024年2月",
    iso: "2024-02",
    title: "再生医療クリニックと医療連携締結",
    description:
      "大阪心斎橋の再生医療専門クリニックと医療連携の締結を完了。",
  },
];

export type RoadmapItem = {
  year: string;
  title: string;
  description: string;
};

/** 将来ロードマップ（about / TOP で使用） */
export const roadmap: RoadmapItem[] = [
  {
    year: "2027",
    title: "海外への技術輸出体制を構築",
    description:
      "海外からの相談実績を踏まえ、東洋医学のノウハウを技術輸出できる体制を整えます。",
  },
  {
    year: "2030",
    title: "東洋医学を全世界へ発信",
    description:
      "東洋医学の利点を全世界に発信し、世界中の人々の健康増進に貢献します。",
  },
];
