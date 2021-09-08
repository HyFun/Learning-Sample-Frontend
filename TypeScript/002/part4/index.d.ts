/*
 * @Author       : HyFun
 * @Date         : 2021-09-08 14:58:35
 * @Description  :
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-08 15:30:16
 */

/**
 * 1. declare
 */

declare var names: string | number
declare const sex: string
/** 获取用户名字 */
declare function getName(): string

interface Window {
  format: string
}

interface Date {
  format(): string
}
