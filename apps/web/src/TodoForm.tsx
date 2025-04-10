import { useState } from "react";
import { Button, TextInput } from "@repo/ui";

type TodoFormProps = {
  onAdd: (text: string) => void;
};

export function TodoForm({ onAdd }: TodoFormProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      <TextInput
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="新しいTODOを入力..."
        style={{ flexGrow: 1 }}
      />
      <Button type="submit" color="primary" variant="light">追加</Button>
    </form>
  );
}
