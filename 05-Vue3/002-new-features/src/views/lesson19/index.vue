<!--
 * @Author       : HyFun
 * @Date         : 2021-09-14 14:25:17
 * @Description  : 
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-14 14:32:51
-->
<template>
  <div>
    <h4>课时十九：监听数组</h4>
    <p>
      当侦听一个数组时，只有当数组被替换时才会触发回调。如果你需要在数组被改变时触发回调，必须指定
      deep 选项。
    </p>
    <button @click="list.push(list.length)">+</button>
    <p>{{ list }}</p>
    <h5>改变日志</h5>
    <ul>
      <li v-for="(item, index) in log" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Lesson19',
  data() {
    return {
      list: [],
      log: []
    }
  },
  watch: {
    list: {
      handler(n, o) {
        this.log.push(`更新了：新的值为${n}`)
      },
      deep: true
    }
  }
}
</script>
