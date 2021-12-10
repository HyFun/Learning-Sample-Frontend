import React, { useRef, useState } from "react";

/**
 * 使用ref保存可变变量
 * @returns
 */
export default function RefKeep() {
  let a = 0;
  let b = useRef(0);

  console.log(`a>>>${a}`);
  console.log(`b>>>${b.current}`);
  let [count, setCount] = useState(0);
  return (
    <div>
      <h3>count：{count}</h3>
      <button
        onClick={() => {
          ++a;
          ++b.current;
          setCount(++count);
        }}
      >
        +
      </button>
    </div>
  );
}
