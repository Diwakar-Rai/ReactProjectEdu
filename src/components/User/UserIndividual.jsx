import React from "react";
import "./user.css";
import user from "../../images/user.jpg";
import { Link } from "react-router-dom";
const UserIndividual = () => {
  return (
    <div className="p-0">
      {/* <section className="glassDisplay p-2 mb-2">
        <button className="btn btn-primary w-25">
          <Link to="/home">Home</Link>
        </button>
      </section> */}
      <article className="indUserParent glassDisplay">
        <section className="row p-5">
          <aside className="col col-4 pe-4 border-end border-1">
            <img src={user} alt="" />
          </aside>
          <aside className="ms-4 col col-7 p-4 bg-light  rounded-1">
            <h1 className="border-bottom pb-1">Superman</h1>
            <p>Email : superman@gmail.com</p>

            <table className="table table-striped w-100">
              <thead>
                <tr>
                  <th>Index</th>
                  <th>Course</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Core Java</td>
                  <td>
                    <button className="btn btn-primary">
                      <Link to="/courses">View</Link>
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-danger">
                      <Link to="/courses">delete</Link>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Core Java</td>
                  <td>
                    <button className="btn btn-primary">
                      <Link to="/courses">View</Link>
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-danger">
                      <Link to="/courses">delete</Link>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Core Java</td>
                  <td>
                    <button className="btn btn-primary">
                      <Link to="/courses">View</Link>
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-danger">
                      <Link to="/courses">delete</Link>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </aside>
        </section>
      </article>
    </div>
  );
};

export default UserIndividual;
