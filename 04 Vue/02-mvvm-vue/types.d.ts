/*
 * @Author       : heyongfeng
 * @Date         : 2021-07-12 10:51:37
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-07-12 10:52:11
 */

import Vue from './src/vue/vue'

declare global {
  interface Window {
    vm: Vue
  }
}
