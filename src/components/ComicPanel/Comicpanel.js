import React from 'react';
import './Comicpanel.css';

const ComicPanel = ({
  width,
  height,
  color,
  showDots = true,
  image = null,
  text = '',
  children,
}) => {
  return (
    <div
      className="comic-panel"
      style={{
        width: `${width}vw`,
        height: `${height}vw`,
        backgroundColor: color,
      }}
    >
      {showDots && <div className="comic-dots"></div>}
      {image && (
        <div
          className="comic-image"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
      )}
      {text && (
        <div
          className="comic-text"
          dangerouslySetInnerHTML={{ __html: text }}
        ></div>
      )}
      {children}
    </div>
  );
};

export default ComicPanel;
