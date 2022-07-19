import React, { useEffect, useState } from 'react'

const Counter = () => {
    let [count,setCount]=useState(0)
    // count[stateVariable,function]=useState(initial Value)
    let[data,setData]=useState(100)

    const increase_count=()=>{
        setCount(count+1)
    }
    const decrease_count=()=>{
        setCount(count-1)
    }
     useEffect(()=>{
        console.log('Count is updated')
     },[ count])

  return (
    <>
    <div>data: {count}</div>
    <div>
    <button className='btn btn-warning' onClick={increase_count}>
        Increase Count
        </button>
        <button className='btn btn-warning' onClick={decrease_count}>
        Decrease Count
        </button>
        <button className='btn btn-warning' onClick={()=>{  setCount(0)}}>
       Reset
        </button>
        </div>
        
        
        <div>Count:{data} </div>
     <button className='btn btn-warning' onClick={()=>{ setData(data+10)}}>
        Increase data
        </button>
        <button className='btn btn-warning' onClick={()=>{return setData(data-10)}}>
        Decrease Count
        </button>
        <button className='btn btn-warning' onClick={()=>{return setData(100)}}>
       Reset
        </button> 

        </>
  )
}

export default Counter