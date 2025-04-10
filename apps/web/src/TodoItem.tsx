import { Todo } from "./types";
import { Button } from "@repo/ui";

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        style={{ marginRight: "10px" }}
      />
      <span style={{
        textDecoration: todo.completed ? "line-through" : "none",
        margin: "0 10px",
        flexGrow: 1
      }}>
        {todo.text}
      </span>
      <Button
        color="warning"
        variant="light"
        size="xs"
        onClick={() => onDelete(todo.id)}
      >
        削除
      </Button>
    </li>
  );
}
