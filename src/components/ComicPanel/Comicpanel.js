import React from 'react';
import './Comicpanel.css';

const ComicPanel = ({ width, height, color }) => {
  return (
    <div
      className="comic-panel"
      style={{
        width: `${width}vw`,
        height: `${height}vw`,
        backgroundColor: color,
      }}
    >
      <div className="comic-dots"></div>
    </div>
  );
};

export default ComicPanel;
