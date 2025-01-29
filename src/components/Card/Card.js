import React from 'react';
import './Card.css';

const Card = ({ image, name }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="poster" />
    </div>
  );
};

export default Card;