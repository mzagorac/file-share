import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Input from '../components/Input';
import FileInput from '../components/FileInput';
import TransferButton from '../components/TransferButton';

import { isValidEmail } from '../utils';

export default function Form() {
  const [file, setFile] = useState(null);
  const [emailTo, setEmail] = useState('');
  const [isButtonReady, setIsButtonReady] = useState(false);

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

    fetch('http://127.0.0.1:8000/api/v1/uploadfile', {
      method: 'POST',
      body: fd,
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log('Error fetching data', err));

    setFile(null);
    setEmail('');
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
          type="submit"
          isReady={isButtonReady} /* file={file} emailTo={emailTo} */
        >
          Transfer
        </TransferButton>
      </form>
    </Card>
  );
}
