"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  /** 目標値 */
  value: number;
  /** アニメーション時間 (ms) */
  duration?: number;
  /** ビューポート判定の閾値 (0-1) */
  threshold?: number;
};

/**
 * ビューポートに入ったタイミングで 0 から目標値までカウントアップする数値表示。
 * 学会の実績数値を見せるために、easeOutCubic で高速→ゆっくりの自然な動きに。
 *
 * prefers-reduced-motion のユーザーには即座に最終値を表示。
 */
export function CountUp({ value, duration = 1600, threshold = 0.5 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCurrent(value);
      startedRef.current = true;
      return;
    }

    let raf = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          observer.disconnect();

          const start = performance.now();
          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // easeOutCubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCurrent(Math.floor(eased * value));
            if (progress < 1) {
              raf = requestAnimationFrame(tick);
            } else {
              setCurrent(value);
            }
          };
          raf = requestAnimationFrame(tick);
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [value, duration, threshold]);

  return <span ref={ref}>{current}</span>;
}
