import React from 'react'
import './Signup2.css'
import Signnav from '../Signnav/Signnav'
import signupimg from '../../assets/signup-img.png'

const Signup2 = () => {
  return (
    <div>
      <Signnav />
      <section className="section-cont">
        <div className="img-container">
          <img src={signupimg} alt="IMAGE" />
        </div>
        <div className="msg-container">
          <h3>Confirmation Link Sent</h3>
          <p>
            We sent a confirmation link to your email address. <br /> Kindly
            click the link to confirm
          </p>
          <div className="open-email-btn-container">
            <button className="open-email-btn">Open Email App</button>
          </div>
        </div>
      </section>
      <div className='bottom-section'>
        <button className='wrong-email-btn'>Wrong Email?</button>
        <p>
          Didn’t get the link? <button className='resend-code-btn'>Resend Code</button>
        </p>
      </div>
    </div>
  );
}

export default Signup2