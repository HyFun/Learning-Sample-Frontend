/*
 * @Author       : HyFun
 * @Date         : 2021-05-25 12:45:48
 * @Description  : 泛型
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-05-25 13:17:15
 */
(() => {
  /**
   * 定义接口、函数、类的时候 不能预先确定要使用数据的类型
   */

  /**
   * 1. 泛型 定义方法
   */
  function getArr<T>(ele: T, count: number): T[] {
    const list: T[] = [];
    for (let i = 0; i < count; i++) {
      list.push(ele);
    }
    return list;
  }

  console.log(getArr(1,3));
  console.log(getArr('hahaha',3));


  /**
   * 2. 泛型定义类
   */
  class BaseData<T> {
      private code: number
      private message: string
      private data:T
      constructor(code: number,message: string,data:T) {
          this.code = code
          this.message = message
          this.data = data
      }
      toString() {
         console.log(this.code,this.message,this.data);
      }
  }

  new BaseData<object>(200,'成功',{name: '张三',age: 14}).toString()

  /**
   * 3. 泛型应用接口 和 抽象类 也是同理
   */


  /**
   * 4. 泛型约束
   */
  {

      type Type = [] | string
      function getLength<T extends Type>(x: T) {
        return x.length
      }
      console.log(getLength([]));
      console.log(getLength('123'));
  }
})();
