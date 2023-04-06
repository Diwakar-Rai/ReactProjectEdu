import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import AxiosRequest from "CustomAxios/AxiosRequest";
import {
  createHeaders,
  createRequestObject,
  getUserRole,
  setToken,
} from "CustomAxios/utility";
import axios from "axios";
import { loginContext } from "components/ContextApi/AppContext";

const Login = () => {
  let { updateUserData, getUserData, state } = useContext(loginContext);
  let navigate = useNavigate();
  let auth = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_AUTH_ROUTER}`;

  let [loginState, setLoginState] = useState({ email: "", password: "" });
  let { email, password } = loginState;

  let handleChange = e => {
    let { name, value } = e.target;
    setLoginState({ ...loginState, [name]: value });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      let payload = { email, password };
      let { data } = await axios.post(`${auth}/login`, payload);
      setToken(data.token);
      navigate("/home");

      setLoginState({ email: "", password: "" });
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
              <h1>SIGN IN</h1>
            </div>
          </div>
          <div className={Styles.inputContainer}>
            <input
              type="email"
              name="email"
              placeholder="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={Styles.inputContainer}>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={handleChange}
              required
            />
          </div>
          {/* <div className={Styles.forPass}>
            <div className={Styles.forpass1}>
              <input type="checkbox" required />
              <p>Remember me</p>
            </div>
            <div className={Styles.link}>
              <Link>Forgot Password?</Link>
            </div>
          </div> */}
          <div className={Styles.inputContainer}>
            <button>Login</button>
          </div>
          Dont have an account?
          <Link
            to="/register"
            style={{ color: "var(--basecolor)", paddingBottom: 15 }}
          >
            Register Here
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
