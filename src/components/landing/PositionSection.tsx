import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import nossaPosicaoImage from '@/assets/nossa-posicao.webp';

const PositionSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 section-gradient-dark relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={nossaPosicaoImage} 
          alt="Background abstrato representando organização do pensamento em mídia e dados" 
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(240_10%_4%)] via-[hsl(240_10%_4%)/80] to-transparent" />
      </div>

      {/* Content */}
      <div ref={ref} className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <span 
            className={`badge-dark mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Nossa posição
          </span>

          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-8 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            A Feronti existe para apoiar a compreensão e a tomada de decisão em performance digital
          </h2>

          <div className="space-y-6">
            <p 
              className={`text-lg text-muted-dark leading-relaxed transition-all duration-700 delay-200 ${
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
