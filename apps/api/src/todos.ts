import { Hono } from "hono";
import { Todo } from "shared";

// インメモリのTODOデータストア
let todos: Todo[] = [];

export const todosRouter = new Hono()
  .get("/", (c) => c.json({ todos }))
  .post("/", async (c) => {
    const { text } = await c.req.json();
    const newTodo: Todo = { id: Date.now().toString(), text, completed: false };
    todos.push(newTodo);
    return c.json({ todos });
  })
  .put("/:id", async (c) => {
    const id = c.req.param("id");
    todos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    return c.json({ todos });
  })
  .delete("/:id", (c) => {
    const id = c.req.param("id");
    todos = todos.filter((todo) => todo.id !== id);
    return c.json({ todos });
  });
