import React, { useState } from 'react';
function ShowHideText({ children }) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'}
      </button>
      {show && children}
    </div>
  );
}

export default ShowHideText;