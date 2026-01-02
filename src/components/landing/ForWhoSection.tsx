import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight } from 'lucide-react';
import conceptNetwork from '@/assets/concept-network.png';
import conceptStructure from '@/assets/concept-structure.png';
import conceptClarity from '@/assets/concept-clarity.png';

const ForWhoSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const audiences = [
    {
      title: 'Organizações',
      description: 'Que precisam estruturar a leitura de mídia e performance antes de escalar investimentos.',
      image: conceptNetwork,
      imageAlt: 'Rede de dados conectados representando organizações'
    },
    {
      title: 'Times de mídia',
      description: 'Que operam mídia paga em ambientes complexos e precisam alinhar entendimento, critério e decisão.',
      image: conceptStructure,
      imageAlt: 'Estrutura de dados representando times de mídia'
    },
    {
      title: 'Lideranças',
      description: 'Que não precisam aprender ferramentas, mas precisam compreender o que está acontecendo para decidir melhor.',
      image: conceptClarity,
      imageAlt: 'Clareza visual representando lideranças'
    }
  ];

  return (
    <section id="para-quem" className="py-20 md:py-28 section-gray">
      <div ref={ref} className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <span 
              className={`badge-primary mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Para quem faz sentido
            </span>

            <h2 
              className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Contextos onde a complexidade exige clareza
            </h2>

            <p 
              className={`text-lg text-muted-foreground max-w-3xl mx-auto transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              A Feronti foi construída para contextos em que a complexidade da mídia paga 
              começa a dificultar a leitura, a tomada de decisão e a priorização de investimentos.
            </p>
          </div>

          {/* Zigzag Layout */}
          <div className="space-y-16 md:space-y-24">
            {audiences.map((audience, index) => {
              const isReversed = index % 2 === 1;
              
              return (
                <div
                  key={audience.title}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${(index + 3) * 150}ms` }}
                >
                  {/* Text Content */}
                  <div className={`${isReversed ? 'md:order-2' : 'md:order-1'}`}>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
                      {audience.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      {audience.description}
                    </p>
                    <a 
                      href="#contato" 
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300 group"
                    >
                      Saiba mais
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>

                  {/* Image */}
                  <div className={`${isReversed ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="relative overflow-hidden rounded-2xl aspect-[16/10] bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5 group cursor-pointer">
                      <img 
                        src={audience.image} 
                        alt={audience.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                      {/* Subtle gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 pointer-events-none transition-opacity duration-500 group-hover:opacity-70" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
