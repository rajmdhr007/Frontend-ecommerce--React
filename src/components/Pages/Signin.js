import React from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import { Link } from 'react-router-dom'


const Signin = () => {
  return (
<>
<Navbar/>
<div className='container'>
<main className="form-signin w-50 mt-2 p-2 shadow-lg m-auto ">
  <form>
    <img className="mb-4 rounded-circle" src="./images/a.jpg" alt="" width="75" height="75"/>
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

    <div className="form-floating mb-3 m-2">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label htmlFor="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
      <label htmlFor="floatingPassword">Password</label>
    </div>

    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Remember me
      </label>
    </div>
    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
   
    Do not have an account<Link to="/Signup">Register</Link> 
  </form>
</main>
</div>
<Footer/>
</>
  )
}

export default Signin
