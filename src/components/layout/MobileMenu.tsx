"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navigation, site } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * モバイル用メニュー。Header からインポートして配置する。
 * クライアントコンポーネントとして分離することで、Header 自体は SSR のままに保つ。
 */
export function MobileMenu() {
  const [open, setOpen] = useState(false);

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

  return (
    <>
      <button
        type="button"
        aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="lg:hidden inline-flex items-center justify-center w-10 h-10 text-navy-900 hover:bg-navy-50 transition-colors"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-white transition-opacity duration-300 lg:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div className="flex flex-col h-full pt-20 px-8 pb-8">
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
    </>
  );
}
