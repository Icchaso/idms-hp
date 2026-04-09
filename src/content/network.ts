/**
 * グループ会社・顧問先（プロデュース実績）データ。
 * /network ページで一覧表示。
 */

export type NetworkCategory = "group" | "client";

export type NetworkEntry = {
  id: string;
  category: NetworkCategory;
  name: string;
  area: string;
  industry: string;
  description: string;
  highlights?: string[];
  url?: string;
  tel?: string;
  address?: string;
};

/** カテゴリラベル */
export const networkCategoryLabels: Record<NetworkCategory, { ja: string; en: string }> = {
  group: { ja: "グループ会社", en: "Group Companies" },
  client: { ja: "顧問先・プロデュース実績", en: "Clients" },
};

export const networkEntries: NetworkEntry[] = [
  // ===== グループ会社 =====
  {
    id: "freecare-nishitanabe",
    category: "group",
    name: "西田辺駅前フリーケア整体院",
    area: "大阪府大阪市",
    industry: "整体院",
    description:
      "根本腰痛治療に特化した整体院。身体全体のつながりを考慮した施術アプローチで、ヘルニアや慢性腰痛の改善を目指します。治療後のぶり返しを防ぐ根本治療を重視し、全額返金保証制度を設けています。",
    highlights: ["根本腰痛治療", "全額返金保証", "初回お試しキャンペーン"],
    url: "https://freecare.jp/lp/",
    tel: "090-3820-1948",
  },
  {
    id: "mirai-jigyosho",
    category: "group",
    name: "事業所〜未来〜（A-SUPPORT）",
    area: "大阪府",
    industry: "就労継続支援B型",
    description:
      "障害や困難を抱える方が「働く」を通じて社会参加を実現することを目的とした、就労継続支援B型の福祉施設。アクセサリー販売、弁当の調理・盛り付け、事務作業、PC作業、配送・ドライバー業務、内職など多様な業務を提供しています。",
    highlights: ["6つの業務メニュー", "段階的な利用申請プロセス", "LINE相談受付"],
    url: "https://www.a-support.co.jp/lp-2/",
    tel: "06-6115-6108",
  },
  {
    id: "soilon",
    category: "group",
    name: "soilon（ソイロン）",
    area: "大阪",
    industry: "アパレル",
    description:
      "グループ内のアパレル部門。Instagram にて活動情報を発信しています。",
    url: "https://www.instagram.com/soilon.osaka/",
  },
  {
    id: "abeno-bar-1",
    category: "group",
    name: "阿倍野バー（本店）",
    area: "大阪府大阪市阿倍野区",
    industry: "飲食",
    description: "グループ会社が運営する阿倍野エリアのバー。",
    url: "https://maps.app.goo.gl/vD3GgzmxLvmRWTBe8",
  },
  {
    id: "abeno-bar-lucias",
    category: "group",
    name: "阿倍野バー（ルシアス店）",
    area: "大阪府大阪市阿倍野区",
    industry: "飲食",
    description: "あべのルシアス内に展開するバー。",
    url: "https://maps.app.goo.gl/TeSFLLDG5Sr3zx8J7",
  },

  // ===== 顧問先・プロデュース実績 =====
  {
    id: "nakamozu-seikotsuin",
    category: "client",
    name: "なかもず駅前整骨院",
    area: "大阪府堺市北区",
    industry: "整骨院 / ひざ痛専門",
    description:
      "医師も推薦する技術を採用したひざ痛専門の整骨院。改善率98.2%を誇り、患者からは「ベッドから自力で降りられるようになった」「趣味のガーデニングを再開できた」など日常生活の大幅な改善報告が寄せられています。OligoScan による有害金属測定にも対応。",
    highlights: ["改善率98.2%", "ひざ痛専門", "OligoScan導入院"],
    url: "https://mozu8man.com/case/knee",
    tel: "072-254-5005",
    address: "堺市北区長曽根町29 シュライクなかもず901（御堂筋線なかもず駅 徒歩3分）",
  },
  {
    id: "first-seikotsuin",
    category: "client",
    name: "ファースト整骨院",
    area: "神奈川県横浜市青葉区",
    industry: "整骨院 / 腰痛治療",
    description:
      "羽田野式ハイボルト療法を主軸とした腰痛治療院。「通院しなくて済む身体」を目標に掲げ、原因特定→筋肉・靭帯機能の修復→神経興奮の抑制という3ステップで根本治療を行います。慢性腰痛・ぎっくり腰・膝痛・首痛にも対応。",
    highlights: ["羽田野式ハイボルト療法", "3ステップ根本治療", "自由診療＋保険診療"],
    url: "https://firstseikotsuin.com/symptom/backpain.html",
    tel: "045-530-0199",
    address: "神奈川県横浜市青葉区青葉台2-26-1（東急田園都市線 青葉台駅 徒歩6分）",
  },
];
