import React from 'react';

function Gallery(props) {
  return (
    <div className="gallery-item">
      {props.imgFile}
    </div>
  )
}


export default Gallery;