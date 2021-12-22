import React, { useRef } from "react";
import { useAppDispatch, creatorCreateTodo } from "../../redux/toolkit";

export default function TodoHeader() {
  const iptRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const add = () => {
    const value = iptRef.current!.value.trim();
    if (!value) return;
    dispatch(creatorCreateTodo(value));
    iptRef.current!.value = ''
  };

  return (
    <div>
      <input
        type="text"
        ref={iptRef}
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
