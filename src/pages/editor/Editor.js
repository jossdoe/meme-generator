import React from 'react';
import css from './css.module.css';
import EditorNav from '../../components/editor-nav/EditorNav';

const Editor = () => {
  return (
    <main className={css.main}>
      <nav className={css.navigation}>
        <EditorNav />
      </nav>
      <section className={css.memeContainer}>
        <div className={css.meme}>
          <img src="https://via.placeholder.com/500" alt="" />
          <div className={css.topText}>This is top text</div>
          <div className={css.bottomText}>This is bottom text</div>
        </div>
      </section>
    </main>
  );
};

export default Editor;
