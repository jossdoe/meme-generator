import React from 'react';

import css from './css.module.css';
import { Link } from 'react-router-dom';

const GenerateButton = () => (
  <>
    <Link className={css.link} to='/'>
      <div className={css.generateButton}>Generate Meme</div>
    </Link>
  </>
);

export default GenerateButton;
