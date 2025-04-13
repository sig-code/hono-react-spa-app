import { OpenAPIHono } from "@hono/zod-openapi";
import { cors } from "hono/cors";
import { todosRouter, TodosRouterType } from "@src/todos.js";
import { serve } from "@hono/node-server";
// Vercel用のhandleをインポート
import { handle } from "@hono/node-server/vercel";
// Swagger UIをインポート
import { swaggerUI } from "@hono/swagger-ui";

// OpenAPIHonoアプリケーションの作成
const app = new OpenAPIHono();
app.use("/*", cors());

// APIルートの設定
const apiRoutes = app.route("/api/todos", todosRouter);

// OpenAPIドキュメントエンドポイントの設定
app.doc("/api/docs", {
  openapi: "3.0.0",
  info: {
    title: "TODO API",
    version: "1.0.0",
    description: "シンプルなTODO管理API"
  },
  servers: [
    {
      url: "http://localhost:8787",
      description: "開発環境"
    },
    {
      url: "https://hono-react-vercel-app.vercel.app",
      description: "本番環境"
    }
  ]
});

// Swagger UIエンドポイントの設定
app.get("/api/swagger", swaggerUI({ url: "/api/docs" }));

// 開発環境ではローカルサーバーを起動
if (process.env.NODE_ENV !== "production") {
  console.log("🚀 Server is starting on http://localhost:8787");
  serve({
    fetch: app.fetch,
    port: 8787
  });
  console.log("🚀 Server is running on http://localhost:8787");
  console.log("📚 API Documentation (JSON): http://localhost:8787/api/docs");
  console.log("📚 API Documentation (Swagger UI): http://localhost:8787/api/swagger");
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
