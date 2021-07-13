<!--
 * @Author       : heyongfeng
 * @Date         : 2021-06-15 21:38:05
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-06-15 21:51:20
-->
<template>
  <div>
    <h3>子级组件</h3>
    <p>{{ message }}</p>
    <button @click="change">
      改变
    </button>
  </div>
</template>
<script>
import { ref } from '@vue/reactivity'
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated } from '@vue/runtime-core'
export default {
  name: 'child',
  setup(props) {
    const message = ref('子组件message')
    console.log('setup::::')
    onBeforeMount(() => {
      console.log('setup::::onBeforeMount')
    })
    onMounted(() => {
      console.log('setup::::onMounted')
    })
    onBeforeUpdate(() => {
      console.log('setup::::onBeforeUpdate')
    })
    onUpdated(() => {
      console.log('setup::::onUpdated')
    })
    onBeforeUnmount(() => {
      console.log('setup::::onBeforeUnmount')
    })
    onUnmounted(() => {
      console.log('setup::::onUnmounted')
    })
    return {
      message,
      change: () => {
        message.value = '改变后的message'
      }
    }
  },
  beforeCreate() {
    console.log('子级::::beforeCreate')
  },
  created() {
    console.log('子级::::created')
  },
  beforeMount() {
    console.log('子级::::beforeMount')
  },
  mounted() {
    console.log('子级::::mounted')
  },
  beforeUpdate() {
    console.log('子级::::beforeUpdate')
  },
  updated() {
    console.log('子级::::updated')
  },
  beforeUnmount() {
    console.log('子级::::beforeUnmount')
  },
  unmounted() {
    console.log('子级::::unmounted')
  }
}
</script>
