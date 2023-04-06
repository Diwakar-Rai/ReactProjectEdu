import React, { useContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./global.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AdminMain from "./components/admin/AdminMain";

import BootcampAll from "./components/BootCamp/BootcampAll";
import BootcampIndividual from "components/BootCamp/BootcampIndividual";
import IndividualCourses from "./components/Courses/IndividualCourses";
import Login from "components/Login/Login";
import Registration from "components/Registration/Registration";
import UserTable from "components/User/UserTable";
import Spinner from "components/spinner/Spinner";
import UserIndividual from "components/User/UserIndividual";
import Courses from "./components/Courses/Courses";
import Footer from "./components/footer/Footer";
import { loginContext } from "components/ContextApi/AppContext";
import BootCamp from "components/BootCamp/BootCamp";
import UpdateBootcamp from "components/BootCamp/UpdateBootcamp";
import PageNotFound from "components/PageNotFound/PageNotFound";
import ConTact from './components/ConTact/ConTact';
import CreateBootcamp from "components/BootCamp/CreateBootcamp";
import CreateCourse from "components/Courses/CreateCourse";
import UpdateCourses from "components/Courses/UpdateCourses";
const App = () => {
  let { state } = useContext(loginContext)
  // let [admin, setAdmin] = useState(false)
  useEffect(() => {
    // if (state?.role?.me === "admin") {
    //   setAdmin(true)
      
    // }
  },[])
  return (
    <div>
      <div className="homepage_container">
        <Router>
          {/* <Navbar /> */}
          {/* <Registration/> */}
          {/* <Spinner/> */}
          {/* <BootCamp/> */}
          {/* <CreateBootcamp /> */}
          {/* <UpdateBootcamp /> */}
          {/* <Courses/> */}
          {/* <CreateCourse/> */}
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Registration />}></Route>
            <Route path="/admin" element={<AdminMain />}>
              <Route index element={<BootcampAll />} />
              <Route path="bootcamp/:id" element={<BootcampIndividual />} />
              <Route path="userTable" element={<UserTable />} />
              <Route path="userTable/user" element={<UserIndividual />} />
              <Route path="update/:id" element={<UpdateBootcamp />} />
              <Route path="addBootcamp" element={<CreateBootcamp />} />
              <Route path="createCourse/:id" element={<CreateCourse />} />
              <Route path="individualCourse/:id" element={ <IndividualCourses/> } />
              <Route path="updateCourse/:id" element={ <UpdateCourses/> } />
              
            </Route>

            <Route path="/individualCourses" element={<IndividualCourses />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/*" element={<PageNotFound />} />
            <Route path="/contact" element={<ConTact />} />
          </Routes>
          <Footer/>
          {state?.role?.me === "user" ?<Footer />:""}
        </Router>
      </div>
    </div>
  );
};

export default App;
