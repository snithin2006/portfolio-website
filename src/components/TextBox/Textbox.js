import React from 'react';
import './Textbox.css';

const TextBox = ({ text, fontSize, padding, backgroundColor }) => {
  return (
    <div className="text-box" style={{ fontSize, padding, backgroundColor }}>
      <p>{text}</p>
    </div>
  );
};

export default TextBox;
