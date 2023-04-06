import React from "react";
import Styles from "./Footer.module.css";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import image1 from "./images/image_1.jpg.webp";
import { FaUser } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { ImPhone } from "react-icons/im";
import { HiPaperAirplane } from "react-icons/hi2";
import { BsSuitHeartFill } from "react-icons/bs";
const Footer = () => {
  return (
    <section className={Styles.mySection}>
      <article className={Styles.myArticle}>
        {/* firstdiv */}
        <div className={Styles.firstDiv}>
          <div className={Styles.headPara}>
            <h1>LearnTimes</h1>
            <p>ONLINE EDUCATION & LEARNING</p>
          </div>
          <div className={Styles.parag}>
            <p> A small river named Duden</p>
            <p>flows by their place and supplies</p>
            <p>it with the necessary regelialia.</p>
          </div>
          <div className={Styles.firstDivIcon}>
            <ul>
              <li>
                <Link>
                  <AiFillTwitterCircle className={Styles.fab} />
                </Link>
              </li>
              <li>
                <Link>
                  <RiInstagramFill className={Styles.fab} />
                </Link>
              </li>
              <li>
                <Link>
                  <BsFacebook className={Styles.fab} />
                </Link>
              </li>
            </ul>
            {/* <Link className={Styles.icons}> */}
            {/* <AiFillTwitterCircle className={Styles.iconsTwitter} /> */}
            {/* <AiFillTwitterCircle className={Styles.iconsTwitter} /> */}
            {/* </Link>
            <Link className={Styles.icons}>
              <BsFacebook className={Styles.iconsFace} />
            </Link>
            <Link className={Styles.insta}>
              <RiInstagramFill className={Styles.instaaa} />
            </Link> */}
          </div>
        </div>
        {/* firstdiv end */}

        {/* second div */}

        <div className={Styles.secondDiv}>
          <div className={Styles.secondHead}>
            <h1>Quick Links</h1>
          </div>

          <div className={Styles.secondDiv2}>
            <div className={Styles.arrowDiv1}>
              <Link>
                <div className={Styles.secondDivicon}>
                  <BsArrowRightShort />
                </div>
                <div className={Styles.secondDivPara}>
                  <p>Contact Us</p>
                </div>
              </Link>
            </div>

            <div className={Styles.arrowDiv1}>
              <Link>
                <div className={Styles.secondDivicon}>
                  <BsArrowRightShort />
                </div>
                <div className={Styles.secondDivPara}>
                  <p>Pricing</p>
                </div>
              </Link>
            </div>
            <div className={Styles.arrowDiv1}>
              <Link>
                <div className={Styles.secondDivicon}>
                  <BsArrowRightShort />
                </div>
                <div className={Styles.secondDivPara}>
                  <p>Terms & Conditions</p>
                </div>
              </Link>
            </div>
            <div className={Styles.arrowDiv1}>
              <Link>
                <div className={Styles.secondDivicon}>
                  <BsArrowRightShort />
                </div>
                <div className={Styles.secondDivPara}>
                  <p>Privacy</p>
                </div>
              </Link>
            </div>
            <div className={Styles.arrowDiv1}>
              <Link>
                <div className={Styles.secondDivicon}>
                  <BsArrowRightShort />
                </div>
                <div className={Styles.secondDivPara}>
                  <p>Feedbacks</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className={Styles.fourthDiv}>
          <div className={Styles.fourthDivHead}>
            <h1>Recent Posts</h1>
          </div>
          <div className={Styles.fourthDivPara}>
            <div className={Styles.fourthimg}>
              <img src={image1} alt={image1} />
            </div>
            <div className={Styles.fourthDivMain}>
              <div className={Styles.fourthDivIcon1}>
                <div className={Styles.fourthDivIcon}>
                  <p>Jan. 18,2021 </p>
                  <div className={Styles.fourthDivIcon2}>
                    <FaUser />
                    Admin
                  </div>
                </div>
              </div>
              <header className={Styles.headersec}>
                <Link>Creativity and Inspiration</Link>
              </header>
            </div>
          </div>
          <div className={Styles.fourthDivPara}>
            <div className={Styles.fourthimg}>
              <img src={image1} alt={image1} />
            </div>
            <div className={Styles.fourthDivMain}>
              <div className={Styles.fourthDivIcon1}>
                <div className={Styles.fourthDivIcon}>
                  <p>Jan. 18,2021 </p>
                  <div className={Styles.fourthDivIcon2}>
                    <FaUser />
                    Admin
                  </div>
                </div>
              </div>
              <header className={Styles.headersec}>
                <Link>Creativity and Inspiration</Link>
              </header>
            </div>
          </div>
          <div className={Styles.fourthDivPara}>
            <div className={Styles.fourthimg}>
              <img src={image1} alt={image1} />
            </div>
            <div className={Styles.fourthDivMain}>
              <div className={Styles.fourthDivIcon1}>
                <div className={Styles.fourthDivIcon}>
                  <p>Jan. 18,2021 </p>
                  <div className={Styles.fourthDivIcon2}>
                    <FaUser />
                    Admin
                  </div>
                </div>
              </div>
              <header className={Styles.headersec}>
                <Link>Creativity and Inspiration</Link>
              </header>
            </div>
          </div>
        </div>
        <div className={Styles.fourthDiv}>
          <div className={Styles.fourthDivHead}>
            <h1>Have a Questions?</h1>
          </div>
          <div className={Styles.fourthDivPara}>
            <div className={Styles.fourthimg}>
              <FaAddressBook />
            </div>
            <div className={Styles.fourthDivMain}>
              <div className={Styles.fourthDivIcon1}>
                <div className={Styles.fourthDivIcon}>
                  <Link className={Styles.Linktag}>
                    203 Fake St. Mountain View, San Francisco, California, USA
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={Styles.fourthDivPara}>
            <div className={Styles.fourthimg}>
              <ImPhone />
            </div>
            <div className={Styles.fourthDivMain}>
              <div className={Styles.fourthDivIcon1}>
                <div className={Styles.fourthDivIcon}>
                  <p> +2 392 3929 210</p>
                </div>
              </div>
            </div>
          </div>
          <div className={Styles.fourthDivPara}>
            <div className={Styles.fourthimg}>
              <HiPaperAirplane />
            </div>
            <div className={Styles.fourthDivMain}>
              <div className={Styles.fourthDivIcon1}>
                <div className={Styles.fourthDivIcon}>
                  <Link className={Styles.Linktag}>info@yourdomain.com </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <div className={Styles.lastDiv}>
        <div className={Styles.lastdivPara}>
          <p>Copyright ©2023 All rights reserved</p>
        </div>
        <div className={Styles.lastdivPara1}>
          <p>
            This template is made with by <BsSuitHeartFill /> Colorlib{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
