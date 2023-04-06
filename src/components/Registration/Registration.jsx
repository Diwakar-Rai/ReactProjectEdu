import React from "react";
import { useState } from "react";
import Styles from "./Registration.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Registration = () => {
  let [state, setState] = useState({ name: "", email: "", password: "" });

  let { name, email, password } = state;
  let navigate = useNavigate()
  let handleOnChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  // let auth = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_AUTH_ROUTER}`;
  const renderErrorMessage = name =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      let payload = state;
      let { data } = await axios.post(
        "http://localhost:5000/api/v1/auth/register",
        payload
      );
      console.log(data);
      setState({ name: "", email: "", password: "" });
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={Styles.mainLoginDiv}>
      <div className={Styles.form}>
        <form onSubmit={handleSubmit}>
          <div className={Styles.mainImg}>
            <div className={Styles.headDiv}>
              <h1>CREATE ACCOUNT</h1>
            </div>
          </div>
          <div className={Styles.inputContainer}>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleOnChange}
              placeholder="Your Name"
              required
            />
            {renderErrorMessage("uname")}
          </div>
          <div className={Styles.inputContainer}>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Your Mail"
              required
            />
            {renderErrorMessage("pass")}
          </div>

          <div className={Styles.inputContainer}>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={handleOnChange}
              required
            />
            {renderErrorMessage("uname")}
          </div>
          <div className={Styles.inputContainer}>
            <input type="password" placeholder="Confirm Password" required />
            {renderErrorMessage("uname")}
          </div>

          {/* <div className={Styles.forPass}>
            <div className={Styles.forpass1}>
              <input type="checkbox" required />
              <p>
                I agree all statements in <Link>Terms of service</Link>
              </p>
            </div> */}
            {/* <div className={Styles.link}>
              <Link>Want Login?</Link>
            </div> */}
          {/* </div> */}

          <div className={Styles.inputContainer}>
            <button>Submit</button>
          </div>
          <div className={Styles.loginLink}>
            <h1>
              Have already an account ? <Link to="/">Login here</Link>
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
