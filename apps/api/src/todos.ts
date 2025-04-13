import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import {
  Todo,
  todoListResponseSchema,
  createTodoSchema,
  todoIdParamSchema
} from "@src/schemas/todo.js";

// インメモリのTODOデータストア
let todos: Todo[] = [];

// エラーハンドリング用のミドルウェア
const errorHandler = async (c: any, next: any) => {
  try {
    await next();
  } catch (e: any) {
    if (e instanceof Error) {
      return c.json({ error: e.message }, 400);
    }
    return c.json({ error: "不明なエラーが発生したよ！" }, 500);
  }
};

// Honoルーターの作成
export const todosRouter = new Hono()
  .use(errorHandler)
  // 全TODOの取得
  .get("/", (c) => {
    return c.json({ todos }, 200);
  })
  // 新規TODOの作成
  .post("/", zValidator("json", createTodoSchema), async (c) => {
    const { text } = c.req.valid("json");
    const newTodo: Todo = { id: Date.now().toString(), text, completed: false };
    todos.push(newTodo);
    return c.json({ todos }, 201);
  })
  // TODOの更新（完了状態の切り替え）
  .put("/:id", zValidator("param", todoIdParamSchema), async (c) => {
    const { id } = c.req.valid("param");
    const todoIndex = todos.findIndex(todo => todo.id === id);

    if (todoIndex === -1) {
      return c.json({ error: "指定されたTODOが見つからないよ！" }, 404);
    }

    todos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    return c.json({ todos }, 200);
  })
  // TODOの削除
  .delete("/:id", zValidator("param", todoIdParamSchema), (c) => {
    const { id } = c.req.valid("param");
    const todoIndex = todos.findIndex(todo => todo.id === id);

    if (todoIndex === -1) {
      return c.json({ error: "指定されたTODOが見つからないよ！" }, 404);
    }

    todos = todos.filter((todo) => todo.id !== id);
    return c.json({ todos }, 200);
  });

// RPC用の型をエクスポート
export type TodosRouterType = typeof todosRouter;
