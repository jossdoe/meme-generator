import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { EditorContext } from '../../context';
import css from './css.module.css';
import EditorNav from '../../components/editor-nav/EditorNav';

const Editor = () => {
  const { state, dispatch } = useContext(EditorContext);
  const { id } = useParams();

  useEffect(() => {
    dispatch({ type: 'SET_TEMPLATE', id });
    // eslint-disable-next-line
  }, []);

  const image = state.template;
  const panel = image.text.find((field) => !field.textOnPicture) !== undefined;

  return (
    <main className={css.main}>
      <nav className={css.navigation}>
        <EditorNav />
      </nav>
      <section className={css.memeContainer}>
        <div className={css.meme}>
          {panel ? (
            <div className={css.aboveImage}>{state.textFields[0]}</div>
          ) : null}

          <img src={image.src} alt='' />

          {image.text.map((field, idx) => (
            <div
              key={idx}
              className={css.textOverlay}
              style={{
                ...field.css,
                fontFamily: state.fontFamily,
                fontSize: `${state.fontSize}px`
              }}
            >
              {state.textFields[idx]}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Editor;
