import React, { useContext } from 'react';

import { EditorContext } from 'context';
import css from './css.module.css';

const TextOverlay = ({ cssPositioning, content }) => {
  const {
    state: { fontFamily, fontSize }
  } = useContext(EditorContext);

  return (
    <div
      className={css.textOverlay}
      style={{
        ...cssPositioning,
        fontFamily,
        fontSize: `${fontSize}px`
      }}
    >
      {content.split('\n').map((line, key) => {
        return (
          <React.Fragment key={key}>
            {line}
            <br />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default TextOverlay;
