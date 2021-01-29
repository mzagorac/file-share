import React from 'react';
import './TransferButton.css';

export default function SubmitButton() {
  return (
    <div>
      <button disabled className="transfer-button transfer-button__inactive">
        Transfer
      </button>
    </div>
  );
}
