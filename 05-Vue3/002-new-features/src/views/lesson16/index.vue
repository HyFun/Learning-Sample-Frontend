<!--
 * @Author       : HyFun
 * @Date         : 2021-09-14 10:19:09
 * @Description  : 
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-14 10:26:36
-->
<template>
  <div>
    <h4>课时十六：v-if 与 v-for 的优先级对比</h4>
    <p>3.x 版本中 v-if 总是优先于 v-for 生效。</p>
    <ul>
      <li v-for="item in list" :key="item" v-if="item % 2 === 0">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Lesson16',
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8]
    }
  }
}
</script>
