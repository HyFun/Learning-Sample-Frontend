<!--
 * @Author       : heyongfeng
 * @Date         : 2021-04-25 20:31:51
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-04-25 20:35:35
-->
<template>
  <div>
    <h3>{{ msg }}</h3>
    <button @click="msg='我是改变后的msg'">点击改变</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 'Hello'
    }
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  activated() {
    console.log('activated')
  },
  deactivated() {
    console.log('deactivated')
  },
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  unmounted() {
    console.log('unmounted')
  }
}
</script>
