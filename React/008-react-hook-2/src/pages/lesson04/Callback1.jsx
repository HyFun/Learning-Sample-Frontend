import React, { useState } from "react";

const set = new Set();
export default function Callback1() {
  const [count, setCount] = useState(0);
  const setCountFn = () => {
    setCount(count + 1);
  };
  set.add(setCountFn);
  return (
    <div>
      <h4>1. 普通方法每次都会生成最新的</h4>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p>set.size: {set.size}</p>
    </div>
  );
}
