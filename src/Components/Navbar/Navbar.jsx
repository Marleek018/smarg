import React from 'react'
import logo from "../../assets/logo.png"
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="nav-cont">
      <Link to="/">
        <img className="nav-logo" src={logo} alt="IMG" />
      </Link>
      <ul className="menu-opt">
        <li>How it Works</li>
        <li>About Us</li>
        <li>Testimonials</li>
      </ul>
      <div className="sign-cont">
        <ul className="signin-opt">
          <Link to="signin">
            <li>Sign In</li>
          </Link>
        </ul>
        <ul>
          <Link className='link' to='signup'>
            <li className="gs-btn">Get Started</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar