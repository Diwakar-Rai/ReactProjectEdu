import React, { useEffect, useState } from "react";
import java from "../../images/java.jpg";
import corejava from "../../images/coreJava.jpg";

import "./bootcamp.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { getToken } from "CustomAxios/utility";
const BootcampIndividual = () => {
  let { id } = useParams();
  let [bcamp, setBCamp] = useState("");

  let { name, description, courses } = bcamp;

  let bootcampUrl = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_BOOTCAMP}`;

  useEffect(() => {
    let fetchBC = async () => {
      let token = getToken();
      let { data } = await axios.get(
        `http://localhost:5000/api/v1/bootcamps/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data.data);

      setBCamp(data.data);
      
    };
    fetchBC();
  }, [id]);

  return (
    <div className="bootcampDetail pb-5 overflowHide">
      <div className="container pt-3">
        {
          <div className="row w-100 bootRow ps-3">
            <div className="col col-12 rounded-3 m-0 h-25 p-0 ">
              <img src={java} className="rounded-3 img-fluid" alt="" />
            </div>
            <div className="col col-12 rounded-3 mt-3 overflowHidden bg-light ">
              <div className="row bg-light">
                <h1 className="border-bottom p-4" style={{ color: "black" }}>
                  {name}
                </h1>
              </div>
              <div className="row ps-3 ">
                <h4>Description</h4>
                <p>{description}</p>
                <div className="col col-6">
                  <button className="btn btn-primary w-10 btn-sm">
                    <Link to={`/admin/update/${id}`}>Update</Link>
                  </button>
                  <button className="btn btn-primary w-25 btn-sm mx-2">
                    <Link to={`/admin/createCourse/${id}`}>Add Courses</Link>
                  </button>
                </div>
              </div>
              <div className="row ps-3 mt-3">
                <h4>All Courses</h4>
                <div className="card my-2">
                  {courses?.length > 0 &&
                    courses.map((ele, index) => {
                      return (
                        <React.Fragment key={index}>
                          <div className="row">
                            <div className="col col-4 py-2">
                              <img
                                className="card-img-top"
                                src={corejava}
                                alt="Card image cap"
                              />
                            </div>
                            <div className="col col-8">
                              <div className="card-body">
                                <h5 className="card-title">CoreJava</h5>
                                <p className="card-text">
                                  Some quick example text to build on the card
                                  title and make up the bulk of the card's
                                  content.
                                </p>
                                <Link
                                  to="/individualCourses"
                                  className="btn btn-primary"
                                >
                                  view
                                </Link>
                              </div>
                            </div>
                          </div>
                        </React.Fragment>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default BootcampIndividual;
