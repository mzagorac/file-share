import React from 'react';
import './Input.css';

export default function Input({ isFocused, setIsFocused, setValue, ...rest }) {
  

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBur = e => {
    if (!rest.value) setIsFocused(false);
  };

  return (
    <div className="textfield">
      <label
        className={`${isFocused ? 'active' : ''} "textfield__label"`}
        htmlFor={rest.id}
      >
        {rest.label}
      </label>
      <input
        autoComplete="off"
        onFocus={handleFocus}
        onBlur={handleBur}
        onChange={handleChange}
        className="textfield__field"
        {...rest}
      />
    </div>
  );
}
