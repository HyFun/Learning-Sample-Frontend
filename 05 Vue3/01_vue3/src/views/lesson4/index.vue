<!--
 * @Author       : heyongfeng
 * @Date         : 2021-04-24 22:57:48
 * @Description  : v-model、多个v-model
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-04-24 23:31:05
-->
<template>
  <div>
    <h3>1. 单个v-model:propName</h3>
    <Single v-model:name="userName" />
    <div>{{ userName }}</div>
    <hr>
    <h3>2. 多个v-model:propName</h3>
    <Multiple
      v-model:first="firstName"
      v-model:last="lastName"
    />
    <div>{{ firstName }} - {{ lastName }}</div>
    <p>替换了Vue2中.sync的方式</p>
    <hr>
    <h3>3. 原始v-model实现</h3>
    <p>prop使用modelValue实现</p>
    <Model v-model="userName" />
  </div>
</template>
<script>
import Single from './Single'
import Multiple from './Multiple'
import Model from './Model'
export default {
  components: {
    Single,
    Multiple,
    Model
  },
  data() {
    return {
      userName: '用户名',
      firstName: '孙',
      lastName: '悟空'
    }
  }
}
</script>

