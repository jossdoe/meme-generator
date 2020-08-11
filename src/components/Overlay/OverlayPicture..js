import React, { useState } from 'react';

import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

function Modal() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>show</button>

      <Rodal visible={visible} onClose={() => setVisible(false)}>
        <div>Content</div>
      </Rodal>
    </div>
  );
}

export default Modal;
