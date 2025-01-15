import React, { useState, useEffect } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, image, name, description, rating }) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (isOpen) {
            // Small delay to ensure modal is rendered before animation
            setTimeout(() => {
                setIsActive(true);
            }, 100);
        } else {
            setIsActive(false);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="main" onClick={onClose}>
            <div
                className={`card ${isActive ? 'active' : ''}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="cover">
                    <img src={image} alt={name} />
                    <img src={image} alt={name} />
                </div>

                <div className="content">
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <p>{rating}/10</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;