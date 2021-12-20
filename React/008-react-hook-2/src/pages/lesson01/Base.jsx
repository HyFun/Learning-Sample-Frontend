import React, { useState } from "react";

export default function Base() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h4>1. 基础使用</h4>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
