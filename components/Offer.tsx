
import React from 'react';
import { CTAButton } from './CTAButton';

export const Offer: React.FC = () => {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-6 flex flex-col items-center">
                <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 border-2 border-pink-500 rounded-xl shadow-2xl shadow-pink-900/30 p-8 md:p-12 text-center max-w-2xl">
                    <h2 className="text-2xl font-semibold text-pink-400">🎁 OFERTA ESPECIAL</h2>
                    <p className="mt-4 text-lg text-zinc-300">Este material já transformou a vida de diversas mulheres, mas hoje você pode garantir o acesso por apenas:</p>
                    <div className="my-8">
                        <span className="text-6xl md:text-8xl font-bold text-white tracking-tight">R$14,90</span>
                        <p className="text-zinc-400 mt-2">(valor simbólico, menos que uma pizza)</p>
                    </div>
                    <p className="text-lg text-zinc-300 mb-8">Clique no botão abaixo e comece ainda hoje a transformar seu relacionamento.</p>
                    <div className="w-full">
                        <CTAButton text="Quero meu acesso agora!" />
                    </div>
                </div>
            </div>
        </section>
    );
};