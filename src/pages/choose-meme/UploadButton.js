import React, { useState } from 'react';
import './UploadButton.css';
import logo from '../../assets/logo/logo1.png';
import { useHistory } from 'react-router-dom';

const myStyle = {
  backgroundColor: 'rgb(44, 43, 43)',
  border: '0.1em solid rgb(247, 200, 115)',
  color: 'rgb(247, 200, 115)',
  borderRadius: '0.2em',
  transition: '0.5s'
};

function UploadButton() {
  let history = useHistory();
  const [inputValue, setInputValue] = useState('');

  const [style, setStyle] = useState(myStyle);

  function handleClick() {
    history.push(`/editor/custom?url=${inputValue}`);
  }
  function changeStyle(e) {
    
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
      <button onClick={handleClick}>UPLOAD YOUR PICTURE</button>
    </div>
  );
}

export default UploadButton;
