import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-dots"></div>

      <div className="burst left">
        <img src="/images/bubble1.png" alt="POW Bubble" />
        <span className="bubble-text-left">ABOUT</span>
      </div>

      <h1 className="banner-text">Nithin Sivakumar</h1>

      <div className="burst right">
        <img src="/images/bubble1.png" alt="BAM Bubble" />
        <span className="bubble-text-right">ME</span>
      </div>
    </div>
  );
};

export default Banner;