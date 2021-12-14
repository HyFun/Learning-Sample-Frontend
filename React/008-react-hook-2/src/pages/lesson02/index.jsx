import React, { useEffect, useState } from "react";

export default function Effect() {
  const [count, setCount] = useState(0);
  const [first, setFirst] = useState(true);

  useEffect(() => {
    console.log(`componentDidmount`);
    return ()=>{
        console.log(`componentWillunmount`);
    }
  }, []);

  useEffect(() => {
    if (!first) {
      console.log(`componentUpdated`);
    } else {
      setFirst(false);
    }
  }, [count]);

  return (
    <div>
      <h3>课时2：useEffect使用</h3>
      <h4>Count: {count}</h4>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
