<!--
 * @Author       : heyongfeng
 * @Date         : 2021-04-24 23:21:05
 * @Description  : 插槽
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-04-25 22:11:42
-->
<template>
  <h3>1. slot内容</h3>
  <SlotContent />
  <SlotContent class="light">取消</SlotContent>
  <SlotContent>确定</SlotContent>
  <SlotContent class="dark">提交</SlotContent>
  <p>非prop的attribute继承：在组件上写非props属性，会继承到组件中的根元素中。如果是多个根节点，需要指定哪个根节点需要继承</p>
  <hr>
  <h3>2. 自定义attr继承</h3>
  <ComponentAttr type="password" />
  <p>默认会由根便签继承</p>
  <hr>
  <h3>3. 多个根节点指定继承</h3>
  <ComponentAttrMultiple style="color: red;" />
  <hr>
  <h3>4. 具名插槽</h3>
  <Layout>
    <template #footer>
      <div>
        我是自定义尾部
      </div>
    </template>
    <template #default>
      <div>
        我是自定的内容，会存放在默认的插槽中
      </div>
    </template>
    <template #header>
      <div>
        我是自定义头部
      </div>
    </template>
  </Layout>
  <hr>
  <h3>5. 作用域插槽</h3>
  <LayoutScope>
    <template #default="row">
      <div>
        {{ row.person.name }} - {{ row.person.age }}
      </div>
    </template>
    <!-- 解构插槽 -->
    <template #item="{item,index}">
      <span>{{ item }} - {{ index }}</span>
    </template>
  </LayoutScope>
</template>
<script>
import SlotContent from './SlotContent'
import ComponentAttr from './ComponentAttr'
import ComponentAttrMultiple from './ComponentAttrMultiple'
import Layout from './Layout'
import LayoutScope from './LayoutScope'
export default {
  components: {
    SlotContent,
    ComponentAttr,
    ComponentAttrMultiple,
    Layout,
    LayoutScope
  }
}
</script>

