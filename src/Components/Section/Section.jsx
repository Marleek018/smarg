import React from "react";
import "./Section.css";
import img1 from "../../assets/sect-img.png"
import img2 from "../../assets/sect-img1.png"

const Section = () => {
  return (
    <div className="wholesection">
      <div className="top-box">
        <h3>
          Best Solutions & <br /> Values for your Work
        </h3>
        <p>
          The status of a client or freelancer is <br /> based on who created
        </p>
      </div>
      <div className="topbox-cont">
        <div className="inbox-cont">
          <h3>Helping digital</h3>
          <h4>
            With Clear <br /> agreements.
          </h4>
          <p>
            No unclear, un-ending, and un-defined <br /> work or task, know
            exactly what’s <br /> expected.
          </p>
          <button>Get Started</button>
        </div>
        <div>
          <img src={img1} alt="IMAGE" />
        </div>
      </div>
      <div className="topbox-cont">
        <div>
          <img src={img1} alt="IMAGE" />
        </div>
        <div className="inbox-cont">
          <h3>Helping digital</h3>
          <h4>
            Track work progress <br /> and velocity.
          </h4>
          <p>
            No unclear, un-ending, and un-defined <br /> work or task, know
            exactly what’s <br /> expected.
          </p>
          <button>Get Started</button>
        </div>
      </div>
      <div className="topbox-cont">
        <div className="inbox-cont">
          <h3>Helping digital</h3>
          <h4>
            Clients and <br /> freelancers money <br /> secured.
          </h4>
          <p>
            Before work starts, payment is made into <br /> the contract. Money
            is only released <br /> when work has been done and approved.
          </p>
          <button>Get Started</button>
        </div>
        <div>
          <img className="section-image" src={img2} alt="IMAGE" />
        </div>
      </div>
    </div>
  );
};

export default Section;
