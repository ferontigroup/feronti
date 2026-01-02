import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { BookOpen, Lightbulb, Compass, Brain } from 'lucide-react';

const HowWeHelpSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const items = [
    {
      icon: BookOpen,
      title: 'Capacitação estratégica',
      description: 'Foco em leitura, análise e tomada de decisão em performance digital.'
    },
    {
      icon: Lightbulb,
      title: 'Frameworks proprietários',
      description: 'Apoiam o planejamento, priorização e interpretação de cenários digitais.'
    },
    {
      icon: Compass,
      title: 'Estruturas conceituais',
      description: 'Organizam dados, mídia e resultados de forma clara, coerente e acionável.'
    },
    {
      icon: Brain,
      title: 'Modelos mentais',
      description: 'Compreendem relações entre investimento, operação e performance.'
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container relative z-10 px-6">
        <div ref={ref} className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-primary text-sm font-medium tracking-wider uppercase font-body">
              Como apoiamos decisões
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mt-4 mb-6">
              Conteúdos, métodos e produtos para cada nível de maturidade
            </h2>
          </div>

          {/* Items list */}
          <div className="space-y-4">
            {items.map((item, index) => (
              <div
                key={item.title}
                className={`group flex items-start gap-6 p-6 rounded-2xl bg-secondary/30 border border-border/30 hover:bg-secondary/50 hover:border-primary/20 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground font-body">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <p className={`mt-10 text-muted-foreground font-body text-center md:text-left max-w-3xl transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            As entregas da Feronti se materializam em conteúdos, métodos e produtos desenvolvidos 
            para apoiar diferentes níveis de maturidade profissional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowWeHelpSection;
