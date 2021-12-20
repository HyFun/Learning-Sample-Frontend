import React, { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

export const MyContext = React.createContext();

export default function Context() {
   const [count, setCount] = useState(0)
  return (
    <div>
      <h3>课时6：useContext使用</h3>
      <MyContext.Provider value={{count, setCount}}>
        <Child1 />
        <Child2 />
      </MyContext.Provider>
    </div>
  );
}
