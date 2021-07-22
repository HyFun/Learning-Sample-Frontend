<!--
 * @Author       : HyFun
 * @Date         : 2021-07-13 22:29:13
 * @Description  : JavaScript
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-07-22 19:10:12
-->

## 事件循环

![](https://mmbiz.qpic.cn/sz_mmbiz_png/H8M5QJDxMHrfCCOLsbRHeq3YC4diaTTjo7Lf3Ny0Bc1gxItrquwY39sUVYYII6sxNGibG2jyhxvHwbcxKjujZMsQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

- [面试题：说说事件循环机制(满分答案来了)](https://juejin.cn/post/6844904079353708557)
- [这一次，彻底弄懂 JavaScript 执行机制](https://juejin.cn/post/6844903512845860872)
- [图解 JavaScript 事件循环：微任务和宏任务](https://mp.weixin.qq.com/s/DdFH5Q_Hk92pABKllP1dTA)
- [带你彻底弄懂 Event Loop](https://segmentfault.com/a/1190000016278115)

### 宏任务: macro-task

- script(整体代码)
- setTimeout
- setInterval
- setImmediate
- I/O
- UI render
- requestAnimationFrame

### 微任务: micro-task

- process.nextTick
- Promise
- Async/Await
- MutationObserver (html5)

async/await 注意事项

1. 如果 await 后面直接跟的为一个变量，比如：`await 1;`或者`await undefined;`这种情况的话相当于直接把 await 后面的代码注册为一个微任务，可以简单理解为 promise.then(await 下面的代码)。

2. 如果 await 后面跟的是一个异步函数的调用，此时执行完 awit 并不先把 await 后面的代码注册到微任务队列中去，而是执行完 await 之后，直接跳出 async1 函数，执行其他代码。

## 跨域解决方案

- [九种跨域方式实现原理（完整版）](https://juejin.cn/post/6844903767226351623)
- [前端常见跨域解决方案（全） - 个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000011145364?utm_medium=referral&utm_source=tuicool)
