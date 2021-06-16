<!--
 * @Author       : heyongfeng
 * @Date         : 2021-06-16 23:04:36
 * @Description  : ref
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-06-16 23:06:53
-->
<template>
  <div>
    <h3>自动获取焦点</h3>
    <input ref="inputRef" type="text">
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  setup() {
    const inputRef = ref<HTMLInputElement|null>(null)
    onMounted(() => {
      inputRef.value && inputRef.value.focus()
    })
    return {
      inputRef
    }
  }
})
</script>
