import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const OurWaySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 section-light">
      <div ref={ref} className="container px-6">
        <div className="max-w-4xl mx-auto">
          <h3 
            className={`text-sm font-medium text-primary uppercase tracking-widest mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Nossa forma de atuar
          </h3>

          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[hsl(var(--foreground-light))] leading-tight mb-8 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Onde a complexidade começa a gerar ruído
          </h2>

          <div className="space-y-6">
            <p 
              className={`text-lg md:text-xl text-[hsl(var(--foreground-light))] leading-relaxed transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              A Feronti atua no ponto em que a complexidade começa a gerar ruído. 
              <span className="text-primary font-medium"> Antes da execução, antes da otimização e antes da escala.</span>
            </p>

            <p 
              className={`text-lg text-light-muted leading-relaxed transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Nosso trabalho se concentra na organização do pensamento, na leitura correta 
              de cenários e na construção de clareza estratégica em ambientes onde múltiplas 
              variáveis se sobrepõem. Atuamos para que decisões não sejam tomadas por impulso, 
              pressão de curto prazo ou leitura superficial de dados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWaySection;