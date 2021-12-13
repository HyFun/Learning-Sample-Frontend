import { useEffect, useState } from "react";

function useMouse() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mouseEvent = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseEvent);
    return () => {
      window.removeEventListener("mousemove", mouseEvent);
    };
  }, []);
  return position;
}

export default useMouse;
