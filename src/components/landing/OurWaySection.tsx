import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import conceptClarity from '@/assets/concept-clarity.png';

const OurWaySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 section-gradient-dark overflow-hidden">
      <div ref={ref} className="container px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <img 
              src={conceptClarity} 
              alt="Prisma representando clareza estratégica" 
              className="w-full max-w-md mx-auto lg:max-w-none h-auto"
              loading="lazy"
            />
          </div>

          {/* Text content */}
          <div className="text-white">
            <span 
              className={`badge-dark mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Nossa forma de atuar
            </span>

            <h2 
              className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-8 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Onde a complexidade começa a gerar ruído
            </h2>

            <div className="space-y-6">
              <p 
                className={`text-lg md:text-xl leading-relaxed transition-all duration-700 delay-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                A Feronti atua no ponto em que a complexidade começa a gerar ruído. 
                <span className="text-primary font-medium"> Antes da execução, antes da otimização e antes da escala.</span>
              </p>

              <p 
                className={`text-lg text-muted-dark leading-relaxed transition-all duration-700 delay-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Nosso trabalho se concentra na organização do pensamento, na leitura correta 
                de cenários e na construção de clareza estratégica em ambientes onde múltiplas 
                variáveis se sobrepõem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWaySection;
