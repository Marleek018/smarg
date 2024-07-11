import React from "react";
import flogo from "../../assets/logo.png";
import "./Footer.css";
import logo2 from "../../assets/inlogo.png";
import logo3 from "../../assets/flogo.png";
import logo4 from "../../assets/tw-logo.png";
import vector from "../../assets/vector.png"

const Footer = () => {
  return (
    <>
      <div className="top-footer">
        <h3>The workplace for remote <br /> contracts gigs.</h3>
        <p>For Choosing the best way of Contract</p>
        <div className="cont">
          <img className="vector" src={vector} alt="IMG" />
          <input className="email-box" type="email" placeholder="Enter Email Address" />
          <button>Get Started</button>
        </div>
      </div>
      <div className="footer">
        <div className="footer-info">
          <img src={flogo} alt="IMG" />
          <p>©2021 Smarg Inc.</p>
          <p>All Right Reserved</p>
          <div className="footer-social">
            <img src={logo3} alt="" />
            <img src={logo2} alt="" />
            <img src={logo4} alt="" />
          </div>
        </div>
        <div className="footer-info">
          <h4>Usecases</h4>
          <p>Contract creation</p>
          <p>Contract Negotiation</p>
          <p>Escrow Wallet</p>
          <p>Task management</p>
          <p>Service Integrations</p>
        </div>
        <div className="footer-info">
          <h4>People</h4>
          <p>Developers</p>
          <p>Freelancers</p>
          <p>Clients</p>
          <p>Product Manager</p>
        </div>
        <div className="footer-info">
          <h4>About</h4>
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
