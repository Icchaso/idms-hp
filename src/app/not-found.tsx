import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="py-32 lg:py-40 bg-white">
      <Container>
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
          <span className="font-serif text-8xl font-bold text-navy-900 leading-none">404</span>
          <span className="block h-px w-12 bg-gold-500" aria-hidden="true" />
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-navy-900">
            ページが見つかりません
          </h1>
          <p className="text-sm text-mute leading-relaxed">
            お探しのページは存在しないか、移動した可能性があります。
            <br />
            URLをご確認のうえ、再度お試しください。
          </p>
          <div className="mt-4">
            <Button href="/" variant="primary" size="md">
              トップへ戻る
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
