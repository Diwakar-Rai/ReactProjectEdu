import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import corejava from "../../images/coreJava.jpg";
import axios from "axios";
import { getToken } from "CustomAxios/utility";
import { BootCampGlobal } from "components/ContextApi/BootcampContext";
import { getCourseById } from "./../../CustomAxios/utility";
const IndividualCourses = () => {
  let { boot } = useContext(BootCampGlobal);

  console.log("inv caourse dada", boot.bootcamp.data);
  // getBootCampById(boot.bootcamp.data);
  let { cid } = useParams();
  let [course, setCourse] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      let token = getToken();
      let { data } = await axios.get(`http://localhost:5000/api/v1/courses`, {
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      });
      console.log("single course data", data.data);

      let courseData = getCourseById(data.data, cid);
      setCourse(courseData);
      console.log("individual course in individual", course);
      
    };
    fetchData();
  }, [cid]);
  return (
    <div className="p-5">
      <div className="row mb-3 border-2 border-bottom">
        <h1>{course.title}</h1>
      </div>
      <div className="row">
        <div className="col col-4 pe-4 border-end border-2">
          <img src={corejava} alt="" className="w-100" />
        </div>
        <div className="col col-8">
          <h1>{course.name}</h1>
          <p>{course.description}</p>
          <p>{course.price}</p>
          <p>{course.duration}</p>
        </div>
      </div>
    </div>
  );
};

export default IndividualCourses;
