<!--
 * @Author       : HyFun
 * @Date         : 2021-09-09 13:49:06
 * @Description  : 
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-09 13:58:22
-->
<template>
  <div>
    <h4>我是子组件</h4>
    <p>该组件没有声明使用emits的事件，点击的时候会触发1次click方法</p>
    <input type="text" @change="onInputChange" />
    <br />
    <button @click="onClickBtn">点我</button>
  </div>
</template>
<script>
export default {
  // 主要用于声明组件的事件
  emits: ['change', 'click'],
  methods: {
    onInputChange(e) {
      this.$emit('change', e.target.value)
    },
    onClickBtn() {
      this.$emit('click')
    }
  }
}
</script>
