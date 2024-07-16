import React from 'react'
import './Dashnav.css'
import { IoIosNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import userimg from '../../assets/user-img.png'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';


const Dashnav = () => {
  return (
    <div className="dashnav-container">
      <img className="dash-logo" src={logo} alt="IMAGE" />
      <ul>
        <li>
          <Link className="linktohome" to="/">
            Home
          </Link>
        </li>
        <li>Contracts</li>
        <li>Payments</li>
      </ul>
      <div className="search-container">
        <input type="search" placeholder="Search anything" />
        <CiSearch className="search-icon" />
      </div>
      <div className="user-container">
        <IoIosNotifications className="notification" />
        <div className="user-flex">
          <img src={userimg} alt="IMAGE" />
          <select name="" id="">
            <option value=""></option>
            <option value="">ok</option>
            <option value="">ok</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Dashnav