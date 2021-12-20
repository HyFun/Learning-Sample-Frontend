import React, { useContext } from "react";
import { MyContext } from "./index";

export default function Child1() {
  const { count, setCount } = useContext(MyContext);
  return (
    <div>
      <h4>子组件1</h4>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
