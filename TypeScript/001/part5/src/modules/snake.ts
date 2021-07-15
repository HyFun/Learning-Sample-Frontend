/*
 * @Author       : HyFun
 * @Date         : 2021-04-19 22:56:14
 * @Description  :
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-04-21 14:18:32
 */
export default class Snake {
  head: HTMLElement;
  bodies: HTMLCollection;
  snake: HTMLElement;

  // 当前蛇的前进方向
  direction:number = -1
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
      throw new Error("撞墙了，GAME OVER!");
    }
    // 蛇在向右走时，不能再向左，反之也是
    if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === x){
      // 说明是在水平掉头
      return
    }
    // 设置蛇的前进方向
    if(this.getX() > x) {
      // 说明向左
      this.direction = 37
    }else {
      // 向右
      this.direction = 39
    }
    this.moveBody()
    this.head.style.left = x + "px";
    this.checkHeadBody()
  }
  setY(y: number) {
    if (this.getY() === y) {
      return;
    }
    if (y < 0 || y > 290) {
      // 进入判断说明蛇撞墙了
      throw new Error("撞墙了，GAME OVER!");
    }
    // 设置蛇的前进方向
    if(this.getY() > y) {
      // 说明向上
      this.direction = 38
    }else {
      // 向下
      this.direction = 40
    }

    this.moveBody()
    this.head.style.top = y + "px";
    this.checkHeadBody()
  }

  addBody() {
    this.snake.appendChild(document.createElement("div"));
  }
  /**
   * 蛇移动的方法
   * 将后边的身体设置为前边身体的位置
   */
  moveBody() {
    // 遍历获取所有的身体
    for (let i = this.bodies.length - 1; i > 0; i--) {
      let beforeX = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let beforeY = (this.bodies[i - 1] as HTMLElement).offsetTop;
      // 将当前的元素设置之前的位置
      (this.bodies[i] as HTMLElement).style.left = beforeX + "px";
      (this.bodies[i] as HTMLElement).style.top = beforeY + "px";
    }
  }

  /**
   * 检查蛇头是否和身体相撞
   */
  checkHeadBody() {
    const x = this.getX()
    const y = this.getY()
    for(let i = 1; i < this.bodies.length;i++) {
      const X = (this.bodies[i] as HTMLElement).offsetLeft
      const Y = (this.bodies[i] as HTMLElement).offsetTop
      if(X === x && Y === y) {
        throw new Error('撞自己了，GAME OVER!')
      }
    }
  }
}
