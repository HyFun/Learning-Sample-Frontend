<!--
 * @Author       : heyongfeng
 * @Date         : 2021-04-25 19:55:47
 * @Description  : 生命周期函数、动态组件、keep-alive
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-04-25 21:21:40
-->
<template>
  <div>
    <h3>1. 生命周期</h3>
    <button @click="show=!show">
      {{ show?'隐藏':'显示' }}组件
    </button>
    <Hello v-if="show" />
    <hr>
    <h3>2. 子组件生命周期</h3>
    <button @click="showFather=!showFather">显示/隐藏</button>
    <Father v-if="showFather" />
    <hr>
    <h3>3. keep-alive生命周期</h3>
    <button @click="showKeep=!showKeep">显示/隐藏</button>
    <keep-alive>
      <Hello v-if="showKeep" />
    </keep-alive>
  </div>
</template>
<script>
import Father from './Father.vue'
import Hello from './Hello'
export default {
  components: {
    Hello,
    Father
  },
  data() {
    return {
      show: false,
      showFather: false,
      showKeep: false
    }
  }
}
</script>
