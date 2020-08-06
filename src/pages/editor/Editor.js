import React, { useContext, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { EditorContext } from 'context';
import css from './css.module.css';
import EditorNav from 'components/editor-nav';
import Panel from 'components/panel';
import TextOverlay from 'components/text-overlay';
import getQueryParam from 'util/getQueryParam';

const Editor = ({ custom }) => {
  const { state, dispatch } = useContext(EditorContext);
  const { id } = useParams();
  const memeRef = useRef(null);

  useEffect(() => {
    dispatch(
      custom
        ? {
            type: 'SET_CUSTOMIMAGE',
            value: getQueryParam('url')
          }
        : {
            type: 'SET_TEMPLATE',
            id
          }
    );
    // eslint-disable-next-line
  }, []);

  const { template, textFields } = state;
  const panel = template.text.some((field) => !field.textOnPicture);

  return (
    <main className={css.main}>
      <nav className={css.navigation}>
        <EditorNav />
      </nav>
      <section className={css.memeContainer}>
        <div className={css.meme} ref={memeRef}>
          {panel ? <Panel content={textFields[0]} /> : null}

          <img src={template.src} alt='' />

          {template.text.map((field, idx) => (
            <TextOverlay cssPositioning={field.css} content={textFields[idx]} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Editor;
