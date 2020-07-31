import React from "react";
import "./Gallery.css";

function Gallery(props) {
  return (
    <div className={`div${props.id}`}>
      <img src={props.imgFile} alt="" />
    </div>
  );
}

export default Gallery;
