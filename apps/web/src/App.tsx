import { Card } from "@repo/ui";
import { TodoForm } from "@src/TodoForm";
import { TodoItem } from "@src/TodoItem";
import { api } from "@src/api/client";
import type { Todo } from "@src/types";
import { useCallback, useEffect, useState } from "react";

export function App() {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const fetchTodos = useCallback(async () => {
		try {
			setLoading(true);
			setError(null);
			console.log("TODOを取得中...");
			const data = await api.getTodos();
			console.log("TODOデータ:", data);
			setTodos(data.todos || []);
		} catch (error) {
			console.error("TODOの取得に失敗したよ！", error);
			setError(
				error instanceof Error ? error.message : "不明なエラーが発生したよ！",
			);
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchTodos();
	}, [fetchTodos]);

	const addTodo = async (text: string) => {
		try {
			setError(null);
			console.log("TODOを追加中:", text);
			const data = await api.createTodo(text);
			console.log("TODOが追加されたよ！", data);
			setTodos(data.todos || []);
		} catch (error) {
			console.error("TODOの追加に失敗したよ！", error);
			setError(
				error instanceof Error ? error.message : "不明なエラーが発生したよ！",
			);
		}
	};

	const toggleTodo = async (id: string) => {
		try {
			setError(null);
			const data = await api.toggleTodo(id);
			setTodos(data.todos || []);
		} catch (error) {
			console.error("TODOの更新に失敗したよ！", error);
			setError(
				error instanceof Error ? error.message : "不明なエラーが発生したよ！",
			);
		}
	};

	const deleteTodo = async (id: string) => {
		try {
			setError(null);
			const data = await api.deleteTodo(id);
			setTodos(data.todos || []);
		} catch (error) {
			console.error("TODOの削除に失敗したよ！", error);
			setError(
				error instanceof Error ? error.message : "不明なエラーが発生したよ！",
			);
		}
	};

	return (
		<div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
			<Card shadow="md" p="md" radius="md" withBorder>
				<h1 style={{ textAlign: "center", marginBottom: "20px" }}>
					シンプルTODOアプリ
				</h1>
				<TodoForm onAdd={addTodo} />

				{error && (
					<div
						style={{
							padding: "10px",
							marginBottom: "15px",
							backgroundColor: "#ffebee",
							color: "#c62828",
							borderRadius: "5px",
						}}
					>
						{error}
					</div>
				)}

				{loading ? (
					<div style={{ textAlign: "center", padding: "20px" }}>
						読み込み中...
					</div>
				) : (
					<ul style={{ listStyle: "none", padding: 0 }}>
						{todos.length === 0 ? (
							<div
								style={{
									textAlign: "center",
									padding: "20px",
									color: "#757575",
								}}
							>
								TODOがまだないよ！新しいTODOを追加してね！
							</div>
						) : (
							todos.map((todo) => (
								<TodoItem
									key={todo.id}
									todo={todo}
									onToggle={toggleTodo}
									onDelete={deleteTodo}
								/>
							))
						)}
					</ul>
				)}
			</Card>
		</div>
	);
}
