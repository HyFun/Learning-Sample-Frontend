<!--
 * @Author       : heyongfeng
 * @Date         : 2021-04-21 22:14:36
 * @Description  : 绑定数据 绑定html
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-04-21 22:56:00
-->
<template>
  <h3>1. 绑定数据</h3>
  <div>{{ msg }}</div>

  <h3>2. 绑定html</h3>
  <div v-html="html" />

  <h3>3. 绑定属性</h3>
  <div :[myProp]="'我是自定义的属性哦'">绑定属性</div>
  <h3>4. 循环遍历数组</h3>
  <span v-for="(item, index) in list" :key="index">{{ item }}</span>

  <h3>5. 循环遍历对象</h3>
  <ul>
    <li v-for="(value, key, index) in person" :key="index">
      {{ index }} - {{ key }} - {{ value }}
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      msg: 'Hello Vue3!',
      html: "<span style='color:red'>我是html哦</span>",
      myProp: 'title',
      list: [1, 2, 3, 4, 5],
      person: {
        name: '孙悟空',
        age: 18
      }
    }
  }
}
</script>
