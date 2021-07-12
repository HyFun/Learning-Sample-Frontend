/*
 * @Author       : heyongfeng
 * @Date         : 2021-07-12 14:02:17
 * @Description  : 编译
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-07-12 15:30:13
 */

import { ProtoObject } from '../types/vue'
import { isElementNode, REG_EXPR } from './util'
import VNode from './vnode'

/**
 * 模拟vue  将dom解析成ast语法树
 */
export function getAST(el: Element): VNode {
  const nodeType = el.nodeType
  let vnode: VNode | undefined = undefined
  if (isElementNode(el)) {
    let data: ProtoObject = {}
    Array.from(el.attributes).forEach((attr) => {
      const { name, value } = attr
      data[name] = value
    })
    vnode = new VNode(el.nodeName, data, undefined, nodeType)
    // 递归遍历子级
    const children = el.childNodes

    for (let i = 0; i < children.length; i++) {
      vnode.appendChild(getAST(children[i] as Element))
    }
  } else {
    vnode = new VNode(undefined, undefined, el.textContent, nodeType)
  }

  return vnode
}

/**
 * 模拟vue 将ast语法树解析成vnode
 */
export function getVNode(vnode: VNode, data: ProtoObject): VNode {
  let _type = vnode.type
  let _data = vnode.data
  let _value = vnode.value
  let _tag = vnode.tag
  let _children = vnode.children

  let _vnode: VNode | undefined = undefined

  if (_type === 3) {
    // 文本节点

    // 对文本处理
    _value = getTextValue(_value, data)

    _vnode = new VNode(_tag, _data, _value, _type)
  } else {
    // 元素节点
    _vnode = new VNode(_tag, _data, _value, _type)
    _children.forEach((_subvnode) =>
      _vnode?.appendChild(getVNode(_subvnode, data))
    )
  }
  return _vnode
}

/**
 * 模拟vue vnode -> dom
 */
export function parseVNode(vnode: VNode, $data: any): any {
  // 创建 真实的 DOM
  let type = vnode.type
  let _node: any = null
  if (type === 3) {
    return document.createTextNode(vnode.value) // 创建文本节点
  } else if (type === 1) {
    _node = document.createElement(vnode.tag as string)
    // 属性
    let data = vnode.data // 现在这个 data 是键值对
    Object.keys(data).forEach((key) => {
      let attrName = key
      let attrValue = data[key]
      _node.setAttribute(attrName, attrValue)
      // 处理v-model
      if (/^v-model$/.test(attrName)) {
        _node.value = getValue(attrValue, $data)
        // 设置事件
        _node.addEventListener('input', (e: any) => {
          const value = e.target.value
          setValue(attrValue, $data, value)
        })
      }
    })
    // 子元素
    let children = vnode.children
    children.forEach((subvnode) => {
      _node.appendChild(parseVNode(subvnode, $data)) // 递归转换子元素 ( 虚拟 DOM )
    })

    return _node
  }
}

function getValue(expr: string, data: any) {
  const exprs = expr.split('.').map((v) => v.trim())
  return exprs.reduce((res, item) => {
    return res[item]
  }, data)
}

function setValue(expr: string, data: any, value: any) {
  const exprs = expr.split('.').map((v) => v.trim())
  exprs.reduce((res, item, index) => {
    if (index === exprs.length - 1) {
      res[item] = value
    }
    return res[item]
  }, data)
}

function getTextValue(expr: string, data: any) {
  if (!expr) {
    return ''
  }
  return expr.replace(REG_EXPR, (...args) => {
    return getValue(args[1], data)
  })
}
