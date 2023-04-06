import React, { useEffect, useState } from "react";
import bootcampStyle from "./BootCamp.module.css";
import Card from "../CustomCard/Card";
import { GrCertificate } from "react-icons/gr";
import { MdStarRate } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import axios from "axios";

const BootCamp = () => {
  let [bootcamp, setBootcamp] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      let { data } = await axios.get("http://localhost:5000/api/v1/bootcamps");
      setBootcamp(data.data)
      console.log(bootcamp)
    };

    fetchData();
  }, []);
  // let bootCampData = [
  //   {
  //     icon: "s",
  //     heading: "Introducing to Programming with WordPress",
  //     rating: [<MdStarRate />, <MdStarRate />, <AiOutlineStar />],
  //     totalCourse: "34",
  //     price: "24",
  //   },
  //   {
  //     icon: "s",
  //     heading: "Basic Fundamentals for Software Engineering",
  //     rating: [1, 2, 3, 4, 5],
  //     totalCourse: "20",
  //     price: "234",
  //   },
  //   {
  //     icon: "s",
  //     heading: "HTML, CSS, and Javascript for Web Developers",
  //     rating: [1, 2, 3, 4, 5],
  //     totalCourse: "18",
  //     price: "32",
  //   },
  // ];
  return (
    <>
      
      <section className={`${bootcampStyle.course_section}`}>
        <div className="container">
          <div className={`${bootcampStyle.course_title} row`}>
            <div className="col-lg-10 textCenter">
              <span className={` ${bootcampStyle.subheading}`}>
                Our Courses
              </span>
              <h2 className={` ${bootcampStyle.Courseh2}`}>
                Explore Our Popular Bootcamp Courses
              </h2>
            </div>
          </div>
          <div className="container">
            <div className={`${bootcampStyle.course_cards} row`}>
              {bootcamp && bootcamp?.length > 0 ? (bootcamp.map((item, index) => {
                let { name, courses } = item;
                return (
                  <React.Fragment key={index + 1}>
                    <div className="col-lg-4 ">
                      <Card
                        customStyle={{
                          height: "auto",
                          width: "100%",
                          padding: 30,
                        }}
                      >
                        <div className={`${bootcampStyle.bootcampContent}`}>
                          <div
                            className={`${bootcampStyle.bootcampcontentwrapper}`}
                          >
                            <div className={`${bootcampStyle.bootcampicon}`}>
                              {/* <span>{item.icon}</span>  */}
                            </div>
                            <div className={`${bootcampStyle.bootcampdata}`}>
                              <h1> {item.name}</h1>
                              <span> Ratings {item.rating}</span>
                              <h1> {courses.length} Total Course</h1>
                            </div>
                          </div>
                          <div
                            className={`${bootcampStyle.bootcampbtnwrapper}`}
                          >
                            <a href="">Enroll now</a>
                            <a href="">Price</a>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </React.Fragment>
                );
              })):"no Data"}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BootCamp;
