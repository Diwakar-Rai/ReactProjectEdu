import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BootCampGlobal } from "components/ContextApi/BootcampContext";
import axios from "axios";
import { createHeaders } from "CustomAxios/utility";
import { getToken } from "CustomAxios/utility";
const BootcampAccordian = () => {
  let { id } = useParams();
  // let navigate = useNavigate();
  let { boot, updateBootcampData, getBootCampData } =
    useContext(BootCampGlobal);

  // let [modal, setModal] = useState(true);
  let [bootData, setBootData] = useState();

  useEffect(() => {
    let fetchData = async () => {
      let { data } = await getBootCampData();
      setBootData(data);
      console.log(data);
    };
    fetchData();
  }, []);

  let handleDelete = async id => {
    let token = getToken();
    await axios.delete(`http://localhost:5000/api/v1/bootcamps/${id}`, {
      headers: {
        Authorization: `Bearer ${token.token}`,
      },
    });
    window.location.assign("/admin")
  };

  // let deleteBoot = async (id) => {

  // }
  return (
    <>
      {/* {modal ? ( */}
      {/* <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div> */}
      {/* ) : (
        ""
      )} */}
      {/* <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button> */}
      <div className="accordion" id="accordionExample mb-5">
        {bootData && bootData.length < 0
          ? "loading..."
          : bootData?.map((ele, index) => {
              let { name, courses, id } = ele;
              return (
                <React.Fragment key={index}>
                  <div className="accordion-item">
                    <div className="row d-flex align-items-center justify-content-between p-2">
                      <div className="col col-5">
                        <h4 className="ps-3">{name}</h4>
                      </div>

                      <div className="col col-3">
                        <h5 className="text-center">
                          Courses: {courses.length}
                        </h5>
                      </div>
                      <div className="col col-2">
                        <button className="btn btn-primary btn-sm w-50">
                          <Link
                            to={`/admin/bootcamp/${id}`}
                            style={{
                              color: "white",
                            }}
                          >
                            View
                          </Link>
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger btn-sm w-50 "
                          onClick={() => {
                            handleDelete(id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                      <div className="col col-1 me-2">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${id}`}
                          aria-expanded="false"
                          aria-controls="collapseOne"
                        ></button>
                      </div>
                    </div>

                    <div
                      id={`collapse${id}`}
                      className="accordion-collapse collapse "
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <table className="table table-striped table-fit border border-1">
                          <thead>
                            <tr>
                              <th>Index</th>
                              <th>Course</th>
                              <th>Duration</th>
                              <th>Fees</th>
                              <th className="w-25"></th>
                            </tr>
                          </thead>
                          <tbody>
                            {courses.length > 0 &&
                              courses.map((ele, index) => {
                                let { title, duration, price } = ele;
                                return (
                                  <React.Fragment key={index}>
                                    <tr>
                                      <td>{index + 1}</td>
                                      <td>{title}</td>
                                      <td>{duration}</td>
                                      <td>{price}</td>
                                      <td>
                                        <div
                                          className="btn-group"
                                          role="group"
                                          aria-label="Basic example"
                                        >
                                          <button
                                            type="button"
                                            className="btn btn-primary btn-sm m-0"
                                          >
                                            <Link
                                              to={`/admin/individualCourse/${id}`}
                                            >
                                              View
                                            </Link>
                                          </button>
                                          <button
                                            type="button"
                                            className="btn btn-primary btn-sm m-0"
                                          >
                                            <Link
                                              to={`/admin/updateCourse/${id}`}
                                            >
                                              Update
                                            </Link>
                                          </button>
                                          <button
                                            type="button"
                                            className="btn btn-danger btn-sm m-0"
                                          >
                                            Delete
                                          </button>
                                        </div>
                                      </td>
                                    </tr>
                                  </React.Fragment>
                                );
                              })}
                          </tbody>
                        </table>
                        <div className="row">
                          <div className="col col-4"></div>
                          <div className="col col-4">
                            <nav aria-label="Page navigation example">
                              <ul className="pagination">
                                <li className="page-item">
                                  <a
                                    className="page-link"
                                    href="#"
                                    aria-label="Previous"
                                  >
                                    <span aria-hidden="true">&laquo;</span>
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a className="page-link" href="#">
                                    1
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a className="page-link" href="#">
                                    2
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a className="page-link" href="#">
                                    3
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a
                                    className="page-link"
                                    href="#"
                                    aria-label="Next"
                                  >
                                    <span aria-hidden="true">&raquo;</span>
                                  </a>
                                </li>
                              </ul>
                            </nav>
                          </div>
                          <div className="col col-4"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
      </div>
    </>
  );
};

export default BootcampAccordian;
