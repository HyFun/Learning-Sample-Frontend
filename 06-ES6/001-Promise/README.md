<!--
 * @Author       : HyFun
 * @Date         : 2021-03-31 12:51:35
 * @Description  : promise学习
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-03-31 14:20:54
-->

# Promise

![](https://upload-images.jianshu.io/upload_images/4179198-ee43488ad98d2b88.png?imageMogr2/auto-orient/strip|imageView2/2/w/500/format/webp)

## 什么是promise
所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。

## promise特点

1. 对象的状态不受外界影响。

    Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。

2. 一旦状态改变，就不会再变，任何时候都可以得到这个结果。

    Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。

## promise缺点

1. 无法取消Promise，一旦新建它就会立即执行，无法中途取消。
2. 如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。
3. 当处于pending状态时，无法得知目前进展到哪一个阶段。

