<!--
 * @Author       : heyongfeng
 * @Date         : 2021-04-24 23:45:57
 * @Description  : 多个根节点指定节点继承
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-04-24 23:47:16
-->
<template>
  <div>我是第一行</div>
  <div v-bind="$attrs">第二行</div>
  <div>我是第三行</div>
</template>
<script>
export default {
  inheritAttrs: false
}
</script>
