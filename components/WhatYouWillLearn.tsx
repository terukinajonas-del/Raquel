
import React from 'react';
import { CheckIcon } from './icons/CheckIcon';

const learnings = [
    "Como se posicionar sem brigar e sem se humilhar.",
    "O passo a passo para recuperar admiração e respeito.",
    "Como reavivar o desejo e a conexão emocional.",
    "Técnicas simples que funcionam mesmo que ele esteja distante ou frio.",
    "Criar momentos de conexão mesmo com a correria do dia a dia.",
    "Trazer leveza, carinho e desejo para dentro da rotina do casal."
];

export const WhatYouWillLearn: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-zinc-800">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center">
                    <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-white">🌹 O que você vai aprender com o método</h2>
                    <p className="mt-4 text-lg text-zinc-300">Dentro do método, você vai descobrir:</p>
                </div>
                <div className="mt-12 space-y-4">
                    {learnings.map((learning, index) => (
                        <div key={index} className="flex items-center text-left p-3">
                            <div className="flex-shrink-0 text-green-400 mr-4">
                               <CheckIcon />
                            </div>
                            <p className="text-lg md:text-xl text-zinc-200">{learning}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
