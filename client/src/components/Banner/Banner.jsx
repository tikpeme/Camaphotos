import MiamiImg from "../../images/Miami_Image.jpeg";
import "./Banner.scss";
import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";

function Banner() {
  return (
    <div className="backGroundWrapper">
      <img className="backGroundImage" src={MiamiImg} alt="Banner" />
    </div>
  );
}

export default Banner;
