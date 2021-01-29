import React, { useState } from 'react';
import './Input.css';

export default function Input({ setEmail, emailTo, ...rest }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleChange = e => {
    setEmail(e.target.value);
  };

  const handleBur = e => {
    if (!emailTo) setIsFocused(false);
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
        onFocus={handleFocus}
        onBlur={handleBur}
        onChange={handleChange}
        className="textfield__field"
        {...rest}
      />
    </div>
  );
}
