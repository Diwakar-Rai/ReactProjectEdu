import React from 'react'
import "./bootcamp.css"
const BootCampPagination = () => {
  return (
    <>
      <div className="row mt-5 pt-5 ">
        <div className="col col-4"></div>
        <div className="col col-4 pt-5 mt-5">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#">
                  Previous
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col col-4"></div>
      </div>
    </>
  );
}

export default BootCampPagination
