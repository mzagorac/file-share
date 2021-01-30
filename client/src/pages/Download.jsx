import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Input from '../components/Input';
import TransferButton from '../components/TransferButton';

export default function Download() {
  const [code, setCode] = useState('');
  const [isButtonReady, setIsButtonReady] = useState(false);

  useEffect(() => {
    if (code.trim().length === 5) {
      setIsButtonReady(true);
    } else {
      setIsButtonReady(false);
    }
  }, [code]);

  return (
    <Card>
      <h1>Download</h1>
      <Input
        type="text"
        label="Enter code:"
        value={code}
        id="receiver"
        setValue={setCode}
        // emailTo={emailTo}
      />
      <TransferButton isReady={isButtonReady}>Download</TransferButton>
    </Card>
  );
}
