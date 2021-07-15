"use strict";
class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    bark() {
        console.log(`汪汪汪~`);
    }
}
const dog1 = new Dog(`小白`, 2);
const dog2 = new Dog(`小黑`, 3);
console.log(dog1);
console.log(dog2);
