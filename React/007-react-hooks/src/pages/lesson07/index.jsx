import React, { useMemo, useState } from "react";

export default function () {
  const [count, setCount] = useState(0);
  const computedCount = useMemo(() => {
    return count * 2;
  }, [count]);
  return (
    <div>
      <h3>课时7：useMemo使用</h3>
      <p>useMemo类似于Vue中的计算属性，所属依赖更新了才会执行函数</p>
      <h4>Count: {count}</h4>
      <h4>computedCount: {computedCount}</h4>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
