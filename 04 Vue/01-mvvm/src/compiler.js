/*
 * @Author       : heyongfeng
 * @Date         : 2021-07-11 17:14:54
 * @Description  : 编译
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-07-11 19:04:37
 */

import {
  getValue,
  HTML_ELEMENT,
  HTML_TEXT,
  REG_EXPRESS,
  replaceText,
  setValue
} from './util'
import Watcher from './watcher'

export default class Compiler {
  $el
  $data
  constructor(el, data) {
    this.$el = el
    this.$data = data

    // 将子元素都取出来
    const fragment = this.el2fragment(this.$el)
    this.compile(fragment)
    this.$el.appendChild(fragment)
  }

  // 将 dom转换为 ast语法树
  el2fragment(el) {
    const fragment = document.createDocumentFragment()
    const childNodes = el.childNodes
    Array.from(childNodes).forEach((item) => {
      fragment.appendChild(item)
    })
    return fragment
  }

  // 编译 ast -> vnode
  compile(node) {
    const children = node.childNodes
    Array.from(children).forEach((el) => {
      // 判断类型
      const type = el.nodeType
      if (type === HTML_ELEMENT) {
        this.compileElement(el)
        this.compile(el)
      } else if (type === HTML_TEXT) {
        this.compileText(el)
      }
    })
  }

  // 编译不同的类型
  // 节点
  compileElement(node) {
    const attrs = node.attributes
    Array.from(attrs).forEach((attr) => {
      const { name, value } = attr
      if (/^v-/.test(name)) {
        const [, methodName] = name.split('v-')
        CompileUtil[methodName] &&
          CompileUtil[methodName].call(this, node, value, this.$data)
      }
    })
  }
  // 文本
  compileText(node) {
    const text = node.textContent

    if (REG_EXPRESS.test(text)) {
      CompileUtil.text(node, text, this.$data)
    }
  }
}

const CompileUtil = {
  model(node, express, data) {
    const value = getValue(express, data)
    new Watcher(data, express, (newVal) => {
      CompileUpdator.updateModel(node, newVal)
    })
    node.addEventListener('input', (e) => {
      const value = e.target.value
      // 设置值
      setValue(express, data, value)
    })
    CompileUpdator.updateModel(node, value)
  },
  text(node, text, data) {
    // 添加watcher
    text.replace(REG_EXPRESS, (...args) => {
      const express = args[1]
      new Watcher(data, express, (newVal) => {
        CompileUpdator.updateText(node, replaceText(text, data))
      })
    })
    CompileUpdator.updateText(node, replaceText(text, data))
  }
}

const CompileUpdator = {
  updateModel(node, value) {
    node.value = value
  },
  updateText(node, value) {
    node.textContent = value
  }
}
