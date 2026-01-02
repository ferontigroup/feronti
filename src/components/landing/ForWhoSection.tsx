import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Building2, Users, UserCog, ArrowRight } from 'lucide-react';

const ForWhoSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const audiences = [
    {
      icon: Building2,
      title: 'Organizações',
      description: 'Que precisam estruturar a leitura de mídia e performance antes de escalar investimentos.'
    },
    {
      icon: Users,
      title: 'Times de mídia',
      description: 'Que operam mídia paga em ambientes complexos e precisam alinhar entendimento, critério e decisão.'
    },
    {
      icon: UserCog,
      title: 'Lideranças',
      description: 'Que não precisam aprender ferramentas, mas precisam compreender o que está acontecendo para decidir melhor.'
    }
  ];

  return (
    <section id="para-quem" className="py-20 md:py-28 section-gray">
      <div ref={ref} className="container px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span 
              className={`badge-primary mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Para quem faz sentido
            </span>

            <h2 
              className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Contextos onde a complexidade exige clareza
            </h2>

            <p 
              className={`text-lg text-muted-foreground max-w-3xl mx-auto transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              A Feronti foi construída para contextos em que a complexidade da mídia paga 
              começa a dificultar a leitura, a tomada de decisão e a priorização de investimentos.
            </p>
          </div>

          {/* Audience cards - horizontal layout */}
          <div className="space-y-4">
            {audiences.map((audience, index) => (
              <div
                key={audience.title}
                className={`card-elevated p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <audience.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h4 className="text-xl font-semibold mb-2">
                    {audience.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {audience.description}
                  </p>
                </div>

                {/* Arrow */}
                <a 
                  href="#contato" 
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors flex-shrink-0"
                >
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
