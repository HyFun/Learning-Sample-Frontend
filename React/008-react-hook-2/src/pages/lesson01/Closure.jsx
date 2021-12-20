import React, { useState } from "react";

export default function Closure() {
  const [count, setCount] = useState(0);

  const asyncAdd = () => {
    setTimeout(() => {
      setCount(count + 1);
    }, 3000);
  };

  return (
    <div>
      <h4>2. useState()闭包效果</h4>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={asyncAdd}>async +</button>
    </div>
  );
}
