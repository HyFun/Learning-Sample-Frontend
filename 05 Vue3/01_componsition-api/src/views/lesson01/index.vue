<!--
 * @Author       : heyongfeng
 * @Date         : 2021-06-01 13:18:52
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-06-01 14:50:13
-->
<template>
  <div>
    <h3>课时一</h3>
    <h4>1. ref</h4>
    <p>信息：{{ msg }}</p>
    <button @click="change">
      改变msg
    </button>
    <hr>
    <h4>2. v-model</h4>
    <p>没有使用响应式: {{ msg2 }}</p>
    <input v-model="msg2" type="text">
    <p>使用了响应式: {{ msg }}</p>
    <input v-model="msg" type="text">
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'lesson01',
  setup(props) {
    // 1. ref 作用 是将一个基本数据类型的值 变成一个响应式数据
    const msg = ref('hello vue3')
    const change = () => {
      // 需要注意的是：ref声明的msg是一个 响应式对象，如果需要改变的他的值，则需要改变他的 value
      console.log(msg)
      msg.value = '我是改变后的msg'
    }

    // 如果需要在模板中使用到 属性、方法、计算属性等，则需要将此变量在setup函数中return出去
    return {
      msg,
      msg2: '我是msg2',
      change
    }
  }
})
</script>
