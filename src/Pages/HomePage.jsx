import React, { useContext, useEffect, useState } from "react";
import Benefits from "../components/Benefits/Benefits";
import NavContent from "../components/NavContent/NavContent";
import Counter from "../components/Counter/Counter";
import Courses from "../components/Courses/Courses";
import BootCamp from "../components/BootCamp/BootCamp";
import Pricing from "../components/Pricing/Pricing";
import Navbar from "components/Navbar/Navbar";
import Footer from "components/footer/Footer";
import { loginContext } from "components/ContextApi/AppContext";
import axios from "axios";
import { createHeaders, getToken } from "CustomAxios/utility";
import { getAxios } from "CustomAxios/AxiosUtility";
import AdminMain from "components/admin/AdminMain";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  let navigate = useNavigate();
  let { state } = useContext(loginContext);
  let [admin, setAdmin] = useState(true);
  console.log("from home page ", state);
  // useEffect(() => {
  //   let fetchData = async () => {
  //     try {
  //       let res = getToken();
  //       let header = createHeaders(res.token);

  //       let { data } = await getAxios(
  //         "http://localhost:5000/api/v1/auth/me/",
  //         header
  //       );
  //       // updateUserData(data);
  //       console.log("from hoome page updated data result", data);

  //       if (data.role == "admin") {
  //         setAdmin(true);
  //       } else {
  //         setAdmin(false);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  return (
    <>
      <section>
        <div className="home_container">
          <Navbar />
          <NavContent />
          <Benefits />
          <Counter />
          <BootCamp />
          <Courses />
          <Pricing />
          <Footer />
        </div>
        )
      </section>
    </>
  );
};

export default HomePage;
