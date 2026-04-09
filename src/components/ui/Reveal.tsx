"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  /** 遅延 (ms)。連続要素を順次表示したい時に使う */
  delay?: number;
  /** 移動量 (px)。控えめに保つこと */
  offset?: number;
  /** 一度発火したら戻らない */
  once?: boolean;
  className?: string;
  /** 何でラップするか。デフォルトは div。レイアウト崩れ回避用 */
  as?: "div" | "section" | "article" | "li";
};

/**
 * IntersectionObserver を使って、ビューポートに入ったら
 * 下から控えめにフェードアップさせるラッパーコンポーネント。
 *
 * 学会らしい上品さを保つため、移動量と速度は控えめに設計。
 * prefers-reduced-motion のユーザーには即座に表示する。
 */
export function Reveal({
  children,
  delay = 0,
  offset = 24,
  once = true,
  className,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // motion 削減ユーザーは即座に表示
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const Component = as as React.ElementType;
  return (
    <Component
      ref={ref as React.Ref<HTMLElement>}
      style={{
        transitionDelay: visible ? `${delay}ms` : "0ms",
        transform: visible ? "translateY(0)" : `translateY(${offset}px)`,
      }}
      className={cn(
        "transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform",
        visible ? "opacity-100" : "opacity-0",
        className,
      )}
    >
      {children}
    </Component>
  );
}
