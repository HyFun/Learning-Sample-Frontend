<!--
 * @Author       : HyFun
 * @Date         : 2021-09-08 18:13:03
 * @Description  : 
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-08 18:51:12
-->
<template>
  <div>
    <h4>课时四：自定义指令 钩子函数</h4>
    <input type="text" v-permission v-if="show" />
    <br>
    <button @click="show = !show">
      {{ show ? '隐藏' : '显示' }}
    </button>
  </div>
</template>
<script>
export default {
  name: 'Lesson04',
  directives: {
    permission: {
      created(el, binding, vnode, prevVnode) {
        console.log(el, binding, vnode, prevVnode)
      },
      beforeMount(el, binding, vnode, prevVnode) {},
      mounted(el, binding, vnode, prevVnode) {},
      beforeUpdate(el, binding, vnode, prevVnode) {},
      updated(el, binding, vnode, prevVnode) {},
      beforeUnmount(el, binding, vnode, prevVnode) {},
      unmounted(el, binding, vnode, prevVnode) {}
    }
  },
  data() {
    return {
      show: true
    }
  }
}
</script>
