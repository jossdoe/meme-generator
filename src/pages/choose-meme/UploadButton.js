import React from 'react';
import './UploadButton.css';
import logo from '../../assets/logo/logo1.png'

function UploadButton() {
  return(
    <div className="uploadButton">
      <img src={logo} alt='logo' ></img>
      <button>UPLOAD YOUR PICTURE</button>
    </div>
  )
}


export default UploadButton;