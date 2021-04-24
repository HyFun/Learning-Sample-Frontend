<!--
 * @Author       : heyongfeng
 * @Date         : 2021-04-24 23:41:16
 * @Description  : attribute继承
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-04-24 23:43:39
-->
<template>
  <div>
    <input v-bind="$attrs">
  </div>
</template>
<script>
export default {
  inheritAttrs: false
}
</script>
