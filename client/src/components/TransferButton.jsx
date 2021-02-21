import React from 'react';
import './TransferButton.css';

export default function SubmitButton({
  /* file, emailTo, */ isReady,
  children,
}) {
 ;

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
