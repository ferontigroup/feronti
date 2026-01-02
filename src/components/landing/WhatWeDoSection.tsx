import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { BarChart3, Target, Layers } from 'lucide-react';

const WhatWeDoSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="o-que-fazemos" className="py-24 bg-gradient-subtle relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-20" />
      
      <div ref={ref} className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-primary text-sm font-medium tracking-wider uppercase font-body">
              O que fazemos
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mt-4 mb-6">
              Leitura estratégica e organização do pensamento
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto font-body">
              Os conteúdos, frameworks e métodos da Feronti são aplicáveis a operações que atuam 
              tanto em retail media quanto em D2C. O foco está na leitura estratégica, no entendimento 
              de performance e na organização do pensamento.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: BarChart3,
                title: 'Análise de Cenários',
                description: 'Interpretação de dados e métricas para decisões fundamentadas em contextos complexos.'
              },
              {
                icon: Target,
                title: 'Leitura de Performance',
                description: 'Compreensão das relações entre investimento, operação e resultados ao longo do tempo.'
              },
              {
                icon: Layers,
                title: 'Organização Estratégica',
                description: 'Estruturação clara onde dados, mídia e comércio se cruzam de forma coerente.'
              }
            ].map((feature, index) => (
              <div
                key={feature.title}
                className={`group p-8 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-card ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
