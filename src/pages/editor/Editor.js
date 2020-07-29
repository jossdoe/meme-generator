import React from 'react';
import css from './css.module.css';
import EditorNav from '../../components/editor-nav/EditorNav';

const Editor = () => {
  return (
    <main className={css.main}>
      <nav className={css.navigation}>
        <EditorNav />
      </nav>
      <section className={css.meme}>
        <img src="https://via.placeholder.com/500" alt="" />
      </section>
    </main>
  );
};

export default Editor;
