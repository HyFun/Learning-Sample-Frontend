<!--
 * @Author       : HyFun
 * @Date         : 2021-09-14 10:30:17
 * @Description  : 
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-14 13:47:34
-->
<template>
  <div>
    <h4>课时十七：v-bind 合并行为</h4>
    <p v-bind="{ title: title }" title="鼠标悬浮展示title">鼠标悬浮展示title</p>
    <p title="鼠标悬浮展示title" v-bind="{ title: title }">鼠标悬浮展示title</p>
  </div>
</template>
<script>
export default {
  name: 'Lesson17',
  data() {
    return {
      title: '我是data中自定义的title'
    }
  }
}
</script>
