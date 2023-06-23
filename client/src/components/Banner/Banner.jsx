import MiamiImg from "../../images/Miami_Image.jpeg";
import "./Banner.scss";
import React from "react";
import { motion } from "framer-motion";

//import "bootstrap/dist/css/bootstrap.min.css";

function Banner() {
  window.addEventListener("scroll", function () {
    let backGroundImage = document.querySelector(".backGroundImage");
    let zoomScale = 0.0006;
    const maxValue = 1.2; // maximum value allowed

    let zoomAmount = window.pageYOffset * zoomScale + 1;
    zoomAmount = Math.min(zoomAmount, maxValue);

    // console.log(`scale amount is ${zoomAmount}`);
    //  console.log(`Window offset is ${window.pageYOffset}`);

    //backGroundImage.style.transform = `scale(${zoomAmount})`;
    backGroundImage.style.scale = zoomAmount;
  });
  return (
    <motion.div
      className="backGroundWrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      //exit={{ opacity: 0, duration: 3 }}
      layout
      transition={{
        ease: "easeIn",
        duration: 1,
      }}
    >
      <img className="backGroundImage" src={MiamiImg} alt="Banner" />
    </motion.div>
  );
}

export default Banner;
