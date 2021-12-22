import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  useAppDispatch,
  useAppSelector,
  creatorSelectTodo,
  creatorRemoveTodo,
  creatorToggleTodo,
  creatorUpdateTodo,
} from "../../redux/toolkit";
import { Todo } from "../../type";

export default function TodoList() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter);
  const list = useAppSelector((state) => state.todos);
  const selectId = useAppSelector((state) => state.selected);

  const [showInput, setShowInput] = useState(false);
  const [value, setValue] = useState("");
  const iptRef = useRef<HTMLInputElement>(null);

  const generateStyle = useCallback((v: Todo) => {
    if (v.completed) {
      return {
        color: "#999",
        textDecoration: "line-through",
      };
    } else {
      return {
        color: "green",
        textDecoration: "none",
      };
    }
  }, []);

  const curTodo = useMemo(() => {
    return list.find((v) => v.id === selectId);
  }, [selectId, list]);

  useEffect(() => {
    if (curTodo) {
      setValue(curTodo.desc);
    }
  }, [curTodo]);

  useEffect(() => {
    if (showInput) {
      iptRef.current?.focus();
    }
  }, [showInput]);

  const select = (id: string | null) => {
    dispatch(creatorSelectTodo({ id }));
  };

  const remove = (id: string) => {
    dispatch(creatorRemoveTodo({ id }));
    setShowInput(false);
    dispatch(creatorSelectTodo({ id: null }));
  };

  const toggle = (id: string) => {
    dispatch(creatorToggleTodo({ id }));
  };

  const edit = () => {
    if (!curTodo) return;
    iptRef.current?.focus();
    setShowInput(true);
  };

  const blur = () => {
    if (!value.trim()) {
      iptRef.current?.focus();
      return;
    }
    setShowInput(false);
    dispatch(creatorUpdateTodo({ id: curTodo!.id, desc: value }));
  };

  return (
    <div>
      <h4>todo列表</h4>
      <p>Count: {count}</p>
      <ul>
        {list.map((v) => (
          <li
            key={v.id}
            style={{ cursor: "pointer", ...generateStyle(v) }}
            onClick={() => select(v.id)}
          >
            {v.desc}
          </li>
        ))}
      </ul>
      <h4>选中</h4>
      <p>id: {curTodo?.id}</p>
      <p>
        desc:
        {showInput ? (
          <input
            ref={iptRef}
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={blur}
            onKeyUp={(e) => {
              if (e.keyCode === 13) {
                blur();
              }
            }}
          ></input>
        ) : (
          <span>{curTodo?.desc}</span>
        )}
      </p>
      <button disabled={!curTodo} onClick={() => edit()}>
        edit
      </button>
      <button disabled={!curTodo} onClick={() => remove(curTodo!.id)}>
        remove
      </button>
      <button disabled={!curTodo} onClick={() => toggle(curTodo!.id)}>
        toggle
      </button>
    </div>
  );
}
