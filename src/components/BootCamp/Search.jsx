import React from "react";
import "../BootCamp/bootcamp.css";
import { Link } from "react-router-dom";
const Search = () => {
  return (
    <div className="bootcampDetail row d-flex align-items-center ms-0 mb-1" >
      <div className="col-4">
        <button className="btn btn-primary btn-sm ms-1 w-25">
          <Link to="/home">Home</Link>
        </button>
        <button className="btn btn-primary btn-sm ms-1 w-50">
          <Link to="/admin/addBootcamp">Add Bootcamp</Link>
        </button>
      </div>
      <div className="col-8">
        <nav className="navbar bg-body-tertiary">
          <div className="container px-0">
            <form className="d-flex flex-row w-100" role="search">
              <input
                className="form-control me-2 searchForm h-75 "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success w-50" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Search;
