import React, { useState } from "react";

const set1 = new Set();
const set2 = new Set();
const set3 = new Set();
export default function Callback2() {
  const [count, setCount] = useState(0);

  /**
   * 1. 如果第二个参数没有，则表示没有依赖值，则每次渲染界面都会创建新的方法，和不用useCallback没有差别
   *
   * 2. 如果第二个参数是一个空数组，则表示只会在页面加载后渲染一次，之后就不会改变了，且里边的作用域还是第一次时候的
   *
   * 3. 如果第二个参数有多个依赖，则只要依赖发生了响应式了，则就会重新生成函数
   */

  // 1. 无参数
  const fn1 = React.useCallback(() => {
    setCount((count) => count + 1);
  });
  set1.add(fn1);

  // 2. 空参数
  const fn2 = React.useCallback(() => {
    alert(count)
  }, []);
  set2.add(fn2);

  // 3. 正确依赖参数
  const fn3 = React.useCallback(() => {
    setCount((count) => count + 2);
  }, [setCount]);
  set3.add(fn3);

  return (
    <div>
      <h4>2. 使用useCallback缓存方法</h4>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p>set1: {set1.size}</p>
      <p>
        set2: {set2.size} <button onClick={fn2}>调用fn2</button>
      </p>
      <p>set3: {set3.size}</p>
    </div>
  );
}
