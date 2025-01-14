import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Step from './components/Step';
import Button from './components/Button';
import './assets/styles/main.scss';

const App: React.FC = () => {
    const steps = [
        {
            img: "step1.png",
            title: "Step 1: Open the Flask 🍼",
            description: "Pop open your Pupsi Flask and get ready for magic!",
        },
        {
            img: "step2.png",
            title: "Step 2: Add 3 Drops 💧",
            description: "Drop 3 droplets into the toilet bowl before use.",
        },
        {
            img: "JavierStep.png",
            title: "Step 2.1: Let Javier Take Over! 🚽✨",
            description: "After adding Pupsi droplets, sit back, relax, and let Pupsi work its magic. Even Javier can’t help but smile!",
        },
        {
            img: "step3.png",
            title: "Step 3: Flush 🚽✨",
            description: "Say goodbye to odours and hello to freshness!",
        },
    ];

    return (
        <div>
            <Header />
            <Hero />
            <div className="steps">
                {steps.map((step, index) => (
                    <div key={index} className="step-container">
                        <Step img={step.img} title={step.title} description={step.description} />
                    </div>
                ))}
            </div>
            <div className="buy-button-container">
                <Button onClick={() => alert('Redirecting to store...')}>
                    Buy Pupsi Now
                </Button>
            </div>
            <Footer />
        </div>
    );
};

export default App;