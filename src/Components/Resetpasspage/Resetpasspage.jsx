import React from 'react'
import "./Resetpasspage.css";
import Signnav from '../Signnav/Signnav'

const Resetpasspage = () => {
  return (
    <div>
      <Signnav />
      <div className="password-reset-container">
        <h3>Reset Password</h3>
        <p>Enter your email address to reset your password</p>
        <form action="">
          <div>
            <input type="password" placeholder="Create a Password" />
          </div>
          <div>
            <input type="password" placeholder="Create a Password" />
          </div>
          <div>
            <button className='resetpage-signin-btn'>Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Resetpasspage