class Person {
    name = 'zhangsan'
    age = 16
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    hello = () => {
        console.log(`hell, I am ${this.name}, ${this.age} years old!`);
    }
}

const person = new Person('张三', 20)
person.hello()