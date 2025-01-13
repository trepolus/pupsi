import React from 'react';

interface StepProps {
    img: string;
    title: string;
    description: string;
}

const Step: React.FC<StepProps> = ({ img, title, description }) => {
    return (
        <div className="step">
            <img src={`/public/${img}`} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default Step;
