import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ForWhoSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const audiences = [
    {
      title: 'Organizações',
      description: 'Que precisam estruturar a leitura de mídia e performance antes de escalar investimentos.'
    },
    {
      title: 'Times de mídia',
      description: 'Que operam mídia paga em ambientes complexos e precisam alinhar entendimento, critério e decisão.'
    },
    {
      title: 'Lideranças',
      description: 'Que não precisam aprender ferramentas, mas precisam compreender o que está acontecendo para decidir melhor.'
    }
  ];

  return (
    <section id="para-quem" className="py-24 md:py-32 section-light">
      <div ref={ref} className="container px-6">
        <div className="max-w-5xl mx-auto">
          <h3 
            className={`text-sm font-medium text-primary uppercase tracking-widest mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Para quem faz sentido
          </h3>

          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[hsl(var(--foreground-light))] leading-tight mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Contextos onde a complexidade da mídia paga dificulta a tomada de decisão
          </h2>

          <p 
            className={`text-lg text-light-muted mb-12 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Faz sentido para:
          </p>

          {/* Audience cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {audiences.map((audience, index) => (
              <div
                key={audience.title}
                className={`p-6 rounded-2xl bg-[hsl(0_0%_94%)] transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                <h4 className="text-xl font-semibold text-[hsl(var(--foreground-light))] mb-3">
                  {audience.title}
                </h4>
                <p className="text-light-muted leading-relaxed">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;