import React, { useContext, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { EditorContext } from '../../context';
import css from './css.module.css';
import EditorNav from '../../components/editor-nav/EditorNav';

const Editor = ({ custom }) => {
  const { state, dispatch } = useContext(EditorContext);
  const { id } = useParams();
  const memeRef = useRef(null);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const customUrl = urlParams.get('url');

    const args = custom
      ? {
          type: 'SET_CUSTOMIMAGE',
          value: customUrl
        }
      : {
          type: 'SET_TEMPLATE',
          id
        };

    dispatch(args);
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
        <div className={css.meme} ref={memeRef}>
          {panel ? (
            <div className={css.aboveImage}>
              <div>
                {state.textFields[0].split('\n').map((line, key) => {
                  return (
                    <React.Fragment key={key}>
                      {line}
                      <br />
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          ) : null}

          <img src={image.src} alt='' />

          {image.text.map((field, idx) => (
            <div
              key={idx}
              className={css.textOverlay}
              style={{
                ...field.css,
                fontFamily: state.fontFamily,
                fontSize: `${state.fontSize}px`,
                whiteSpace: 'pre-line'
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
