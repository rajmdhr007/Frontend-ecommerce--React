
import React, { useState,useEffect } from 'react'
import axios from 'axios'

const DataFetch = () => {
    const [post ,setPost]=useState([])
    const [ limit,setLimit]=useState(20)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.data)
  .then(data=>{
    console.log(data)
    setPost(data.slice(0,limit))}
    )

  .catch(error=>console.log(error))
   
    }, [limit])
    
  return (
    <>
{
 post.map(item=>{

    return <div className='m-3 b-3' shadow>
        <h1>{item.id}:{item.title}</h1>
        <p>{item.body}</p>
       
    </div>
 })

}
{ limit< 100 &&
<button className='btn btn-info form-control' onClick={()=>{
            return setLimit(limit + 20)
        }} > Show more</button>
    }

{ limit > 0 &&
<button className='btn btn-info form-control' onClick={()=>{
            return setLimit(limit - 20)
        }} > Show less</button>
    }
    </>
  )
}

export default DataFetch