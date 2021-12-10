import React, { useContext } from "react";
import { Context } from "./context";
import B from "./B";

export default function A() {
  const { count, setCount } = useContext(Context);
  return (
    <div>
      <h4>A...</h4>
      <h4>Count: {count}</h4>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <B />
    </div>
  );
}
