import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactForm } from "@/components/forms/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "一般社団法人難治性疾患医学会へのお問い合わせ。事業相談・取材・提携などのご依頼を受け付けております。",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="お問い合わせ"
        description="事業のご相談・取材・提携など、お気軽にお問い合わせください。担当者より追ってご連絡いたします。"
      />

      <section className="py-20 lg:py-32 bg-white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-xl font-bold text-navy-900 mb-4">直接のご連絡</h2>
              <span className="block h-px w-10 bg-gold-500 mb-6" aria-hidden="true" />
              <p className="text-sm text-mute leading-relaxed mb-4">
                フォームの代わりに、直接メールでもお問い合わせいただけます。
              </p>
              <a
                href={`mailto:${site.email}`}
                className="text-navy-900 font-medium hover:text-gold-600 transition-colors"
              >
                {site.email}
              </a>

              <h2 className="font-serif text-xl font-bold text-navy-900 mt-12 mb-4">所在地</h2>
              <span className="block h-px w-10 bg-gold-500 mb-6" aria-hidden="true" />
              <address className="not-italic text-sm text-mute leading-relaxed">
                {site.address.full}
              </address>
            </div>

            <div className="lg:col-span-8">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
