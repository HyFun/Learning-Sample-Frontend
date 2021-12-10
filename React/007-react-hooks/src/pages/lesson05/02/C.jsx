import React, { useContext } from "react";
import { Context } from "./context";

export default function C() {
  const { count, setCount } = useContext(Context);
  return (
    <div>
      <h4>C...</h4>
      <h4>Count: {count}</h4>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
