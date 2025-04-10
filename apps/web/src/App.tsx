import { useEffect, useState } from "react";
import { Todo } from "./types";
import { TodoItem } from "./TodoItem";
import { TodoForm } from "./TodoForm";
import { Card } from "@repo/ui";

export function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    const res = await fetch("/api/todos");
    const data = await res.json();
    setTodos(data.todos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (text: string) => {
    await fetch("/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    fetchTodos();
  };

  const toggleTodo = async (id: string) => {
    await fetch(`/api/todos/${id}`, { method: "PUT" });
    fetchTodos();
  };

  const deleteTodo = async (id: string) => {
    await fetch(`/api/todos/${id}`, { method: "DELETE" });
    fetchTodos();
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <Card shadow="md" p="md" radius="md" withBorder>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Simple TODO App</h1>
        <TodoForm onAdd={addTodo} />
        <ul style={{ listStyle: "none", padding: 0 }}>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))}
        </ul>
      </Card>
    </div>
  );
}
