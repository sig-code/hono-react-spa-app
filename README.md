# Hono + React SPA アプリケーション

シンプルなTODOアプリケーションを実装したモノレポプロジェクトです。バックエンドにHono、フロントエンドにReact（Vite）を使用しています。

## 🚀 機能

- TODOの追加、完了/未完了の切り替え、削除
- バックエンドAPIとフロントエンドの連携
- Turborepoによるモノレポ管理
- Vercelへのデプロイ対応

## 📦 プロジェクト構成

このプロジェクトは以下のアプリケーション/パッケージで構成されています：

### アプリケーション

- `apps/api`: [Hono](https://hono.dev/)を使用したバックエンドAPI
- `apps/web`: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)を使用したフロントエンドSPA

### パッケージ

- `packages/ui`: 共有UIコンポーネントライブラリ
- `packages/shared`: 型定義などの共有リソース

## 🛠️ 開発環境のセットアップ

### 必要条件

- Node.js 18以上
- pnpm 8以上

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

## 🧪 テスト

```bash
# すべてのテストを実行
pnpm test
```

## 📝 ライセンス

MITライセンス
