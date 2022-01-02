import React from "react";
import HomeCard from "./HomeCard";
import businessimage from "../images/businesss.jpg";
import generalimage from "../images/general.jpg";
import entertaimentimage from "../images/entertaiment.jpg";
import sportimage from "../images/sport.jpg";
import healthimage from "../images/health.jpg";
import scienceimage from "../images/science.jpg";
import technologyimage from "../images/technology.jpg";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <HomeCard title="General" image={generalimage} />
        </div>
        <div className="col-md-3">
          <HomeCard title="Business" image={businessimage} />
        </div>
        <div className="col-md-3">
          <HomeCard title="Entertaiment" image={entertaimentimage} />
        </div>
        <div className="col-md-3">
          <HomeCard title="Sport" image={sportimage} />
        </div>
        <div className="col-md-3">
          <HomeCard title="Health" image={healthimage} />
        </div>
        <div className="col-md-3">
          <HomeCard title="Science" image={scienceimage} />
        </div>
        <div className="col-md-3">
          <HomeCard title="Technology" image={technologyimage} />
        </div>
      </div>
    </div>
  );
};

export default Home;
