import React, { useEffect, useRef, useState } from "react";

// components
import Sub from "./Sub";
import SubInput from "./SubInput";

export default function Ref() {
  const inputRef = useRef(null);
  const subRef = useRef(null);
  const subinputRef = useRef(null);

  const [count, setCount] = useState(0);
  const stateRef = useRef(null);

  useEffect(() => {
    stateRef.current = count;
  });

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <h3>课时3：useRef使用</h3>
      <h4>1. ref获取dom节点对象</h4>
      <input ref={inputRef} type="text" />
      <h4>2. ref获取子组件暴露的方法</h4>
      <Sub ref={subRef}></Sub>
      <button
        onClick={() => {
          subRef.current.show();
        }}
      >
        click
      </button>
      <h4>3. ref操作子组件中的dom</h4>
      <SubInput ref={subinputRef} />
      <button onClick={() => alert(subinputRef.current.value)}>click</button>
      <h4>4. ref记录上一次的状态</h4>
      <p>count：{count}</p>
      <p>stateRef：{stateRef.current}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
