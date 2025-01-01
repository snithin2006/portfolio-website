import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-dots"></div>
      <div class="burst left">POW!</div>
      <h1 className="banner-text">Nithin Sivakumar</h1>
      <div class="burst right">BAM!</div>
    </div>
  );
};

export default Banner;