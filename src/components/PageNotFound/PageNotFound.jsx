import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { RiFacebookFill } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import Styles from "./PageNotFound.module.css";
const PageNotFound = () => {
  return (
    <div>
      <main className={Styles.mainDiv}>
        <div className={Styles.subDiv}>
          <div className={Styles.headH1}>
            <h1>404</h1>
          </div>
          <div className={Styles.headH2}>
            <h2>we are sorry, but the page you requested was not found</h2>
          </div>
          <div className={Styles.LinkHomeContact}>
            <Link to="/home">Go Home</Link>
            <Link to="/contact">Contact us</Link>
          </div>
          <div className={Styles.LinkIcon}>
            <div className={Styles.LinkIcon1}>
              <Link>
                <BsInstagram />
              </Link>
            </div>
            <div className={Styles.LinkIcon1}>
              <Link>
                <BsTwitter />
              </Link>
            </div>
            <div className={Styles.LinkIcon1}>
              <Link>
                <RiFacebookFill />
              </Link>
            </div>
            <div className={Styles.LinkIcon1}>
              <Link>
                <MdOutlineEmail />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PageNotFound;
