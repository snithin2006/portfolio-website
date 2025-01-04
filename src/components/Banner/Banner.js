import React from 'react';
import './Banner.css';
import TextBox from '../TextBox/Textbox'; // Importing the TextBox component

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-dots"></div>

      <div className="burst left">
        <img src="/images/bubble1.png" alt="POW Bubble" />
        <span className="bubble-text-left">SOFTWARE</span>
      </div>

      <h1 className="banner-text">Nithin Sivakumar</h1>

      <div className="burst right">
        <img src="/images/bubble3.png" alt="BAM Bubble" />
        <span className="bubble-text-right">ENGINEER</span>
      </div>

      <div className="top-left-text">
        <TextBox text="Hailing from the streets of..." fontSize='1.5vw' padding='0.2vw' backgroundColor={'#f9ec5a'} />
      </div>

      <div className="bottom-right-text">
        <TextBox text="Dallas, Texas" fontSize='1.5vw' padding='0.2vw' backgroundColor={'#f9ec5a'} />
      </div>
    </div>
  );
};

export default Banner;
