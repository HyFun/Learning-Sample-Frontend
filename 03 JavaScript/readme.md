<!--
 * @Author       : HyFun
 * @Date         : 2021-04-19 13:58:53
 * @Description  : 学习笔记
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-04-19 15:15:16
-->
# Javascript

## 数据类型
js中的数据类型
- 基本数据类型
    - string
    - number
    - boolean
    - null
    - undefined
    - symbol (es2015)
    - bigint (es2020)

- 引用类型
    - object

## 数据类型判断
- typeof
```js
console.log(typeof '字符串');   // string
console.log(typeof 1); // number
console.log(typeof true); // boolean
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof {}); // object
console.log(typeof (()=>{})); // function
```
优点：能快速区分基本类型的变量

缺点：判断引用类型变量类型时，都会返回`object`

- instanceof
```js
// 基本类型
console.log('' instanceof String); // false
console.log(123 instanceof Number); // false
console.log(false instanceof Boolean); // false
// null undefined 无法判断

// 引用类型
console.log({} instanceof Object); // true
console.log((()=>{}) instanceof Function); // true
console.log(/[0-9]/ instanceof RegExp); // true
console.log(new Date() instanceof Date); // true
// 自定义类
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}
const person = new Person(`孙悟空`,18)
console.log(person instanceof Object); // true
console.log(person instanceof Person); // true
console.log(Object.prototype.toString.call(person)); // [object Object]
```
按照 instanceof 的逻辑，真正决定类型的是 prototype，而不是构造函数。

instanceof 内部实现：
```js
// instanceof 的内部实现 
function instance_of(L, R) {//L 表左表达式，R 表示右表达式，即L为变量，R为类型
  // 取 R 的显示原型
  var prototype = R.prototype
  // 取 L 的隐式原型
  L = L.__proto__
  // 判断对象（L）的类型是否严格等于类型（R）的显式原型
  while (true) { 
    if (L === null) {
      return false
    }
   
    // 这里重点：当 prototype 严格等于 L 时，返回 true
    if (prototype === L) {
      return true
    } 
 
    L = L.__proto__
  } 
}
```
即：A instanceof B，相当于A一直通过原型链向上查找，通过`A.__proto__ === B.prototype`


- Object.prototype.toString.call()
```js
console.log(Object.prototype.toString.call('字符串')); // [object String]
console.log(Object.prototype.toString.call(2)); // [object Number]
console.log(Object.prototype.toString.call(true)); // [object Boolean]
console.log(Object.prototype.toString.call(null)); // [object Null]
console.log(Object.prototype.toString.call(undefined)); // [object Undefined]
console.log(Object.prototype.toString.call({})); // [object Object]
console.log(Object.prototype.toString.call(new Date())); // [object Date]
console.log(Object.prototype.toString.call(console.log)); // [object Function]
console.log(Object.prototype.toString.call([])); // [object Array]
```
类型判断比较完美的解决方案

## typeof null 为什么返回 'object'?
简单来说，typeof null结果为object的原因是一个bug，在JavaScript最初版本中，使用的是32位系统，js为了性能优化，使用低位来存储变量的类型信息

| 数据类型 | 机器码标识 |
| - | - |
| 对象 | 000 |
| 整数 | 1 |
| 浮点数 | 010 |
| 字符串 | 100 |
| 布尔 | 110 |
| undefined | -2^30 |
| null | 0 |