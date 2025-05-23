import React, { useState } from 'react';
import ImageCard from '../../components/ImageCard/Imagecard';
import Modal from '../../components/Modal/Modal';
import Navbar from '../../components/NavBar/Navbar';
import './Movies.css';

const Movies = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const movies = [
        { name: 'Inception', image: '/images/movies/inception.jpg', description: 'Good movie', rating: '10' },
        { name: 'Avengers: Infinity War', image: '/images/movies/infinitywar.png', description: 'Good movie', rating: '10' },
        { name: 'Zodiac', image: '/images/movies/zodiac.png', description: 'Good movie', rating: '10' },
        { name: 'John Wick', image: '/images/movies/johnwick.png', description: 'Good movie', rating: '10' },
        { name: 'Mission Impossible', image: '/images/movies/mi.png', description: 'Good movie', rating: '10' },
        { name: 'Leo', image: '/images/movies/leo.png', description: 'Amazing movie', rating: '10' },
    ];

    const openModal = (movie) => {
        setSelectedMovie(movie);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedMovie(null);
    };

    return (
        <div className="movies-page">
            <Navbar />
            <div className="movies-list">
                {movies.map((movie, index) => (
                    <div key={index} onClick={() => openModal(movie)}>
                        <ImageCard name={movie.name} image={movie.image} />
                    </div>
                ))}
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                image={selectedMovie?.image}
                name={selectedMovie?.name}
                description={selectedMovie?.description}
                rating={selectedMovie?.rating}
            />
        </div>
    );
};

export default Movies;