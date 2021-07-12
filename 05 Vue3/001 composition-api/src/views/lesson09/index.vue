<!--
 * @Author       : heyongfeng
 * @Date         : 2021-06-12 23:55:24
 * @Description  : computed和watch
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-06-14 11:06:22
-->
<template>
  <div>
    <h2>computed和watch</h2>
    <h3>1. computed</h3>
    <p>fullName: {{ fullName }}</p>
    <p>firstName: <input v-model="firstName" type="text"> ---- lastName: <input v-model="lastName" type="text"></p>
    <p>fullName2: <input v-model="fullName2" type="text"></p>
    <h3>2. watch</h3>
    <p>watchValue: {{ watchValue }}</p>
    <h3>3. watchEffectValue</h3>
    <p>watchEffectValue: {{ watchEffectValue }}</p>
    <h3>4. watchEffect实现防抖</h3>
    <p>count: {{ count }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref, watch, watchEffect } from 'vue'
export default defineComponent({
  name: 'computed',
  setup(props) {
    const firstName = ref<string>('张')
    const lastName = ref<string>('三')

    // 1. computed 参数是一个方法
    const fullName = computed<string>(():string => {
      return firstName.value + '-' + lastName.value
    })
    // // 1. computed 参数是一个对象
    const fullName2 = computed({
      get():string {
        return fullName.value
      },
      set(val:string) {
        const names = val.split('-')
        firstName.value = names[0]
        lastName.value = names[1]
      }
    })

    // 2. watch
    const watchValue = ref<string>('')
    watch(fullName, (val:string) => {
      watchValue.value = val
    }, { immediate: true })

    // 3. watchEffect
    const watchEffectValue = ref<string>('')
    watchEffect(() => {
      // console.log(`watchEffect执行了`, fullName2.value)
      watchEffectValue.value = fullName2.value
    })

    // 4. watchEffect的onInvalidate实现防抖
    const count = ref(0)
    // 触发时机：fullName2发生改变
    watchEffect((onInvalidate) => {
      console.log(`watchEffect执行了`, fullName2.value)
      const timeout = setTimeout(() => {
        count.value++
      }, 1000)
      onInvalidate(() => {
        clearTimeout(timeout)
      })
    })

    return {
      firstName,
      lastName,
      fullName,
      fullName2,
      watchValue,
      watchEffectValue,
      count
    }
  }
})
</script>
