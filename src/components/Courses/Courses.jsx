import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import courseStyle from "./Courses.module.css";
import Card from "../CustomCard/Card";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CoursesGlobal } from "components/ContextApi/CourseContext";
const Courses = () => {
  // let { course, updateCourseData, getCourseData } = useContext(CoursesGlobal);

  let [course, setCourse] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      let { data } = await axios.get("http://localhost:5000/api/v1/courses");
      setCourse(data.data);
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <section className={`${courseStyle.course_section}`}>
      <div className="container">
        <div className={`${courseStyle.course_title} row`}>
          <div className="col-lg-10 textCenter">
            <span className={` ${courseStyle.subheading}`}>Our Courses</span>
            <h2 className={` ${courseStyle.Courseh2}`}>
              Explore Our Popular Online Courses
            </h2>
          </div>
        </div>
        <div className="container ">
          <div className="row">
            <div
              className={`${courseStyle.card_container_box} ${courseStyle.dflex}`}
            >
              {course?.map((item, index) => {
                let { title, description } = item;
                return (
                  <React.Fragment key={index}>
                    <div className={`${courseStyle.card_item}`}>
                      <Card
                        customStyle={{ height: "auto", borderRadius: "5px" }}
                      >
                        <a
                          href=""
                          className={`${courseStyle.card_content} dflex`}
                        >
                          <div className={`${courseStyle.card_icon}`}>
                            <HiOutlineDesktopComputer />
                          </div>
                          <div className={`${courseStyle.contet_text} dflex`}>
                            <h4 className="textCenter">{title}</h4>
                            <p style={{ textAlign: "center" }}>{description}</p>
                            <span>25 Courses</span>
                          </div>
                        </a>
                      </Card>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Courses;
