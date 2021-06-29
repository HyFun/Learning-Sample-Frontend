<!--
 * @Author       : heyongfeng
 * @Date         : 2021-06-28 23:14:21
 * @Description  : 手写实现reactive和shallowReactive
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-06-28 23:36:01
-->
<template>
  <div>
    <h3>手写实现reactive和shallowReactive</h3>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

import { shallowReactive } from './reactive'
export default defineComponent({
  name: 'reactive',
  setup(prop) {
    // const person1 = reactive({
    //   name: '张三1',
    //   age: 20,
    //   wife: {
    //     name: '小红1'
    //   }
    // })
    // person1.name
    // person1.wife.name

    const person2 = shallowReactive({
      name: '张三2',
      age: 20,
      wife: {
        name: '小红2'
      }
    })
    person2.name
    person2.wife.name // 没有wife.name的获取监听
  }
})
</script>
