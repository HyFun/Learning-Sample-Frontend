"use strict";
class Person {
    constructor() {
        this.name = '孙悟空';
        this.age = 18;
        this.height = 178;
    }
    say() {
        console.log('妖怪哪里走？！');
    }
    static skill() {
        console.log('拥有七十二变');
    }
}
Person.description = '西游记中的神仙人物';
const p = new Person();
console.log(p.name, p.age);
p.say();
console.log(Person.description);
Person.skill();
console.log(p.height);
const obj = { name: '猪八戒' };
console.log(obj.name);
