import React from 'react'
import {Provider} from 'react-redux'

import TodoAdd from './TodoAdd'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'

import store from '../../store/index'

export default function Todos() {
    return (
        <Provider store={store}>
            <h3>Todos</h3>
            <TodoAdd />
            <TodoList />
            <TodoFooter />
        </Provider>
    )
}
