import React, { useRef } from 'react';
import UploadIcon from './UploadIcon';
import './FileInput.css';

export default function FileInput({ setMyFile, file, ...rest }) {
  const inputFileRef = useRef(null);

  const changeHandler = e => {
    setMyFile(e.target.files[0]);
  };

  const iconClickHandler = () => {
    inputFileRef.current.click();
  };

  return (
    <div className="file-picker">
      <div className="file-picker__button">
        <UploadIcon clickHandler={iconClickHandler} file={file} />
        <label
          className={`${file ? 'file-name__label' : ''}`}
          htmlFor={rest.id}
        >
          {!file ? 'Not Picked' : `${file.name}`}
        </label>
      </div>
      <input
        hidden
        ref={inputFileRef}
        type="file"
        onChange={changeHandler}
        {...rest}
      />
    </div>
  );
}
