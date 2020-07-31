import React, { useState } from 'react';
import css from './css.module.css';
import EditorNav from '../../components/editor-nav/EditorNav';

const Editor = () => {
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
        <div
          className={css.meme}
          style={{ fontFamily, fontSize: `${fontSize}px` }}
        >
          <img src="https://via.placeholder.com/500" alt="" />
          <div className={css.topText}>{topValue}</div>
          <div className={css.bottomText}>{bottomValue}</div>
        </div>
      </section>
    </main>
  );
};

export default Editor;
