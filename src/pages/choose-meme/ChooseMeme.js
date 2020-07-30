import React from 'react';
import gridImg from './gridImg';
import Gallery from './Gallery';
import UploadButton from './UploadButton';
import './Gallery.css'

const ChooseMeme = () => {
  const images = gridImg.map(img => <Gallery key={img.id} id={img.id} imgFile={img.src} />)

  return (
    <div >
        <UploadButton />
    <div className="gallery">
        {images}
    </div>
    </div>
)
}






export default ChooseMeme;
