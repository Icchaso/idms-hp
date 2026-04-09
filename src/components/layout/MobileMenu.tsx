"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navigation, site } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * モバイル用メニュー。Header からインポートして配置する。
 * クライアントコンポーネントとして分離することで、Header 自体は SSR のままに保つ。
 *
 * オーバーレイは `createPortal` で `document.body` 直下に描画する。
 * Header に `backdrop-filter` が掛かっていると子孫の `position: fixed` 要素の
 * containing block が Header になってしまい、画面全体を覆えないため。
 */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Portal はクライアントでマウントされてから描画する
  useEffect(() => {
    setMounted(true);
  }, []);

  // メニュー開時にスクロールロック
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

  const overlay = (
    <div
      className={cn(
        "fixed inset-0 z-50 bg-white transition-opacity duration-300 lg:hidden",
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
      )}
      aria-hidden={!open}
    >
      <div className="flex flex-col h-full pt-20 px-8 pb-8">
        <button
          type="button"
          aria-label="メニューを閉じる"
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 inline-flex items-center justify-center w-10 h-10 text-navy-900 hover:bg-navy-50 transition-colors"
        >
          <X size={22} />
        </button>

        <nav>
          <ul className="flex flex-col gap-2">
            {navigation.map((item) => (
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

        <div className="mt-auto pt-8">
          <p className="text-xs text-mute mb-2 tracking-wider">CONTACT</p>
          <a
            href={`mailto:${site.email}`}
            className="text-navy-900 font-medium hover:text-gold-600 transition-colors"
          >
            {site.email}
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        aria-label="メニューを開く"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="lg:hidden inline-flex items-center justify-center w-10 h-10 text-navy-900 hover:bg-navy-50 transition-colors"
      >
        <Menu size={22} />
      </button>

      {mounted ? createPortal(overlay, document.body) : null}
    </>
  );
}
