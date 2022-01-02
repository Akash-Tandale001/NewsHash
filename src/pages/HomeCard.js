import React from "react";
import { Link } from "react-router-dom";

const HomeCard = (props) => {
  let { title, image } = props;

  function lowerFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
  }

  const linkto=`/${lowerFirstLetter(title)}`;
  return (
      <Link to={linkto}>
    <div className="my-4 "> 
      <div class="card shadow p-3 mb-4  bg-body rounded" style={{width: "20rem" , height: "18rem"}}>
        <img src={image} class="card-img-top" alt="..."style={{height:"185px"}} />
        <div class="card-body">
          <p class="card-text text-center " style={{color:"black",fontWeight:"bolder",textDecorationStyle:"none"}}>{title}</p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default HomeCard;
