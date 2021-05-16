"use strict";
(() => {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        say() {
            console.log("动物在叫~");
        }
    }
    class Dog extends Animal {
        constructor(age) {
            super(`旺财`);
            this.age = age;
            this.height = 176;
        }
        say() {
            super.say();
        }
    }
    const dog = new Dog(3);
    console.log(dog);
    dog.say();
})();
