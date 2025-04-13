import { useEffect, useState } from "react";
import { Todo } from "@src/types";
import { TodoItem } from "@src/TodoItem";
import { TodoForm } from "@src/TodoForm";
import { Card } from "@repo/ui";
import ky from "ky";

// kyのインスタンスを作成
const api = ky.create({
  // 公式推奨: prefixUrlを使用してベースURLを設定
  prefixUrl: 'http://localhost:8787',
  hooks: {
    beforeRequest: [
      request => {
        console.log('Request:', request.url.toString(), request.method);
      }
    ],
    afterResponse: [
      (_request, _options, response) => {
        console.log('Response:', response.url, response.status);
        return response;
      }
    ]
  }
});


export function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    try {
      console.log('Fetching todos...');
      const data = await api.get('api/todos').json<{ todos: Todo[] }>();
      console.log('Todos data:', data);
      setTodos(data.todos || []);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (text: string) => {
    try {
      console.log('Adding todo:', text);
      const response = await api.post('api/todos', {
        json: { text }
      });
      console.log('Add todo response:', response.status);
      const data = await response.json();
      console.log('Add todo data:', data);
      fetchTodos();
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const toggleTodo = async (id: string) => {
    try {
      await api.put(`api/todos/${id}`);
      fetchTodos();
    } catch (error) {
      console.error("Error toggling todo:", error);
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      await api.delete(`api/todos/${id}`);
      fetchTodos();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
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
