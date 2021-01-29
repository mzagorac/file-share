import React, { useState } from 'react';
import './Input.css';

export default function Input(props) {
  const [isFocused, setIsFocused] = useState(false);
  const [email, setEmail] = useState(null);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleChange = e => {
    setEmail(e.target.value);
  };

  const handleBur = e => {
    if (!email) setIsFocused(false);
  };

  return (
    <div className="textfield">
      <label
        className={`${isFocused ? 'active' : ''} "textfield__label"`}
        htmlFor={props.id}
      >
        {props.label}
      </label>
      <input
        onFocus={handleFocus}
        onBlur={handleBur}
        onChange={handleChange}
        className="textfield__field"
        {...props}
      />
    </div>
  );
}
