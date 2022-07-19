import React from 'react'
import Navbar from '../layout/Navbar'

const Cart = () => {
  return (
   <>
   <Navbar/>
   <h3 className='text-center '> Cart Items</h3>
   <table className='table  table-bordered table-hover align-middle w-75 mx-auto my-5'>
       <thead>
           <tr>
               <th>
                   S.no
               </th>
               <th> Product Image</th>
               <th> Product Description</th>
               <th> Action</th>
           </tr>
       </thead>
       <tbody>
           <tr>
               <td>
                   1
               </td>
               <td>
                   <img src='./images/a.jpg' alt='football' height={'100px'}/>
               </td>
               <td> 
                  <h3>Samsung</h3> 
              
                  <h4>Rs.15000</h4> 
               
              
<p>This is a very nice phone</p>
               </td>
               <td><button className='btn btn-primary'>Update</button>
               <button className='btn btn-primary'>Delete</button>
               </td>
           </tr>
       </tbody>
   </table>
   </>
  )
}

export default Cart