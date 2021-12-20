import React from "react";
import {useSelector, useDispatch} from 'react-redux'

import {INCREMENT, DECREMENT} from './store/index'

export default function Counter1() {
  const count = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    <>
      <h4>Counter1</h4>
      <p>Count: {count}</p>
      <button onClick={()=>dispatch({type: INCREMENT})}>+</button>
      <button onClick={()=>dispatch({type: DECREMENT})}>-</button>
    </>
  );
}
