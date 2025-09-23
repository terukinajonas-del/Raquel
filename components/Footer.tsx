import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="py-8 bg-black">
            <div className="container mx-auto px-6 text-center text-zinc-500">
                <p>&copy; {new Date().getFullYear()} Raquel Thomaz. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};