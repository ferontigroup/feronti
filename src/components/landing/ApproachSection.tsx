import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Lightbulb, Puzzle, TrendingUp } from 'lucide-react';

const ApproachSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const principles = [
    {
      icon: Lightbulb,
      number: '01',
      title: 'Clareza antes da ação',
      description: 'Entender o cenário com profundidade antes de tomar decisões.'
    },
    {
      icon: Puzzle,
      number: '02',
      title: 'Estrutura antes da execução',
      description: 'Organizar o pensamento para reduzir ruído e ambiguidade.'
    },
    {
      icon: TrendingUp,
      number: '03',
      title: 'Compreensão antes da escala',
      description: 'Validar a lógica antes de ampliar investimentos.'
    }
  ];

  return (
    <section id="abordagem" className="py-20 md:py-28 section-light">
      <div ref={ref} className="container px-6">
        <div className="max-w-5xl mx-auto">
          <span 
            className={`badge-primary mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Nossa abordagem
          </span>

          {/* Quote block with highlight background */}
          <div 
            className={`bg-secondary rounded-2xl p-8 md:p-12 mb-16 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium leading-snug tracking-tight">
              Performance digital não falha por falta de ferramentas, mas por falhas de{' '}
              <span className="text-primary">interpretação</span>,{' '}
              <span className="text-primary">estrutura</span> e{' '}
              <span className="text-primary">raciocínio</span>.
            </blockquote>
          </div>

          {/* Principles intro */}
          <p 
            className={`text-muted-foreground mb-10 text-lg transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Por isso, nossa atuação é orientada por três princípios:
          </p>

          {/* Principles cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {principles.map((principle, index) => (
              <div
                key={principle.number}
                className={`card-elevated p-8 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <principle.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-primary font-bold text-sm">{principle.number}</span>
                  <h4 className="text-lg font-semibold">{principle.title}</h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom text */}
          <p 
            className={`text-muted-foreground max-w-3xl transition-all duration-700 delay-500 ${
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
