import React, { Component } from 'react';
import './ProgressBar.css';

export default function ProgressBar({ progress }) {
  const style = {
    backgroundColor: '#0073e5',
    width: `${progress}%`,
    height: '100%',
  };

  return (
    <div className="progress">
      <div style={style}></div>
    </div>
  );
}
