import React from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import { Link } from 'react-router-dom'



const Signup = () => {
  return (
<>
<Navbar/>
<div className='container'>
<main className="form-signin w-50 mt-2 p-2 shadow-lg m-auto ">
  <form>
    <img className="mb-4 rounded-circle" src="./images/a.jpg" alt="" width="75" height="75"/>
    <h1 className="h3 mb-3 fw-normal">Register</h1>
    <div className="form-floating mb-3 m-2">
      <input type="text" className="form-control" id="firstname" placeholder="firstname"/>
      <label htmlFor="firstname">First Name</label>
    </div>

    <div className="form-floating mb-3 m-2">
      <input type="text" className="form-control" id="lastname" placeholder="lastname"/>
      <label htmlFor="lastname">Last Name</label>
    </div>
    <div className="form-floating mb-3 m-2">
      <input type="date" className="form-control" id="dob" placeholder="dob"/>
      <label htmlFor="dob">date</label>
    </div>
    <div className='form-floating'>
    <div className='form-control d-flex justify-content-evenly'>
     <div>
     <input type="radio" id="male" name="gender"/>
     <label htmlFor='male'>
         Male
     </label>
     </div>
     <div>
     <input type="radio" id="Female" name="gender"/>
     <label htmlFor='Female'>
         Female
     </label>
     </div>
     <div>
     <input type="radio" id="others" name="gender"/>
     <label htmlFor='others'>
         Others
     </label>
     </div>
   
     
 </div>
 <label>
     Gender:
 </label>
    </div>

 
    <div className="form-floating mb-3 m-2">
      <input type="email" className="form-control" id="Email" placeholder="name@example.com"/>
      <label htmlFor="Email">Email</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="Password" placeholder="Password"/>
      <label htmlFor="Password">Password</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="CofirmPassword" placeholder="CofirmPassword"/>
      <label htmlFor="ConfirmPassword"> Confirm Password</label>
    </div>

    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Remember me
      </label>
    </div>
    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign Up</button>
    Already Have an account<Link to='/signin'>Signin</Link>
    <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
    
  </form>
</main>
</div>
<Footer/>
</>
  )
}

export default Signup