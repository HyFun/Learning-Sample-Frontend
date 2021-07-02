<!--
 * @Author       : heyongfeng
 * @Date         : 2021-07-03 01:53:06
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-07-03 02:02:46
-->
<template>
  <div>
    <h3>我是一个Promise异步组件</h3>
    <p>{{ msg }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
export default defineComponent({
  name: 'async-await',
  async setup(props) {
    const res = await new Promise(resolve => {
      setTimeout(() => {
        resolve({
          msg: '我是异步加载后的内容'
        })
      }, 2000)
    })
    return res
  }
})
</script>
