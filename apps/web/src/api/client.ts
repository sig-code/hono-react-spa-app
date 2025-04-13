import type { Todo, TodoListResponse } from "@src/types";

// APIのベースURL
const API_BASE_URL = "http://localhost:8787";

// エラーハンドリング用の関数
const handleApiError = (error: unknown) => {
  if (error instanceof Error) {
    console.error("APIエラー:", error.message);
    throw error;
  }
  console.error("不明なエラーが発生したよ！", error);
  throw new Error("不明なエラーが発生したよ！");
};

// APIリクエスト関数
export const api = {
  // 全TODOの取得
  getTodos: async (): Promise<TodoListResponse> => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/todos`);
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "TODOの取得に失敗したよ！");
      }
      return await res.json();
    } catch (error) {
      return handleApiError(error);
    }
  },

  // 新規TODOの作成
  createTodo: async (text: string): Promise<TodoListResponse> => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ text })
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "TODOの作成に失敗したよ！");
      }
      return await res.json();
    } catch (error) {
      return handleApiError(error);
    }
  },

  // TODOの更新（完了状態の切り替え）
  toggleTodo: async (id: string): Promise<TodoListResponse> => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/todos/${id}`, {
        method: "PUT"
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "TODOの更新に失敗したよ！");
      }
      return await res.json();
    } catch (error) {
      return handleApiError(error);
    }
  },

  // TODOの削除
  deleteTodo: async (id: string): Promise<TodoListResponse> => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/todos/${id}`, {
        method: "DELETE"
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "TODOの削除に失敗したよ！");
      }
      return await res.json();
    } catch (error) {
      return handleApiError(error);
    }
  }
};
