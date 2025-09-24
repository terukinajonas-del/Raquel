import React from 'react';

interface CTAButtonProps {
    text: string;
    className?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ text, className = '' }) => {
    return (
        <a 
            href="https://pay.hotmart.com/B101048045H" 
            className={`block w-full text-center bg-pink-600 text-white font-bold text-lg md:text-xl py-4 px-6 rounded-lg shadow-lg shadow-pink-900/40 transform transition-transform duration-300 hover:scale-105 hover:bg-pink-700 focus:outline-none focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50 ${className}`}
        >
            {text}
        </a>
    );
};