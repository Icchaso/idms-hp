/**
 * 法人概要テーブルのデータ。
 * /company ページと構造化データ (JSON-LD) の両方で参照されます。
 */

import { site } from "./site";

export type CompanyRow = {
  label: string;
  value: string;
};

export const companyRows: CompanyRow[] = [
  { label: "法人名", value: site.name },
  { label: "略称", value: `${site.shortName}（${site.nameEn}）` },
  { label: "代表者", value: `${site.representative.title}　${site.representative.name}` },
  { label: "所在地", value: site.address.full },
  { label: "事業内容", value: "治療家への教育・講習、治療院プロデュース、医療連携、サプリメント普及、健康増進活動" },
  { label: "メールアドレス", value: site.email },
];
