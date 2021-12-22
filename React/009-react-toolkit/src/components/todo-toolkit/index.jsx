import React from "react";
import { Provider } from "react-redux";
import store from "../../redux/toolkit";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
export default function Toolkit() {
  return (
    <div>
      <h3>Todo: 使用Redux Toolkit实现</h3>
      <Provider store={store}>
        <TodoHeader />
        <TodoList />
      </Provider>
    </div>
  );
}
