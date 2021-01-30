import React from 'react';
import Card from '../components/Card';
import Input from '../components/Input';
import TransferButton from '../components/TransferButton';

export default function Download() {
  return (
    <Card>
      <h1>Download</h1>
      <Input
        type="text"
        label="Enter code:"
        // value={emailTo}
        id="receiver"
        // setEmail={setEmail}
        // emailTo={emailTo}
      />
      <TransferButton>Download</TransferButton>
    </Card>
  );
}
