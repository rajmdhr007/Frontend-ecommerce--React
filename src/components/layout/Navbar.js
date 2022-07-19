import React from "react";
import { Link } from "react-router-dom";
// class=className
// <a></a>=Link
// href=to
// input tags= /
import './navbar.css'



const navbar = () => {
  return (
    <>
    <div className="container-fluid">
    <div className="row custom-background">
        <div className="col-md-3">
        <Link className="navbar-brand fs-4 fw-bold"  to="/home">
            Navbar
          </Link>
        </div>
        <div className="col-md-6 pt-1"> <form className="d-flex" role="search">
              <input
                className="form-control me-1"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form></div>
        <div className="col-md-3 d-flex justify-content-evenly pt-1">
         <Link to ='/signin'><i className="bi bi-box-arrow-in-left text-white fs-4"></i></Link>
            <Link to ='/signup'><i className="bi bi-person-plus text-white fs-4"></i></Link>
            <Link to ='/Cart'><i className="bi bi-cart text-white fs-4"></i></Link> 
        </div>

    </div>
    </div>
      <nav className="navbar navbar-expand-lg custom-background">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/nav">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/deals">
                  Deals
                </Link>
              </li>
          
              <li className="nav-item">
                <Link className="nav-link " to="/Services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/Blogs">Blogs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/Contact">Contact</Link>
              </li>
            </ul>
           
           
          </div>
        </div>
      </nav>
    </>
  );
};

export default navbar;
