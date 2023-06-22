import React, { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import ContactMe from "../../components/ContactMe/ContactMe";

import Footer from "../../components/Footer/Footer";

import PortfolioImages from "../../images/PortfolioImages/PortfolioImages.jsx";
import ModalImage from "../../components/ModalImage/ModalImage";

import "./portfolio.scss";

function Portfolio() {
  const [HoveredElementiD, setHoveredElementiD] = useState(null);
  const [fullscreenImageUrl, setfullscreenImageUrl] = useState(null);

  const enterFullscreenImg = (Id, imgUrl) => {
    console.log(Id);

    setfullscreenImageUrl(imgUrl);
    document.body.style.overflow = fullscreenImageUrl ? "auto" : "hidden";
  };

  const exitFullscreenImg = () => {
    setfullscreenImageUrl(null);
    document.body.style.overflow = fullscreenImageUrl ? "auto" : "hidden";
  };

  const handleMouseEnter = (Id) => {
    setHoveredElementiD(Id);
  };

  const handleMouseLeave = () => {
    setHoveredElementiD(null);
  };

  // create new gallery array of images objects

  const makeGallery = (array) => {
    const newArray = array.map((imageUrl, i) => ({
      imageUrl,
      id: i,
      className: "image-container",
    }));
    return newArray;
  };

  return (
    <>
      <Navbar></Navbar>
      <section className="large-gallery">
        {fullscreenImageUrl && (
          <ModalImage
            exitFullscreenImg={exitFullscreenImg}
            imageUrl={fullscreenImageUrl}
          ></ModalImage>
        )}
        <div className="large-gallery-container">
          <div className="large-gallery-grid">
            <div className="large-gallery-grid-columns">
              {makeGallery(PortfolioImages).map((image) => (
                <div
                  className={image.className} //"image-container"
                  onMouseEnter={() => handleMouseEnter(image.id)}
                  onMouseLeave={handleMouseLeave}
                  key={image.id}
                  loading="eager"
                >
                  <p
                    className={`image-overlay-text ${
                      HoveredElementiD === image.id ? "show" : ""
                    }`}
                  >
                    {" "}
                    View IMAGE{" "}
                  </p>
                  <img
                    src={image.imageUrl}
                    alt="model wearing bikini"
                    loading="eager"
                    onClick={() => enterFullscreenImg(image.id, image.imageUrl)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ContactMe></ContactMe>
      <Footer></Footer>{" "}
    </>
  );
}

export default Portfolio;
