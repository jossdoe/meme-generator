import React from 'react';
import gridImg from './gridImg';
import Gallery from './Gallery';
import UploadButton from './UploadButton';

const ChooseMeme = () => {
  const images = gridImg.map(img => <Gallery key={img.id} imgFile={img.src} />)

  return (
    <div className="gallery">
        <UploadButton />
        {images}
    </div>
)
}






export default ChooseMeme;
