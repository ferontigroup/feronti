import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const PositionSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 section-dark">
      <div ref={ref} className="container px-6">
        <div className="max-w-4xl mx-auto">
          <h3 
            className={`text-sm font-medium text-primary uppercase tracking-widest mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Nossa posição
          </h3>

          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight mb-8 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            A Feronti existe para apoiar a compreensão e a tomada de decisão em performance digital
          </h2>

          <div className="space-y-6">
            <p 
              className={`text-lg text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Não operamos na simplificação excessiva nem na leitura superficial de métricas.
            </p>

            <p 
              className={`text-xl md:text-2xl leading-relaxed transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Atuamos na <span className="text-primary font-medium">organização do pensamento</span> e 
              na <span className="text-primary font-medium">clareza estratégica</span> em contextos 
              complexos de mídia, dados e investimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PositionSection;