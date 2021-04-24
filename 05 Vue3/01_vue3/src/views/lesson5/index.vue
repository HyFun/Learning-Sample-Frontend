<!--
 * @Author       : heyongfeng
 * @Date         : 2021-04-24 23:21:05
 * @Description  : 插槽
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-04-24 23:47:47
-->
<template>
  <h3>slot内容</h3>
  <SlotContent />
  <SlotContent class="light">取消</SlotContent>
  <SlotContent>确定</SlotContent>
  <SlotContent class="dark">提交</SlotContent>
  <p>非prop的attribute继承：在组件上写非props属性，会继承到组件中的根元素中。如果是多个根节点，需要指定哪个根节点需要继承</p>
  <hr>
  <h3>自定义attr继承</h3>
  <ComponentAttr type="password" />
  <p>默认会由根便签继承</p>
  <hr>
  <h3>3. 多个根节点指定继承</h3>
  <ComponentAttrMultiple style="color: red;" />
</template>
<script>
import SlotContent from './SlotContent'
import ComponentAttr from './ComponentAttr'
import ComponentAttrMultiple from './ComponentAttrMultiple'
export default {
  components: {
    SlotContent,
    ComponentAttr,
    ComponentAttrMultiple
  }
}
</script>

