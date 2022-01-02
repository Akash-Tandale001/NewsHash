import React from "react";
import spinner from "../images/spinner.gif";

const Spinner = () => {
  return (
    <div>
      <img
        src={spinner}
        alt="spinner"
        style={{ width:"75px", height:"75px",marginTop:"300px",marginLeft:"50%"}}
      />
    </div>
  );
};

export default Spinner;
