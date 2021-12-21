import React, { Dispatch } from "react";
import { useDispatch } from "react-redux";
import {
  TodoActionTypes,
  createTodoActionCreator,
} from "../../redux/old/actions";

export default function TodoHeader() {
  const iptRef = React.useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<Dispatch<TodoActionTypes>>();
  const add = () => {
    const value = iptRef.current?.value.trim();
    if (!value) {
      return;
    }
    dispatch(createTodoActionCreator({ desc: value }));
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
