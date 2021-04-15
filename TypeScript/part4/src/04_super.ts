/*
 * @Author       : HyFun
 * @Date         : 2021-04-15 22:09:25
 * @Description  : 继承中的super
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-04-15 23:16:49
 */

(() => {
  class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    protected say() {
      console.log("动物在叫~");
    }
  }

  class Dog extends Animal {
    private height:number
    age: number;
    constructor(age: number) {
      super(`旺财`);
      this.age = age;
      this.height = 176
    }
    public say() {
      super.say();
    }
  }

  const dog = new Dog(3);
  console.log(dog);

  dog.say();
})();
