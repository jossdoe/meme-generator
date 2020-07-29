import React from 'react';

import css from './css.module.css';
import BackButton from '../back-button/BackButton';
import InputFields from '../input-fields/InputFields';
import GenerateButton from '../generate-button/GenerateButton';

// Back-Button (Arrow)
// --
// Text Input One (Top text)
// Text Input Two (Bottom text)
// Dropdown menu: Font Family
// Dropdown menu: Font size
// --
// 'Generate' button

const EditorNav = () => {
  return (
    <div className={css.container}>
      <div className={css.top}>
        <BackButton />
      </div>
      <div className={css.middle}>
        <InputFields />
      </div>
      <div className={css.bottom}>
        <GenerateButton />
      </div>
    </div>
  );
};

export default EditorNav;
