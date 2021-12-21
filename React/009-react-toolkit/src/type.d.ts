export type Todo = {
  id: string;
  desc: string;
  completed: boolean;
};

export interface State {
  todo: Todo[];
  selectedTodo: string | null;
}
