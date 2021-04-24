<!--
 * @Author       : heyongfeng
 * @Date         : 2021-04-24 22:59:13
 * @Description  : 单个v-model
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-04-24 23:03:01
-->
<template>
  <input type="text" :value="name" @input="$emit('update:name',$event.target.value)">
</template>
<script>
export default {
  props: ['name']
}
</script>
