import React, { useRef, useEffect, useState } from 'react';
import UploadIcon from './UploadIcon';
import './FileInput.css';

export default function FileInput(props) {
  const [myFile, setMyFile] = useState(null);
  const inputFileRef = useRef(null);

  // useEffect(() => {
  //   console.log(inputFileRef.current.files[0]);
  // }, [myFile]);

  const changeHandler = e => {
    setMyFile(e.target.files[0]);
  };

  const iconClickHandler = e => {
    inputFileRef.current.click();
  };

  // console.log(myFile);

  return (
    <div className="file-picker">
      <div className="file-picker__button">
        <UploadIcon clickHandler={iconClickHandler} />
        <label htmlFor={props.id}>
          {!myFile ? 'Not Picked' : `${myFile.name}`}
        </label>
      </div>
      <input
        hidden
        ref={inputFileRef}
        type="file"
        onChange={changeHandler}
        {...props}
      />
    </div>
  );
}
