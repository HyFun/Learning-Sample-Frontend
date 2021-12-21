import React from "react";
import { useSelector } from "react-redux";
import { State, Todo } from "../../type";

export default function TodoList() {
  const list = useSelector<State, Todo[]>((m) => m.todo);
  return (
    <div>
      <ul>
        {list.map((v) => (
          <li key={v.id}>{v.desc}</li>
        ))}
      </ul>
    </div>
  );
}
