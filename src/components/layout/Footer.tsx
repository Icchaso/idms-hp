import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { footerLinks, site } from "@/content/site";

/**
 * 全ページ共通フッター。法人情報・ナビ・コピーライト・SNSを表示。
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white mt-24 lg:mt-32">
      <Container>
        <div className="py-16 lg:py-20 grid gap-8 lg:gap-12 lg:grid-cols-12">
          {/* 法人情報 */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Link href="/" className="inline-flex items-center gap-3" aria-label={`${site.name} トップへ`}>
              <Image
                src="/images/logo-mark.jpg"
                alt=""
                width={96}
                height={96}
                className="h-12 w-12 rounded-full object-cover ring-1 ring-gold-400/50 shadow-[0_2px_10px_rgba(11,37,69,0.10)]"
              />
              <span className="flex flex-col leading-tight">
                <span className="font-serif text-base font-bold tracking-wider">
                  {site.name}
                </span>
                <span className="text-[10px] text-navy-200 tracking-widest">
                  {site.nameEn}
                </span>
              </span>
            </Link>
            <address className="not-italic text-sm leading-relaxed text-navy-100">
              {site.address.full}
            </address>
            <a
              href={`mailto:${site.email}`}
              className="text-sm text-navy-100 hover:text-gold-300 transition-colors tracking-wider"
            >
              {site.email}
            </a>
          </div>

          {/* ナビゲーション */}
          <nav className="lg:col-span-4" aria-label="フッターナビゲーション">
            <p className="font-serif text-xs uppercase tracking-[0.3em] text-gold-300 mb-6">
              Site Map
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-navy-100 hover:text-gold-300 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* SNS */}
          <div className="lg:col-span-3">
            <p className="font-serif text-xs uppercase tracking-[0.3em] text-gold-300 mb-6">
              Follow
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={site.social.line}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-navy-100 hover:text-gold-300 transition-colors"
                >
                  LINE公式アカウント
                </a>
              </li>
              <li>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-navy-100 hover:text-gold-300 transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-navy-100 hover:text-gold-300 transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={site.social.litlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-navy-100 hover:text-gold-300 transition-colors"
                >
                  lit.link
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 py-6 text-center">
          <p className="text-xs text-navy-200 tracking-wider">
            &copy; {year} {site.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
