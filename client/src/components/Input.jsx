import React, { useState } from 'react';
import './Input.css';

export default function Input({ setValue, ...rest }) {
  const [isFocused, setIsFocused] = useState(false);

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
        onFocus={handleFocus}
        onBlur={handleBur}
        onChange={handleChange}
        className="textfield__field"
        {...rest}
      />
    </div>
  );
}
