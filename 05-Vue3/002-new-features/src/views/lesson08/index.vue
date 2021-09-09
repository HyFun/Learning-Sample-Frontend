<!--
 * @Author       : HyFun
 * @Date         : 2021-09-09 18:24:39
 * @Description  : 
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-09 18:31:50
-->
<template>
  <h4>课时八：多个根节点</h4>
  <p>
    在 3.x 中，组件可以包含多个根节点！但是，这要求开发者显式定义 attribute
    应该分布在哪里。
  </p>
  <div class="code">
    {{`
    <!-- Layout.vue -->
    <template>
      <header>...</header>
      <main v-bind="$attrs">...</main>
      <footer>...</footer>
    </template>
    `}}
  </div>
  <input type="text" />
</template>
<style lang="scss" scoped>
.code {
  white-space: pre-wrap;
  background-color: #f5f5f5;
  padding: 10px 0;
}
</style>
