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

    var request = new XMLHttpRequest();

    request.open('POST', 'http://127.0.0.1:8000/api/v1/download', true);
    request.responseType = 'blob';
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({ code }));

    request.onreadystatechange = function (event) {
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
      // console.log(e.loaded, '-', e.total);
      console.log((e.loaded * 100) / e.total);
    };

    request.onload = function (e) {
      console.log('LOADED', e);
    };

    // request.addEventListener('readystatechange', e => {
    //   console.log('request listener event object', e);
    // });

    // const response = await fetch('http://127.0.0.1:8000/api/v1/download', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ code: code }),
    // });

    // const blob = await response.blob();

    // while (true) {
    //   const { done, value } = await blob.stream().getReader().read();
    //   console.log('done', value);
    //   console.log('done', done);

    //   if (done) break;
    // }

    // console.log('blob - stream', blob.stream());
    // console.log('response', response);
    // for (let [name, value] of response.headers.entries()) {
    //   console.log(name, ':', value);
    // }

    // let url = window.URL.createObjectURL(blob);
    // let a = document.createElement('a');
    // a.href = url;
    // a.download = 'test';

    // a.click();
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
