import React from 'react'
import {Provider} from 'react-redux'

// old
import store_old from '../../redux/old/store'
import TodoHeader from './TodoHeader'
import TodoList from './TodoList'


export default function TodoOld() {
    return (
        <div>
            <h3>Todo: 使用传统方式</h3>
            <Provider store={store_old}>
            <TodoHeader />
            <TodoList />
            </Provider>
        </div>
    )
}
