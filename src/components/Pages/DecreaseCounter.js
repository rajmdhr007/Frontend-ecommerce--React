import React, { useState } from 'react'

const DecreaseCounter = () => {

let [count,setCount]=useState(100)
const decrease_count=()=>{
    setCount(count-1)
}


  return (
    <div>Count:{count}
    <button onClick={decrease_count}> Decrease</button></div>
  )
}

export default DecreaseCounter