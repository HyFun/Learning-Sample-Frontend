import React, { useState } from "react";
import ReducerCount from "./ReducerCount";

/**
 * 简单的计数器demo
 * @returns
 */
export default function Reducer() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>课时4：useReducer使用</h3>
      <h4>普通实现计数器</h4>
      <h4>count: {count}</h4>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <hr />
      <ReducerCount />
    </div>
  );
}
