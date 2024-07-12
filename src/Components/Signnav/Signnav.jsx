import React from 'react'
import  './Signnav.css'

import logo from '../../assets/logo.png'

export const Signnav = () => {
  return (
    <div className='nav-container'>
      <img src={logo} alt="IMAGE" />
      <ul>
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
      </ul>
    </div>
  );
}
export default Signnav;
