import React, { useState } from "react";

export default function Callback2() {
  const [count, setCount] = useState(0);

  const add = React.useCallback(() => {
    setCount((count) => count + 1);
  }, [setCount]);
  return (
    <div>
      <h4>3. 使用useCallback+memo缓存组件</h4>
      <p>Count: {count}</p>
      <Button add={add} />
    </div>
  );
}

function Button({ add }) {
  console.log(`render Child`);
  return <button onClick={add}>+</button>;
}

Button = React.memo(Button);
