import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Input from '../components/Input';
import ProgressBar from '../components/ProgressBar';
import TransferButton from '../components/TransferButton';

export default function Download() {
  const [code, setCode] = useState('');
  const [isButtonReady, setIsButtonReady] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (code.trim().length === 5) {
      setIsButtonReady(true);
    } else {
      setIsButtonReady(false);
    }
  }, [code]);

  async function submitHandler(e) {
    e.preventDefault();

    var request = new XMLHttpRequest();

    request.open('POST', 'http://127.0.0.1:8000/api/v1/download', true);
    request.responseType = 'blob';
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({ code }));

    request.onreadystatechange = function () {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        if (request.readyState === 4) {
          let url = window.URL.createObjectURL(this.response);
          let a = document.createElement('a');
          a.href = url;
          a.download = 'test';
          a.click();
        }
      }
    };

    request.onprogress = function (e) {
      setProgress((e.loaded * 100) / e.total);
    };

    request.onload = function (e) {
      setTimeout(() => {
        setProgress(0);
      }, 3000);
    };
  }

  return (
    <div>
      <Card>
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
        <ProgressBar progress={progress} />
      </Card>
    </div>
  );
}
