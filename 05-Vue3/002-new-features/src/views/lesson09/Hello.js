/*
 * @Author       : HyFun
 * @Date         : 2021-09-13 14:10:10
 * @Description  :
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-13 14:17:44
 */
import { h } from 'vue'

export default function Func(props, context) {
  return h(`p`, context.attrs, context.slots)
}
