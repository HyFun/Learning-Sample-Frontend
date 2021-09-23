/*
 * @Author       : heyongfeng
 * @Date         : 2021-09-23 12:24:25
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-09-23 12:26:13
 */
import action from './actions'
export function increment(data) {
  return { type: action.ACTION_INCREMENT, data }
}

export function decrement(data) {
  return { type: action.ACTION_DECREAMENT, data }
}

export function ride(data) {
  return { type: action.ACTION_RIDE, data }
}

export function divide(data) {
  return { type: action.ACTION_DIVIDE, data }
}
