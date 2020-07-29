import React, { useState } from 'react';
import css from './css.module.css';

const InputFields = () => {
  const [topValue, setTopValue] = useState('');
  const [bottomValue, setBottomValue] = useState('');

  const onChangeTop = (e) => setTopValue(e.currentTarget.value);

  const onChangeBottom = (e) => setBottomValue(e.currentTarget.value);

  return (
    <div className={css.inputFields}>
      <div>
        <label htmlFor="text-top">Text: Top</label>
        <input
          id="text-top"
          type="text"
          value={topValue}
          onChange={onChangeTop}
        />
      </div>
      <div>
        <label htmlFor="text-bottom">Text: Bottom</label>
        <input
          id="text-bottom"
          type="text"
          value={bottomValue}
          onChange={onChangeBottom}
        />
      </div>
    </div>
  );
};

export default InputFields;
