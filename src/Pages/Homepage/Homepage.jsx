import React from 'react'
import './Homepage.css'
import image1 from "../../assets/sample-image.png";
import Subhero from '../../Components/SubHero/Subhero';
import Card from '../../Components/Card/Card';
import vec5 from "../../assets/vec5.png";
import Section from '../../Components/Section/Section';

const Homepage = () => {
  const cardDetails = [
    {
      img: vec5,
      heading: "Contract",
      text: "The payment terms, timeline, contract goals, NDA’s, tasks, and everything needed to make sure the work is understood and done.",
    },
    {
      img: vec5,
      heading: "Pay",
      text: "Before contract starts; money is kept till tasks are submitted and work approved",
    },
    {
      img: vec5,
      heading: "Track",
      text: "Work progress, work speed and submitted deliverables in real time.",
    },
    {
      img: vec5,
      heading: "Approve",
      text: "That the job was done as expected and money is released accordingly.",
    },
  ];
  return (
    <div className="home-all">
      <h3 className="homeh3">Helping digital products</h3>
      <h2 className="homeh2">
        The workplace for <br /> remote contracts gigs.
      </h2>
      <p className="homep">
        Smarg is a remote contract facilitator that aims to secure, manage{" "}
        <br /> and ensure quality delivery for freelancers
      </p>
      <div className="home-cont">
        <input
          className="home-email"
          type="email"
          placeholder="Enter Email Address"
        />
        <button className="home-btn">Get Started</button>
      </div>
      <div className="heroimg-cont">
        <img className="heroimg" src={image1} alt="IMG" />
      </div>
      <Subhero />
      <div className="text-cont">
        <h2>Helping digital</h2>
        <div className="minitext-cont">
          <div>
            <h3>
              Talk of the Best <br /> Platform Anywhere
            </h3>
          </div>
          <p>
            The status of a client or freelancer is based on who created the
            contract or <br /> who the role is assigned to. In that regard, no
            separate client or freelancer <br /> dashboard. Based on one’s
            status on the contract, features would be <br /> enabled or hidden
            on the dashboard.
          </p>
        </div>
        <div className="cardbox">
          {cardDetails.map((ele, i) => {
            return <Card element={ele} />;
          })}
        </div>
      </div>
      <Section/>
    </div>
  );
}

export default Homepage