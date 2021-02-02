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

  async function submitHandler(e) {
    e.preventDefault();

    const response = await fetch('http://127.0.0.1:8000/api/v1/download', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code: code }),
    });

    // console.log('response', response);
    // console.log('blob', blob);

    const blob = await response.blob();

    let url = window.URL.createObjectURL(blob);
    let a = document.createElement('a');
    a.href = url;
    a.download = 'test.mkv';
    // console.log(url);

    a.click();

    console.log(blob);
  }

  return (
    <Card>
      <h1>Download</h1>
      <form onSubmit={submitHandler}>
        <Input
          type="text"
          label="Enter code:"
          value={code}
          id="receiver"
          setValue={setCode}
          // emailTo={emailTo}
        />
        <TransferButton isReady={isButtonReady}>Download</TransferButton>
      </form>
    </Card>
  );
}
