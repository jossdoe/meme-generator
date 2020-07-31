import React from 'react';
import css from './css.module.css';

const InputFields = ({ editorState, fields }) => {
  const { textValues, setTextField } = editorState;

  const onChangeFontFamily = (e) => editorState.setFontFamily(e.target.value);
  const onChangeFontSize = (e) => editorState.setFontSize(e.target.value);

  return (
    <div className={css.inputFields}>
      {fields.map((field, idx) => (
        <div key={idx}>
          <label htmlFor={`field${idx}`}>{field.title}</label>
          <input
            id={`field${idx}`}
            type='text'
            value={textValues[idx]}
            onChange={(e) => setTextField(idx, e.currentTarget.value)}
          />
        </div>
      ))}

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
