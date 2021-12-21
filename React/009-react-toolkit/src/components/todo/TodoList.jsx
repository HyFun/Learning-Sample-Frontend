import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from "../../store/slice/todos";

export default function TodoList() {
  const todos = useSelector((state) => {
    return state.todos.todos;
  });

  const status = useSelector((state) => {
    return state.todos.status;
  });

  const list = React.useMemo(() => {
    if (status === "all") {
      return todos;
    } else if (status === "completed") {
      return todos.filter((v) => v.completed);
    } else {
      return todos.filter((v) => !v.completed);
    }
  }, [status, todos]);

  const dispatch = useDispatch();
  const toggle = (id) => {
    dispatch(toggleTodo({ id }));
  };
  return (
    <ul>
      {list.map((v) => (
        <li
          key={v.id}
          style={{ textDecoration: v.completed ? "line-through" : "none" }}
          onClick={() => {
            toggle(v.id);
          }}
        >
          {v.text}
        </li>
      ))}
    </ul>
  );
}
