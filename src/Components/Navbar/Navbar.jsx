import React from 'react'
import './Navbar.css'
import logo from './Netflix_Logo_RGB.png'
function Navbar() {
  return (
    <header className="navbar col-12">
    <div className="col-3"><img className="logo" src={logo} alt="logo" /></div>
    <div className="header-right col-8">
      <p className="header-text col-5">UNLIMITED&nbsp; TV SHOWS &amp; MOVIES</p>
      <button  className="btn btn-header" type="button">JOIN NOW</button>
      <a className="btn btn-header btn-authlink" href="#">SIGN IN</a>
    </div>
  </header>
  )
}

export default Navbar