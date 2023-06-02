import React, { useState } from "react";
import { imagesArr1, imagesArr2, imagesArr3 } from "../../images/images";
import "./Gallery.scss";

function Gallery() {
  const [HoveredElementiD, setHoveredElementiD] = useState(null);

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
  console.log(makeGallery(imagesArr1));
  return (
    <section className="section-gallery">
      <div className="section-name">Gallery</div>
      <div className="image-grid-container">
        <div className="image-grid">
          <div className="image-grid-columns">
            {makeGallery(imagesArr1).map((image) => (
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

                <img src={image.imageUrl} />
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

                <img src={image.imageUrl} />
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

                <img src={image.imageUrl} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;

/*
 <section className="section-gallery">
      <h2 className="section-title center max-width"> Gallery </h2>
      <div className="container-gallery">
        <div className="imageGrid">
          <div className="imageGridColumns">
            <div className="gallery-image-wrap">
              <a className="gallery-lightbox">
                <div className="gallery-img-overlay">
                  <div className="gallery-img-overlay-text"> View Image </div>
                </div>
                <img src={images.test1} />
              </a>
            </div>
          </div>
          <div className="imageGridColumns">
            <div className="gallery-image-wrap"></div>
            <a className="gallery-lightbox w-inline-block w-lightbox">
              <div className="gallery-img-overlay">
                <img />
              </div>
            </a>
          </div>
          <div className="imageGridColumns">
            <div className="gallery-image-wrap"></div>
            <a className="gallery-lightbox w-inline-block w-lightbox">
              <div className="gallery-img-overlay">
                <img />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>*/
