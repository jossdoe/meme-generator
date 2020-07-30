import React from 'react';
import css from './css.module.css';
import EditorNav from '../../components/editor-nav/EditorNav';

const Editor = () => {
  return (
    <main className={css.main}>
      <nav className={css.navigation}>
        <EditorNav />
      </nav>
      <section className={css.meme}></section>
    </main>
  );
};

export default Editor;
