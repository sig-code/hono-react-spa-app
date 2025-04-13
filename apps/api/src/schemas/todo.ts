import { z } from "zod";

// TODOのスキーマ定義
export const todoSchema = z.object({
  id: z.string(),
  text: z.string().min(1, "テキストは必須だよ！"),
  completed: z.boolean().default(false)
});

// TODOリストのレスポンススキーマ
export const todoListResponseSchema = z.object({
  todos: z.array(todoSchema)
});

// 新規TODO作成リクエストのスキーマ
export const createTodoSchema = z.object({
  text: z.string().min(1, "テキストは必須だよ！")
});

// TODO更新リクエストのスキーマ
export const updateTodoSchema = z.object({
  completed: z.boolean()
});

// IDパラメータのスキーマ
export const todoIdParamSchema = z.object({
  id: z.string()
});

// 型定義のエクスポート
export type Todo = z.infer<typeof todoSchema>;
export type TodoListResponse = z.infer<typeof todoListResponseSchema>;
export type CreateTodoRequest = z.infer<typeof createTodoSchema>;
export type UpdateTodoRequest = z.infer<typeof updateTodoSchema>;
export type TodoIdParam = z.infer<typeof todoIdParamSchema>;
