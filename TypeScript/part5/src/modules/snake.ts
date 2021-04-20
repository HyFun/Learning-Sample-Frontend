/*
 * @Author       : HyFun
 * @Date         : 2021-04-19 22:56:14
 * @Description  :
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-04-20 23:11:02
 */
export default class Snake {
  head: HTMLElement;
  bodies: HTMLCollection;
  snake: HTMLElement;
  constructor() {
    this.snake = document.querySelector("#snake")!;
    this.head = this.snake.firstElementChild as HTMLElement;
    this.bodies = this.snake?.getElementsByTagName("div") as HTMLCollection;
  }

  getX() {
    return this.head.offsetLeft;
  }

  getY() {
    return this.head.offsetTop;
  }

  // 设置蛇头的坐标
  setX(x: number) {
    if (this.getX() === x) {
      return;
    }
    // x 的合法范围 0 - 290
    if (x < 0 || x > 290) {
      // 进入判断说明蛇撞墙了
      throw new Error("游戏结束");
    }
    this.head.style.left = x + "px";
  }
  setY(y: number) {
    if (this.getY() === y) {
      return;
    }
    if (y < 0 || y > 290) {
      // 进入判断说明蛇撞墙了
      throw new Error("游戏结束");
    }
    this.head.style.top = y + "px";
  }

  addBody() {
    this.snake.appendChild(document.createElement("div"));
  }
}
