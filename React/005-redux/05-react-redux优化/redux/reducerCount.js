/*
 * @Author       : heyongfeng
 * @Date         : 2021-09-18 15:24:31
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-09-23 11:35:31
 */
import ACTION from './actions'

const defaultState = {
  count: 0
}

export default function (prevState = defaultState, action) {
  const { type, data } = action
  const { count } = prevState
  switch (type) {
    case ACTION.ACTION_INCREMENT:
      return {
        count: count + data
      }
    case ACTION.ACTION_DECREAMENT:
      return {
        count: count - data
      }
    case ACTION.ACTION_RIDE:
      return {
        count: count * data
      }
    case ACTION.ACTION_DIVIDE:
      return {
        count: count / data
      }
    default:
      return prevState
  }
}
