import React from 'react';
import '../assets/styles/Banner.scss';

const Banner: React.FC = () => {
    return (
        <div className="banner-container">
            <img className="pupsi-logo" src="PupsiLogo.png" alt="Pupsi Logo" />
            <div className="title-section">
                <h1>Pupsi 🚽💨</h1>
                <p className="tagline">Your Whiff-Free Bathroom Hero!</p>
            </div>
        </div>
    );
};

export default Banner;
