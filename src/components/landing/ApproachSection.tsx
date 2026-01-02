import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Eye, Boxes, TrendingUp } from 'lucide-react';

const ApproachSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const principles = [
    {
      icon: Eye,
      number: '01',
      title: 'Clareza antes da ação',
      description: 'Entender o cenário com profundidade antes de qualquer movimento.'
    },
    {
      icon: Boxes,
      number: '02',
      title: 'Estrutura antes da execução',
      description: 'Organizar o pensamento para que cada passo tenha propósito claro.'
    },
    {
      icon: TrendingUp,
      number: '03',
      title: 'Compreensão antes da escala',
      description: 'Dominar os fundamentos antes de ampliar operações.'
    }
  ];

  return (
    <section id="abordagem" className="py-24 bg-background relative overflow-hidden">
      <div ref={ref} className="container relative z-10 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className={`text-center mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-primary text-sm font-medium tracking-wider uppercase font-body">
              Nossa abordagem
            </span>
          </div>

          {/* Quote block */}
          <div className={`text-center mb-16 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <blockquote className="font-display text-2xl md:text-3xl font-medium text-foreground/90 leading-relaxed max-w-3xl mx-auto">
              "Performance digital não falha por falta de ferramentas, mas por falhas de 
              <span className="text-gradient-gold"> interpretação</span>, 
              <span className="text-gradient-gold"> estrutura</span> e 
              <span className="text-gradient-gold"> raciocínio</span>."
            </blockquote>
          </div>

          {/* Principles */}
          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className={`text-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 2) * 150}ms` }}
              >
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-secondary border border-border/50 flex items-center justify-center">
                    <principle.icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center font-body">
                    {principle.number}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{principle.title}</h3>
                <p className="text-muted-foreground font-body">{principle.description}</p>
              </div>
            ))}
          </div>

          {/* Bottom text */}
          <p className={`text-center text-muted-foreground font-body mt-16 max-w-2xl mx-auto transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Trabalhamos para reduzir ambiguidade, alinhar entendimento e sustentar decisões 
            mais conscientes ao longo do tempo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
