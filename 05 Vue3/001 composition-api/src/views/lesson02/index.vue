<!--
 * @Author       : heyongfeng
 * @Date         : 2021-06-01 15:13:43
 * @Description  : vue3 refs
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-06-01 15:44:00
-->
<template>
  <h3>toRefs</h3>
  <h4>1. 普通对象</h4>
  <p>name: {{ user.name.value }}</p>
  <input v-model="user.name.value" type="text">
  <p>age: {{ user.age.value }}</p>
  <input v-model="user.age.value" type="text">
  <hr>
  <h4>2. 响应式对象</h4>
  <p>name: {{ user2.name.value }}</p>
  <input v-model="user2.name.value" type="text">
  <p>age: {{ user2.age.value }}</p>
  <input v-model="user2.age.value" type="text">

  <hr>

  <h4>3. 结构响应式对象</h4>
  <p>name: {{ name }}</p>
  <input v-model="name" type="text">
  <p>age: {{ age }}</p>
  <input v-model="age" type="text">
  <p>可以看到，user3是一个响应式对象，但是经过解构后，就失去了其响应式的功能</p>

  <h4>4. 使用toRefs进行解构响应式对象</h4>
  <p>name: {{ name2 }}</p>
  <input v-model="name2" type="text">
  <p>name: {{ age2 }}</p>
  <input v-model="age2" type="text">

</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  name: 'lesson02',
  setup(props) {
    /**
     * toRefs()
     *  参数接收一个对象，其作用是 将一个响应式的对象进行结构
     *  因为 js 对象解构会使响应式对象失效
     */
    // 1. 如果传入的是一个 属性   报错：因为参数只接收对象
    // const name = toRefs('123')

    // 2. 如果传入的是一个 普通对象，则不会使对象变成响应式
    const user = toRefs({
      name: '张三',
      age: 18
    })

    // 2, 如果传入的是一个 响应式对象
    const user2 = reactive({
      name: '李四',
      age: 19
    })
    const user2Refs = toRefs(user2)

    // 3. 如果直接结构响应式对象  则会失去响应式
    const user3 = reactive({
      name: '王五',
      age: 20
    })

    // 4. 使用toRef结构 响应式 对象
    const user4 = reactive({
      name2: '孙悟空',
      age2: 500
    })
    
    return {
      user,
      user2: user2Refs,
      ...user3,
      ...toRefs(user4)
    }
  }
})
</script>
