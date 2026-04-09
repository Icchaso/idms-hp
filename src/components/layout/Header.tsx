import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { MobileMenu } from "./MobileMenu";
import { navigation, site } from "@/content/site";
import { Button } from "@/components/ui/Button";

/**
 * 全ページ共通ヘッダー。
 * - PC: ロゴ + 横並びナビ + お問い合わせCTA
 * - SP: ロゴ + ハンバーガーメニュー（MobileMenu に委譲）
 */
export function Header() {
  return (
    <header className="sticky top-0 z-30 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-navy-100">
      <Container>
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* ロゴ */}
          <Link
            href="/"
            aria-label={`${site.name} トップへ`}
            className="flex items-center gap-3 group"
          >
            <Image
              src="/images/logo.png"
              alt=""
              width={48}
              height={48}
              priority
              className="h-10 w-auto lg:h-12"
            />
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-serif text-sm lg:text-base font-bold text-navy-900 tracking-wider">
                {site.name}
              </span>
              <span className="text-[10px] lg:text-xs text-mute tracking-widest">
                {site.nameEn}
              </span>
            </span>
          </Link>

          {/* PC ナビゲーション */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="グローバルナビゲーション">
            <ul className="flex items-center gap-8">
              {navigation.slice(0, -1).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-navy-900 hover:text-gold-600 transition-colors tracking-wider"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button href="/contact" variant="primary" size="sm">
              お問い合わせ
            </Button>
          </nav>

          {/* モバイルメニュー */}
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
