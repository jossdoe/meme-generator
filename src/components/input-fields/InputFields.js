import React, { useState } from 'react';
import css from './css.module.css';

const InputFields = () => {
  const [topValue, setTopValue] = useState('');
  const [bottomValue, setBottomValue] = useState('');
  const [fontFamily, setFontFamily] = useState('Impact');
  const [fontSize, setFontSize] = useState(16);

  const onChangeTop = (e) => setTopValue(e.currentTarget.value);
  const onChangeBottom = (e) => setBottomValue(e.currentTarget.value);
  const onChangeFontFamily = (e) => setFontFamily(e.target.value);
  const onChangeFontSize = (e) => setFontSize(e.target.value);

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
      <div className={css.dropdownContainer}>
        <div>
          <label htmlFor="font-family">Font Family</label>
          <select
            id="font-family"
            value={fontFamily}
            onChange={onChangeFontFamily}
          >
            <option value="Impact">Impact</option>
            <option value="Arial">Arial</option>
            <option value="Arial Black">Arial Black</option>
            <option value="Comic Sans">Comic Sans</option>
          </select>
        </div>
        <div>
          <label htmlFor="font-size">Font Size</label>
          <select id="font-size" value={fontSize} onChange={onChangeFontFamily}>
            <option value="16">16</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="42">42</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default InputFields;
