import React from 'react'
import logo from "../../assets/logo.png"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="nav-cont">
      <img className="nav-logo" src={logo} alt="IMG" />
      <ul className="menu-opt">
        <li>How it Works</li>
        <li>About Us</li>
        <li>Testimonials</li>
      </ul>
      <div className='sign-cont'>
        <ul className="signin-opt">
          <li>Sign In</li>
        </ul>
        <ul>
          <li className="gs-btn">Get Started</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar