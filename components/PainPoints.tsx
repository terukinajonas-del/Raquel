
import React from 'react';
import { AlertTriangleIcon } from './icons/AlertTriangleIcon';

const points = [
    "Você sente que faz tudo, mas não recebe valorização.",
    "A conversa virou briga ou silêncio.",
    "Ele já não demonstra carinho como antes.",
    "A insegurança e a sensação de rejeição estão roubando sua paz."
];

export const PainPoints: React.FC = () => {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-6 text-center max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold">🚨 Se identifica com isso?</h2>
                <div className="mt-10 space-y-6">
                    {points.map((point, index) => (
                        <div key={index} className="flex items-start text-left bg-zinc-800 p-4 rounded-lg border border-zinc-700">
                            <div className="flex-shrink-0 text-pink-500 mr-4 mt-1">
                                <AlertTriangleIcon />
                            </div>
                            <p className="text-lg text-zinc-300">{point}</p>
                        </div>
                    ))}
                </div>
                <p className="mt-8 text-lg text-zinc-400">Se você respondeu “sim” para ao menos um desses pontos, este método foi criado para você.</p>
            </div>
        </section>
    );
};
