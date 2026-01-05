import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import organizacoesImage from '@/assets/organizacoes.webp';
import timesDeMidiaImage from '@/assets/times-de-midia.webp';
import liderancasImage from '@/assets/liderancas.webp';

const ForWhoSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const audiences = [
    {
      title: 'Organizações',
      description: 'Que precisam estruturar a leitura de mídia e performance antes de escalar investimentos.',
      image: organizacoesImage,
      imageAlt: 'Rede conectada simbolizando estrutura organizacional e escalabilidade em performance digital'
    },
    {
      title: 'Times de mídia',
      description: 'Que operam mídia paga em ambientes complexos e precisam alinhar entendimento, critério e decisão.',
      image: timesDeMidiaImage,
      imageAlt: 'Equipe colaborativa em ambiente de operação de mídia paga e performance'
    },
    {
      title: 'Lideranças',
      description: 'Que não precisam aprender ferramentas, mas precisam compreender o que está acontecendo para decidir melhor.',
      image: liderancasImage,
      imageAlt: 'Visão executiva e tomada de decisão estratégica em performance digital'
    }
  ];

  return (
    <section id="para-quem" className="py-20 md:py-28 section-gray">
      <div ref={ref} className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="text-center mb-20">
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
          </header>

          {/* Zigzag Layout */}
          <div className="space-y-16 md:space-y-24">
            {audiences.map((audience, index) => {
              const isReversed = index % 2 === 1;
              
              return (
                <article
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
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {audience.description}
                    </p>
                  </div>

                  {/* Image */}
                  <div className={`${isReversed ? 'md:order-1' : 'md:order-2'}`}>
                    <figure className="relative overflow-hidden rounded-2xl aspect-[16/10] bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5 group cursor-pointer">
                      <img 
                        src={audience.image} 
                        alt={audience.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                        width={640}
                        height={400}
                      />
                      {/* Subtle gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 pointer-events-none transition-opacity duration-500 group-hover:opacity-70" />
                    </figure>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
