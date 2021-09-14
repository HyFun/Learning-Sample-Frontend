<!--
 * @Author       : HyFun
 * @Date         : 2021-09-14 13:50:23
 * @Description  : 
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-14 14:23:22
-->
<template>
  <div>
    <h4>课时十八：组件生命周期回调</h4>
    <p>{{ list }}</p>
    <button @click="show = !show">toggle</button>
    <Child
      v-if="show"
      @vnode-before-create="onBeforeCreate"
      @vnode-created="onSubCreated"
      @vnode-before-mount="onSubBeforeMount"
      @vnode-mounted="onSubMounted"
      @vnode-before-update="onSubBeforeUpdate"
      @vnode-updated="onSubUpdated"
      @vnode-before-unmount="onSubBeforeUnmount"
      @vnode-unmounted="onSubUnmounted"
    />
  </div>
</template>
<script>
import { h, ref } from 'vue'

const Child = {
  setup() {
    const value = ref('hahha')
    return () => {
      return [
        h('hr'),
        h('h4', {}, '我是子组件'),
        h('p', {}, `message: ${value.value}`),
        h('input', {
          type: 'text',
          value: value.value,
          onInput(e) {
            value.value = e.target.value
          }
        })
      ]
    }
  }
}

export default {
  name: 'Lesson18',
  components: {
    Child
  },
  data() {
    return {
      list: [],
      show: true
    }
  },
  methods: {
    onBeforeCreate() {
      console.log('子组件', 'beforeCreate')
      this.list.push('beforeCreate')
    },
    onSubCreated() {
      console.log('子组件', 'created')
      this.list.push('created')
    },
    onSubBeforeMount() {
      console.log('子组件', 'beforeMount')
      this.list.push('beforeMount')
    },
    onSubMounted() {
      console.log('子组件', 'mounted')
      this.list.push('mounted')
    },
    onSubBeforeUpdate() {
      console.log('子组件', 'beforeUpdate')
      this.list.push('beforeUpdate')
    },
    onSubUpdated() {
      console.log('子组件', 'updated')
      this.list.push('updated')
    },
    onSubBeforeUnmount() {
      console.log('子组件', 'beforeUnmount')
      this.list.push('beforeUnmount')
    },
    onSubUnmounted() {
      console.log('子组件', 'unmounted')
      this.list.push('unmounted')
    }
  }
}
</script>
