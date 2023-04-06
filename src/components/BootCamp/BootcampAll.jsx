import React from "react";
import BootcampAccordian from "./BootcampAccordian";
import "./bootcamp.css";
import BootCampPagination from "./BootCampPagination";
const BootcampAll = () => {
  return (
    <div
      className="p-3"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <BootcampAccordian />
      <BootCampPagination />
    </div>
  );
};

export default BootcampAll;
