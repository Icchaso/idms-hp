import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: `${site.name}における個人情報の取り扱いについて。`,
};

export default function PrivacyPage() {
  const sections = [
    {
      title: "第1条 個人情報の定義",
      body: "本ポリシーにおける「個人情報」とは、個人情報保護法に定める個人情報を指し、生存する個人に関する情報であって、当該情報に含まれる氏名、住所、電話番号、メールアドレス等により特定の個人を識別できる情報をいいます。",
    },
    {
      title: "第2条 個人情報の収集",
      body: "当法人は、お問い合わせフォームを通じて、氏名、会社名・団体名、メールアドレス、電話番号、お問い合わせ内容等の個人情報を収集します。これらの情報は、お問い合わせいただいた方からの自発的な提供に基づきます。",
    },
    {
      title: "第3条 利用目的",
      body: "当法人が収集した個人情報は、以下の目的で利用します。",
      list: [
        "お問い合わせへの回答および対応",
        "事業内容・活動報告等のご案内",
        "本人確認および連絡業務",
        "サービス改善のための分析",
      ],
    },
    {
      title: "第4条 第三者提供の制限",
      body: "当法人は、ご本人の同意を得ずに、収集した個人情報を第三者に提供することはありません。ただし、法令に基づく場合、または人の生命・身体・財産の保護のために必要がある場合はこの限りではありません。",
    },
    {
      title: "第5条 個人情報の管理",
      body: "当法人は、収集した個人情報を適切に管理し、不正アクセス・紛失・破壊・改ざん・漏洩等を防止するために必要な安全管理措置を講じます。",
    },
    {
      title: "第6条 開示・訂正・削除",
      body: "ご本人から個人情報の開示・訂正・削除を求められた場合は、ご本人であることを確認のうえ、合理的な範囲で速やかに対応します。",
    },
    {
      title: "第7条 お問い合わせ窓口",
      body: `本ポリシーに関するお問い合わせは、下記までご連絡ください。\n${site.name}\nメール：${site.email}`,
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Privacy Policy"
        title="プライバシーポリシー"
        description="当法人における個人情報の取り扱いについてご説明します。"
      />

      <section className="py-20 lg:py-32 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-mute leading-relaxed mb-12">
              {site.name}（以下、「当法人」といいます）は、ご利用者の個人情報の重要性を認識し、その保護に努めるため、以下のとおりプライバシーポリシーを定めます。
            </p>

            <div className="space-y-12">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="font-serif text-lg sm:text-xl font-bold text-navy-900 mb-4 leading-tight">
                    {section.title}
                  </h2>
                  <span className="block h-px w-10 bg-gold-500 mb-4" aria-hidden="true" />
                  <p className="text-sm sm:text-base text-ink leading-loose whitespace-pre-line">
                    {section.body}
                  </p>
                  {section.list && (
                    <ul className="mt-4 space-y-2">
                      {section.list.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-navy-700 leading-relaxed pl-6 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-3 before:h-px before:bg-gold-500"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <p className="text-xs text-mute mt-16 text-right">制定日：2026年4月9日</p>
          </div>
        </Container>
      </section>
    </>
  );
}
