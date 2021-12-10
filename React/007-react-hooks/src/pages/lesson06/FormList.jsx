import React, { useContext } from "react";
import { Context, ACTION_DELETE, ACTION_CHANGE_STATE } from "./context";

export default function FormList() {
  const { list, dispatch, action } = useContext(Context);

  const del = (v) => {
    dispatch({ type: ACTION_DELETE, data: v });
  };

  const toggle = (v) => {
    dispatch({ type: ACTION_CHANGE_STATE, data: v });
  };

  const filter = () => {
    switch (action) {
      case "all":
        return list;
      case "active":
        return list.filter((v) => !v.done);
      case "completed":
        return list.filter((v) => v.done);
      default:
        return list;
    }
  };
  return (
    <ul>
      {filter().map((v) => (
        <li
          key={v.id}
          style={{ textDecoration: !v.done ? "none" : "line-through" }}
        >
          <span onClick={() => toggle(v)}>{v.value}</span>
          <button onClick={() => del(v)}>删除</button>
        </li>
      ))}
    </ul>
  );
}
