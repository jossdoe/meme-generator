import React from "react";
import gridImg from "./gridImg";
import Gallery from "./Gallery";
import UploadButton from "./UploadButton";
import "./Gallery.css";
import Footer from './Footer/Footer'

const ChooseMeme = () => {
  const images = gridImg.map((img) => (
    <Gallery key={img.id} id={img.id} imgFile={img.src} />
  ));

  return (
    <div>
      <UploadButton />
      <div className="gallery">{images}</div>
      <Footer />
    </div>
  );
};

export default ChooseMeme;
