import React, { useState } from 'react'
import {toast} from "react-toastify"
const Counter = () => {
    const [counter, setcounter] = useState(0)
    const add = () => {
        if(count<10){
        setCounter (count+ 1)
     }
     else{
        toast.warning("you cannot add more than 10")
     }
    }
    const sub = () => {
        if(count>0){
            setCounter (count- 1)
        }
        else{
            toast.warning("items cannot be less than 0")
         }
    }
    return (
        <div className='d-flex justify-content-center align-items-center mt-4 gap-3'>
            <button className='btn btn-danger' onClick={sub}>-</button>
            <h1>counter</h1>
            <button className='btn btn-success' onClick={add}>+</button>

        </div>
    )
}

export default Counter
