import React, { useState } from "react";
import { imagesArr1, imagesArr2, imagesArr3 } from "../../images/images";
import "./Gallery.scss";
import ModalImage from "../ModalImage/ModalImage";

function Gallery() {
  const [HoveredElementiD, setHoveredElementiD] = useState(null);
  const [fullscreenImageiD, setfullscreenImageiD] = useState(null);
  const [fullscreenImageUrl, setfullscreenImageUrl] = useState(null);

  const enterFullscreenImg = (Id, imgUrl) => {
    console.log(Id);

    setfullscreenImageiD(Id);
    setfullscreenImageUrl(imgUrl);
    document.body.style.overflow = fullscreenImageUrl ? "auto" : "hidden";
  };

  const exitFullscreenImg = () => {
    setfullscreenImageiD(null);
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
  console?.log(fullscreenImageiD);
  return (
    <section className="section-gallery">
      <div className="section-name">Gallery</div>
      {fullscreenImageUrl && (
        <ModalImage
          exitFullscreenImg={exitFullscreenImg}
          imageUrl={fullscreenImageUrl}
        ></ModalImage>
      )}
      <div className="image-grid-container">
        <div className="image-grid">
          <div className="image-grid-columns">
            {makeGallery(imagesArr1).map((image) => (
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
          <div className="image-grid-columns">
            {makeGallery(imagesArr2).map((image) => (
              <div
                className={image.className} //"image-container"
                onMouseEnter={() => handleMouseEnter(image.id)}
                onMouseLeave={handleMouseLeave}
                key={image.id}
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
                  onClick={() => enterFullscreenImg(image.id, image.imageUrl)}
                  loading="eager"
                />{" "}
              </div>
            ))}
          </div>
          <div className="image-grid-columns">
            {makeGallery(imagesArr3).map((image) => (
              <div
                className={image.className} //"image-container"
                onMouseEnter={() => handleMouseEnter(image.id)}
                onMouseLeave={handleMouseLeave}
                key={image.id}
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
                  onClick={() => enterFullscreenImg(image.id, image.imageUrl)}
                  loading="eager"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
