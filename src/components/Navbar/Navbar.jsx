import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Styles from "./navbar.module.css";
import { BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import { SiSololearn } from "react-icons/si";
// import NavContent from "../NavContent/NavContent";

import { createHeaders, deleteToken, getToken } from "CustomAxios/utility";

import { loginContext } from "components/ContextApi/AppContext";
import { getAxios } from "CustomAxios/AxiosUtility";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  let { state, updateUserData, getUserData } = useContext(loginContext);

  let [admin, setAdmin] = useState(true);

  useEffect(() => {
    // if (state.me.role === "user") {
    //   setAdmin(false)
    // } else {
    //   setAdmin(true)
    // }
    let fetchData = async () => {
      try {
        let res = getToken();
        let header = createHeaders(res.token);

        let { data } = await getAxios(
          "http://localhost:5000/api/v1/auth/me/",
          header
        );
        // updateUserData(data);

        console.log(data);

        if (data.role == "admin") {
          setAdmin(true);
        } else {
          setAdmin(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div
        className="container"
        style={{
          paddingLeft: 45,
        }}
      >
        <div className={`${Styles.navBarContainer} row`}>
          <div className={`col-lg-6 ${Styles.topDiv}`}>
            <Link>
              <h1 className={Styles.logo}>
                <SiSololearn className={`${Styles.logoIcon}`} />
                LearnTimes
              </h1>

              <span className={`letterSpace`}>Online Learning Platform</span>
            </Link>
          </div>
          <div className="col-lg-6">
            <div className={`${Styles.socialIcons}`}>
              {state.token !== null ? (
                <>
                  <h2 className={Styles.loginName}>{state?.me?.name}</h2>
                  <Link
                    onClick={deleteToken}
                    to="/"
                    className={Styles.logoutButton}
                  >
                    Log Out
                  </Link>
                </>
              ) : (
                ""
              )}
              <Link>
                <BsInstagram className={Styles.icon} />
              </Link>
              <Link>
                <AiFillTwitterCircle className={Styles.icon} />
              </Link>
              <Link>
                <TbWorld className={Styles.icon} />
              </Link>
            </div>
          </div>
        </div>
        <div className="row navbarrow">
          <div className={`navbar navbar-expand-lg  ${Styles.navbar_light}`}>
            <div className={`container navBg`} style={{padding: 0}}>
              <div className={`${Styles.collapse}`} id="navbarSupportedContent">
                <ul className={`${Styles.nav_items}`}>
                  <li className={`${Styles.nav_item}`}>
                    <Link className={`${Styles.nav_link} active`} href="">
                      Home
                    </Link>
                  </li>
                  <li className={`${Styles.nav_item}`}>
                    <Link className={`${Styles.nav_link}`} href="courses.html">
                      All Courses
                    </Link>
                  </li>
                  <li className={`${Styles.nav_item}`}>
                    <Link className={`${Styles.nav_link}`} href="about.html">
                      About
                    </Link>
                  </li>
                  <li className={`${Styles.nav_item}`}>
                    <Link className={`${Styles.nav_link}`} href="team.html">
                      Team
                    </Link>
                  </li>
                  <li className={`${Styles.nav_item}`}>
                    <Link className={`${Styles.nav_link}`} href="pricing.html">
                      Pricing
                    </Link>
                  </li>
                  <li className={`${Styles.nav_item}`}>
                    <Link className={`${Styles.nav_link}`} href="blog.html">
                      Journal
                    </Link>
                  </li>
                  <li className={`${Styles.nav_item}`}>
                    <Link className={`${Styles.nav_link}`} href="contact.html">
                      Contact
                    </Link>
                  </li>
                  <li className={`${Styles.nav_item}`}>
                    {admin === true ? (
                      <Link
                        className={`${Styles.nav_link}`}
                        to="/admin"
                        style={{
                          color: "red",
                        }}
                      >
                        Dashboard
                      </Link>
                    ) : (
                      ""
                    )}
                  </li>
                </ul>
                <div className={`${Styles.divider}`}>
                  <div>
                    <span>sdgsgg</span>
                  </div>
                  <Link href="#" className={`${Styles.btn_custom}`}>
                    Get Certificate
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
