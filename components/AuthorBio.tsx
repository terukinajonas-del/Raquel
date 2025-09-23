import React from 'react';

export const AuthorBio: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-black">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="md:grid md:grid-cols-3 md:gap-12 items-center">
                    <div className="md:col-span-1 flex justify-center mb-8 md:mb-0">
                        <img 
                            src="https://i.ibb.co/VvZg3g6/raquel-thomaz.png" 
                            alt="Raquel Thomaz" 
                            className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-pink-500 shadow-lg"
                        />
                    </div>
                    <div className="md:col-span-2 text-center md:text-left">
                        <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-white">Quem é Raquel Thomaz?</h2>
                        <div className="space-y-4 mt-6 text-lg text-zinc-300">
                            <p>Bom, como algumas de vocês já sabem, há um bom tempo atrás eu vivia relacionamentos sem futuro e cometia vários erros ao conhecer outra pessoa.</p>
                            <p>E há alguns anos tomei consciência da minha feminilidade e do meu grande papel em construir o relacionamento que sempre sonhei. E vivo ele com o Caique.</p>
                            <p>Depois de muito errar e aprender, quero ser um atalho pra você que não quer perder o que você tem com seu parceiro e levar seu relacionamento pro próximo nível.</p>
                            <p className="font-semibold text-white">Me deixa te ajudar a ter um relacionamento extraordinário?</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};