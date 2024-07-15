import React from 'react'
import './Profile.css'
import { IoIosArrowForward } from "react-icons/io";
import profileimg from '../../assets/profile-img.png'
import p1 from '../../assets/pvec1.png'
import p2 from "../../assets/pvec2.png";
import p3 from "../../assets/pvec3.png";
import p4 from "../../assets/pvec4.png";
import Dashnav from '../../Components/Dashboardnav/Dashnav'
import Barcharts from '../../Components/Barcharts/Barcharts';
const Dashboard = () => {
  return (
    <div>
      <Dashnav />
      <section>
        <div>
          <div className="left-container">
            <img src={profileimg} alt="IMAGE" />
            <div>
              <h3>
                Good morning,
                <br /> <span>Oluwasayo</span>
              </h3>
              <button>
                Create Contract <IoIosArrowForward />
              </button>
            </div>
          </div>
          <div>
            <h2 className='summary-text'>Activities Summary</h2>
            <div className="mother-container">
              <div className="top-down-container">
                <div className="down-container">
                  <img src={p1} alt="IMAGE" />
                  <h4>340</h4>
                </div>
                <p>
                  Completed Contract <IoIosArrowForward />
                </p>
              </div>
              <div className="top-down-container">
                <div className="down-container">
                  <img src={p2} alt="IMAGE" />
                  <h4>133</h4>
                </div>
                <p>
                  Ongoing Contract <IoIosArrowForward />
                </p>
              </div>
              <div className="top-down-container">
                <div className="down-container">
                  <img src={p3} alt="IMAGE" />
                  <h4>13</h4>
                </div>
                <p>
                  Cancelled Contracts <IoIosArrowForward />
                </p>
              </div>
              <div className="top-down-container">
                <div className="down-container">
                  <img src={p4} alt="IMAGE" />
                  <h4>52</h4>
                </div>
                <p>
                  Active Clients <IoIosArrowForward />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


<Barcharts/>
    
    </div>
  );
}

export default Dashboard