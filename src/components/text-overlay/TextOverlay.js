import React, { useContext } from 'react';

import { EditorContext } from 'context';
import css from './css.module.css';
import transformBreaks from 'utils/transformBreaks';

const TextOverlay = ({ cssPositioning, content }) => {
  const {
    state: { fontFamily, fontSize, fontColor }
  } = useContext(EditorContext);

  return (
    <div
      className={css.textOverlay}
      style={{
        ...cssPositioning,
        fontFamily,
        fontSize: `${fontSize}px`,
        color: fontColor,
        textShadow: fontColor === 'white' ? '0px 0px 10px #000000' : null
      }}
    >
      {transformBreaks(content)}
    </div>
  );
};

export default TextOverlay;
