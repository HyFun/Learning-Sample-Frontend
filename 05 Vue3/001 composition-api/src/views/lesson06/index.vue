<!--
 * @Author       : heyongfeng
 * @Date         : 2021-06-01 21:38:28
 * @Description  : provide 和 inject
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-06-01 22:08:18
-->
<template>
  <div>
    <h3>provide 和 inject</h3>
    <p>
      在vue2中，通过provide出去的数据不是响应式数据，即使暴露出去的数据是在data中定义的响应式数据。vue3中，通过provide提供出去的
      数据，如果原本就是一个响应式的数据，那么在其他组件中对其进行修改，那么其本身的值也会发生改变，其他引用的地方也会响应式的变化
    </p>
    <h3>父组件</h3>
    <p>provide-name: {{ name }}</p>
    <p>provide-object: {{ person }}</p>
    <p>provide-readonly: {{ height }}</p>
    <hr>
    <h3>1. 子组件动态修改父组件的provider</h3>
    <inject-component />
    <hr>
    <h3>2. readonly修饰的provide变量不能响应式修改</h3>
    <inject-readonly-component />
    <hr>
    <h3>3. readonly修饰的数据，对外提供方法对其进行修改</h3>
    <inject-readonly-change-component />
  </div>
</template>
<script lang="ts">
import { defineComponent, provide, ref, reactive, readonly } from 'vue'
// 组件
import InjectComponent from './inject.vue'
import InjectReadonlyComponent from './inject-readonly.vue'
import InjectReadonlyChangeComponent from './inject-readonly-change.vue'
export default defineComponent({
  name: 'provide-sample',
  components: {
    InjectComponent,
    InjectReadonlyComponent,
    InjectReadonlyChangeComponent
  },
  setup(props) {
    const name = ref('我是父组件provide的数据')
    const person = reactive({
      name: '张三',
      age: 18
    })
    const height = ref('178')
    /** */
    provide('name', name)
    provide('user', person)
    provide('height', readonly(height))

    const updateHeight = (value:string) => {
      height.value = value
    }
    // 对外提供方法更新readonly的数据
    provide('change-height', updateHeight)
    return {
      name,
      person,
      height
    }
  }
})
</script>
