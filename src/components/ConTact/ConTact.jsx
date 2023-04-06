import React, { useState } from "react";
import Styles from "./ConTact.module.css";
import image1 from "./images/paint-1280557_960_720.jpg";
import { CgRadioChecked } from "react-icons/cg";
const ConTact = () => {
  let [state, setState] = useState({
    name: "",
    company_name: "",
    optionList: "",
    email: "",
    number: "",
    message: "",
  });
  let { name, company_name, optionList, email, number, message } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = e => {
    e.preventDefault();
    console.log(state);
    setState({
      name: "",
      company_name: "",
      optionList: "",
      email: "",
      number: "",
      message: "",
    });
  };

  return (
    <section>
      <div className={Styles.imgDiv}>
        <img src={image1} alt={image1} />
        <div className={Styles.mainDiv}>
          <div>
            <h1>CONTACT US</h1>
          </div>
          <div className={Styles.para}>
            <p>Speak with our </p>
            <p> quality Trainers.</p>
          </div>
          <div className={Styles.conTent}>
            <p className={Styles.para1}>
              Our friendly experts are here to help you. These are just some of
              the things you can ask of them:
            </p>
            <ul>
              {/* we can give multile classanme like that using interpolation */}
              <li className={`${Styles.dflex}`}>
                <CgRadioChecked className={Styles.icon} />
                <span>
                  Inquire about a personalized Proof of Concept (POC).
                </span>
              </li>
              <li className={`${Styles.dflex}`}>
                <CgRadioChecked className={Styles.icon} />
                <span>
                  Receive a free consultation about your technology and business
                  assurance needs.
                </span>
              </li>
              <li className={`${Styles.dflex}`}>
                <CgRadioChecked className={Styles.icon} />
                <span>
                  Learn about our unique and customizable pricing for
                  engagements.
                </span>
              </li>
              <li className={`${Styles.dflex}`}>
                <CgRadioChecked className={Styles.icon} />
                <span>
                  Get insights from Qualitest clients with similar needs.
                </span>
              </li>
            </ul>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={Styles.formDiv}>
              <input
                type="text"
                name="name"
                value={name}
                className={Styles.formControl}
                id="formName"
                placeholder="enter you name*"
                onChange={handleChange}
                required
              />
            </div>
            <div className={Styles.formDiv}>
              <input
                type="text"
                name="company_name"
                value={company_name}
                className={Styles.formControl}
                id="formCompany"
                placeholder="enter your company name*"
                onChange={handleChange}
                required
              />
            </div>

            <div className={Styles.formDiv}>
              <select
                id="cars"
                name="optionList"
                value={optionList}
                onChange={handleChange}
                className={Styles.formControl}
                required
              >
                <option value="message">
                  What would you like to talk about?
                </option>
                <option value="TestYantra Services">TestYantra Services</option>
                <option value="Career Opportunities">
                  Career Opportunities
                </option>
                <option value="Partnership Inquiriesfiat">
                  Partnership Inquiries
                </option>
                <option value="Media">Media</option>
              </select>
            </div>
            <div className={Styles.formDiv}>
              <input
                type="text"
                name="email"
                value={email}
                className={Styles.formControl}
                id="formEmail"
                placeholder="enter you mail*"
                onChange={handleChange}
                required
              />
            </div>
            <div className={Styles.formDiv}>
              <input
                type="tel"
                name="number"
                value={number}
                className={Styles.formControl}
                id="formSubject"
                required
                placeholder="enter your number*"
                onChange={handleChange}
              />
            </div>
            <div className={Styles.formDiv}>
              <textarea
                type="text"
                name="message"
                value={message}
                className={Styles.formControl}
                id="formMessage"
                placeholder=" message *"
                required
                onChange={handleChange}
                style={{ "min-height": "200px" }}
              ></textarea>
            </div>
            <div className={Styles.formDiv}>
              <button type="submit" className={Styles.formButton}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConTact;
