"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navigation, site } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * モバイル用メニュー。Header からインポートして配置する。
 *
 * 設計メモ:
 * - ハンバーガーボタンは z-50 で常にオーバーレイの上にいる必要がある
 *   （Header が sticky + z-30 で stacking context を作るため、相対値で十分）
 * - オーバーレイは右からスライドイン。スマホ標準の体感に近い
 * - メニュー項目から「お問い合わせ」を除外し、フッター部の CONTACT に一本化（重複回避）
 * - 開時に body スクロールロック
 */
export function MobileMenu() {
  const [open, setOpen] = useState(false);

  // body スクロールロック（メニュー開時）
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // ESC キーで閉じる
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // 「お問い合わせ」はフッター部の CONTACT に集約するため、メニュー項目からは除外
  const menuItems = navigation.filter((item) => item.href !== "/contact");

  return (
    <>
      <button
        type="button"
        aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="lg:hidden relative z-50 inline-flex items-center justify-center w-10 h-10 text-navy-900 hover:bg-navy-50 transition-colors"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* オーバーレイ（背景の半透明レイヤー） */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={cn(
          "fixed inset-0 z-30 bg-navy-950/40 transition-opacity duration-300 lg:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      />

      {/* スライドインパネル */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="メニュー"
        className={cn(
          "fixed top-0 right-0 z-40 h-dvh w-[85vw] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div
          className="flex flex-col h-full px-8 pb-8 overflow-y-auto"
          style={{ paddingTop: "calc(env(safe-area-inset-top, 0px) + 5rem)" }}
        >
          <nav aria-label="モバイルナビゲーション">
            <ul className="flex flex-col">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 font-serif text-xl text-navy-900 border-b border-navy-100 hover:text-gold-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <div className="mt-8">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block w-full text-center py-4 bg-navy-900 text-white font-medium tracking-wider hover:bg-navy-950 transition-colors"
            >
              お問い合わせ
            </Link>
          </div>

          {/* CONTACT メールアドレス */}
          <div className="mt-auto pt-8">
            <p className="font-serif text-[10px] uppercase tracking-[0.3em] text-gold-600 mb-3">
              Contact
            </p>
            <a
              href={`mailto:${site.email}`}
              className="text-navy-900 font-medium hover:text-gold-600 transition-colors break-all"
            >
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
