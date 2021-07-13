/*
 * @Author       : heyongfeng
 * @Date         : 2021-06-15 22:12:10
 * @Description  : 
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-06-15 22:15:09
 */
import { ref, onMounted, onBeforeUnmount } from 'vue'
export default function catchClick() {
  const x = ref(-1)
  const y = ref(-1)
  const eventHnadler = (event:MouseEvent) => {
    x.value = event.pageX
    y.value = event.pageY
  }
  onMounted(() => {
    window.addEventListener('click', eventHnadler)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('click', eventHnadler)
  })
  return {
    x, y
  }
}
