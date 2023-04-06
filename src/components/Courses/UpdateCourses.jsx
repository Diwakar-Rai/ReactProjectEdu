import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UpdateCourses = () => {
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

  let handleSubmit = e => {
    e.preventDefault();
    try {
      let payload = { title, description, duration, price, minimumSkill };
      console.log(payload);
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
          Update Course
        </button>
      </form>
    </div>
  );
};

export default UpdateCourses;
