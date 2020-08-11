import React from 'react';

import css from './css.module.css';
import BackButton from 'components/back-button/BackButton';
import InputFields from 'components/input-fields/InputFields';
import GenerateButton from 'components/generate-button/GenerateButton';

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
