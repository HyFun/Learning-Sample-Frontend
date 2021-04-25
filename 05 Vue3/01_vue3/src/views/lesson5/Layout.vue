<!--
 * @Author       : heyongfeng
 * @Date         : 2021-04-25 21:39:44
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-04-25 21:42:01
-->
<template>
  <header>
    <slot name="header">我是头部</slot>
  </header>
  <main>
    <slot>我是身体</slot>
  </main>
  <footer>
    <slot name="footer">我是尾部</slot>
  </footer>
</template>
