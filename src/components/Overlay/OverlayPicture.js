import React, { useContext, useEffect, useState } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import domtoimage from 'dom-to-image';

import { EditorContext } from 'context';

function Modal({ memeRef }) {
  const {
    state: { showModal },
    dispatch
  } = useContext(EditorContext);
  const [imgSrc, setImgSrc] = useState(null);

  const onCloseHandler = () => dispatch({ type: 'CLOSE_OVERLAY' });

  useEffect(() => {
    domtoimage
      .toPng(memeRef)
      .then((dataUrl) => setImgSrc(dataUrl))
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  }, [memeRef]);

  return (
    <Rodal
      visible={showModal}
      onClose={onCloseHandler}
      width={800}
      height={800}
      customStyles={{ backgroundColor: 'rgb(44, 43, 43)' }}
    >
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {imgSrc ? <img src={imgSrc} alt='' /> : 'Loading ...'}
      </div>
    </Rodal>
  );
}

export default Modal;
