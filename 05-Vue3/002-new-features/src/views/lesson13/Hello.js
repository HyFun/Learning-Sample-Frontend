/*
 * @Author       : HyFun
 * @Date         : 2021-09-13 16:51:17
 * @Description  :
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-13 17:02:57
 */
import { h, ref } from 'vue'
export default {
  setup(props) {
    const message = ref('Hello Vue3!')
    return () => {
      return h('h2', {}, message.value)
    }
  }
}
