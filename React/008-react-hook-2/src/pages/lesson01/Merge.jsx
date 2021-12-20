import React, { useMemo, useState } from "react";

// useState 不会自动合并对象
export default function Merge() {
  const [person, setPerson] = useState({ name: "张三", age: 20 });
  const personString = useMemo(() => JSON.stringify(person), [person]);

  return (
    <div>
      <h4>1. 使用useState()不会合并原有state，而是替换</h4>
      <p>person: {personString}</p>
      <button
        onClick={() => {
          setPerson({ name: "李四" });
        }}
      >
        setPerson
      </button>

      <button onClick={() => setPerson({ ...person, name: "李四" })}>
        解决办法
      </button>
    </div>
  );
}
