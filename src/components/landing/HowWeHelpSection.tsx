import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const HowWeHelpSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const items = [
    {
      title: 'Capacitação estratégica em performance digital',
      description: 'Com foco em leitura, análise e tomada de decisão.'
    },
    {
      title: 'Frameworks proprietários',
      description: 'Que apoiam o planejamento, a priorização e a interpretação de cenários digitais.'
    },
    {
      title: 'Estruturas conceituais',
      description: 'Para organizar dados, mídia e resultados de forma clara, coerente e acionável.'
    },
    {
      title: 'Modelos mentais aplicados',
      description: 'Para compreender as relações entre investimento, operação e performance ao longo do tempo.'
    }
  ];

  return (
    <section className="py-24 md:py-32 section-dark relative overflow-hidden">
      {/* Quote section */}
      <div className="container px-6 mb-20">
        <div ref={ref} className="max-w-4xl mx-auto text-center">
          <p 
            className={`text-2xl md:text-3xl lg:text-4xl font-medium leading-tight tracking-tight transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Decisões constroem <span className="font-semibold">Marcas.</span>
            <br />
            Ações geram <span className="font-semibold">resultado.</span>
          </p>

          {/* Quote mark and branding */}
          <div 
            className={`flex flex-col items-center mt-12 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-primary text-4xl font-serif">"</span>
            <span className="text-sm font-medium tracking-wider mt-2">Feronti Group</span>
            <span className="text-xs text-muted-foreground uppercase tracking-widest mt-1">
              Visão de Negócio
            </span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-border" />

      {/* How we help section */}
      <div className="container px-6 mt-20">
        <div className="max-w-4xl mx-auto">
          <h3 
            className={`text-sm font-medium text-primary uppercase tracking-widest mb-8 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Como apoiamos decisões
          </h3>

          <div className="space-y-6">
            {items.map((item, index) => (
              <div
                key={item.title}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 4) * 100}ms` }}
              >
                <h4 className="text-lg md:text-xl font-medium mb-1">{item.title}</h4>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <p 
            className={`text-muted-foreground mt-10 leading-relaxed transition-all duration-700 delay-700 ${
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