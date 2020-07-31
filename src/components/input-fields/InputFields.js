import React from 'react';
import css from './css.module.css';

const InputFields = ({ editorState }) => {
  const onChangeTop = (e) => editorState.setTopValue(e.currentTarget.value);
  const onChangeBottom = (e) =>
    editorState.setBottomValue(e.currentTarget.value);
  const onChangeFontFamily = (e) => editorState.setFontFamily(e.target.value);
  const onChangeFontSize = (e) => editorState.setFontSize(e.target.value);

  return (
    <div className={css.inputFields}>
      <div>
        <label htmlFor='text-top'>Text: Top</label>
        <input
          id='text-top'
          type='text'
          value={editorState.topValue}
          onChange={onChangeTop}
        />
      </div>
      <div>
        <label htmlFor='text-bottom'>Text: Bottom</label>
        <input
          id='text-bottom'
          type='text'
          value={editorState.bottomValue}
          onChange={onChangeBottom}
        />
      </div>
      <div className={css.dropdownContainer}>
        <div>
          <label htmlFor='font-family'>Font Family</label>
          <select
            id='font-family'
            value={editorState.fontFamily}
            onChange={onChangeFontFamily}
          >
            <option value='Impact'>Impact</option>
            <option value='Arial Black'>Arial Black</option>
          </select>
        </div>
        <div>
          <label htmlFor='font-size'>Font Size</label>
          <select
            id='font-size'
            value={editorState.fontSize}
            onChange={onChangeFontSize}
          >
            <option value='18'>18</option>
            <option value='22'>22</option>
            <option value='26'>26</option>
            <option value='30'>30</option>
            <option value='42'>42</option>
            <option value='54'>54</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default InputFields;
