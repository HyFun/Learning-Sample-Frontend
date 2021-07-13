/*
 * @Author       : heyongfeng
 * @Date         : 2021-07-12 10:42:56
 * @Description  : 类型
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-07-12 11:36:54
 */

export interface VueOptions {
  el: string | Element
  data: () => object
}

export interface ProtoObject extends Object {
  [name: string]: any
}
