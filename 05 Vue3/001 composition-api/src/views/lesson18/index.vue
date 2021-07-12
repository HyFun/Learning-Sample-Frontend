<!--
 * @Author       : heyongfeng
 * @Date         : 2021-06-25 23:32:28
 * @Description  : customRef使用
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-06-25 23:57:12
-->
<template>
  <div>
    <h3>customRef使用</h3>
    <h4>1. CustomRef实现防抖: 重复点击只执行最后一次</h4>
    <p>name: {{ name }}</p>
    <input v-model="name" type="text">
    <h4>2. CustomRef实现节流: 重复点击只执行第一次</h4>
    <p>age: {{ age }}</p>
    <button @click="age++">
      提交
    </button>
  </div>
</template>
<script lang="ts">
import { customRef, defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'custom-ref',
  setup() {
    function useDebounceRef<T>(value:T, delay = 200) {
      let timeId:number
      return customRef((track, trigger) => {
        return {
          get() {
            track()
            return value
          },
          set(newVal:T) {
            clearTimeout(timeId)
            timeId = setTimeout(() => {
              value = newVal
              trigger()
            }, delay)
          }
        }
      })
    }

    function useThrottleRef<T>(value:T, delay = 200) {
      let timeId:number|undefined
      return customRef((track, trigger) => {
        return {
          get() {
            track()
            return value
          },
          set(newVal:T) {
            if (timeId) {
              return
            }
            timeId = setTimeout(() => {
              value = newVal
              trigger()
              timeId = undefined
            }, delay)
          }
        }
      })
    }

    const name = useDebounceRef('0', 500)
    const age = useThrottleRef('1', 500)
    return { name, age }
  }
})
</script>
