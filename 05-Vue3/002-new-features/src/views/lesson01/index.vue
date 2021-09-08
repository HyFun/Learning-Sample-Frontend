<!--
 * @Author       : HyFun
 * @Date         : 2021-09-08 17:12:53
 * @Description  : 
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-08 17:29:21
-->
<template>
  <div>
    <h3>课时一</h3>
    <ul>
      <!-- 可以通过使用方法进行接收el -->
      <li v-for="item in list" :key="item" :ref="onListmounted">{{ item }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Lesson1',
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6],
      refList: []
    }
  },
  methods: {
    onListmounted(el) {
      this.refList.push(el)
      console.log(el);
    }
  }
}
</script>
