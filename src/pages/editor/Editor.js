import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './css.module.css';
import EditorNav from '../../components/editor-nav/EditorNav';
import gridImg from '../choose-meme/gridImg';

const Editor = () => {
  const { id } = useParams();
  const image = gridImg.find((item) => item.id === parseInt(id));
  const panel = image.text.find((field) => !field.textOnPicture);
  const initialTextValues = image.text.map(() => 'Your Text');

  const [textValues, setTextValues] = useState(initialTextValues);
  const setTextField = (id, value) => {
    const newValues = [...textValues];
    newValues[id] = value;
    setTextValues(newValues);
  };

  const [fontFamily, setFontFamily] = useState('Impact');
  const [fontSize, setFontSize] = useState(18);

  const editorState = {
    textValues,
    setTextField,
    fontFamily,
    setFontFamily,
    fontSize,
    setFontSize
  };

  return (
    <main className={css.main}>
      <nav className={css.navigation}>
        <EditorNav editorState={editorState} fields={image.text} />
      </nav>
      <section className={css.memeContainer}>
        <div className={css.meme}>
          {panel !== undefined ? (
            <div className={css.aboveImage}>{panel.title}</div>
          ) : null}

          <img src={image.src} alt='' />

          {image.text.map((field, idx) => (
            <div
              key={idx}
              className={css.textOverlay}
              style={{ ...field.css, fontFamily, fontSize: `${fontSize}px` }}
            >
              {textValues[idx]}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Editor;
