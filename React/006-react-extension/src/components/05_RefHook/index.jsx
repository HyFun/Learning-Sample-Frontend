import React,{useRef, useEffect} from 'react'

export default function RefHook() {
    const ref = useRef(null)
    useEffect(()=>{
        ref.current.focus()
    },[])

    return (
        <div>
            <input ref={ref} type="text" placeholder="我会自动对焦" />
        </div>
    )
}
