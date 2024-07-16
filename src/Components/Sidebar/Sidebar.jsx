import React from 'react'
import './Sidebar.css'
import img237 from '../../assets/img237.png'
import img238 from "../../assets/img238.png";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="top-sidebar">
        <h3>Available Balance</h3>
        <h4>₦ 340,000 .78</h4>
        <p>36.5%</p>
        <div className="btn-container">
          <button>Withdraw Fund</button>
        </div>
      </div>
      <div className="bottom-sidebar">
        <h3>Recent Activities</h3>
        <div className="top-sidebar-box">
          <div className="sidebar-box">
            <img src={img237} alt="IMAGE" />
            <div>
              <p>
                Akintola request to <span>cancel</span> this <br /> contract
              </p>
              <button>View Request</button>
            </div>
          </div>
        </div>
        <div className="top-sidebar-box">
          <div className="sidebar-box">
            <img src={img238} alt="IMAGE" />
            <div>
              <p>
                You rejected Akintola’s cancellation <br /> request to this
                contract
              </p>
              <button>Escalate Request</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sidebar