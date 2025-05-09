import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Turbopackの設定
  experimental: {
    // HTTPSサポート（Next.js 15.3.2では--experimental-httpsオプションで自動的に処理されます）
    // 他の実験的機能があればここに追加
  }
};

export default nextConfig;
