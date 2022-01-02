import React from "react";
import spinner from "../images/spinner.gif";

const Spinner = () => {
  return (
    <div>
      <img
        src={spinner}
        alt="spinner"
        className="text-center"
        style={{ top: "50%", left: "50%" }}
      />
    </div>
  );
};

export default Spinner;
