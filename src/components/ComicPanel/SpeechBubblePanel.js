import React, { useState } from 'react';
import './SpeechBubblePanel.css';

const POW_IMAGES = [
  '/images/bubbles/pow.png',
  '/images/bubbles/bam.png',
];

const SpeechBubblePanel = ({ width, height, color = '#4ad6cd', showDots = true, bubbleImage, children }) => {
  const [powVisible, setPowVisible] = useState(false);
  const [powPos, setPowPos] = useState({ x: 0, y: 0 });
  const [powImg, setPowImg] = useState(POW_IMAGES[0]);
  const [powSize, setPowSize] = useState(60);
  const [powTilt, setPowTilt] = useState(0);

  const handlePanelMouseEnter = () => {
    const x = Math.random() * 80;
    const y = Math.random() * 80;
    const img = POW_IMAGES[Math.floor(Math.random() * POW_IMAGES.length)];
    const size = 50 + Math.random() * 30; // 50px to 80px
    const tilt = -40 + Math.random() * 80; // -40deg to +40deg
    setPowPos({ x, y });
    setPowImg(img);
    setPowSize(size);
    setPowTilt(tilt);
    setPowVisible(true);
    setTimeout(() => setPowVisible(false), 400);
  };

  return (
    <div
      className="comic-panel"
      style={{ width: `${width}vw`, height: `${height}vw`, backgroundColor: color }}
      onMouseEnter={handlePanelMouseEnter}
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
        {powVisible && (
          <img
            src={powImg}
            className="pow-effect-panel"
            alt="POW!"
            style={{
              position: 'absolute',
              left: `${powPos.x}%`,
              top: `${powPos.y}%`,
              width: `${powSize}px`,
              pointerEvents: 'none',
              zIndex: 20,
              transform: `translate(-50%, -50%) rotate(${powTilt}deg)`,
              animation: 'pow-pop 0.4s cubic-bezier(.36,1.56,.64,1) both'
            }}
          />
        )}
      </div>
    </div>
  );
};

export default SpeechBubblePanel; 