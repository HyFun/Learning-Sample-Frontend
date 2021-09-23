/*
 * @Author       : heyongfeng
 * @Date         : 2021-09-18 15:24:11
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-09-23 12:03:09
 */
import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducerCount from './reducerCount'

const store = createStore(reducerCount, applyMiddleware(thunk))

export default store
