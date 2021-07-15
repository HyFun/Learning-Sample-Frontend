/*
 * @Author       : heyongfeng
 * @Date         : 2021-05-21 23:27:08
 * @Description  : 类的类型
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-05-21 23:41:30
 */

(() => {
  /**
   * 1. 类实现接口
   */
  interface IPerson {
    name: string;
    age: number;
    set?: string;
  }

  interface ISwim {
    swim(): void;
  }

  class Xiaoming implements IPerson {
    name!: string;
    age!: number;
  }

  /**
   * 2. 类实现多个接口
   */
  type IParent = ISwim & IPerson;
  // 1) 方法一： 使用type定义
  class Xiaohong1 implements IParent {
    swim(): void {
      throw new Error("Method not implemented.");
    }
    name: string;
    age: number;
    set?: string | undefined;
  }

  // 2) 方法二：类实现多个接口方式
  class Xiaohong2 implements ISwim, IPerson {
    swim(): void {
      throw new Error("Method not implemented.");
    }
    name: string;
    age: number;
    set?: string | undefined;
  }

  // 3) 方法三：使用中间接口继承多个接口，类实现这个中间接口
  interface IMiddle extends ISwim,IPerson{}
  class Xiaohong3 implements IMiddle {
      swim(): void {
          throw new Error("Method not implemented.");
      }
      name: string;
      age: number;
      set?: string | undefined; 
  }
})();
