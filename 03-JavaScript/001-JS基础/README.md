<!--
 * @Author       : HyFun
 * @Date         : 2021-04-19 13:58:53
 * @Description  : 学习笔记
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-07-13 22:57:28
-->

# Javascript

## 数据类型

js 中的数据类型

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
console.log(typeof '字符串') // string
console.log(typeof 1) // number
console.log(typeof true) // boolean
console.log(typeof null) // object
console.log(typeof undefined) // undefined
console.log(typeof {}) // object
console.log(typeof (() => {})) // function
```

优点：能快速区分基本类型的变量

缺点：判断引用类型变量类型时，都会返回`object`

- instanceof

```js
// 基本类型
console.log('' instanceof String) // false
console.log(123 instanceof Number) // false
console.log(false instanceof Boolean) // false
// null undefined 无法判断

// 引用类型
console.log({} instanceof Object) // true
console.log((() => {}) instanceof Function) // true
console.log(/[0-9]/ instanceof RegExp) // true
console.log(new Date() instanceof Date) // true
// 自定义类
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}
const person = new Person(`孙悟空`, 18)
console.log(person instanceof Object) // true
console.log(person instanceof Person) // true
console.log(Object.prototype.toString.call(person)) // [object Object]
```

按照 instanceof 的逻辑，真正决定类型的是 prototype，而不是构造函数。

instanceof 内部实现：

```js
// instanceof 的内部实现
function instance_of(L, R) {
  //L 表左表达式，R 表示右表达式，即L为变量，R为类型
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

即：A instanceof B，相当于 A 一直通过原型链向上查找，通过`A.__proto__ === B.prototype`

- Object.prototype.toString.call()

```js
console.log(Object.prototype.toString.call('字符串')) // [object String]
console.log(Object.prototype.toString.call(2)) // [object Number]
console.log(Object.prototype.toString.call(true)) // [object Boolean]
console.log(Object.prototype.toString.call(null)) // [object Null]
console.log(Object.prototype.toString.call(undefined)) // [object Undefined]
console.log(Object.prototype.toString.call({})) // [object Object]
console.log(Object.prototype.toString.call(new Date())) // [object Date]
console.log(Object.prototype.toString.call(console.log)) // [object Function]
console.log(Object.prototype.toString.call([])) // [object Array]
```

类型判断比较完美的解决方案

## typeof null 为什么返回 'object'?

简单来说，typeof null 结果为 object 的原因是一个 bug，在 JavaScript 最初版本中，使用的是 32 位系统，js 为了性能优化，使用低位来存储变量的类型信息

| 数据类型  | 机器码标识 |
| --------- | ---------- |
| 对象      | 000        |
| 整数      | 1          |
| 浮点数    | 010        |
| 字符串    | 100        |
| 布尔      | 110        |
| undefined | -2^30      |
| null      | 0          |

## String

### 1. charAt(index)

获取字符串 index 位置处的字符。

### 2. charCodeAt(index)

获取字符串 index 位置处的 ASCII 值

### 3. codePointAt(index)

增强版的`charCodeAt(index)`,对于特殊字符如`𠮷`,`charCodeAt(index)`会识别为两个字符，而`codePointAt(index)`则会识别为一个

### 4. concat(str1,[str2,str3...strN])

追加字符串,返回一个追加后的字符串，原来的字符串不受影响

```js
let a = 'hello'
let b = a.concat(' world')
b = b.concat('!')
console.log(a) // hello
console.log(b) // hello world!
```

### 5. endsWidth(str)

是否以 str 结尾？返回一个 boolean 类型的值

### 6. includes(str)

字符串是否包含 str？返回一个 boolean 类型的值

### 7. indexOf(searchValue [,fromIndex])

从 fromIndex 出开始查找是否包含 searchValue 的值;
如果包含，返回该处索引；如果不包含，返回-1;
fromIndex 默认值为 0，表示从索引 0 处开始.
如果 fromIndex 的值 < 0 或者 = NaN，则 fromIndex 值为 0

### 8. lastIndexOf(searchValue[, fromIndex])

从尾到头地检索字符串 str，看它是否含有 searchValue。
fromIndex 的默认值为 `字符串.length - 1`。
如果 fromIndex < 0，返回值-1；如果 fromIndex > 0，fromIndex = 字符串.length - 1

### 9. match(regexp)

- regexp 匹配上了

  - 如果`regexp`没有使用全局 g，返回值是一个完整匹配和捕获组：`["o", index: 4, input: "hello word!", groups: undefined]`
  - 如果`regexp`使用了全局 g，返回值是一个匹配上的数组

- regexp 没有匹配上，返回 null

### 10. matchAll(regexp)

- 返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器。
- 规定参数正则必须是全局模式的。否则报错
- 返回：RegExpStringIterator  迭代器

```js
{
  const matches = `hello word!`.matchAll(/o/g)
  for (let key of matches) {
    console.log(key) // ["o", index: 4, input: "hello word!", groups: undefined]
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

- 第一个参数为 value

  - 第二个参数为 value。则会匹配到第一个 value，则会替换为第二个参数 value。后续如果还有，则不会去处理
  - 第二个参数为 function。如果匹配到了，则 function 的参数依次为：匹配到的 value，匹配到的 index，原字符串；返回值就是要替换的值

- 第一个参数为 regexp
  - 第二个参数为 value，则会将匹配到的 regexp 替换为 value
  - 第二个参数为 function。那么 function 的参数会根据不同的匹配会不一样

### 15. replaceAll(value|regexp, value|function)

- 同 replace
- 如果第一个参数为 regexp，那么必须是 g 修饰的。

### 16. slice(beginIndex [,endIndex])

- 字符串截取
- beginIndex 字符串截取开始位置（包含）
- endIndex 字符串截取结束位置（不包含）
- 如果`beginIndex | endIndex` 是负值，那么`beginIndex | endIndex`的取值 = `字符串.length + beginIndex | endIndex`
- 返回值：截取到的字符串。原字符串不受影响

```js
console.log(`hello world!`.slice(0, 2)) // he
console.log(`hello world!`.slice(3, -2)) // llo worl  实际上：`hello world!`.slice(3,12-2 = 10)
console.log(`hello world!`.slice(-3, -2)) // l 实际上：`hello world!`.slice(12 - 3 = 9,12-2 = 10)
console.log(`hello world!`.slice(-1, -2)) // 没有内容 实际上：`hello world!`.slice(12 - 1 = 11,12-2 = 10) 11-10没有内容
```

### 17. split([separator[, limit]])

- 分割字符串
- 无参数。如果没有参数，那么就会将整个字符串存放到数组中。
- separator 为''。就会以空字符串分割，那么字符串中的每个字符都会作为数组的元素。
- separator 在字符串中不存在。效果将会与无参数时一样！
- limit。表示限制数组的长度，长度不足不会限制

### 18. startsWidth(value)

- 是否以`value`开头
- 返回 Boolean 类型的值
- 与`endsWidth(value)`用法一样，作用相反

```js
;`hello world!`.endsWidth(
  'hello'
) // true
`hello world!`.endsWidth('！') // false
```

### 19. substring(indexStart [,indexEnd])

- 作用：截取字符串
- 如果`indexStart > indexEnd`，那么参数`indexStart和indexEnd`则会调换来截取
- 如果 `indexStart < 0或 = NaN`，那么 indexStart = 0
- 如果 `indexEnd > 字符串.length 或 = NaN`，那么 indexStart = 字符串.length

### 20. substr(indexStart [, count])

- 已废弃
- 从 indexStart 处截取 count 个字符串
- 返回：被截取的值。原字符串不受影响

### 21. toLowerCase() toUpperCase()

- 转小写、转大写

### 22. trim()

- 去除字符串首尾空格
- 中间空格不会去除
- 返回：去除后的字符串。原字符串不受影响

### 23. valueOf()

- 拆箱
- 包装类型转换为原始类型

```js
console.log(new String('hello') === 'hello') // false
console.log(new String('hello').valueOf() === 'hello') // true
```

## Number

### 1. 属性 Number.MAX_SAFE_INTEGER

- 9007199254740991
- 在 JavaScript 中最大的安全整数

### 2. 属性 Number.MIN_SAFE_INTEGER

- -9007199254740991
- 在 JavaScript 中最小安全的整数

```js
console.log(Number.MAX_SAGE_INTEGER) // 9007199254740991
```

### 3. 属性 Number.MAX_VALUE

- 1.7976931348623157e+308
- 在 JavaScript 中最大的数

### 4. 属性 Number.MIN_VALUE

- 5e-324
- 在 JavaScript 中最小的正数

**注意：是最小的正值，而不是负值**

### 5. 属性 Number.NaN

- NaN 表示 not a number
- typeof NaN 结果为：number
  **注意：两个 NaN 互不相等**

```js
console.log(Number.NaN == Number.NaN) // false
console.log(Number.NaN === Number.NaN) // false
```

### 6. 属性 Number.NEGATIVE_INFINITY 负无穷 | Number.POSITIVE_INFINITY 正无穷

### 7. 静态方法 Number.isFinite(number)

- 判断 number 是否是一个有穷数
- 返回 boolean 类型

```js
console.log(Number.isFinite(1)) // true
console.log(Number.isFinite(Number.POSITIVE_INFINITY)) // false
```

### 8. 静态方法 Number.isInteger(number)

- 判断 number 是否是一个整数
- 返回：boolean 类型值

```js
console.log(Number.isInteger(1)) // true
console.log(Number.isInteger(-1)) // true
console.log(Number.isInteger(1.2)) // false
```

### 9. 静态方法 Number.isNaN(number)

- 判断 number 是否是一个 NaN
- 比全局的`isNaN()`方法更为严格

全局 isNaN()方法实现：

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

可以看到，Number.isNaN()在全局的基础上，还要判断值是否是一个 number 类型的值。

### 10. 静态方法 Number.isSafeInteger(number)

- 用于判断 number 是否是一个安全的整数

```js
console.log(Number.isSageInteger(Number.MAX_SAFE_INTEGER)) // true
console.log(Number.isSageInteger(Number.MIN_SAFE_INTEGER)) // true
console.log(Number.isSageInteger(Number.MAX_SAFE_INTEGER + 1)) // false
console.log(Number.isSageInteger(Number.MIN_SAFE_INTEGER - 1)) // false
```

### 11. 静态方法 Number.parseFloat(number)

- 将 number 解析成一个浮点型小数
- 同全局方法`parseFloat(number)`

### 12. 静态方法 Number.parseInt(number)

- 将 number 解析成整数
- 同全局方法`parseInt(number)`

```js
parseInt(123) // 123
parseInt(`123aaa`) // 123
parseInt(`a123`) // NaN
```

### 13. 原型方法 Number.prototype.isFixed(number)

- 保留 number 位小数
- 会四舍五入
- 返回：字符串

**注意：调用此方法需要使用包装类型的值来进行调用。直接`1.toFixed()`则会报错，可以使用`Number(1).toFixed(2)`才会成功。`new Number(1).toFixed(2)`也可以使用。**

### 14. 原型方法 Number.prototype.toString()

- 将数字转换为字符串

### 15. 原型方法 Number.prototype.valueOf()

- 拆箱，将包装类型的值转换为基本类型的值

```js
console.log(typeof new Number(1)) // object
console.log(typeof new Number(1).valueOf()) // number
```

## Object

### 1. Obeject.assign(target, sources)

- 将源对象(sources)合并到目标对象(target)中去
- 如果 target 中有相同的键，则 target 中的键将会被覆盖
- 如果 target 值为 undefined 或 null 将会报错

### 2. Object.create(proto)

- proto 表示新创建对象的原型对象
- 返回一个**proto**是 proto 的对象。多用于原型式继承

### 3. Object.defineProperty(target, prop, descriptor)

- 会在 target 中定义一个新属性 prop，或者修改一个对象的现有属性 prop
- 返回此对象 target
- descriptor 要定义或修改的属性描述符

  - configurable: false。当设置该属性为 true 时，表示该属性的描述符能够被改变，同时也能被删除
  - enumerable: false。 当且仅当该属性的 enumerable 键值为 true 时，该属性才会出现在对象的枚举属性中。
  - value 该属性对应的值。可以是任何有效的 js 值
  - writable 是否可写，值为 true 时，value 值才能被改变
    <br/>
    <br/>
  - get() 函数，返回值就是取该属性值时返回的值
  - set(val) 函数，用于控制该属性赋值时的操作

- 注意：value、writable 和 get()、set(val)互斥的，这两组配置不能同时出现在 descriptor 对象中。否则会报错

### 4. Object.defineProperties(obj, { propName: descriptor })

- 对象多个属性配置，第二个参数为一个对象。key 为 target 中的 key，value 表示 descriptor

### 5. Object.entries()

- 返回一个给定对象自身可枚举属性的键值对数据

```
{
  const person = {
    name: '孙悟空',
    age: 200
  }
  console.log(Object.entries(person));
  // [["name","孙悟空"], ["age",200]]
}
```

### 6. Object.freeze()

- 冻结某个对象。一个被冻结的对象再也不能被修改；冻结了一个对象 则不能向这个对象添加新的属性，不能删除已有属性
- 类似于 readonly

```
{
  const person = {
    name: '孙悟空',
    age: 200
  }
  Object.freeze(person)
  // 新增
  person.sex = '男'
  console.log(person); // 未被修改
  // 修改
  person.name = '猪八戒'
  console.log(person); // 未被修改
  // 删除
  delete person.name
  console.log(person); // 未被删除
  // 查看
  console.log(person.name); // 可以查看
}
```

### 7. Object.fromEntries()

- 把键值对列表转换为一个对象。与 Object.entries()相反

```
{
  console.log(Object.fromEntries(Object.entries({ name: '张三' }))); // {name: "张三"}
  console.log(Object.fromEntries(new Map([["name", "孙悟空"], ["age", "500"]]))); // {name: "孙悟空", age: "500"}
}
```

### 8. Object.getOwnPropertyDescriptor()

- 返回指定对象上一个自有属性对应的属性描述符

### 9. Object.getOwnPropertyDescriptors()

- 用来获取一个对象的所有自身属性的描述符

### 10. Object.getOwnPropertyNames()

- 返回一个由指定对象自身属性的属性名
- **包括不可枚举的属性！**

### 11. Object.getOwnPropertySymbols()

- 返回一个给定对象自身的所有 Symbol 属性的数组。

```
{
  const obj = {}
  const a = Symbol('a')
  const b = Symbol('b')
  obj[a] = 'this is a'
  obj[b] = 'this is b'
  console.log(obj);
  // 使用for in 循环遍历  结果： 遍历为空
  for (const key in obj) {
    console.log(`key: ${key}; value: ${obj[key]}`);
  }
  // 使用getOwnPropertySymbols 遍历
  Object.getOwnPropertySymbols(obj).forEach(key => {
    console.log(key, `value: ${obj[key]}`);
  })
}
```

### 12. Object.getPrototypeOf()

- 返回指定对象的原型（内部[[Prototype]]属性的值）。

```
{
  const parent = { name: 'parent' }
  const son = Object.create(parent)
  console.log(Object.getPrototypeOf(son) === parent); // true
  console.log(Object.getPrototypeOf(son) === son.__proto__); // true
  console.log(parent === son.__proto__); // true
}
```

### 13. Object.prototype.hasOwnProperty()

- 返回一个布尔值，指示对象自身属性中是否具有指定的属性

```
{
  // 1) 作用1：for...in循环的时候，用于区分是自己的属性还是父级属性
  const parent = { age: '20' }
  const son = Object.create(parent)
  son.name = 'zhangsan'
  for (const key in son) {
    if (Object.hasOwnProperty.call(son, key)) {
      console.log(key, son[key]);
    }
  }

  // 2) Object.prototype.hasOwnProperty() 也可以得到 不可枚举的属性
  const obj = { name: '孙悟空' }
  Object.defineProperty(obj, 'name', {
    enumerable: false
  })
  console.log(Object.hasOwnProperty.call(obj, 'name')); // true
}
```

### 14. Object.is(value1, value2)

- 判断两个值是否为同一个值。

### 15. Object.prototype.isPrototypeOf()

- 用于测试一个对象是否存在于另一个对象的原型链上。
- 参数传需要检测的对象

```
{
  const parent1 = { name: '孙悟空' }
  const parent2 = { name: '猪八戒' }
  const son = Object.create(parent1)
  console.log(parent1.isPrototypeOf(son)) // true
  console.log(Object.isPrototypeOf.call(parent1, son)) // true
  console.log(Object.isPrototypeOf.call(parent2, son)) // false
}
```

### 16. Object.keys()

- 返回一个由一个给定对象的自身可枚举属性组成的数组
- **遍历自己的可枚举的属性**

- `for...in...`会遍历原型对象的属性，`Object.keys`则不会

### 17. Object.setPrototypeOf(target, prototype)

- 设置 target 的原型对象为 prototype

### 18. Object.prototype.toString()

- 多用于判断对象类型，参见类型判断

### 19. Object.prototype.valueOf()

### 20. Object.prototype.values()

- 返回一个给定对象自身的所有可枚举属性值的数组

## Array

### 1. Array.prototype.concat(array|value...)

- 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
- 不会改变原数组
- 参数：array[] | value....多个
- 返回：添加元素后的新数组

### 2. Array.prototype.copyWithin(targetIndex, startIndex, endIndex)

- 从 startIndex 至 endIndex 复制元素到 targetIndex 处开始。
- 会改变原数组，不会改变长度
- 参数： targetIndex, startIndex, endIndex
- 返回：已经改变后的原数组

```
{
  const list = [1, 2, 3, 4, 5, 6]
  console.log(list.copyWithin())
  console.log(list.copyWithin(0, 2)) // [3, 4, 5, 6, 5, 6]
  // 需求：把前两个挪动到最后
  const list2 = list.copyWithin(list.length - 2, 0, 2) // [3, 4, 5, 6, 3, 4]
  console.log(`原数组`, list)
  console.log(`挪动后数组`, list2)
}
```

### 3. Array.prototype.entries()

- 将数组转化为 Array iterator
- 不会改变原数组

### 4. Array.prototype.every(v=>boolean)

- 判断数组中 **所有元素都满足** 条件
- 不会改变原数组
- 参数：Function v=>boolean
- 返回：boolean
- **_注意：被检测的是空数组则返回 true_**

### 5. Array.prototype.fill(value, startIndex, endIndex)

- 将 value 填充到数组 startIndex 至 endIndex 元素
- 会改变原数组
- 参数：value=undefined, startIndex=0, endIndex = length
- 返回：已被修改的原数组
- **_注意：参数为空，数组中所有元素被填充为了 undefined_**

### 6. Array.prototype.filter()

- 创建一个新数组, 其包含通过所提供函数实现的测试的所有元素
- 不会改变原数组
- 参数： function: v=>boolean
- 返回： 满足条件的数组元素 新数组

### 7. Array.prototype.find()

- 返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
- 不会改变原数组
- 参数： function: v=>boolean
- 返回：满足条件的第一个元素 | undefine

### 8. Array.prototype.findIndex()

- 返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。
- 不会改变原数组
- 参数：function: v=>boolean
- 返回：元素在数组中的索引 | -1

### 9. Array.prototype.flat()

- 数组扁平化，按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
- 不会改变原数组
- 参数： depth: number = 1 展开的层级，默认值为 1
- 返回：新数组
- [数组扁平化实现方法](https://juejin.cn/post/6844903805876699150)

1. 递归 + for + concat

```js
function flatten(list = []) {
  let result = []
  for (let i = 0; i < list.length; i++) {
    const item = list[i]
    if (Array.isArray(item)) {
      result = result.concat(flatten(item))
    } else {
      result.push(item)
    }
  }
  return result
}
```

2. 递归 + for + push

```js
function flatten(list = []) {
  let result = []
  for (let i = 0; i < list.length; i++) {
    const item = list[i]
    if (Array.isArray(item)) {
      result.push(...flatten(item))
    } else {
      result.push(item)
    }
  }
  return result
}
```

3. while 循环遍历

```js
function flatten(list = []) {
  while (list.some((v) => Array.isArray(v))) {
    list = [].concat(...list)
  }
  return list
}
```

4. 递归 + reduce

```js
function flatten(list = []) {
  return list.reduce((res, item) => {
    return res.concat(Array.isArray(item) ? flatten(item) : item)
  }, [])
}
```

5. 中间变量暂存

```js
function flatten(list = []) {
  const stack = [...list]
  const result = []
  while (stack.length) {
    const first = stack.shift()
    Array.isArray(first) ? stack.unshift(...first) : result.push(first)
  }
  return result
}
```

### 10. Array.prototype.flatMap()

- 首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 map 连着深度值为 1 的 flat 几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些。
- 不会改变原数组
-
- 参数：callback(function(current, index, array){}), thisArg
- 返回： 新数组

### 11. Array.prototype.forEach()

- 对数组的每个元素执行一次给定的函数。
- 不会改变原数组
-
- 参数：function(ele, index, array){}
- 返回：undefined
-
- 注意：forEach 不会跳出循环，如果需要跳出循环，可使用 every、some、find、findIndex

### 12. Array.from()

- 一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例
-
- 参数：类似数组|可迭代对象
- 返回：新数组对象

```js
{
  // 需求：获取html所有节点
  const elements = document.querySelectorAll('*')
  console.log(Array.isArray(elements)) // false 得到的并不是一个真的数组
  console.log(elements) //
  const elementsArray = Array.from(elements) // 将类数组转换为数组
  console.log(Array.isArray(elementsArray)) // true
  console.log(elementsArray)
}
```

### 13. Array.prototype.includes()

- 方法用来判断一个数组是否包含一个指定的值
- 不会改变原数组
-
- 参数：value
- 返回：boolean

### 14. Array.prototype.indexOf()

- 方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
- 不会改变原数组
-
- 参数：value, fromIndex = 0
- 返回：index | -1
-
- 注意：如果 fromIndex 是个负值，则 fromIndex = this.length + fromIndex

### 15. Array.isArray()

- 用于确定传递的值是否是一个 Array。
-
- 参数：value 需要检测的值
- 返回：boolean

### 16. Array.prototype.join()

- 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。
- 不会改变原数组
-
- 参数：(separator?=',')
- 返回：string

### 17. Array.prototype.keys()

- 返回一个包含数组中每个索引键的 Array Iterator 对象。
- 不会改变原数组
-
- 参数：无
- 返回：Array Iterator 对象

### 18. Array.prototype.values()

- 方法返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值
- 不会改变原数组
-
- 参数：无
- 返回：Array iterator 对象

### 19. Array.prototype.lastIndexOf()

- 从数组的后面向前查找，从 fromIndex 处开始。
- 不会改变原数组
-
- 参数：(value?, fromIndex?=this.length-1)
- 返回：1|-1
- 注意：如果 fromIndex > 0，则会从索引往前查找；如果 fromIndex < 0，fromIndex = this.length + fromIndex

### 20. Array.prototype.map()

- 方法创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。
- 不会改变原数组
-
- 参数：(function(v,index, array){})
- 返回：新生成的数组

### 21. Array.of()

- 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。
-
- 参数：(value...)
- 返回：数组实例

### 22. Array.prototype.pop()

- 数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。
- 会改变数组
-
- 参数：无
- 返回：被删除的元素

### 23. Array.prototype.push()

- 将一个或多个元素添加到数组的末尾，并返回该数组的新长度。
- 会改变数组
-
- 参数：(element....)
- 返回：数组最新长度

### 24. Array.prototype.reduce()

- 对数组中的每个元素执行一个由您提供的 reducer 函数(升序执行)，将其结果汇总为单个返回
- 不会改变原数组
-
- 参数：(callback(res, item, index, array), initialValue)
- 返回：新值 initialValue

### 25. Array.prototype.reverse()

- 颠倒数组
- 会改变原数组
-
- 参数：无
- 返回：调到后的新数组

### 26. Array.prototype.shift()

- 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。
- 会改变原数组
-
- 参数：无
- 返回：被删除的元素

### 27. Array.prototype.slice()

- 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括 end）。原始数组不会被改变。
- 不会改变原数组
-
- 参数：(begin 包含，end 不包含)
- 结果：新数组的拷贝
- 类似于 string.slice(start, end)

### 28. Array.prototype.some()

- 方法测试数组中是不是至少有 1 个元素通过了被提供的函数测试。
- 不会改变原数组
-
- 参数：callback((ele, index, array)=>{}): condition
- 返回：boolean
- 注意：空数组在任意情况下都返回 false

### 29. Array.prototype.sort()

- 数组排序
- 会改变原数组
-
- 参数：((v1,v2)={})
- 返回：排序后的原数组
- 注意：参数返回-1 升序；1 降序

### 30. Array.prototype.splice()

- 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。
- 会改变原数组
-
- 参数：(begin?=0, count?, values)
- 返回：被删除的元素数组

### 31. Array.prototype.toString()

- Array 对象覆盖了 Object 的 toString 方法。对于数组对象，toString 方法连接数组并返回一个字符串，其中包含用逗号分隔的每个数组元素。
- 不会改变原数组
-
- 参数：无
- 返回：字符串，用,分割

### 32. Array.prototype.unshift()

- 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度(该方法修改原有数组)。
- 会改变原数组
-
- 参数：value...
- 返回：number: 最新数组的长度

## Math

### 1. Math.abs(target)

- 返回 target 绝对值
- 参数：target: number

### 2. Math.ceil(target)

- 向上取整
- 参数：target: number

### 3. Math.floor(target)

- 向下取整
- 参数：target: number

### 4. Math.random()

- 返回一个浮点数，范围[0,1)

取[10, 20)之间的随机数

```js
function random(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}
```

取[10, 20]之间的随机数

```js
function random(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + 1) + min
}
```

### 5. Math.round(target)

- 返回一个四舍五入的整数

要求：保留小数点后 n 位

```js
function round(target, number) {
  return Math.round(`${target}e${number}`) / Math.pow(10, number)
}
```

### 6. Math.min()

- 函数返回一组数中的最小值。
- 参数：number...
- 返回值：最小值|NaN
- **_注意：无参数时，返回 Infinity_**

```js
{
  console.log(Math.min()) // Infinity
  console.log(Math.min(1)) // 1
  console.log(Math.min(1, 2)) // 1
  console.log(Math.min(undefined)) // NaN
  console.log(Math.min(true, false)) // 0
  console.log(Math.min(1, '123')) // 123
  console.log(Math.min(1, '123abc')) // NaN
  console.log(Math.min(...[1, 2, 3, 4, 5, 6])) // 1
}
```

### 7. Math.max()

- 函数返回一组数中的最大值。
- 参数：number...
- 返回值：最大值|NaN
- **_注意：无参数时，返回-Infinity_**

### 8. Math.PI

- 表示一个圆的周长与直径的比例，约为 3.14159

### 9. Math.pow(base: number, exponent:number)

- 函数返回基数（base）的指数（exponent）次幂，即 baseex^ponent。
- 参数：（base:number，exponent:number）
- 返回：number | NaN
- **_注意：参数如果没有或只有一个，则返回 NaN_**

## Function

### 1. Function.length

- 属性指明函数的形参个数。

### 2. Function.name

- 属性返回函数实例的名称。

### 3. Function.prototype.apply()

- 改变函数内部的 this 指向，并执行函数

### 4. Function.prototype.call()

### 5. Function.prototype.bind()

- 改变函数指向，不会自执行
-
- 参数：thisArg, param1,param2...
- 返回：改变 this 后的方法


## RegExp 正则表达式
参考：[《JS 正则迷你书》](https://github.com/qdlaoyao/js-regex-mini-book/blob/master/JavaScript%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E8%BF%B7%E4%BD%A0%E4%B9%A6%EF%BC%881.1%E7%89%88%EF%BC%89.pdf)


// TODO: map、set、weakmap、weakset