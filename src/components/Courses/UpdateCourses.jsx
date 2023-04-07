import { getCourseById, getToken } from "CustomAxios/utility";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateCourses = () => {
  let { cid } = useParams();
  console.log(cid);
  let navigate = useNavigate()
  let [course, setCourse] = useState({
    title: "",
    description: "",
    duration: "",
    price: "",
    minimumSkill: "",
  });

  useEffect(() => {
    let fetchData = async () => {
      let token = getToken();
      let { data } = await axios.get(`http://localhost:5000/api/v1/courses`, {
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      });
      console.log("single course data", data.data);

      let course = getCourseById(data.data, cid);
      setCourse(course);
      console.log("individual course in individual in update", course);
    };
    fetchData();
  }, [cid]);

  let { title, description, duration, price, minimumSkill } = course;

  let handleChange = e => {
    let { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      let payload = { title, description, duration, price, minimumSkill };
      console.log(payload);

        
          let token = getToken();
          let { data } = await axios.put(
            `http://localhost:5000/api/v1/courses/${cid}`,payload,
            {
              headers: {
                Authorization: `Bearer ${token.token}`,
              },
              
            }
          );
         navigate("/admin")
         console.log("updated the coutsejkkjk")
    } catch (error) {
      console.log(error);
    }

    setCourse({
      title: "",
      description: "",
      duration: "",
      price: "",
      minimumSkill: "",
    });
  };

  return (
    <div>
      {/* <form action="">
        title:
        <input type="text" />
        desc:<textarea name="desc" id="" cols="30" rows="10"></textarea>
        duration:
        <input type="text" />
        price:
        <input type="number" />
        minimumSkill:
        <input type="text" />
        scholarshipAvailable:
        <input type="radio" />
        bootcamp:
        <input type="radio" />
      </form> */}
      <div className="mx-4">
        <h1>Update Course Here</h1>
      </div>
      <form className="border border-2 rounded-2 mx-4" onSubmit={handleSubmit}>
        <div className=" ">
          <label for="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </div>
        <div class=" ">
          <label for="exampleFormControlTextarea1" class="form-label">
            Description
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="description"
            value={description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className=" ">
          <label for="exampleInputEmail1" className="form-label">
            Duration
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="duration"
            value={duration}
            onChange={handleChange}
          />
        </div>
        <div className=" ">
          <label for="exampleInputEmail1" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="price"
            value={price}
            onChange={handleChange}
          />
        </div>
        <div className=" ">
          <label for="exampleInputEmail1" className="form-label">
            Minimum Skill
          </label>
          <select
            class="form-select"
            aria-label="Default select example"
            name="minimumSkill"
            value={minimumSkill}
            onChange={handleChange}
          >
            <option selected>Select Skill Level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Update Course
        </button>
      </form>
    </div>
  );
};

export default UpdateCourses;
