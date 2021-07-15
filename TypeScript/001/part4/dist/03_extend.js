"use strict";
(() => {
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        say() {
            console.log('动物再叫~');
        }
    }
    class Dog extends Animal {
        say() {
            console.log(`${this.name}说：汪汪汪！`);
        }
    }
    const dog = new Dog("旺财", 5);
    console.log(dog);
    dog.say();
    class Cat extends Animal {
        say() {
            console.log(`${this.name}说：喵喵喵！`);
        }
    }
    const cat = new Cat("咪咪", 3);
    console.log(cat);
    cat === null || cat === void 0 ? void 0 : cat.say();
})();
