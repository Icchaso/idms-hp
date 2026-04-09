"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Container } from "./Container";
import { MobileMenu } from "./MobileMenu";
import { navigation, site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/**
 * 全ページ共通ヘッダー。
 * - PC: ロゴ + 横並びナビ + お問い合わせCTA
 * - SP: ロゴ + ハンバーガーメニュー（MobileMenu に委譲）
 *
 * スクロールに応じて影と背景の濃さが変化する。
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-30 w-full bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/80 border-b transition-all duration-300",
        scrolled ? "border-navy-200 shadow-[0_2px_20px_rgba(11,37,69,0.06)]" : "border-navy-100",
      )}
    >
      <Container>
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-300",
            scrolled ? "h-14 lg:h-16" : "h-16 lg:h-20",
          )}
        >
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
              className={cn(
                "w-auto transition-all duration-300 group-hover:scale-105",
                scrolled ? "h-9 lg:h-10" : "h-10 lg:h-12",
              )}
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
                    className="nav-link text-sm text-navy-900 hover:text-gold-600 transition-colors tracking-wider"
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
