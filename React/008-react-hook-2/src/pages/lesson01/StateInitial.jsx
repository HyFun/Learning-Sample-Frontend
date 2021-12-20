import React, { useState } from "react";

export default function StateInitial({ defaultCount = 10 }) {
  const [count, setCount] = useState(defaultCount);
  const [countFn, setCountFn] = useState(() => defaultCount);

  return (
    <div>
      <h4>4. useState()初始值</h4>
      <h5>初始值为确定值</h5>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h5>初始值为方法</h5>
      <p>CountFn: {countFn}</p>
      <button onClick={() => setCountFn(countFn + 1)}>+</button>
    </div>
  );
}
