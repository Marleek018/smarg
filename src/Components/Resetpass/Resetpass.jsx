import React from 'react'
import Signnav from '../Signnav/Signnav';
import './Resetpass.css'
import resetimg from '../../assets/signup-img.png'

const Resetpass = () => {
  return (
    <div>
      <div>
        <Signnav />
        <section className="resetpass-cont">
          <div className="reset-img-container">
            <img src={resetimg} alt="IMAGE" />
          </div>
          <div className="resetmsg-container">
            <h3>Confirmation Link Sent</h3>
            <p>
              We sent a confirmation link to your email address. <br /> Kindly
              click the link to confirm
            </p>
            <div className="reset-email-btn-container">
              <button className="reset-email-btn">Open Email App</button>
            </div>
          </div>
        </section>
        <div className="reset-bottom-section">
          <button className="reset-wrong-email-btn">Wrong Email?</button>
          <p>
            Didn’t get the link?{" "}
            <button className="reset-resend-code-btn">Resend Code</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Resetpass