import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './css.module.css';
import EditorNav from '../../components/editor-nav/EditorNav';
import gridImg from '../choose-meme/gridImg';

const Editor = () => {
  const { id } = useParams();
  const image = gridImg.find((item) => item.id === parseInt(id));

  const [topValue, setTopValue] = useState('Top Text');
  const [bottomValue, setBottomValue] = useState('Bottom Text');
  const [fontFamily, setFontFamily] = useState('Impact');
  const [fontSize, setFontSize] = useState(42);

  const editorState = {
    topValue,
    setTopValue,
    bottomValue,
    setBottomValue,
    fontFamily,
    setFontFamily,
    fontSize,
    setFontSize
  };

  return (
    <main className={css.main}>
      <nav className={css.navigation}>
        <EditorNav editorState={editorState} />
      </nav>
      <section className={css.memeContainer}>
        <div className={css.meme}>
          <img src={image.src} alt='' />
          <div
            className={css.topText}
            style={{ ...image.cssTop, fontFamily, fontSize: `${fontSize}px` }}
          >
            {topValue}
          </div>
          <div
            className={css.bottomText}
            style={{
              ...image.cssBottom,
              fontFamily,
              fontSize: `${fontSize}px`
            }}
          >
            {bottomValue}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Editor;
