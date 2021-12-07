/*
 * @Author       : heyongfeng
 * @Date         : 2021-09-18 15:24:11
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-09-23 12:03:09
 */
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
// count`s reducer
import reducerCount from './reducers/count'
// person`s reducer
import reducerPerson from './reducers/person'

// redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
    reducerCount,
    reducerPerson
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
