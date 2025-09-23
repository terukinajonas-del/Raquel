
import React from 'react';

export const Header: React.FC = () => {
    return (
        <header className="max-w-4xl">
            <h1 className="font-serif-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                Pare de brigar, implorar ou se sentir invisível
            </h1>
            <p className="mt-8 text-lg md:text-xl text-zinc-100 bg-black/30 backdrop-blur-sm p-4 rounded-lg max-w-3xl mx-auto border border-white/20">
                Por apenas <span className="font-bold text-pink-400">R$14,90</span>, você terá acesso a um método simples que ensina a transformar a rotina do relacionamento em uma vida a dois mais leve, amorosa e cheia de conexão.
            </p>
        </header>
    );
};
