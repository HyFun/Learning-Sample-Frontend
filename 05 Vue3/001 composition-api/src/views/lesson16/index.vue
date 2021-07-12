<!--
 * @Author       : heyongfeng
 * @Date         : 2021-06-25 22:59:20
 * @Description  : toRow和markRow
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-06-25 23:08:36
-->
<template>
  <div>
    <h3>toRow和markRow</h3>
    <h4>1. toRow 将响应式的数据变成非相应的</h4>
    <p>user: {{ user }}</p>
    <input v-model="user.name" type="text">
    <button v-if="!toRowed" @click="clickToRow">
      toRow
    </button>
    <h4>2. markRow 标记某个数据的属性为非响应式</h4>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRaw } from '@vue/runtime-core'

export default defineComponent({
  name: 'to-row',
  setup(prop) {
    const toRowed = ref(false)
    const user = reactive({
      name: '张三'
    })
    const clickToRow = () => {
      const user2 = toRaw(user)
      toRowed.value = true
      user2.name += '==='
    }

    return {
      toRowed,
      user,
      clickToRow
    }
  }
})
</script>
