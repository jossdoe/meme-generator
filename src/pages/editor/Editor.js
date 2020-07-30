import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './css.module.css';
import EditorNav from '../../components/editor-nav/EditorNav';

const testData = [
  {
    id: 1,
    src: 'https://via.placeholder.com/500',
    cssTop: {
      top: '0px',
      bottom: null,
      left: '0px',
      right: '0px'
    },
    cssBottom: {
      top: null,
      bottom: '0px',
      left: '0px',
      right: '0px'
    }
  },
  {
    id: 2,
    src: 'https://via.placeholder.com/400',
    cssTop: {
      top: '0px',
      bottom: null,
      left: '0px',
      right: '0px'
    },
    cssBottom: {
      top: null,
      bottom: '0px',
      left: '0px',
      right: '0px'
    }
  },
  {
    id: 3,
    src: 'https://via.placeholder.com/450',
    cssTop: {
      top: '0px',
      bottom: null,
      left: '0px',
      right: '0px'
    },
    cssBottom: {
      top: null,
      bottom: '0px',
      left: '0px',
      right: '0px'
    }
  }
];

const Editor = () => {
  const { id } = useParams();
  const image = testData.find((item) => item.id === parseInt(id));

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
          <img src={image.src} alt="" />
          <div className={css.topText} style={{ ...image.cssTop }}>
            {topValue}
          </div>
          <div className={css.bottomText} style={{ ...image.cssBottom }}>
            {bottomValue}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Editor;
