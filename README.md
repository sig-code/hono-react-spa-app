# Hono + React SPA アプリケーション

シンプルなTODOアプリケーションを実装したモノレポプロジェクトです。バックエンドにHono、フロントエンドにReact（Vite）を使用しています。UIコンポーネントにはMantineを採用しています。

## 🚀 機能

- TODOの追加、完了/未完了の切り替え、削除
- バックエンドAPIとフロントエンドの連携
- Turborepoによるモノレポ管理
- Vercelへのデプロイ対応
- Biomeによるコード品質管理

## 📦 プロジェクト構成

このプロジェクトは以下のアプリケーション/パッケージで構成されています：

### アプリケーション

- `apps/api`: [Hono](https://hono.dev/)を使用したバックエンドAPI（Zod OpenAPIによるAPI定義）
- `apps/web`: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)を使用したフロントエンドSPA

### パッケージ

- `packages/ui`: 共有UIコンポーネントライブラリ（[Mantine](https://mantine.dev/)ベース）
- `packages/biome-config`: [Biome](https://biomejs.dev/)の共有設定
- `packages/typescript-config`: TypeScriptの共有設定

## 🛠️ 開発環境のセットアップ

### 必要条件

- Node.js 20以上
- pnpm 10.8.0以上

### インストール

```bash
# 依存関係のインストール
pnpm install
```

### 開発サーバーの起動

```bash
# すべてのアプリケーションを同時に起動
pnpm dev

# 個別に起動する場合
pnpm --filter api dev  # APIサーバーのみ
pnpm --filter web dev  # フロントエンドのみ
```

開発サーバーを起動すると、以下のURLでアクセスできます：

- フロントエンド: http://localhost:5173
- APIサーバー: http://localhost:8787

### コード品質管理

```bash
# リンターの実行
pnpm lint

# フォーマットの適用
pnpm format

# 型チェック
pnpm check-types

# Biomeによるチェック
pnpm check

# Biomeによるチェックと自動修正
pnpm check:apply
```

## 🔨 ビルド

```bash
# すべてのアプリケーションをビルド
pnpm build

# 個別にビルドする場合
pnpm --filter api build  # APIサーバーのみ
pnpm --filter web build  # フロントエンドのみ
```

## 🚢 デプロイ

このプロジェクトはVercelへのデプロイに対応しています。

### Vercelへのデプロイ

1. Vercelアカウントを作成し、GitHubリポジトリと連携します
2. 新しいプロジェクトを作成し、このリポジトリを選択します
3. 必要に応じて環境変数を設定します
4. デプロイボタンをクリックします

## 🧩 主要な技術スタック

### バックエンド
- [Hono](https://hono.dev/) - 高速で軽量なWebフレームワーク
- [Zod](https://zod.dev/) - TypeScriptファーストのスキーマバリデーションライブラリ
- [@hono/zod-openapi](https://github.com/honojs/middleware/tree/main/packages/zod-openapi) - ZodスキーマからOpenAPI定義を生成

### フロントエンド
- [React](https://reactjs.org/) - UIライブラリ
- [Vite](https://vitejs.dev/) - 高速なフロントエンドビルドツール
- [Mantine](https://mantine.dev/) - Reactコンポーネントライブラリ
- [ky](https://github.com/sindresorhus/ky) - HTTPクライアント

### 開発ツール
- [Turbo](https://turbo.build/) - モノレポビルドシステム
- [Biome](https://biomejs.dev/) - 高速なリンター・フォーマッター
- [TypeScript](https://www.typescriptlang.org/) - 型付きJavaScript
- [Lefthook](https://github.com/evilmartians/lefthook) - Gitフック管理

## 📝 ライセンス

MITライセンス
