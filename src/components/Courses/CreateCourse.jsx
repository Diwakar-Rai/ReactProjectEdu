import { getToken } from "CustomAxios/utility";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const CreateCourse = () => {
  let navigate = useNavigate()
  let {id} = useParams()
  let [courses, setCourses] = useState({
    title: "",
    description: "",
    duration: "",
    price: "",
    minimumSkill: "",
  });

  let { title, description, duration, price, minimumSkill } = courses;

  let handleChange = e => {
    let { name, value } = e.target;
    setCourses({ ...courses, [name]: value });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    let token = getToken();
    console.log(token)
    try {
      let payload = { title, description, duration, price, minimumSkill };

      await axios.post(`http://localhost:5000/api/v1/bootcamps/${id}/courses`, payload, {
        headers: {
          Authorization: `Bearer ${token.token}`
        }
      });

      console.log(payload);
      navigate("/admin")
    } catch (error) {
      console.log(error);
    }

    setCourses({
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
        <h1>Add Course Here</h1>
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
          Add Course
        </button>
      </form>
    </div>
  );
};

export default CreateCourse;
