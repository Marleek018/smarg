import React from 'react'
import  './Signnav.css'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png'

export const Signnav = () => {
  return (
    <div className="nav-container">
      <Link to='/'>
        <img src={logo} alt="IMAGE" />
      </Link>
      <ul>
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
      </ul>
    </div>
  );
}
export default Signnav;
