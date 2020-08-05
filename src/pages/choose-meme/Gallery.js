import React from 'react';
import './Gallery.css';
import { Link } from "react-router-dom";

function Gallery(props) {
  return (
    <div className={`div${props.id}`}>
      <Link to={`/editor/${props.id}`} >
      <img src={props.imgFile} alt="" />
      </Link>
    </div>
  );
}

export default Gallery;