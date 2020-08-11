import React, { useContext } from 'react';

import css from './css.module.css';
import { EditorContext } from 'context';

const GenerateButton = () => {
  const { dispatch } = useContext(EditorContext);

  const onClickHandler = () => dispatch({ type: 'GENERATE_IMAGE' });

  return (
    <div className={css.generateButton} onClick={onClickHandler}>
      Generate Meme
    </div>
  );
};

export default GenerateButton;
