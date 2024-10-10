// src/ImageSlider.js
import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const images = [
    'https://tse3.mm.bing.net/th?id=OIP.N42xshT_PZbl4FoxVvm9KAHaDP&pid=Api&P=0&h=180',
    'https://www.sanjivaniayurveda.org.in/wp-content/uploads/2023/07/sanjivani.webp',
    'https://www.sanjivaniayurveda.org.in/wp-content/uploads/2023/07/sanjivani.webp'
];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="slider">
            <div className="slides">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            </div>
            <button className="prev" onClick={prevSlide}>&#10094;</button>
            <button className="next" onClick={nextSlide}>&#10095;</button>
        </div>
    );
};

export default ImageSlider;
