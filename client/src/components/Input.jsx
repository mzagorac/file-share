import React, { useState } from 'react';
import './Input.css';

export default function Input(props) {
  const [isFocused, setIsFocusd] = useState(false);

  // const handleFocus = () => {
  //   setIsFocusd(true);
  // };

  return (
    <div className="textfield">
      <label
        className={`${isFocused ? 'active' : ''} "textfield__label"`}
        htmlFor={props.id}
      >
        {props.label}
      </label>
      <input
        onFocus={() => setIsFocusd(true)}
        onBlur={() => setIsFocusd(false)}
        className="textfield__field"
        {...props}
      />
    </div>
  );
}
