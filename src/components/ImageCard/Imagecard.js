import React from 'react';
import './Imagecard.css';

const ImageCard = ({ image, name }) => {
  return (
    <div className="image-card">
      <img src={image} alt={name} className="image-poster" />
    </div>
  );
};

export default ImageCard;