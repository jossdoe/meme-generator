import React, { useContext } from 'react';
import { EditorContext } from '../../context';
import css from './css.module.css';

const InputFields = () => {
  const { state, dispatch } = useContext(EditorContext);

  const onChangeFontFamily = (e) =>
    dispatch({ type: 'SET_FONTFAMILY', value: e.target.value });
  const onChangeFontSize = (e) =>
    dispatch({ type: 'SET_FONTSIZE', value: e.target.value });

  return (
    <div className={css.inputFields}>
      {state.template.text.map((field, idx) => (
        <div key={idx}>
          <label htmlFor={`field${idx}`}>{field.title}</label>
          <textarea
            id={`field${idx}`}
            type='text'
            value={state.textFields[idx]}
            rows='3'
            onChange={(e) =>
              dispatch({
                type: 'SET_TEXTFIELD',
                id: idx,
                value: e.currentTarget.value
              })
            }
          />
        </div>
      ))}

      <div className={css.dropdownContainer}>
        <div>
          <label htmlFor='font-family'>Font Family</label>
          <select
            id='font-family'
            value={state.fontFamily}
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
            value={state.fontSize}
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
