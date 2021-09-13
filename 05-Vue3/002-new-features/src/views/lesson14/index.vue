<!--
 * @Author       : HyFun
 * @Date         : 2021-09-13 17:17:45
 * @Description  : 
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-13 17:32:02
-->
<template>
  <div>
    <h4>课时十四：Suspense组件</h4>
    <Suspense>
      <template #default>
        <AsyncComponent />
      </template>
      <template #fallback>
        <div>Loading</div>
      </template>
    </Suspense>
  </div>
</template>
<script>
import { defineAsyncComponent, h } from '@vue/runtime-core'

const AsyncComponent = {
  async setup(props) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(() => {
          return h('h4', {}, '我是异步组件内容')
        })
      }, 1000)
    })
  }
}
export default {
  name: 'Lesson14',
  components: {
    AsyncComponent
  }
}
</script>
