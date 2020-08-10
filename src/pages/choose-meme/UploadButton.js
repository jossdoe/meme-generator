import React, { useState } from 'react';
import './UploadButton.css';
import logo from '../../assets/logo/logo1.png';
import { useHistory } from 'react-router-dom';
import { FaUpload } from 'react-icons/fa';

function UploadButton() {
  let history = useHistory();
  const [inputValue, setInputValue] = useState('');

  function handleClick() {
    if (inputValue === '') {
      alert('Paste your Url');
    } else if (!inputValue.includes('http://')) {
      alert('This is not URL!!!');
    } else {
      history.push(`/editor/custom?url=${inputValue}`);
    }
  }

  function handleEnter(e) {
    if (e.keyCode === 13) {
      if (inputValue === '') {
        alert('Paste your Url');
      } else if (!inputValue.includes('http://')) {
        alert('This is not URL!!!');
      } else {
        history.push(`/editor/custom?url=${inputValue}`);
      }
    }
  }

  return (
    <div className='uploadButton'>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='inputField'>
        <input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleEnter}
          autoComplete='off'
        />
        <button onClick={handleClick}>
          <FaUpload />
        </button>
      </div>
    </div>
  );
}

export default UploadButton;
