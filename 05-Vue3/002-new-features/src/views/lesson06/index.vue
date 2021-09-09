<!--
 * @Author       : HyFun
 * @Date         : 2021-09-09 13:46:19
 * @Description  : 
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-09 13:59:33
-->
<template>
  <div>
    <h4>课时六：emits选项</h4>
    <h4>我是父组件</h4>
    <p>message: {{ message }}</p>
    <hr />
    <SubComponent @change="onSubChange" @click="onSubClick" />
    <hr />
    <SubComponent2 @change="onSubChange" @click="onSubClick" />
  </div>
</template>
<script>
import SubComponent from './SubComponent.vue'
import SubComponent2 from './SubComponent2.vue'
export default {
  name: 'Lesson06',
  components: {
    SubComponent,
    SubComponent2
  },
  data() {
    return {
      message: ''
    }
  },
  methods: {
    onSubChange(value) {
      this.message = value
    },
    onSubClick() {
      alert('点击了')
    }
  }
}
</script>
