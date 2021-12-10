import React, { useEffect, useRef, useState } from "react";

export default function () {
  let [count, setCount] = useState(0);
  let [num, setNum] = useState(0);
  let [date, setDate] = useState(null);

  // 1. 第二个参数为空
  useEffect(() => {
    console.log(`只要有更新就会执行...`);
  });

  // 2. 第二个参数为空数组
  useEffect(() => {
    console.log(`相当于componentDidmount`);
  }, []);

  // 3. 第二个参数为数组监听
  useEffect(() => {
    console.log(`count更新了${count}`);
  }, [count]);

  // 4. 组件销毁时生命周期
  useEffect(() => {
    setDate(new Date().toLocaleString());
    let timer = setInterval(() => {
      setDate(new Date().toLocaleString());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  // 5. 清除副作用函数的多次执行
  let no = useRef(0)
  useEffect(() => {
    console.log(`执行第${++no.current}次`);
    return ()=>{
        console.log(`执行消除第${no.current}次的副作用`);
    }
  }, [count, num]);

  return (
    <div>
      <h3>课时2：useEffect使用</h3>
      <h4>Count: {count}</h4>
      <button onClick={() => setCount(--count)}>-</button>
      <button onClick={() => setCount(++count)}>+</button>
      <h4>Num: {num}</h4>
      <button onClick={() => setNum(--num)}>-</button>
      <button onClick={() => setNum(++num)}>+</button>
      <h4>当前时间：{date}</h4>
    </div>
  );
}
