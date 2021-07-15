/*
 * @Author       : heyongfeng
 * @Date         : 2021-05-21 23:56:56
 * @Description  : 继承
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-05-22 00:09:56
 */

(() => {
  class Animal {
    name: string;
    age: number;
    gender: string;
    constructor(name: string, age: number, gender: string) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
    say(word: string) {
      console.log(
        `我是${this.name}，我今年${this.age}啦，我是一个${this.gender}哦，我会叫：${word}!`
      );
    }
  }
  
  class Dog extends Animal {
    say(){
        super.say('汪汪汪')
    }
  }


  class Cat extends Animal {
    say(){
        super.say('喵喵喵')
    }
  }

  new Dog('小泰迪',18,'小哥哥').say()
  new Cat('小花猫',17,'小姐姐').say()
})();
