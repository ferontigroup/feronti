import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const OurWaySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2" />
      
      <div ref={ref} className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-primary text-sm font-medium tracking-wider uppercase font-body">
              Nossa forma de atuar
            </span>
            
            <h2 className="font-display text-3xl md:text-4xl font-semibold mt-4 mb-8">
              Onde a complexidade começa a gerar ruído
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-lg text-foreground/90 font-body leading-relaxed">
                A Feronti atua no ponto em que a complexidade começa a gerar ruído. 
                <span className="text-primary font-medium"> Antes da execução, antes da otimização e antes da escala.</span>
              </p>
              
              <p className="text-muted-foreground font-body leading-relaxed">
                Nosso trabalho se concentra na organização do pensamento, na leitura correta 
                de cenários e na construção de clareza estratégica em ambientes onde múltiplas 
                variáveis se sobrepõem.
              </p>
              
              <p className="text-muted-foreground font-body leading-relaxed">
                Atuamos para que decisões não sejam tomadas por impulso, pressão de curto prazo 
                ou leitura superficial de dados.
              </p>
            </div>

            {/* Visual element */}
            <div className={`relative transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="aspect-square relative">
                {/* Concentric circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full rounded-full border border-border/30 animate-pulse" style={{ animationDuration: '4s' }} />
                </div>
                <div className="absolute inset-8 flex items-center justify-center">
                  <div className="w-full h-full rounded-full border border-primary/20 animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
                </div>
                <div className="absolute inset-16 flex items-center justify-center">
                  <div className="w-full h-full rounded-full border border-primary/40 animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '1s' }} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-gold-dark shadow-glow flex items-center justify-center">
                    <span className="font-display text-2xl font-bold text-primary-foreground">F</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWaySection;
