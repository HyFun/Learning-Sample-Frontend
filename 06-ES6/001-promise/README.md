<!--
 * @Author       : HyFun
 * @Date         : 2021-03-31 12:51:35
 * @Description  : promise学习
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-07-15 18:53:47
-->

# Promise

![](https://upload-images.jianshu.io/upload_images/4179198-ee43488ad98d2b88.png?imageMogr2/auto-orient/strip|imageView2/2/w/500/format/webp)

## 什么是 promise

所谓 Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的结果。

## promise 特点

1. 对象的状态不受外界影响。

   Promise 对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和 rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。

2. 一旦状态改变，就不会再变，任何时候都可以得到这个结果。

   Promise 对象的状态改变，只有两种可能：从 pending 变为 fulfilled 和从 pending 变为 rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。

## promise 缺点

1. 无法取消 Promise，一旦新建它就会立即执行，无法中途取消。
2. 如果不设置回调函数，Promise 内部抛出的错误，不会反应到外部。
3. 当处于 pending 状态时，无法得知目前进展到哪一个阶段。

## 手写 Promise

[手写 Promise 并测试](https://juejin.cn/post/6945319439772434469)

很多手写版本都是使用 setTimeout 去做异步处理，但是 setTimeout 属于宏任务，这与 Promise 是个微任务相矛盾，所以我打算选择一种创建微任务的方式去实现我们的手写代码。

- process.nextTick（node 端）
- MutationObserver（浏览器端）
- queueMicrotask（兼容）
