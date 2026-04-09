import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "送信完了",
  description: "お問い合わせの送信が完了しました。",
  robots: { index: false, follow: false },
};

export default function ContactThanksPage() {
  return (
    <section className="py-32 lg:py-40 bg-white">
      <Container>
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
          <span className="font-serif text-xs uppercase tracking-[0.3em] text-gold-600">
            Thank You
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
            お問い合わせを承りました
          </h1>
          <span className="block h-px w-12 bg-gold-500" aria-hidden="true" />
          <p className="text-base text-ink leading-loose">
            この度は、一般社団法人難治性疾患医学会へお問い合わせいただき、
            <br />
            誠にありがとうございます。
          </p>
          <p className="text-sm text-mute leading-relaxed">
            ご入力いただいたメールアドレス宛に確認メールをお送りしました。
            <br />
            内容を確認のうえ、担当者より追ってご連絡いたします。
            <br />
            <br />
            ※確認メールが届かない場合は、迷惑メールフォルダもご確認ください。
          </p>
          <div className="mt-6">
            <Button href="/" variant="outline" size="md">
              トップへ戻る
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
