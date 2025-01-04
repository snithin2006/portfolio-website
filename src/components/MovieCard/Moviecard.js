import React from 'react';
import './Moviecard.css';

const MovieCard = ({ image, name }) => {
  return (
    <div className="movie-card">
      <img src={image} alt={name} className="movie-poster" />
    </div>
  );
};

export default MovieCard;