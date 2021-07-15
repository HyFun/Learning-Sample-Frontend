/*
 * @Author       : HyFun
 * @Date         : 2021-04-20 21:41:30
 * @Description  :
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-04-21 14:01:03
 */
// 引入
import Snake from "./snake";
import Food from "./food";
import Score from "./score";

const LEGAL_KEYS = [37, 38, 39, 40];
// 游戏控制器
export default class Control {
  //
  snake: Snake;
  food: Food;
  score: Score;

  // 移动的定时器
  timmer: number = -1;
  lastDirection: number = -1;
  direction: number = -1;
  // 游戏是否结束
  isEnd: Boolean = false;
  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.score = new Score();
    this.init();
  }

  /**
   * 游戏初始化方法
   */
  init() {
    document.removeEventListener("keydown", this.keydownHandler);
    document.addEventListener("keydown", this.keydownHandler);
    this.run();
  }

  /**
   * 左 37
   * 上 38
   * 右 39
   * 下 40
   * @param e
   */
  private keydownHandler = (e: KeyboardEvent) => {
    const code = e.keyCode;
    if (code === 32) {
      // 说明点击的是开始 或 暂停
      if (this.direction === -1) {
        // 再次启动
        this.direction = this.lastDirection;
      } else {
        this.lastDirection = this.direction;
        this.direction = -1;
      }
    } else if (LEGAL_KEYS.includes(code)) {
      const code = e.keyCode;
      // 判断当前蛇的前进方向
      const snakeDirection = this.snake.direction;
      if (
        (snakeDirection === 37 && code === 39) ||
        (snakeDirection === 38 && code === 40) ||
        (snakeDirection === 39 && code === 37) ||
        (snakeDirection === 40 && code === 38)
      ) {
      } else {
        // 说明是方向键
        this.direction = code;
      }
    }
  };

  run() {
    let x = this.snake.getX();
    let y = this.snake.getY();
    switch (this.direction) {
      case 37: // 左
        x -= 10;
        break;
      case 38: // 上
        y -= 10;
        break;
      case 39: // 右
        x += 10;
        break;
      case 40: // 下
        y += 10;
        break;
    }
    // 检查蛇是否吃到了食物
    this.checkEat(x, y);
    try {
      this.snake.setX(x);
      this.snake.setY(y);
    } catch (error) {
      this.isEnd = true;
      alert(error.message);
    }

    !this.isEnd &&
      setTimeout(() => {
        this.run();
      }, 300 - (this.score.level - 1) * 30);
  }
  /**
   * 检测是否吃到了食物
   */
  checkEat(x: number, y: number) {
    if (this.food.getX() === x && this.food.getY() === y) {
      this.food.change();
      this.score.addScore();
      this.snake.addBody();
    }
  }
}
