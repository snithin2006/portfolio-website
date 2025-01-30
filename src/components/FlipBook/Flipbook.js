import React, { useState, useEffect } from 'react';
import './Flipbook.css';
import HTMLFlipBook from 'react-pageflip';
import Page from '../Page/Page';

const FlipBook = ({ isOpen, onClose, image, name, description }) => {
    const [isActive, setIsActive] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false); // New state to track the flip completion

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                setIsActive(true);
            }, 100);
        } else {
            setIsActive(false);
            setIsFlipped(false); // Reset flip state when closing the modal
        }
    }, [isOpen]);

    useEffect(() => {
        if (isActive) {
            setTimeout(() => {
                setIsFlipped(true); // After the card flip animation, show the flipbook
            }, 1000); // Match this to your animation time
        }
    }, [isActive]);

    if (!isOpen) return null;

    return (
        <div className="main" onClick={onClose}>
            {!isFlipped && (
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
                    </div>
                </div>
            )}


            {isFlipped && (
                <div className="flipbook-container" onClick={(e) => e.stopPropagation()}>
                    <HTMLFlipBook
                        width={window.innerHeight * 0.5}
                        height={window.innerHeight * 0.7}
                    >
                        <Page number="1">
                            Welcome to {name}
                        </Page>
                        <Page number="2">
                            {description}
                        </Page>
                        <Page number="3">
                            Project Details
                        </Page>
                        <Page number="4">
                            Thank you for viewing!
                        </Page>
                    </HTMLFlipBook>
                </div>
            )}
        </div>
    );
};

export default FlipBook;
