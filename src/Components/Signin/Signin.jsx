import React from 'react'
import Signnav from '../Signnav/Signnav'
import './Signin.css'

const Signin = () => {
  return (
    <div>
      <Signnav />
      <div className="signin-form-container">
        <form action="">
          <h3>Welcome Back</h3>
          <p>Enter your account details to Sign In</p>
          <div>
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Enter Password" />
          </div>
          <button className="fgt-password-btn">Forgot Password?</button>
          <div className="sign-in-container">
            <button className="sign-in-with-google-btn">
              Sign In with Google
            </button>
            <button className="sign-in-btn">Sign In</button>
          </div>
        </form>
      </div>
      <div className='not-a-mem'>
        <p>
          Not a member? <button>Sign Up</button>
        </p>
      </div>
    </div>
  );
}

export default Signin