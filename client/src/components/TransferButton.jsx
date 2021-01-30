import React, { useState, useEffect } from 'react';
import { isValidEmail } from '../utils';
import './TransferButton.css';

export default function SubmitButton({
  /* file, emailTo, */ isReady,
  children,
}) {
  // const [isReady, setIsReady] = useState(false);

  // useEffect(() => {
  //   if (file && isValidEmail(emailTo)) setIsReady(true);
  //   else setIsReady(false);
  // }, [file, emailTo]);

  return (
    <div>
      <button
        disabled={!isReady}
        className={`transfer-button ${
          !isReady ? 'transfer-button__inactive' : ''
        }`}
      >
        {children}
      </button>
    </div>
  );
}
