import React from 'react'
import './Homepage.css'
import image1 from "../../assets/sample-image.png";
import Subhero from '../../Components/SubHero/Subhero';
import Card from '../../Components/Card/Card';
import vec5 from "../../assets/vec5.png";
import Section from '../../Components/Section/Section';
import Review from '../../Components/Review/Review';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { useState } from 'react';
import * as Yup from 'yup'
import { useFormik } from 'formik';


const Homepage = () => {
  const initialValues = {
    email: '',
  }
  // const [emailValue, setEmailValue] = useState({
  //   email:""
  // })
  // const handleChange = (e) =>{
  //   const { name, value } = e.target;
  //   setEmailValue({
  //     [name]: value,
  //   });
  // }
  const schema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("invalid Email format"),
  });
  const onSubmit = async (values) => {
   console.log(values);

   

  }

  const {values, handleSubmit, handleChange, errors, touched} = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit
  })
  // console.log(errors);
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
  const userReview = [
    {
      comment:
        "“A bit like building a house, from floor plans to final coat of paint. Our process is very flexible”",
      user: "Julie - Product Designer ",
    },
    {
      comment:
        "“A bit like building a house, from floor plans to final coat of paint. Our process is very flexible”",
      user: "Julie - Product Designer ",
    },
    {
      comment:
        "“A bit like building a house, from floor plans to final coat of paint. Our process is very flexible”",
      user: "Julie - Product Designer ",
    }
  ];
   const settings = {
     dots: true,
     infinite: false,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
   };
  return (
    <section>
      <Navbar />
      <div className="home-all">
        <h3 className="homeh3">Helping digital products</h3>
        <h2 className="homeh2">
          The workplace for <br /> remote contracts gigs.
        </h2>
        <p className="homep">
          Smarg is a remote contract facilitator that aims to secure, manage{" "}
          <br /> and ensure quality delivery for freelancers
        </p>
        <form onSubmit={handleSubmit} className="form-cont">
         
          <div>
            <input
              className=""
              name="email"
              value={values.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter Email Address"
            />
            {errors.email && touched.email ? <p>{errors.email}</p> : ""}
          </div>

          <button type="submit" className="">
            Get Started
          </button>
          
        </form>
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
        <Section />
        <div className="heading">
          <h3>Helping digital</h3>
          <h4>
            What Users Say <br /> About Us
          </h4>
        </div>

        <Slider {...settings}>
          {userReview.map((rev, i) => {
            return <Review key={i} review={rev} />;
          })}
        </Slider>
      </div>
      <Footer />
    </section>
  );
}

export default Homepage