import React from "react";
import "./Signup.css";
import Signnav from "../../Components/Signnav/Signnav";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import glogo from "../../assets/glogo.png";


const Signup = () => {
  const navisignin = useNavigate();
  const handleNav = () => {
    navisignin("/signin");
  };

  const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  };
      
 

  const schema = Yup.object({
    email: Yup.string()
      .required("Email is required !")
      .email("invalid Email format !"),
    firstName: Yup.string().required("First Name is required !"),
    lastName: Yup.string().required("Last Name is required !"),
    password: Yup.string().required("Password is required !"),
  });
  const onSubmit = async (values) => {
  const fullName = `${values.firstName} ${values.lastName}`;
  const data = {
    fullName,
    email: values.email,
    password: values.password,
  };
    navisignin("/confirmation");
    console.log(values);
    console.log(data);
  };

  const { values, handleSubmit, handleChange, errors, touched } = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit,
  });
  console.log(errors);
  return (
    <div>
      <Signnav />
      <div className="hero-container">
        <div className="topsignup-container">
          <h3>Helping digital products </h3>
          <h4>
            The workplace for <br /> remote contracts <br />
            gigs.
          </h4>
          <p className="text">Smarg is a remote contract facilitators</p>
          <p className="text2">
            Already a member? <button onClick={handleNav}>Sign In</button>
          </p>
        </div>
        <div className="form-container">
          <form action="" onSubmit={handleSubmit}>
            <div>
              <input
                className="box1"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Email Address"
              />
            </div>
            <div className="box2">
              <input
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                placeholder="First Name"
              />

              <input
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                placeholder="Last Name"
              />
            </div>
            <div>
              <input
                className="box1"
                name="password"
                value={values.password}
                onChange={handleChange}
                type="password"
                placeholder="Create a Password"
              />
            </div>
            <div className="error-messages">
              {errors.password && touched.password ? (
                <p>{errors.password}</p>
              ) : (
                ""
              )}
              {errors.lastName && touched.lastName ? (
                <p>{errors.lastName}</p>
              ) : (
                ""
              )}
              {errors.firstName && touched.firstName ? (
                <p>{errors.firstName}</p>
              ) : (
                ""
              )}
              {errors.email && touched.email ? <p>{errors.email}</p> : ""}
            </div>
            <h4>
              By signing up, I agree to the product’s{" "}
              <button className="pp-btn">Privacy Policy</button> <br /> and{" "}
              <button className="pp-btn">Terms of Service</button>
            </h4>
            <div className="signup-btn-cont">
              <div>
                <img className="glogo" src={glogo} alt="IMAGE" />
                <button className="google-signup-btn">
                  Sign Up with Google
                </button>
              </div>
              <button type="submit" className="signup-btn">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default Signup;
