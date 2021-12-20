import React, { useCallback, useReducer } from "react";

function reducer(state, action) {
  const { type, data } = action;
  if (type === "change") {
    return data;
  }
  return state;
}

function useState(initialState) {
  const [state, dispatch] = useReducer(reducer, initialState);
  // 优化 使用useCallback
  const change = useCallback(
    (value) => {
      dispatch({ type: "change", data: value });
    },
    [dispatch]
  );
  return [state, change];
}

export default function State() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h4>2. 使用useReducer实现useState</h4>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
