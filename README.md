# 一般社団法人難治性疾患医学会（IDMS）公式サイト

Next.js 16 + TypeScript + Tailwind CSS v4 で構築されたコーポレートサイトです。

## 構成

- **フレームワーク**: Next.js 16 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS v4
- **フォーム**: React Hook Form + Zod
- **メール送信**: Resend
- **ホスティング**: Vercel（想定）

## ローカル開発

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

`.env.example` を `.env.local` にコピーして、実際の値を入力してください。

```bash
cp .env.example .env.local
```

| 変数名 | 説明 |
|---|---|
| `RESEND_API_KEY` | Resend の API キー |
| `CONTACT_TO_EMAIL` | お問い合わせの送信先（管理者宛） |
| `CONTACT_FROM_EMAIL` | 送信元アドレス（Resend で認証済みドメイン） |
| `NEXT_PUBLIC_SITE_URL` | サイトのURL |

### 3. 開発サーバー起動

```bash
npm run dev
```

http://localhost:3000 で開きます。

### 4. 本番ビルド

```bash
npm run build
npm run start
```

## ディレクトリ構成

```
src/
├── app/                  # ページとAPIルート
│   ├── layout.tsx        # ルートレイアウト（Header / Footer 配置）
│   ├── page.tsx          # TOP
│   ├── about/            # 学会について
│   ├── business/         # 事業内容
│   ├── history/          # 実績・沿革
│   ├── company/          # 法人概要
│   ├── contact/          # お問い合わせ + thanks
│   ├── privacy/          # プライバシーポリシー
│   ├── api/contact/      # フォーム送信API
│   ├── sitemap.ts        # sitemap.xml 自動生成
│   └── robots.ts         # robots.txt 自動生成
├── components/
│   ├── layout/           # Header / Footer / Container / MobileMenu
│   ├── ui/               # Button / Card / Timeline / StatCard / SectionHeading
│   ├── sections/         # ページの大きなブロック単位（Hero / CtaBanner 等）
│   ├── forms/            # ContactForm / FormField
│   └── seo/              # JsonLd（構造化データ）
├── content/              # ★ サイトの文言データ集約
│   ├── site.ts           # サイトメタ情報・ナビゲーション
│   ├── business.ts       # 事業内容データ
│   ├── history.ts        # 沿革・ロードマップ
│   └── company.ts        # 法人情報
└── lib/
    ├── utils.ts          # cn() ユーティリティ
    ├── validation.ts     # フォームバリデーション (zod)
    └── resend.ts         # メール送信クライアント
```

## テキストの修正方法

サイト内の文言は `src/content/` 配下にまとめられています。
ここを編集して `git push` するだけで、Vercel が自動的に再デプロイします。

| 修正したい内容 | 編集ファイル |
|---|---|
| 法人名・住所・メール・SNS | `src/content/site.ts` |
| 事業内容 | `src/content/business.ts` |
| 沿革・ロードマップ | `src/content/history.ts` |
| 法人概要テーブル | `src/content/company.ts` |

## デプロイ

1. このリポジトリを GitHub に push
2. [Vercel](https://vercel.com) で「Import Project」→ リポジトリを選択
3. 環境変数（上記）を Vercel ダッシュボードで設定
4. デプロイ完了後、独自ドメイン (`idms.or.jp`) を Settings → Domains で追加
5. Resend ダッシュボードで `idms.or.jp` のドメイン認証（SPF / DKIM）を設定

## ライセンス

Copyright © 一般社団法人難治性疾患医学会
