import { z } from "@hono/zod-openapi";

// TODOのスキーマ定義
export const todoSchema = z.object({
  id: z.string().openapi({
    example: "1234567890"
  }),
  text: z.string().min(1, "テキストは必須だよ！").openapi({
    example: "牛乳を買う"
  }),
  completed: z.boolean().default(false).openapi({
    example: false
  })
}).openapi("Todo");

// TODOリストのレスポンススキーマ
export const todoListResponseSchema = z.object({
  todos: z.array(todoSchema).openapi({
    example: [
      { id: "1", text: "牛乳を買う", completed: false },
      { id: "2", text: "宿題をする", completed: true }
    ]
  })
}).openapi("TodoListResponse");

// 新規TODO作成リクエストのスキーマ
export const createTodoSchema = z.object({
  text: z.string().min(1, "テキストは必須だよ！").openapi({
    example: "牛乳を買う"
  })
}).openapi("CreateTodoRequest");

// TODO更新リクエストのスキーマ
export const updateTodoSchema = z.object({
  completed: z.boolean().openapi({
    example: true
  })
}).openapi("UpdateTodoRequest");

// IDパラメータのスキーマ
export const todoIdParamSchema = z.object({
  id: z.string().openapi({
    param: {
      name: "id",
      in: "path"
    },
    example: "1234567890"
  })
});

// エラーレスポンススキーマ
export const errorResponseSchema = z.object({
  error: z.string().openapi({
    example: "指定されたTODOが見つからないよ！"
  })
}).openapi("ErrorResponse");

// 型定義のエクスポート
export type Todo = z.infer<typeof todoSchema>;
export type TodoListResponse = z.infer<typeof todoListResponseSchema>;
export type CreateTodoRequest = z.infer<typeof createTodoSchema>;
export type UpdateTodoRequest = z.infer<typeof updateTodoSchema>;
export type TodoIdParam = z.infer<typeof todoIdParamSchema>;
export type ErrorResponse = z.infer<typeof errorResponseSchema>;
