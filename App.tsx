
import React from 'react';
import { Header } from './components/Header';
import { CTAButton } from './components/CTAButton';
import { PainPoints } from './components/PainPoints';
import { WhatYouWillLearn } from './components/WhatYouWillLearn';
import { Offer } from './components/Offer';
import { AuthorBio } from './components/AuthorBio';
import { Guarantee } from './components/Guarantee';
import { Footer } from './components/Footer';

// Fix: Removed explicit JSX.Element return type to resolve "Cannot find namespace 'JSX'" error.
// The return type will be inferred correctly by TypeScript.
function App() {
  return (
    <div className="bg-zinc-900 text-white min-h-screen">
      <div 
        className="bg-cover bg-center bg-no-repeat" 
        style={{backgroundImage: "url('https://hotmart.s3.amazonaws.com/product_contents/b3c76135-2637-4f4d-a7ad-ed1c8a514d02/Fundo.png')"}}
      >
        <div className="bg-black bg-opacity-60">
          <main className="container mx-auto px-6 py-16 md:py-24 flex flex-col items-center text-center">
            <Header />
            <div className="mt-12 w-full max-w-lg">
              <CTAButton text="Quero transformar meu relacionamento" />
            </div>
          </main>
        </div>
      </div>
      
      <PainPoints />
      <WhatYouWillLearn />
      <Offer />
      <AuthorBio />
      <Guarantee />
      
      <section className="py-16 bg-zinc-800">
          <div className="container mx-auto px-6 flex flex-col items-center">
              <h2 className="font-serif-display text-3xl md:text-4xl font-bold text-center max-w-3xl leading-tight">Comece ainda hoje a resgatar o relacionamento que você merece.</h2>
              <div className="mt-8 w-full max-w-lg">
                  <CTAButton text="Sim, eu quero meu acesso!" />
              </div>
          </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;