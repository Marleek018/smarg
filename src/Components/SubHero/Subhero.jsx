import React from "react";
import "./Subhero.css";
import vec1 from '../../assets/vec1.png'
import vec2 from "../../assets/vec2.png";
import vec3 from "../../assets/vec3.png";


const Subhero = () => {
  return (
    <div className="subhero-cont">
      <h3>
        Providing Remote Contract Facilitator. <br /> Still want more?
      </h3>
      <div className="topsub-cont">
        <div className="sub-cont">
          <img src={vec1} alt="ICON" />
          <span>35x</span>
        </div>
        <div className="sub-cont">
          <img src={vec2} alt="ICON" />
          <span>₦0.00</span>
        </div>
        <div className="sub-cont">
          <img src={vec3} alt="ICON" />
          <span>0%</span>
        </div>
      </div>
      <div className="bottomsub-cont">
        <p>
          Efficient than any <br /> Local Means
        </p>
        <p>
          For Choosing the best <br /> way of Contract
        </p>
        <p>
          For Choosing the best <br /> way of Contract
        </p>
      </div>
      <div className="btn-cont">
        <button className="btn1">Get Started</button>
        <button className="btn2">Download Templace</button>
      </div>
    </div>
  );
};

export default Subhero;
