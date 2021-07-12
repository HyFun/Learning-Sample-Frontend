/*
 * @Author       : heyongfeng
 * @Date         : 2021-07-12 14:07:08
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-07-12 14:36:15
 */
export default class VNode {
  tag: string | undefined
  data: any
  value: any
  type: number
  children: Array<VNode>
  listener: { [name: string]: Function } = {}
  constructor(tag: string | undefined, data: any, value: any, type: number) {
    this.tag = tag
    this.data = data
    this.value = value
    this.type = type
    this.children = []
  }

  appendChild(vnode: VNode) {
    this.children.push(vnode)
  }

  addEventListener(event: string, listener: Function) {
    this.listener[event] = listener
  }
}
