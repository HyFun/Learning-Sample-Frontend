import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clear, changeStatus } from "../../store/slice/todos";

export default function TodoFooter() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.todos.status);
  const change = (s) => {
    return function () {
      dispatch(changeStatus(s));
    };
  };
  return (
    <div>
      <button disabled={status === "all"} onClick={change("all")}>
        all
      </button>
      <button
        disabled={status === "uncompleted"}
        onClick={change("uncompleted")}
      >
        uncompleted
      </button>
      <button disabled={status === "completed"} onClick={change("completed")}>
        completed
      </button>
      <button onClick={() => dispatch(clear())}>clear</button>
    </div>
  );
}
