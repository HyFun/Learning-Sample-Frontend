import React, { useState } from "react";
import { context } from "./context";
import A from "./A";

export default function ContextClass() {
  const [count, setCount] = useState(0);
  return (
    <context.Provider value={count}>
      <h4>Count: {count}</h4>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <A />
    </context.Provider>
  );
}
