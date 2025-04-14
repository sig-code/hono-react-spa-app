import type { TodoListResponse } from "@src/types";
import ky from "ky";
import type { HTTPError } from "ky";

// APIのベースURL
// 環境変数から取得するか、デフォルト値を使用
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8787";

// カスタムエラークラス
export class ApiError extends Error {
  status?: number;
  response?: Response;

  constructor(message: string, options?: { status?: number; response?: Response }) {
    super(message);
    this.name = "ApiError";
    this.status = options?.status;
    this.response = options?.response;
  }
}

// kyインスタンスの作成
const apiClient = ky.create({
  prefixUrl: API_BASE_URL,
  timeout: 10000,
  retry: {
    limit: 2,
    methods: ["get", "put", "post", "delete"],
    statusCodes: [408, 413, 429, 500, 502, 503, 504],
  },
  hooks: {
    beforeError: [
      (error) => {
        const { response } = error;

        // レスポンスがある場合はステータスコードとメッセージを取得
        if (response) {
          const status = response.status;
          const message = `APIエラー: ${status} ${response.statusText}`;
          console.error(message);

          // カスタムエラーに変換
          const apiError = new ApiError(message, {
            status,
            response,
          });

          return apiError as unknown as HTTPError;
        }

        // ネットワークエラーなどレスポンスがない場合
        console.error("APIエラー:", error.message);
        return error;
      },
    ],
  },
});

// APIリクエスト関数
export const api = {
  // 全TODOの取得
  getTodos: async (): Promise<TodoListResponse> => {
    return apiClient.get("api/v3/todos").json<TodoListResponse>();
  },

  // 新規TODOの作成
  createTodo: async (text: string): Promise<TodoListResponse> => {
    return apiClient
      .post("api/v3/todos", {
        json: { text },
      })
      .json<TodoListResponse>();
  },

  // TODOの更新（完了状態の切り替え）
  toggleTodo: async (id: string): Promise<TodoListResponse> => {
    return apiClient.put(`api/v3/todos/${id}`).json<TodoListResponse>();
  },

  // TODOの削除
  deleteTodo: async (id: string): Promise<TodoListResponse> => {
    return apiClient.delete(`api/v3/todos/${id}`).json<TodoListResponse>();
  },
};
