<!--
 * @Author       : heyongfeng
 * @Date         : 2021-06-01 17:21:14
 * @Description  : 单个v-model  多个 v-model 实现
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-06-01 17:55:16
-->
<template>
  <div>
    <h3>单个v-model 和 多个 v-model 实现</h3>
    <hr>
    <h4>1. 单个v-model</h4>
    <p>父组件：{{ singleValue }}</p>
    <model-single v-model="singleValue" />
    <hr>
    <h4>2. 多个v-model</h4>
    <p>{{ multiple }}</p>
    <model-multiple
      v-model:name="multiple.name"
      v-model:age="multiple.age"
    />
  </div>
</template>
<script lang="ts">
import { ref, defineComponent, reactive } from 'vue'
// 组件
import ModelSingle from './model-single.vue'
import ModelMultiple from './model-multiple.vue'

export default defineComponent({
  name: 'lesson05',
  components: {
    ModelSingle,
    ModelMultiple
  },
  setup(props) {
    const singleValue = ref('我是singleValue')
    const multiple = reactive({
      name: '张三',
      age: 18
    })
    return {
      singleValue,
      multiple
    }
  }
})
</script>
