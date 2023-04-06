import React from "react";
import "./user.css";
import user from "../../images/user.jpg";
import { Link } from "react-router-dom";
const UserTable = () => {
  return (
    <div className="container pt-3 px-3 userBlur overflowY">
      <div className="bg-light tableParent">
        <table class="table table-striped table-hover border text-center">
          <thead>
            <tr>
              <th className="w-25">Image</th>
              <th>Username</th>
              <th>Email</th>
              <th>Courses</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td>
                <img
                  src={user}
                  className="img-fluid"
                  height={50}
                  width={50}
                  alt=""
                />
              </td>
              <td>randomUser</td>
              <td>random@gmail.com</td>
              <td>
                <ul>
                  <li>Java</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Angular</li>
                </ul>
              </td>
              <td>
                <div class="btn-group">
                  <Link to="/admin/userTable/user" class="btn btn-primary">
                    View
                  </Link>
                  <Link to="/user" class="btn btn-primary btn-danger">
                    Block
                  </Link>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <img src={user} className="img-fluid " alt="" />
              </td>
              <td>randomUser</td>
              <td>random@gmail.com</td>
              <td>
                <ul>
                  <li>Java</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Angular</li>
                </ul>
              </td>
              <td>
                <div class="btn-group">
                  <Link to="/admin/userTable/user" class="btn btn-primary">
                    View
                  </Link>
                  <Link to="/user" class="btn btn-primary btn-danger">
                    Block
                  </Link>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <img src={user} className="img-fluid" alt="" />
              </td>
              <td>randomUser</td>
              <td>random@gmail.com</td>
              <td>
                <ul>
                  <li>Java</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Angular</li>
                </ul>
              </td>
              <td>
                <div class="btn-group">
                  <Link to="/admin/userTable/user" class="btn btn-primary">
                    View
                  </Link>
                  <Link to="/user" class="btn btn-primary btn-danger">
                    Block
                  </Link>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <img src={user} className="img-fluid img-thumbnail" alt="" />
              </td>
              <td>randomUser</td>
              <td>random@gmail.com</td>
              <td>
                <ul>
                  <li>Java</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Angular</li>
                </ul>
              </td>
              <td>
                <div class="btn-group">
                  <Link to="/admin/userTable/user" class="btn btn-primary">
                    View
                  </Link>
                  <Link to="ad/user" class="btn btn-primary btn-danger">
                    Block
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
