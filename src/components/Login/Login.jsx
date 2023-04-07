import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import AxiosRequest from "CustomAxios/AxiosRequest";
import {
  createHeaders,
  createRequestObject,
  getToken,
  getUserRole,
  setToken,
} from "CustomAxios/utility";
import axios from "axios";
import { loginContext } from "components/ContextApi/AppContext";
import { getAxios } from "CustomAxios/AxiosUtility";

const Login = () => {
  let { updateUserData, getUserData, state } = useContext(loginContext);
  let navigate = useNavigate();
  let auth = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_AUTH_ROUTER}`;

  let [loginState, setLoginState] = useState({ email: "", password: "" });
  let { email, password } = loginState;
  let [adminDashborad, setAdminDashborad] = useState(false);

  let handleChange = e => {
    let { name, value } = e.target;
    setLoginState({ ...loginState, [name]: value });
  };

  let fetchMe = async () => {
    try {
      let res = getToken();
      let header = createHeaders(res.token);

      let { data } = await getAxios(
        "http://localhost:5000/api/v1/auth/me/",
        header
      );
      console.log("from login/home page updated data result", data.role);
      if (data.role == "admin") {
        setAdminDashborad(true);
        navigate("/admin");
      } else {
        // setAdminDashborad(false);
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      let payload = { email, password };
      let { data } = await axios.post(`${auth}/login`, payload);
      if (data) {
        setToken(data.token);
        fetchMe();
      }
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
