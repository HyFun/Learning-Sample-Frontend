/*
 * @Author       : heyongfeng
 * @Date         : 2021-07-11 16:58:21
 * @Description  : 工具类
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-07-11 19:03:45
 */
export const REG_EXPRESS = /\{\{([^}]+)\}\}/g

export const HTML_ELEMENT = 1
export const HTML_ATTR = 2
export const HTML_TEXT = 3

export function setValue(express, data, value) {
  const list = express.replace(/\s/g, '').split('.')
  list.reduce((res, item, index) => {
    if (index === list.length - 1) {
      res[item] = value
    }
    return res[item]
  }, data)
}

export function getValue(express, data) {
  return express
    .replace(/\s/g, '')
    .split('.')
    .reduce((res, item) => res[item], data)
}

export function replaceText(text, data) {
  return text.replace(REG_EXPRESS, (...args) => {
    return getValue(args[1], data)
  })
}
