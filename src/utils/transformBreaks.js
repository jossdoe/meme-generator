import React from 'react';

function transformBreaks(content) {
  return (
    <>
      {content.split('\n').map((line, key) => {
        return (
          <React.Fragment key={key}>
            {line}
            <br />
          </React.Fragment>
        );
      })}
    </>
  );
}

export default transformBreaks;
