import React from 'react'
import Signnav from "../Signnav/Signnav";
import './Forgotpass.css'


const Forgotpass = () => {
  return (
    <div>
        <Signnav/>
      <div className='forgot-password-container'>
        <form action="">
          <h3>Forgot Password</h3>
          <p>Enter your email address to reset your password</p>
          <div>
            <input type="email" placeholder="Email Address" />
          </div>
          <button className='back-to-signin-btn'>Back to Sign In</button>
          <div>
            <button className='signin-btn'>Sign In</button>
          </div>
        </form>
      </div>
      <div className='member'>
        <p>
          Already a member? <button>Sign In</button>
        </p>
      </div>
    </div>
  );
}

export default Forgotpass