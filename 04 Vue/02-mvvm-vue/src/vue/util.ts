/*
 * @Author       : heyongfeng
 * @Date         : 2021-07-12 10:55:19
 * @Description  : 工具类
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-07-12 11:27:50
 */

export const REG_EXPR = /\{\{([^}]+)\}\}/g;

export function isElementNode(node: Node): boolean {
  return node.nodeType === 1
}

export function isTextNode(node: Node): boolean {
  return node.nodeType === 3
}

export function def(obj: any, key: any, val: any, enumerable = true) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  })
}
