import React, { useCallback, useState } from "react";

export default function () {
  const [count, setCount] = useState(0);
  const computedCountFn = useCallback(() => (() => count * 2), [count]);
  return (
    <div>
      <h3>课时8：useCallback使用</h3>
      <h4>count: {count}</h4>
      <h4>computedCountFn: {computedCountFn()()}</h4>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
