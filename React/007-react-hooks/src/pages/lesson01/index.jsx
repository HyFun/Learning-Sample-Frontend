import React, { useState } from 'react'

export default function () {
    let [count, setCount] = useState(10)
    let [num, setNum] = useState(10)
    return (
        <div>
            <h3>课时一：useState使用</h3>
            <p>声明的变量之间并不受影响</p>
            <input type="text" value={count} onChange={v=>setCount(v)}/>
            <button onClick={() => setCount(--count)}>-</button>
            <button onClick={() => setCount(++count)}>+</button>

            <br />
            <input type="text" value={num} onChange={v=>setNum(v)}/>
            <button onClick={() => setNum(--num)}>-</button>
            <button onClick={() => setNum(++num)}>+</button>

        </div>
    )
}
