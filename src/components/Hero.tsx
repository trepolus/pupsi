import React from 'react';
import '../assets/styles/Hero.scss';

const Hero: React.FC = () => {
    return (
        <div className="hero-container">
            <img className="pupsi-logo" src="PupsiLogo.png" alt="Pupsi Flask" />
            <h2 className="hero-title">Eliminate Odours with Pupsi!</h2>
            <p className="hero-description">
                Say goodbye to embarrassing moments and hello to freshness with just 3 magical droplets! 💧💧💧
            </p>
        </div>
    );
};

export default Hero;
