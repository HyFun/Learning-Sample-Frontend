<!--
 * @Author       : HyFun
 * @Date         : 2021-09-08 18:07:42
 * @Description  : 
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-08 18:08:51
-->
<template>
  <h4>我是一个子组件</h4>
  <input v-bind="$attrs" />
</template>
<script>
export default {
    inheritAttrs: true
}
</script>
