/*
 * @Author       : HyFun
 * @Date         : 2021-04-15 21:33:44
 * @Description  : ts继承
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-04-15 21:47:03
 */
(() => {
  class Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    say() {
        console.log('动物再叫~');
    }
  }

  class Dog extends Animal{
    say() {
      console.log(`${this.name}说：汪汪汪！`);
    }
  }

  const dog = new Dog("旺财", 5);
  console.log(dog);
  dog.say();

  class Cat extends Animal{
    say() {
      console.log(`${this.name}说：喵喵喵！`);
    }
  }

  const cat = new Cat("咪咪", 3);
  console.log(cat);
  cat?.say();
})();
