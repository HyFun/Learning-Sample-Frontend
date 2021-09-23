/*
 * @Author       : heyongfeng
 * @Date         : 2021-09-18 15:24:11
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-09-23 12:03:09
 */
import { createStore } from 'redux'
import reducerCount from './reducerCount'

const store = createStore(reducerCount)

export default store
