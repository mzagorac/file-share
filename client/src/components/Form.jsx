import React, { useState } from 'react';
import Input from './Input';
import FileInput from './FileInput';
import TransferButton from './TransferButton';

export default function Form() {
  const [file, setFile] = useState(null);
  const [emailTo, setEmail] = useState(null);

  const submitHandler = e => {
    e.preventDefault();
    // const file = e.target[0].files[0];
    // const emailTo = e.target[1].value;
    // const emailFrom = 'test@test.com';
    const fd = new FormData();
    fd.append('my-file', file);
    fd.append('email-to', emailTo);
    // fd.append('email-from', emailFrom);

    //   fetch('http://127.0.0.1:8000/api/v1/uploadfile', {
    //     method: 'POST',
    //     body: fd,
    //   })
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(err => console.log('Error fetching data', err));
  };

  return (
    <div>
      <form
        encType="multipart/form-data"
        method="post"
        onSubmit={submitHandler}
      >
        <FileInput setMyFile={setFile} file={file} />
        <Input
          type="text"
          label="Email to:"
          id="receiver"
          setEmail={setEmail}
          emailTo={emailTo}
        />
        {/* <Input type="text" label="Your email" id="sender" /> */}
        {/* <textarea></textarea> */}
        <TransferButton file={file} emailTo={emailTo} />
      </form>
    </div>
  );
}
