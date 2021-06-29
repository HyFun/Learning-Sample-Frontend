<!--
 * @Author       : heyongfeng
 * @Date         : 2021-06-24 23:50:37
 * @Description  : readyonly和shallowReadyonly
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-06-24 23:59:48
-->
<template>
  <div>
    <h3>readyonly和shallowReadyonly</h3>
    <p>person: {{ person }}</p>
    <p>person2: {{ person2 }}</p>
    <button @click="update">
      更新数据
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, readonly, shallowReadonly } from 'vue'

export default defineComponent({
  name: 'readonly',
  setup(prop) {
    const person = readonly(reactive({
      name: '张三',
      age: 18,
      wife: {
        name: '小红'
      }
    }))

    const person2 = shallowReadonly(reactive({
      name: '张三',
      age: 18,
      wife: {
        name: '小红'
      }
    }))

    const update = () => {
      // 1. readonly修饰的数据是深度的只读  数据内部的属性都不能修改
      // person.name = '1111'
      // person.wife.name = '222'

      // 2. shallowReadonly 所修饰的数据  只有一层只读，对象|数组内部是可以被修改的
      //   person2.name = '111' // 不能被修改
      person2.wife.name += '===' // 深度的数据是可以被修改的
    }

    return {
      person,
      person2,
      update
    }
  }
})
</script>
