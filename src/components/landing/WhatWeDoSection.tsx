import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const WhatWeDoSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="o-que-fazemos" className="py-24 md:py-32 section-light">
      <div ref={ref} className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section title */}
          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[hsl(var(--foreground-light))] leading-tight mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            O que fazemos
          </h2>

          {/* Main paragraph */}
          <p 
            className={`text-lg md:text-xl text-light-muted leading-relaxed mb-8 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Os conteúdos, frameworks e métodos da Feronti são aplicáveis a operações que atuam 
            tanto em retail media quanto em D2C. O foco está na leitura estratégica, no entendimento 
            de performance e na organização do pensamento em ambientes onde dados, mídia e comércio 
            se cruzam, independentemente de ferramentas ou plataformas específicas como Amazon, 
            Mercado Livre, Meta ou Google.
          </p>

          {/* Tagline */}
          <div 
            className={`mt-16 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-xl md:text-2xl font-medium text-[hsl(var(--foreground-light))]">
              <span className="font-semibold">Lógica</span> e <span className="text-primary font-semibold">precisão</span>
              <br />
              na leitura do <span className="font-semibold">digital</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;