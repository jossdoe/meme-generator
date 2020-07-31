import React from 'react';

import css from './css.module.css';
import BackButton from '../back-button/BackButton';
import InputFields from '../input-fields/InputFields';
import GenerateButton from '../generate-button/GenerateButton';

const EditorNav = ({ editorState }) => {
  return (
    <div className={css.container}>
      <div className={css.top}>
        <BackButton />
      </div>
      <div className={css.middle}>
        <InputFields editorState={editorState} />
      </div>
      <div className={css.bottom}>
        <GenerateButton />
      </div>
    </div>
  );
};

export default EditorNav;
