import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// 静的エクスポート時に必要
export const dynamic = "force-static";

/**
 * sitemap.xml を自動生成。
 * 新しいページを追加したら、ここの routes 配列にも追記する。
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes: { path: string; priority: number; changeFrequency: "monthly" | "yearly" }[] = [
    { path: "", priority: 1.0, changeFrequency: "monthly" },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" },
    { path: "/business", priority: 0.9, changeFrequency: "monthly" },
    { path: "/history", priority: 0.8, changeFrequency: "monthly" },
    { path: "/company", priority: 0.8, changeFrequency: "yearly" },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  ];

  return routes.map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
