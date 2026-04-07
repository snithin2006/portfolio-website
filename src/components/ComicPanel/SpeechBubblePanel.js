import React from 'react';
import './SpeechBubblePanel.css';

const SpeechBubblePanel = ({ width, height, color = '#4ad6cd', showDots = true, bubbleImage, children }) => {
  return (
    <div
      className="comic-panel"
      style={{ width: `${width}vw`, height: `${height}vw`, backgroundColor: color }}
    >
      {showDots && <div className="comic-dots"></div>}
      <div className="speech-bubble-panel-inner">
        <img
          src={bubbleImage}
          alt="Speech Bubble"
          className="speech-bubble-img"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="speech-bubble-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SpeechBubblePanel; 