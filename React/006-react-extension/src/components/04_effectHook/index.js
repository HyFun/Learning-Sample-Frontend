import React, { useEffect } from 'react'

export default function EffectHook() {
    // 模拟实现 componentDidmount
    useEffect(() => {
        // 实现
        console.log(`componentDidmount`);
    }, [])

    return (
        <div>
            EffectHook
        </div>
    )
}
