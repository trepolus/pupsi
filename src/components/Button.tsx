import React, { ReactNode } from 'react';

interface ButtonProps {
    onClick: () => void;
    children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
    <button className="btn" onClick={onClick}>
        {children}
    </button>
);

export default Button;
