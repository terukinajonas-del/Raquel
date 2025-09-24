
import React from 'react';

export const Header: React.FC = () => {
    return (
        <header className="max-w-4xl">
            <h1 className="font-serif-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                Pare de brigar, implorar ou se sentir invisível
            </h1>
            <p className="mt-8 text-lg md:text-xl text-zinc-100 bg-black/30 backdrop-blur-sm p-4 rounded-lg max-w-3xl mx-auto border border-white/20">
                Descubra como transformar a rotina que trouxe frieza e distanciamento no seu relacionamento em momentos de conexão, carinho e amor todos os dias.
            </p>
        </header>
    );
};
