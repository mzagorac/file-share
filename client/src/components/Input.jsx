import React from 'react';
import './Input.css';

export default function Input(props) {
  return (
    <div className="textfield">
      <label className="textfield__label" htmlFor={props.id}>
        {props.label}
      </label>
      <input className="textfield__field" {...props} />
    </div>
  );
}
