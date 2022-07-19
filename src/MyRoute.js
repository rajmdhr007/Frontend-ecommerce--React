import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home'
import Navbar from './components/Pages/Navbar'
import Footer from './components/Pages/Footer'
import Carousel from './components/Pages/Carousel'
import Signin from './components/Pages/Signin'
import Signup from './components/Pages/Signup'
import Cart from './components/Pages/Cart'
import Materialdemo from './components/Pages/Materialdemo'
import Deals from './components/Pages/Deals'
import Services from './components/Pages/Services'
import Blogs from './components/Pages/Blogs'
import Contact from './components/Pages/Contact'
import Counter from './components/Pages/Counter'
import DecreaseCounter from './components/Pages/DecreaseCounter'
import DataFetch from './components/Pages/DataFetch'
import Display from './components/Pages/Display'


const myroute = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/home" element={<Home/>} />
   <Route path="/nav" element={<Navbar/>}/>
   <Route path="/footer" element={<Footer/>}/>
   <Route path="/carousel" element={<Carousel/>}/>
   <Route path="/signin" element={<Signin/>}/>
   <Route path="/Signup" element={<Signup/>}/>
   <Route path='/Cart' element={<Cart/>}/>
   {/* MATERIAL UI DEMO */}
   <Route path='/MUI' element={<Materialdemo/>}/>
   <Route path='/deals'element={<Deals/>}/>
  < Route path='/Services'element={<Services/>}/>
  < Route path='/Blogs'element={<Blogs/>}/>
  < Route path='/Contact'element={<Contact/>}/>
  < Route path='/Counter'element={<Counter/>}/>
  < Route path='/dec'element={<DecreaseCounter/>}/>
  <Route path='/fetch' element={<DataFetch/>}></Route>
  <Route path='/display' element={<Display/>}></Route>
        </Routes>
        </BrowserRouter>
  )
}

export default myroute