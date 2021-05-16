<!--
 * @Author       : heyongfeng
 * @Date         : 2021-05-04 01:06:57
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-05-04 01:13:44
-->
<template>
  <div>
    <h3>我是子组件</h3>
    <input v-model="a.name" type="text">
    <br>
    {{ a.name }}
  </div>
</template>
<script>
export default {
  name: 'Sub',
  inject: ['a']
}
</script>
