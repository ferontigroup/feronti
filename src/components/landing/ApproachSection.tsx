import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ApproachSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const principles = [
    {
      number: '01',
      title: 'Clareza antes da ação',
    },
    {
      number: '02',
      title: 'Estrutura antes da execução',
    },
    {
      number: '03',
      title: 'Compreensão antes da escala',
    }
  ];

  return (
    <section id="abordagem" className="py-24 md:py-32 section-dark">
      <div ref={ref} className="container px-6">
        <div className="max-w-5xl mx-auto">
          <h3 
            className={`text-sm font-medium text-primary uppercase tracking-widest mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Nossa abordagem
          </h3>

          {/* Quote block */}
          <blockquote 
            className={`text-2xl md:text-3xl lg:text-4xl font-medium leading-tight tracking-tight mb-16 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Performance digital não falha por falta de ferramentas, mas por falhas de{' '}
            <span className="text-primary">interpretação</span>,{' '}
            <span className="text-primary">estrutura</span> e{' '}
            <span className="text-primary">raciocínio</span>.
          </blockquote>

          {/* Principles */}
          <div 
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-muted-foreground mb-8">
              Por isso, nossa atuação é orientada por três princípios:
            </p>

            <div className="space-y-4">
              {principles.map((principle, index) => (
                <div
                  key={principle.number}
                  className={`flex items-center gap-4 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                >
                  <span className="text-primary font-medium text-sm">{principle.number}</span>
                  <span className="text-lg md:text-xl font-medium">{principle.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom text */}
          <p 
            className={`text-muted-foreground mt-12 max-w-2xl transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Trabalhamos para reduzir ambiguidade, alinhar entendimento e sustentar 
            decisões mais conscientes ao longo do tempo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;