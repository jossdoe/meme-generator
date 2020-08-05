import React, { useState } from 'react';
import './UploadButton.css';
import logo from '../../assets/logo/logo1.png';
import { useHistory } from 'react-router-dom';


function UploadButton() {
  let history = useHistory();
  const [inputValue, setInputValue] = useState('');

  

  function handleClick() {
    history.push(`/editor/custom?url=${inputValue}`);
  }
   
  return (
    <div className='uploadButton'>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>

      <input 
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleClick}>UPLOAD YOUR URL</button>
    </div>
  );
}

export default UploadButton;
