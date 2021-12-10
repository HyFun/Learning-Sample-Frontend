import React, { useReducer } from "react";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
/**
 * 使用useReducer写的计数器demo
 * @returns
 */
export default function ReducerCount() {
  // 参数1：reducer函数
  // 参数2：初始值
  const [count, dispatch] = useReducer(reducer, 0);

  return <div>
      <h4>useReducer实现计数器</h4>
      <h4>count: {count}</h4>
      <button onClick={()=>dispatch({type: INCREMENT})}>+</button>
      <button onClick={()=>dispatch({type: DECREMENT})}>-</button>
  </div>;
}
