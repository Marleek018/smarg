import React from 'react'
import  Signnav  from '../../Components/Signnav/Signnav'

const Signup = () => {
  return (
    <div>
      <Signnav />
      <div>
        <div className="topsignup-container">
          <h3>Helping digital products </h3>
          <h4>The workplace for remote contracts gigs.</h4>
          <p>Smarg is a remote contract facilitators</p>
          <p>
            Already a member? <button>Sign In</button>
          </p>
        </div>
        <div>
          <form action="">
            <div>
              <input type="email" placeholder="Email Address" />
            </div>
            <div>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div>
              <input type="password" placeholder="Create a Password" />
            </div>
            <h4>
              By signing up, I agree to the product’s{" "}
              <button>Privacy Policy</button> and{" "}
              <button>Terms of Service</button>
            </h4>
            <div>
              <button>Sign Up with Google</button>
              <button>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup