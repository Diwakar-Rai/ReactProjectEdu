import { createHeaders} from "CustomAxios/utility";
import { getAxios } from "CustomAxios/AxiosUtility";

import React, { createContext, useState, useEffect } from "react";

export let CoursesGlobal = createContext();
const CourseContext = ({ children }) => {
  let initialCourseState = { course: "" };
  let [course, setCourse] = useState(initialCourseState);

  let getCourseData = async token => {
    let header = createHeaders(token);
    let courseData = await getAxios(
      `http://localhost:5000/api/v1/courses`,
      {
        header,
      }
    );
    console.log("courseData", courseData.data);
    return courseData;
  };

  let updateCourseData = courseData => {
    setCourse({ ...course, course: courseData });
  };

  useEffect(() => {
    let coData = getCourseData();
    setCourse({
      ...course,
      course: coData,
    });
  }, []);

  return (
    <div>
      <CoursesGlobal.Provider
        value={{ course, updateCourseData, getCourseData }}
      >
        {children}
      </CoursesGlobal.Provider>
    </div>
  );
};

export default CourseContext;
