export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};
export type TodoResponse = {
  todos: Todo[];
};
