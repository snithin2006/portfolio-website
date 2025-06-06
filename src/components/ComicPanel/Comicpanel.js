import React, { useState } from 'react';
import './Comicpanel.css';

const POW_IMAGES = [
  '/images/bubbles/pow.png',
  '/images/bubbles/bam.png',
];

const ComicPanel = ({
  width,
  height,
  color,
  showDots = true,
  image = null,
  text = '',
  children,
}) => {
  const [powPanel, setPowPanel] = useState(null);
  const [powPos, setPowPos] = useState({ x: 0, y: 0 });
  const [powImg, setPowImg] = useState(POW_IMAGES[0]);
  const [powSize, setPowSize] = useState(60);
  const [powTilt, setPowTilt] = useState(0);

  const handlePanelMouseEnter = (panelIndex) => {
    const x = Math.random() * 80;
    const y = Math.random() * 80;
    const img = POW_IMAGES[Math.floor(Math.random() * POW_IMAGES.length)];
    const size = 50 + Math.random() * 30; // 50px to 80px
    const tilt = -40 + Math.random() * 80; // -40deg to +40deg
    setPowPanel(panelIndex);
    setPowPos({ x, y });
    setPowImg(img);
    setPowSize(size);
    setPowTilt(tilt);
    setTimeout(() => setPowPanel(null), 400);
  };

  return (
    <div
      className="comic-panel"
      style={{
        width: `${width}vw`,
        height: `${height}vw`,
        backgroundColor: color,
      }}
      onMouseEnter={() => handlePanelMouseEnter(0)}
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
      {powPanel === 0 && (
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
  );
};

export default ComicPanel;
