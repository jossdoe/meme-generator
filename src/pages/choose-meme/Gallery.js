import React from 'react';


function Gallery(props) {
  
  return (
    <div className="gallery-item">
      <img className={props.id} src={props.imgFile} alt="" />
    </div>
  )
}


export default Gallery;