import React from "react";
import "./ModalImage.scss";

function ModalImage(props) {
  const { imageUrl, exitFullscreenImg } = props;
  return (
    <div
      className="modal-image-backdrop"
      onClick={exitFullscreenImg}
      onScroll={exitFullscreenImg}
    >
      <div className="modal-image-container">
        <img className="modal-image" src={imageUrl} alt="Bikini model" />
      </div>
    </div>
  );
}

export default ModalImage;
