import { serve } from "@hono/node-server";
import { handle } from "@hono/node-server/vercel";
import { todosRouter } from "@src/todos";
import { Hono } from "hono";
import { cors } from "hono/cors";

// シンプルなHonoアプリケーションの作成
const app = new Hono();

// 環境変数からCORSオリジンを取得
const corsOrigin = process.env.CORS_ORIGIN || '*';

// CORSの設定
app.use("/*", cors({
  origin: corsOrigin,
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// APIルートの設定
// 新しいパス形式 /api/v3/* に統一
app.route("/api/v3/todos", todosRouter);

// 開発環境ではローカルサーバーを起動
if (process.env.NODE_ENV !== "production") {
  console.log(`🚀 Server is starting on http://localhost:8787`);
  serve({
    fetch: app.fetch,
    port: 8787,
  });
  console.log(`🚀 Server is running on http://localhost:8787`);
  console.log(`📚 API Endpoint: http://localhost:8787/api/v3/todos`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔒 CORS Origin: ${corsOrigin}`);
}

// Vercel用のエクスポート
export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);
export const PATCH = handle(app);

// RPC用の型をエクスポート
export type AppType = typeof app;

export default app;
