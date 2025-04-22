import { useState } from "react";

type TodoFormProps = {
  onAdd: (text: string) => void;
};

export function TodoForm({ onAdd }: TodoFormProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with text:", text);

    if (text.trim()) {
      console.log("Calling onAdd with text:", text);
      onAdd(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          console.log("Input changed to:", e.target.value);
          setText(e.target.value);
        }}
        placeholder="新しいTODOを入力..."
        style={{
          flexGrow: 1,
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          fontSize: "16px"
        }}
      />
      <button
        type="submit"
        style={{
          padding: "10px 20px",
          backgroundColor: "#3894FF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        追加
      </button>
    </form>
  );
}
