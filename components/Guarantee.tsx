
import React from 'react';
import { ShieldIcon } from './icons/ShieldIcon';

export const Guarantee: React.FC = () => {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-8 flex flex-col md:flex-row items-center text-center md:text-left gap-8">
                    <div className="text-pink-500 flex-shrink-0">
                        <ShieldIcon className="w-20 h-20"/>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">🛡️ Sua Satisfação Garantida</h2>
                        <p className="mt-4 text-lg text-zinc-300">
                            Seu risco é zero. Se dentro de 7 dias você sentir que o conteúdo não fez diferença para você, devolvemos 100% do seu dinheiro sem burocracia e sem perguntas.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
