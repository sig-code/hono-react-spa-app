import { Hono } from "hono";
import { cors } from "hono/cors";
import { todosRouter, TodosRouterType } from "@src/todos.js";
import { serve } from "@hono/node-server";
// Vercel用のhandleをインポート
import { handle } from "@hono/node-server/vercel";

const app = new Hono();
app.use("/*", cors());

// APIルートの設定
const apiRoutes = app.route("/api/todos", todosRouter);

// 開発環境ではローカルサーバーを起動
if (process.env.NODE_ENV !== "production") {
  console.log("🚀 Server is starting on http://localhost:8787");
  serve({
    fetch: app.fetch,
    port: 8787
  });
  console.log("🚀 Server is running on http://localhost:8787");
}

// Vercel用のエクスポート
export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);
export const PATCH = handle(app);

// RPC用の型をエクスポート
export type AppType = typeof apiRoutes;

export default app;
