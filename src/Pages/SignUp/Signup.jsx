import React from 'react'
import './Signup.css'
import  Signnav  from '../../Components/Signnav/Signnav'

const Signup = () => {
  return (
    <div>
      <Signnav />
      <div className="hero-container">
        <div className="topsignup-container">
          <h3>Helping digital products </h3>
          <h4>
            The workplace for <br /> remote contracts <br />
            gigs.
          </h4>
          <p className="text">Smarg is a remote contract facilitators</p>
          <p className="text2">
            Already a member? <button>Sign In</button>
          </p>
        </div>
        <div className="form-container">
          <form action="">
            <div>
              <input
                className="box1"
                type="email"
                placeholder="Email Address"
              />
            </div>
            <div className="box2">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div>
              <input
                className="box1"
                type="password"
                placeholder="Create a Password"
              />
            </div>
            <h4>
              By signing up, I agree to the product’s{" "}
              <button className="pp-btn">Privacy Policy</button> <br /> and{" "}
              <button className="pp-btn">Terms of Service</button>
            </h4>
            <div className="signup-btn-cont">
              <button className="google-signup-btn">Sign Up with Google</button>
              <button className="signup-btn">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup