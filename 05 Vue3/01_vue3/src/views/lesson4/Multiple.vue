<!--
 * @Author       : heyongfeng
 * @Date         : 2021-04-24 23:09:49
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-04-24 23:36:38
-->
<template>
  <input type="text" :value="first" @input="$emit('update:first',$event.target.value)">
  -
  <input type="text" :value="last" @input="$emit('update:last',$event.target.value)">
</template>
<script>
export default {
  props: ['first', 'last']
}
</script>
