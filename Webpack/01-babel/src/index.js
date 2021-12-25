const common = new Person("zhangsan", 20);

const person = {
  ...common,
  name: "张三",
  age: 30,
};

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  say() {
    console.log(this.name);
  }
}

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 2000);
}).then((res) => {
  console.log(res);
});

const list = [1, 2, 3, 4, 5, 6].map((v) => v * 2);
