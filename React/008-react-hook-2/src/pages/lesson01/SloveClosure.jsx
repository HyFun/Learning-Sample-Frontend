import React, { useState } from "react";

export default function SloveClosure() {
  const [count, setCount] = useState(0);

  const asyncAdd = () => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 3000);
  };

  return (
    <div>
      <h4>3. 解决因为闭包异步更新state</h4>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={asyncAdd}>async +</button>
    </div>
  );
}
