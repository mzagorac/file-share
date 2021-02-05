import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Input from '../components/Input';
import FileInput from '../components/FileInput';
import TransferButton from '../components/TransferButton';

import { isValidEmail } from '../utils';
import ProgressBar from '../components/ProgressBar';

export default function Form() {
  const [file, setFile] = useState(null);
  const [emailTo, setEmail] = useState('');
  const [isButtonReady, setIsButtonReady] = useState(false);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (file && isValidEmail(emailTo)) {
      setIsButtonReady(true);
    } else {
      setIsButtonReady(false);
    }
  }, [file, emailTo]);

  const submitHandler = e => {
    e.preventDefault();
    const fd = new FormData();
    fd.append('my-file', file);
    fd.append('email-to', emailTo);
    // fd.append('email-from', emailFrom);

    const request = new XMLHttpRequest();
    request.open('POST', 'http://127.0.0.1:8000/api/v1/uploadfile', true);

    request.upload.onprogress = e => {
      setProgress((e.loaded * 100) / e.total);
    };

    request.upload.onload = e => {
      if (e.total === e.loaded) {
        setTimeout(() => {
          setProgress(0);
          setFile(null);
          setEmail('');
        }, 3000);
      }
    };

    request.send(fd);
  };

  return (
    <Card>
      <form
        encType="multipart/form-data"
        method="post"
        onSubmit={submitHandler}
      >
        <FileInput setMyFile={setFile} file={file} />
        <Input
          type="text"
          label="Email to:"
          value={emailTo}
          id="receiver"
          setValue={setEmail}
        />
        {/* <Input type="text" label="Your email" id="sender" /> */}
        {/* <textarea></textarea> */}
        <TransferButton
          file={file}
          type="submit"
          isReady={isButtonReady} /* file={file} emailTo={emailTo} */
        >
          Transfer
        </TransferButton>
      </form>
      <ProgressBar progress={progress} />
    </Card>
  );
}
