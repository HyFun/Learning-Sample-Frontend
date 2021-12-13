import React from "react";
import useMouse from "./useMouse";

export default function () {
  const position = useMouse();
  return (
    <div>
      <h3>课时9：自定义hooks</h3>
      <h4>
        x: {position.x}，y: {position.y}
      </h4>
    </div>
  );
}
