// Todo型の定義
export type Todo = {
	id: string;
	text: string;
	completed: boolean;
};

// TodoListResponseの型定義
export type TodoListResponse = {
	todos: Todo[];
};

// エラーレスポンスの型定義
export type ErrorResponse = {
	error: string;
};

// 新規Todo作成リクエストの型定義
export type CreateTodoRequest = {
	text: string;
};
