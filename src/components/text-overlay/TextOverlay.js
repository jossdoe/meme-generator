import React, { useContext } from 'react';

import { EditorContext } from 'context';
import css from './css.module.css';
import transformBreaks from 'utils/transformBreaks';

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
      {transformBreaks(content)}
    </div>
  );
};

export default TextOverlay;
