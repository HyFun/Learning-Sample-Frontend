<!--
 * @Author       : heyongfeng
 * @Date         : 2021-06-12 23:39:48
 * @Description  : ref和reactive
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-06-12 23:54:21
-->
<template>
  <div>
    <h2>ref和reactive</h2>
    <h3>1. ref数据</h3>
    <p>{{ name }}</p>
    <input v-model="name" type="text">
    <h3>2. ref对象</h3>
    <p>{{ person }}</p>
    <p>name: <input v-model="person.name" type="text"></p>
    <p>wife: <input v-model="person.wife.name" type="text"></p>
    <p class="des">
      ref声明对象，会在内部当做reactive进行处理。可以看到，使用ref声明的对象和reactive声明的效果一样。都是响应式的，在修改对象时
      直接使用 obj.key，而不是obj.value.key
    </p>
    <h3>3. reactive声明基本类型</h3>
    <p>age: {{ age }}</p>
    <p>age: <input v-model="age" type="text"></p>
    <p class="des">
      反之，如果使用reactive声明基本类型的变量，则会提示 value cannot be made reactive: xxx，
      <br>
      并且声明的变量也不是响应式的
    </p>
  </div>
</template>
<script>
import { ref, reactive } from '@vue/reactivity'
export default {
  name: 'ref2-reactive',
  setup(props, { emit }) {
    const name = ref('我是name')
    const person = ref({
      name: '小明',
      wife: {
        name: '小红'
      }
    })
    
    const age = reactive('1')
    return {
      name,
      person,
      age
    }
  }
}
</script>
<style lang="scss" scoped>
.des {
    color: #737373;
}
</style>
