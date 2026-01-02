import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const PositionSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />
      
      <div ref={ref} className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-primary text-sm font-medium tracking-wider uppercase font-body">
              Nossa posição
            </span>
          </div>

          <h2 className={`font-display text-3xl md:text-4xl font-semibold mt-4 mb-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            A Feronti existe para apoiar a compreensão e a tomada de decisão em performance digital
          </h2>

          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto">
              Não operamos na simplificação excessiva nem na leitura superficial de métricas.
            </p>
            
            <p className="text-xl text-foreground/90 font-body leading-relaxed max-w-2xl mx-auto">
              Atuamos na <span className="text-primary font-medium">organização do pensamento</span> e 
              na <span className="text-primary font-medium">clareza estratégica</span> em contextos 
              complexos de mídia, dados e investimento.
            </p>
          </div>

          {/* Visual divider */}
          <div className={`flex items-center justify-center gap-4 mt-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="w-16 h-px bg-border" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-16 h-px bg-border" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PositionSection;
