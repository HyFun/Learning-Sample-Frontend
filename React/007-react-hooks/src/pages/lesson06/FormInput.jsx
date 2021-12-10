import React, { useContext, useRef } from "react";
import { Context, ACTION_ADD } from "./context";
import uuid from "uuid";

export default function FormInput() {
  const refInput = useRef();
  const { list, dispatch } = useContext(Context);

  const add = () => {
    const value = refInput.current.value.trim();
    if (!value) {
      alert(`请输入有效值`);
      return;
    }
    dispatch({ type: ACTION_ADD, data: { id: uuid(), value, done: false } });
    // 重置输入框内容
    refInput.current.value = ''
  };
  return (
    <div>
      <input ref={refInput} type="text" />
      <button onClick={add}>添加</button>
    </div>
  );
}
