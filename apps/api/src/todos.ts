import { Hono } from "hono";
import type { Todo } from "@src/types/index.js";

// インメモリのTODOデータストア
let todos: Todo[] = [];

// シンプルなHonoルーターの作成
const router = new Hono();

// 全TODOの取得
router.get("/", (c) => {
  return c.json({ todos });
});

// 新規TODOの作成
router.post("/", async (c) => {
  const { text } = await c.req.json();
  const newTodo: Todo = { id: Date.now().toString(), text, completed: false };
  todos.push(newTodo);
  return c.json({ todos }, 201);
});

// TODOの更新（完了状態の切り替え）
router.put("/:id", (c) => {
  const id = c.req.param("id");
  todos = todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  return c.json({ todos });
});

// TODOの削除
router.delete("/:id", (c) => {
  const id = c.req.param("id");
  todos = todos.filter((todo) => todo.id !== id);
  return c.json({ todos });
});

export const todosRouter = router;

// RPC用の型をエクスポート
export type TodosRouterType = typeof todosRouter;
