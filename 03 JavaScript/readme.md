<!--
 * @Author       : HyFun
 * @Date         : 2021-04-19 13:58:53
 * @Description  : 学习笔记
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-04-21 16:39:26
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

## 内置对象String

### 1. charAt(index)
获取字符串index位置处的字符。

### 2. charCodeAt(index)
获取字符串index位置处的ASCII值

### 3. codePointAt(index)
增强版的`charCodeAt(index)`,对于特殊字符如`𠮷`,`charCodeAt(index)`会识别为两个字符，而`codePointAt(index)`则会识别为一个

### 4. concat(str1,[str2,str3...strN])
追加字符串,返回一个追加后的字符串，原来的字符串不受影响
```js
let a = "hello";
let b = a.concat(" world");
b = b.concat("!");
console.log(a); // hello
console.log(b); // hello world!
```

### 5. endsWidth(str)
是否以str结尾？返回一个boolean类型的值

### 6. includes(str)
字符串是否包含str？返回一个boolean类型的值

### 7. indexOf(searchValue [,fromIndex])
从fromIndex出开始查找是否包含searchValue的值;
如果包含，返回该处索引；如果不包含，返回-1;
fromIndex默认值为0，表示从索引0处开始.
如果fromIndex的值 < 0 或者 = NaN，则fromIndex值为0

### 8. lastIndexOf(searchValue[, fromIndex])
从尾到头地检索字符串 str，看它是否含有 searchValue。
fromIndex的默认值为 `字符串.length - 1`。
如果fromIndex < 0，返回值-1；如果fromIndex > 0，fromIndex = 字符串.length - 1

### 9. match(regexp)

- regexp匹配上了
  - 如果`regexp`没有使用全局g，返回值是一个完整匹配和捕获组：`["o", index: 4, input: "hello word!", groups: undefined]`
  - 如果`regexp`使用了全局g，返回值是一个匹配上的数组

- regexp没有匹配上，返回null

### 10. matchAll(regexp)
- 返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器。
- 规定参数正则必须是全局模式的。否则报错
- 返回：RegExpStringIterator 迭代器

```js
{
  const matches = `hello word!`.matchAll(/o/g);
  for(let key of matches) {
      console.log(key); // ["o", index: 4, input: "hello word!", groups: undefined]
  }
}
```

### 11. padEnd(targetLength [,value])
- targetLength，填充后的目标值长度
- value 填充值，如果填充值的长度不足，则重复填充
- 返回值：填充后的值

### 12. padStart(targetLength [,value])
- 与`padEnd`相同，在头部填充

### 13. repeat(count)
- count，重复次数。
  - < 0：报错，Error Invalid count value
  - = 0：空字符串
  - = 1：原字符串不变
  - \> 0：重复几次

### 14. replace(value|regexp, value|function)

- 第一个参数为value
  - 第二个参数为value。则会匹配到第一个value，则会替换为第二个参数value。后续如果还有，则不会去处理
  - 第二个参数为function。如果匹配到了，则function的参数依次为：匹配到的value，匹配到的index，原字符串；返回值就是要替换的值

- 第一个参数为regexp
  - 第二个参数为value，则会将匹配到的regexp替换为value
  - 第二个参数为function。那么function的参数会根据不同的匹配会不一样

### 15. replaceAll(value|regexp, value|function)
- 同replace
- 如果第一个参数为regexp，那么必须是g修饰的。

### 16. slice(beginIndex [,endIndex])
- 字符串截取
- beginIndex 字符串截取开始位置（包含）
- endIndex 字符串截取结束位置（不包含）
- 如果`beginIndex | endIndex` 是负值，那么`beginIndex | endIndex`的取值 = `字符串.length + beginIndex | endIndex`
- 返回值：截取到的字符串。原字符串不受影响
```js
console.log(`hello world!`.slice(0,2)); // he
console.log(`hello world!`.slice(3,-2)); // llo worl  实际上：`hello world!`.slice(3,12-2 = 10)
console.log(`hello world!`.slice(-3,-2)); // l 实际上：`hello world!`.slice(12 - 3 = 9,12-2 = 10)
console.log(`hello world!`.slice(-1,-2)); // 没有内容 实际上：`hello world!`.slice(12 - 1 = 11,12-2 = 10) 11-10没有内容
```

### 17. split([separator[, limit]])
- 分割字符串
- 无参数。如果没有参数，那么就会将整个字符串存放到数组中。
- separator为''。就会以空字符串分割，那么字符串中的每个字符都会作为数组的元素。
- separator在字符串中不存在。效果将会与无参数时一样！
- limit。表示限制数组的长度，长度不足不会限制

### 18. startsWidth(value)
- 是否以`value`开头
- 返回Boolean类型的值
- 与`endsWidth(value)`用法一样，作用相反
```js
`hello world!`.endsWidth('hello') // true
`hello world!`.endsWidth('！') // false
```

### 19. substring(indexStart [,indexEnd])
- 作用：截取字符串
- 如果`indexStart > indexEnd`，那么参数`indexStart和indexEnd`则会调换来截取
- 如果 `indexStart < 0或 = NaN`，那么 indexStart = 0
- 如果 `indexEnd > 字符串.length 或 = NaN`，那么 indexStart = 字符串.length

### 20. substr(indexStart [, count])
- 已废弃
- 从indexStart处截取count个字符串
- 返回：被截取的值。原字符串不受影响


### 21. toLowerCase()  toUpperCase()
- 转小写、转大写

### 22. trim()
- 去除字符串首尾空格
- 中间空格不会去除
- 返回：去除后的字符串。原字符串不受影响

### 23. valueOf()
- 拆箱
- 包装类型转换为原始类型

```js
console.log(new String('hello') === 'hello'); // false
console.log(new String('hello').valueOf() === 'hello'); // true
```

## 内置对象Number

### 1. 属性 Number.MAX_SAFE_INTEGER
- 9007199254740991
- 在 JavaScript 中最大的安全整数
### 2. 属性 Number.MIN_SAFE_INTEGER
- -9007199254740991
- 在JavaScript中最小安全的整数
```js 
console.log(Number.MAX_SAGE_INTEGER) // 9007199254740991
```
### 3. 属性 Number.MAX_VALUE
- 1.7976931348623157e+308
- 在JavaScript中最大的数

### 4. 属性 Number.MIN_VALUE
- 5e-324
- 在JavaScript中最小的正数

**注意：是最小的正值，而不是负值**

### 5. 属性 Number.NaN
- NaN表示not a number
- typeof NaN 结果为：number
**注意：两个NaN互不相等**
```js
console.log(Number.NaN == Number.NaN); // false
console.log(Number.NaN === Number.NaN); // false
```

### 6. 属性 Number.NEGATIVE_INFINITY 负无穷 | Number.POSITIVE_INFINITY 正无穷

### 7. 静态方法 Number.isFinite(number)
- 判断number是否是一个有穷数
- 返回boolean类型

```js
console.log(Number.isFinite(1)) // true 
console.log(Number.isFinite(Number.POSITIVE_INFINITY)) // false 
```

### 8. 静态方法 Number.isInteger(number)
- 判断number是否是一个整数
- 返回：boolean类型值
```js
console.log(Number.isInteger(1)) // true
console.log(Number.isInteger(-1)) // true
console.log(Number.isInteger(1.2)) // false
```

### 9. 静态方法 Number.isNaN(number)
- 判断number是否是一个NaN
- 比全局的`isNaN()`方法更为严格

全局isNaN()方法实现：
```js
const isNaN = (value) => {
  // 使用全局的parseInt进行解析
  const n = parseInt(value)
  // 利用 NaN不等于NaN的特性，进行判断
  return n !== n
}
isNaN(111) // false
isNaN(NaN) // true
isNaN(`123abcd`) // false  parseInt解析出的是  123  
isNaN(`a123`) // true   parseInt解析出来的结果是 NaN，所以是NaN
```

Number.isNaN(number)实现方法：
```js
Number.isNaN = (value) => {
  return isNaN(value) && typeof value === 'number'
}
```
可以看到，Number.isNaN()在全局的基础上，还要判断值是否是一个number类型的值。

### 10. 静态方法 Number.isSafeInteger(number)
- 用于判断number是否是一个安全的整数

```js
console.log(Number.isSageInteger(Number.MAX_SAFE_INTEGER)) // true
console.log(Number.isSageInteger(Number.MIN_SAFE_INTEGER)) // true
console.log(Number.isSageInteger(Number.MAX_SAFE_INTEGER + 1)) // false
console.log(Number.isSageInteger(Number.MIN_SAFE_INTEGER - 1)) // false
```

### 11. 静态方法 Number.parseFloat(number)
- 将number解析成一个浮点型小数
- 同全局方法`parseFloat(number)`

### 12. 静态方法 Number.parseInt(number)
- 将number解析成整数
- 同全局方法`parseInt(number)`
```js
parseInt(123) // 123
parseInt(`123aaa`) // 123
parseInt(`a123`) // NaN
```

### 13. 原型方法 Number.prototype.isFixed(number)
- 保留number位小数
- 会四舍五入
- 返回：字符串

**注意：调用此方法需要使用包装类型的值来进行调用。直接`1.toFixed()`则会报错，可以使用`Number(1).toFixed(2)`才会成功。`new Number(1).toFixed(2)`也可以使用。**

### 14. 原型方法 Number.prototype.toString()
- 将数字转换为字符串

### 15. 原型方法 Number.prototype.valueOf()
- 拆箱，将包装类型的值转换为基本类型的值
```js
console.log(typeof new Number(1)); // object
console.log(typeof new Number(1).valueOf()); // number
```

