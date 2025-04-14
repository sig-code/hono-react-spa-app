import { Button, TextInput } from "@repo/ui";
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
		<form
			onSubmit={handleSubmit}
			style={{ display: "flex", gap: "10px", marginBottom: "20px" }}
		>
			<TextInput
				value={text}
				onChange={(e) => {
					console.log("TextInput onChange:", e);
					// Mantineのコンポーネントは文字列を直接渡す可能性がある
					if (typeof e === "string") {
						console.log("TextInput onChange (string):", e);
						setText(e);
					} else if (e?.target?.value) {
						console.log("TextInput onChange (event):", e.target.value);
						setText(e.target.value);
					}
				}}
				placeholder="新しいTODOを入力..."
				style={{ flexGrow: 1 }}
			/>
			<Button type="submit" color="primary">
				追加
			</Button>
		</form>
	);
}
