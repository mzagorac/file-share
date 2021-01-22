import React from 'react';

export default function Form({ children }) {
  const submitHandler = e => {
    e.preventDefault();
    const file = e.target[0].files[0];
    const emailTo = 'test@test.com';
    const emailFrom = 'test@test.com';
    console.log('Submitted', file);
    const fd = new FormData();
    fd.append('my-file', file);
    fd.append('email-to', emailTo);
    fd.append('email-from', emailFrom);

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
        {children}
      </form>
    </div>
  );
}
