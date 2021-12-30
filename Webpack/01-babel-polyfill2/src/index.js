import '@babel/polyfill'

import add from "./calculate";

class Person {
  name = "zhangsan";
  age = 20;

  say = () => {
    console.log(this.name);
  };
}

const person = new Person();

console.log(person);

Promise.resolve("text")
  .then((res) => {
    console.log(res);
  })
  .finally(() => {
    console.log(`completed`);
  });

console.log([1, 2, 3, 4, 5].map((v) => v * 2));

console.log(add(1, 2));
