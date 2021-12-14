import React, { useState } from "react";

export default function State() {
  const [value, setValue] = useState("这是一段默认值~");
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>课时1：useState使用</h3>
      <input
        value={value}
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
      <h4>Message: {value}</h4>
      <hr />
      <h4>Count * 2: {count}</h4>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
    </div>
  );
}
