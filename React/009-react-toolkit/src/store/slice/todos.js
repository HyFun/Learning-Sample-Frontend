import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    status: "all",
  },
  reducers: {
    addTodo({ todos }, action) {
      const { id, text } = action.payload;
      todos.push({ id, text, completed: false });
    },
    removeTodo({ todos }, action) {
      const { id } = action.payload;
      todos.splice(
        todos.findIndex((v) => v.id === id),
        1
      );
    },
    toggleTodo({ todos }, action) {
      const { id } = action.payload;
      const todo = todos.find((v) => v.id === id);
      todo && (todo.completed = !todo.completed);
    },
    clear({ todos }, action) {
      todos.splice(0, todos.length);
    },
    changeStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, clear, changeStatus } =
  todosSlice.actions;
export default todosSlice.reducer;
