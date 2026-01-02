import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import conceptClarity from '@/assets/concept-clarity.png';
import conceptStructure from '@/assets/concept-structure.png';
import conceptData from '@/assets/concept-data.png';
import conceptNetwork from '@/assets/concept-network.png';

const WhatWeDoSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const cards = [
    {
      image: conceptClarity,
      tag: 'Retail Media',
      title: 'Leitura estratégica de mídia e performance',
      description: 'Entendimento de cenários complexos em ambientes de retail e D2C.'
    },
    {
      image: conceptStructure,
      tag: 'Frameworks',
      title: 'Organização do pensamento em performance',
      description: 'Estruturas conceituais para análise e tomada de decisão.'
    },
    {
      image: conceptData,
      tag: 'Análise',
      title: 'Interpretação de dados e investimento',
      description: 'Clareza na relação entre métricas, resultados e retorno.'
    },
    {
      image: conceptNetwork,
      tag: 'Capacitação',
      title: 'Desenvolvimento de competências',
      description: 'Treinamentos estruturados para times e lideranças.'
    }
  ];

  return (
    <section id="o-que-fazemos" className="py-20 md:py-28 section-light">
      <div ref={ref} className="container px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            O que fazemos
          </h2>
          <p 
            className={`text-lg md:text-xl text-muted-foreground leading-relaxed transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Os conteúdos, frameworks e métodos da Feronti são aplicáveis a operações que atuam 
            tanto em retail media quanto em D2C. O foco está na leitura estratégica e no entendimento 
            de performance.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className={`card-elevated p-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              {/* Card image */}
              <div className="aspect-square mb-6 rounded-lg overflow-hidden bg-secondary">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Tag */}
              <span className="badge-primary mb-3">
                {card.tag}
              </span>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2 leading-snug">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div 
          className={`text-center mt-16 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-xl md:text-2xl font-medium">
            <span className="font-bold">Lógica</span> e <span className="text-primary font-bold">precisão</span>
            {' '}na leitura do <span className="font-bold">digital</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
