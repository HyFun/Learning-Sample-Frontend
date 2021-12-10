import React, { useEffect, useRef, useState } from "react";
import style from "./RefDemo.module.css";
import anime from "animejs";

export default function RefDemo() {
  const refBox = useRef(null);

  const [isAnimate1, setAnimate1] = useState(false);
  const [isAnimate2, setAnimate2] = useState(false);

  useEffect(() => {
    isAnimate1 && animate1();
  }, [isAnimate1]);

  useEffect(() => {
    isAnimate2 && animate2();
  }, [isAnimate2]);

  const clickHandler = () => {
    setAnimate1(true)
  };

  // 第一个动画
  function animate1() {
    anime({
      targets: refBox.current,
      translateX: "600px",
      backgroundColor: "#ff8822",
      borderRadius: ["0%", "50%"],
      complete: () => {
        setAnimate1(false)
        setAnimate2(true)
        console.log(`第一个动画完成了`);
      },
    });
  }

  function animate2() {
    anime({
      targets: refBox.current,
      translateX: "0",
      backgroundColor: "#f00",
      borderRadius: ["50%", "0"],
      complete: () => {
        console.log(`第二个动画完成了`);
        setAnimate1(true)
        setAnimate2(false)
      },
    });
  }
  return (
    <div className={style.container} onClick={clickHandler}>
      <div className={style.box} ref={refBox}></div>
    </div>
  );
}
