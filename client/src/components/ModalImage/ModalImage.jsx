import React from "react";
import "./ModalImage.scss";

function ModalImage(props) {
  const { imageUrl, exitFullscreenImg } = props;
  return (
    <div className="modal-image-container" onClick={exitFullscreenImg}>
      <img className="modal-image" src={imageUrl} alt="Bikini model" />
    </div>
  );
}

export default ModalImage;
