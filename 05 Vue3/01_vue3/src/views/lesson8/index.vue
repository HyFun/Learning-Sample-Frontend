<!--
 * @Author       : heyongfeng
 * @Date         : 2021-04-30 12:26:02
 * @Description  : Composition API
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-05-16 19:53:01
-->
<template>
  <div>
    Composition API
    <h3>1. 定义响应式数据</h3>
    <h4>属性</h4>
    <input v-model="title" type="text">
    <p>{{ title }}</p>
    <button @click="getTitle">获取标题</button>
    <br>
    <input v-model="user.name" type="text">
    <p>{{ user.name }}</p>
    <p>{{ getName() }}</p>
    <h4>方法</h4>
  </div>
</template>
<script>
import { ref, reactive } from 'vue'
export default {
  name: 'Lesson8',
  setup() {
    /**
     * ref  reactive  定义响应式数据
     */
    // 属性
    const title = ref('我是一个标题')
    const user = reactive({ name: '刘德华' })
    // 方法
    const getTitle = () => {
      alert(title.value)
    }
    const getName = () => {
      return user.name
    }

    return {
      title,
      user,
      getTitle,
      getName
    }
  }
}
</script>
