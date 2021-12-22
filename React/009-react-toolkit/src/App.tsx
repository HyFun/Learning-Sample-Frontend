import React from 'react'
import Toolkit from './components/todo-toolkit'

import TodoOld from './components/todo-old'
export default function App() {
    return (
        <div>
            <TodoOld />
            <hr />
            <Toolkit />
        </div>
    )
}
