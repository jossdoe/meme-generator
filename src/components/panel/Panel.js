import React from 'react';
import css from './css.module.css';

const Panel = ({ content }) => (
  <div className={css.aboveImage}>
    <div>
      {content.split('\n').map((line, key) => {
        return (
          <React.Fragment key={key}>
            {line}
            <br />
          </React.Fragment>
        );
      })}
    </div>
  </div>
);

export default Panel;
