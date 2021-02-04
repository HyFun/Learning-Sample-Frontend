<!--
 * @Author       : HyFun
 * @Date         : 2021-02-03 16:03:39
 * @Description  : 源码总结
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-02-04 14:19:35
-->

## 源码知识点

### 1. 函数缓存
它将每次执行函数后的值进行缓存，当再次执行的时候直接调用缓存的数据而不是重复执行函数，以此提高前端性能，这是典型的用空间换时间的优化，也是经典的偏函数应用。
```js
function cached(fn) {
    // 创建一个对象，key为函数的参数，value为函数值
    const cache = Object.create(null)
    return function(str) {
        const hit = cache[str]
        return hit || (cache[str] = fn(str))
    }
}
```


### 2. 当前环境是否支持原型
```js
const hasProto = '__proto__' in {}
```

### 3. 当前环境是否支持Symbol
```js
const hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys)
```

### 4. 为什么Vue组件的data是一个函数，而不是一个对象呢？

组件设计的目的是为了复用，每次通过函数创建相当于在一个独立的内存空间中生成一个data的副本，这样每个组件之间的数据不会互相影响。

