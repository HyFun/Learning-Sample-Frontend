import React, {
  Dispatch,
  MouseEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { State, Todo } from "../../type";
import {
  SelectTodoActionType,
  selectTodoActionCreator,
  TodoActionTypes,
  toggleTodoActionCreator,
  editTodoActionCreator,
  deleteTodoCreator,
} from "../../redux/old/actions";

export default function TodoList() {
  const list = useSelector<State, Todo[]>((m) => m.todo);
  const selectId = useSelector((m: State) => m.selectedTodo);
  const dispatch = useDispatch<Dispatch<SelectTodoActionType>>();
  const dispatchTodo = useDispatch<Dispatch<TodoActionTypes>>();

  const [showInput, setShowInput] = useState(false);
  const [value, setValue] = useState("");

  const generateStyle = useCallback(
    (v: Todo) => {
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
    },
    [list]
  );

  const selectTodo = useMemo(() => {
    return list.find((v) => v.id === selectId);
  }, [selectId, list]);

  useEffect(() => {
    if (!selectTodo) return;
    setValue(selectTodo?.desc);
  }, [selectTodo]);

  const select = (id: string) => {
    dispatch(selectTodoActionCreator({ id }));
  };

  const toggle = () => {
    if (!selectId) return;
    dispatchTodo(toggleTodoActionCreator({ id: selectId }));
  };

  const iptRef = useRef<HTMLInputElement>(null);
  const submit = () => {
    if (!value) {
      iptRef.current?.focus();
      return;
    }
    // 更新当前数据
    if (!selectTodo) return;
    dispatchTodo(editTodoActionCreator({ id: selectTodo?.id, desc: value }));
    setShowInput(false);
  };

  // 删除当前选中的
  const remove = useCallback(() => {
    if (!selectTodo) return;
    dispatchTodo(deleteTodoCreator({ id: selectTodo?.id }));
    // 重置
    setShowInput(false)
    dispatch(selectTodoActionCreator({id: null}))
  }, [selectTodo, dispatchTodo]);
  return (
    <div>
      <h4>todo列表</h4>
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

      <h4>当前选中的</h4>
      <p>id: {selectTodo?.id}</p>
      <p>
        value:{" "}
        {!showInput ? (
          <span>{selectTodo?.desc}</span>
        ) : (
          <input
            ref={iptRef}
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={submit}
            onKeyUp={(e) => {
              if (e.keyCode === 13) {
                submit();
              }
            }}
          />
        )}
      </p>
      <button disabled={!selectTodo} onClick={() => setShowInput(true)}>
        edit
      </button>
      <button disabled={!selectTodo} onClick={remove}>delete</button>
      <button disabled={!selectTodo} onClick={toggle}>
        toggle
      </button>
    </div>
  );
}
