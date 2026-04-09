import type { NextConfig } from "next";

/**
 * preview-static ブランチ専用の設定。
 * Surge.sh など静的ホスティング向けに output: 'export' を有効化。
 * - 全ページを out/ に静的書き出し
 * - next/image の最適化を無効化（静的ホストで動作させるため）
 *
 * 本番（Vercel）は main ブランチを使うこと。
 */
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
