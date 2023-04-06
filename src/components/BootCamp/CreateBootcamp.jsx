import React, { useState, useEffect } from "react";
import axios from "axios";
import { getToken } from "CustomAxios/utility";
import { Link } from "react-router-dom";
const CreateBootcamp = () => {
  let [bootcamp, setBootcamp] = useState({
    name: "",
    description: "",
    website: "",
    email: "",
    address: "",
  });

  let [careers, setCareers] = useState([]);
  let { name, description, website, email, address } = bootcamp;

  // useEffect(() => {
  //   // let token = localStorage.getItem("token");
  //   let tokenObj = getToken()
  //   let fetchData = async () => {
  //     let { data } = await axios.get("http:localhost:5000/api/v1/bootcamps", {
  //       headers: {
  //         Authorization: `Bearer ${tokenObj.token}`,
  //       },
  //     });
  //     console.log(data);
  //   };
  //   fetchData();
  // }, []);
  let addCareers = e => {
    if (e.target.checked === true) {
      setCareers(m => {
        return [...m, e.target.value];
      });
    } else {
      setCareers([...careers.filter(f => f !== e.target.value)]);
    }
  };
  let handleChange = e => {
    let { name, value } = e.target;
    setBootcamp({ ...bootcamp, [name]: value });
  };
  let handleSubmit = async e => {
    console.log("Bootcamp added");
    let token = localStorage.getItem("token");

    e.preventDefault();
    try {
      let payload = { name, description, website, email, address, careers };
      await axios.post("http://localhost:5000/api/v1/bootcamps", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  let careerArray = [
    "web development",
    "react development",
    "fullstack development",
    "java development",
    "python development",
    "android development",
    "ux/ui development",
    "business",
    "others",
  ];
  return (
    <div>
      <div className="mx-4">
        <h2>Add Bootcamp here</h2>
      </div>
      <form onSubmit={handleSubmit} className=" border border-2 rounded-2 mx-4">
        <div className=" ">
          <label for="exampleInputEmail1" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div class=" ">
          <label for="exampleFormControlTextarea1" class="form-label">
            Description
          </label>
          <textarea
            name="description"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className=" ">
          <label for="exampleInputEmail1" className="form-label">
            Website:
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="website"
            value={website}
            onChange={handleChange}
          />
        </div>
        <div className=" ">
          <label for="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div class=" ">
          <label for="exampleFormControlTextarea1" class="form-label">
            Address:
          </label>
          <textarea
            name="address"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={address}
            onChange={handleChange}
          ></textarea>
        </div>
        <label for="exampleFormControlTextarea1" class="form-label">
          Careers
        </label>{" "}
        <span>
          {careerArray.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="careers"
                    value={item}
                    onChange={addCareers}
                    id="flexCheckIndeterminate"
                  />
                  <label class="form-check-label" for="flexCheckIndeterminate">
                    {item}
                  </label>
                </div>
              </React.Fragment>
            );
          })}
        </span>
        {/* averageRating:
        <input type="range" min={0} max={5} />
        averageCost:
        <input type="number" /> */}
        <button className="btn btn-primary text-center w-50">
          <Link to="/admin">Add Bootcamp</Link>
        </button>
      </form>
    </div>
  );
};

export default CreateBootcamp;
