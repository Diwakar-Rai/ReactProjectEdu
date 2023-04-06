import React from 'react'
import "./spinner.css"
import solo from "../../images/Solo.png"
const Spinner = () => {
  return (
    <div className="spinnerParent">
      <div className="spinnerBody">
        <img src={solo} alt=""/>
      </div>
    </div>
  );
}

export default Spinner
