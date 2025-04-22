import type { TodoListResponse } from "@src/types";

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

// シンプルなfetchを使用したAPIクライアント
export const api = {
  // 全TODOの取得
  getTodos: async (): Promise<TodoListResponse> => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/v3/todos`);

      if (!response.ok) {
        throw new ApiError(`APIエラー: ${response.status} ${response.statusText}`, {
          status: response.status,
          response
        });
      }

      return await response.json();
    } catch (err) {
      console.error('TODOの取得に失敗しました:', err);
      throw err;
    }
  },

  // 新規TODOの作成
  createTodo: async (text: string): Promise<TodoListResponse> => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/v3/todos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
      });

      if (!response.ok) {
        throw new ApiError(`APIエラー: ${response.status} ${response.statusText}`, {
          status: response.status,
          response
        });
      }

      return await response.json();
    } catch (err) {
      console.error('TODOの作成に失敗しました:', err);
      throw err;
    }
  },

  // TODOの更新（完了状態の切り替え）
  toggleTodo: async (id: string): Promise<TodoListResponse> => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/v3/todos/${id}`, {
        method: 'PUT'
      });

      if (!response.ok) {
        throw new ApiError(`APIエラー: ${response.status} ${response.statusText}`, {
          status: response.status,
          response
        });
      }

      return await response.json();
    } catch (err) {
      console.error('TODOの更新に失敗しました:', err);
      throw err;
    }
  },

  // TODOの削除
  deleteTodo: async (id: string): Promise<TodoListResponse> => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/v3/todos/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new ApiError(`APIエラー: ${response.status} ${response.statusText}`, {
          status: response.status,
          response
        });
      }

      return await response.json();
    } catch (err) {
      console.error('TODOの削除に失敗しました:', err);
      throw err;
    }
  }
};
