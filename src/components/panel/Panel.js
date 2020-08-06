import React from 'react';
import css from './css.module.css';
import transformBreaks from 'utils/transformBreaks';

const Panel = ({ content }) => (
  <div className={css.aboveImage}>
    <div>{transformBreaks(content)}</div>
  </div>
);

export default Panel;
