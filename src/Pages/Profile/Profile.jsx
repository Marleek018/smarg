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
import Sidebar from '../../Components/Sidebar/Sidebar';
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";




const Dashboard = () => {

  return (
    <div>
      <Dashnav />
      <section className="full-bar">
        <div className="full-left-container">
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
            <h2 className="summary-text">Activities Summary</h2>
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
          <div className="select-box">
            <h4>Contract Analytics</h4>
            <select name="" id="">
              <option value="">Last 9 Nonth</option>
              <option value="">Last 6 Nonth</option>
              <option value="">Last 3 Nonth</option>
            </select>
          </div>
          <div className="chart-box">
            <Barcharts />
            <div className='progressbar'>
              <CircularProgress value={64} color="green" size="100px" height='100px'>
                <CircularProgressLabel>64%</CircularProgressLabel>
              </CircularProgress>
            </div>
          </div>
        </div>
        <div>
          <Sidebar />
        </div>
      </section>
    </div>
  );
}

export default Dashboard