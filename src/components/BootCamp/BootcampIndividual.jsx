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
  let [indBCamp, setIndBCamp] = useState("")
  // let { name, photo, website, email, description}
  let { name, description } = bcamp;


  let bootcampUrl = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_BOOTCAMP}`;

  useEffect(() => {
    let token = getToken();
    let fetchIBC = async () => {
      let { data } = await axios.get(`http://localhost:5000/api/v1/bootcamps/${id}`, {
        headers: {
        Authorization: `Bearer ${token}`
        }
      })
      
      setIndBCamp(data.data);

      console.log("individual bootcamp",data.data)
    }
    fetchIBC();
    let fetchBC = async () => {
      let { data } = await axios.get(
        `http://localhost:5000/api/v1/bootcamps/${id}/courses`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("ind bootcamp ,,,", data.data);

      setBCamp(data.data);
      console.log("bcamp", bcamp);
    };
    fetchBC();
  }, [id]);

  return (
    <div className="bootcampDetail pb-5 overflowHide">
      <div className="container pt-3">
        {
          <div className="row w-100 bootRow ps-3">
            <div className="col col-4 rounded-3 m-0 h-25 p-0 ">
              <img src={`http://localhost:5000/upload/${indBCamp.photo}`} className="rounded-3 img-fluid w-100 h-25" alt="" />
            </div>
            <div className="col col-8 rounded-3 overflowHidden bg-light ">
              <div className="row bg-light">
                <h1 className="border-bottom p-4" style={{ color: "black" }}>
                  {indBCamp.name}
                </h1>
              </div>
              <div className="row ps-3 ">
                <h4>Description</h4>
                <p>{indBCamp.description}</p>
                <div className="col col-6">
                  <button className="btn btn-primary w-10 btn-sm">
                    <Link to={`/admin/update/${id}`}>Update</Link>
                  </button>
                  <button className="btn btn-primary w-50 btn-sm mx-2">
                    <Link to={`/admin/createCourse/${id}`}>Add Courses</Link>
                  </button>
                </div>
              </div>
              <div className="row ps-3 mt-3">
                <h4>All Courses</h4>
                <div className="card my-2">
                  {bcamp?.length > 0 &&
                    bcamp.map((ele, index) => {
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
                                <h5 className="card-title">{ele.title }</h5>
                                <p className="card-text">
                                  
                                </p>
                                <Link
                                  to={`/admin/individualCourse/${ele._id}`}
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
