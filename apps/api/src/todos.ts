import { zValidator } from "@hono/zod-validator";
import type { Todo } from "@src/types/index";
import { Hono } from "hono";
import { createTodoSchema } from "./schemas/todo";

// インメモリのTODOデータストア
let todos: Todo[] = [];

const todo = new Hono();
todo
	.get("/", (c) => {
		return c.json({ todos });
	})
	.post(
		"/",
		zValidator("json", createTodoSchema, (result, c) => {
			if (!result.success) {
				return c.json({ error: result.error }, 400);
			}
		}),
		async (c) => {
			const { text } = await c.req.json();
			const newTodo: Todo = {
				id: Date.now().toString(),
				text,
				completed: false,
			};
			todos.push(newTodo);
			return c.json({ todos }, 201);
		},
	)
	.put("/:id", (c) => {
		const id = c.req.param("id");
		todos = todos.filter((todo) => todo.id !== id);
		return c.json({ todos });
	})
	.delete("/:id", (c) => {
		const id = c.req.param("id");
		todos = todos.filter((todo) => todo.id !== id);
		return c.json({ todos });
	});

export const todosRouter = todo;
export type TodosRouterType = typeof todosRouter;
