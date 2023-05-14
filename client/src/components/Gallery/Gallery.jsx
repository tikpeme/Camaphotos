import React from "react";

function Gallery() {
  return (
    <div className="imageGrid">
      <div className="imageGridColumns">
        <div className="gallery-image-wrap"></div>
        <a className="gallery-lightbox w-inline-block w-lightbox">
          <div className="gallery-img-overlay">
            <img />
          </div>
        </a>
        <a className="gallery-lightbox w-inline-block w-lightbox">
          <div className="gallery-img-overlay">
            <img />
          </div>
        </a>
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
      <div className="imageGridColumns">
        <div className="gallery-image-wrap"></div>
        <a className="gallery-lightbox w-inline-block w-lightbox">
          <div className="gallery-img-overlay">
            <img />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Gallery;
