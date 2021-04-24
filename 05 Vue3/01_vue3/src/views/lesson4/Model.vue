<!--
 * @Author       : heyongfeng
 * @Date         : 2021-04-24 23:15:00
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-04-24 23:18:41
-->
<template>
  <input type="text" :value="modelValue" @input="(e)=>{$emit('update:modelValue',e.target.value)}">
</template>
<script>
export default {
  props: ['modelValue']
}
</script>
