import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Target, Layers, BarChart3, Brain } from 'lucide-react';

const HowWeHelpSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const items = [
    {
      icon: Target,
      title: 'Capacitação estratégica em performance digital',
      description: 'Com foco em leitura, análise e tomada de decisão.'
    },
    {
      icon: Layers,
      title: 'Frameworks proprietários',
      description: 'Que apoiam o planejamento, a priorização e a interpretação de cenários digitais.'
    },
    {
      icon: BarChart3,
      title: 'Estruturas conceituais',
      description: 'Para organizar dados, mídia e resultados de forma clara, coerente e acionável.'
    },
    {
      icon: Brain,
      title: 'Modelos mentais aplicados',
      description: 'Para compreender as relações entre investimento, operação e performance ao longo do tempo.'
    }
  ];

  return (
    <section className="py-20 md:py-28 section-gray">
      <div ref={ref} className="container px-6">
        {/* Quote section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p 
            className={`text-2xl md:text-3xl lg:text-4xl font-medium leading-tight tracking-tight transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Decisões constroem <span className="font-bold">Marcas.</span>
            <br />
            Ações geram <span className="font-bold">resultado.</span>
          </p>

          <div 
            className={`flex flex-col items-center mt-8 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-primary text-4xl font-serif leading-none">"</span>
            <span className="text-sm font-semibold tracking-wider mt-1">Feronti Group</span>
            <span className="text-xs text-muted-foreground uppercase tracking-widest mt-1">
              Visão de Negócio
            </span>
          </div>
        </div>

        {/* How we help section */}
        <div className="max-w-5xl mx-auto">
          <h3 
            className={`text-sm font-semibold text-primary uppercase tracking-widest mb-10 text-center transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Como apoiamos decisões
          </h3>

          {/* Cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item, index) => (
              <div
                key={item.title}
                className={`card-elevated p-6 text-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-base font-semibold mb-2 leading-snug">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <p 
            className={`text-muted-foreground mt-12 text-center max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            As entregas da Feronti se materializam em conteúdos, métodos e produtos desenvolvidos 
            para apoiar diferentes níveis de maturidade profissional, desde a construção de base 
            conceitual até o aprofundamento analítico de operações já em funcionamento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowWeHelpSection;
