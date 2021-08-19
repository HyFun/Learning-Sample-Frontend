<!--
 * @Author       : HyFun
 * @Date         : 2021-07-12 16:06:07
 * @Description  : 笔记
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-08-19 15:53:17
-->

# Vue2.0 笔记

## Vue2 响应式原理

主要通过 Object.defineProperty()函数对数据进行劫持，结合发布订阅模式，编译模板的时候对引用到的数据进行**依赖收集**，当数据发生改变，对依赖该数据的订阅者们进行**派发更新**。

## Vue2 源码解析

- [vue2.x-typescript 分支](https://github.com/pikax/vue/tree/move_to_typescript)
- [vue2.x 《深入剖析 Vue 源码》](https://book.penblog.cn/)
