import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

import { addTodo } from "../../store/slice/todos";

export default function TodoAdd() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const add = () => {
    if (!value.trim()) {
      alert(`请填写内容！`);
      return;
    }
    dispatch(addTodo({ id: uuid(), text: value }));
    setValue("");
  };
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={(e) => {
          if (e.keyCode === 13) {
            add();
          }
        }}
      />
      <button onClick={add}>添加</button>
    </div>
  );
}
