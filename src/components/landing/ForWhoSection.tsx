import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Building2, Users, Award } from 'lucide-react';

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
      icon: Award,
      title: 'Lideranças',
      description: 'Que não precisam aprender ferramentas, mas precisam compreender o que está acontecendo para decidir melhor.'
    }
  ];

  return (
    <section id="para-quem" className="py-24 bg-gradient-subtle relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-20" />
      
      <div ref={ref} className="container relative z-10 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className={`text-center mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-primary text-sm font-medium tracking-wider uppercase font-body">
              Para quem faz sentido
            </span>
          </div>

          <h2 className={`font-display text-3xl md:text-4xl font-semibold text-center mb-8 max-w-3xl mx-auto transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Contextos onde a complexidade da mídia paga dificulta a tomada de decisão
          </h2>

          {/* Audience cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {audiences.map((audience, index) => (
              <div
                key={audience.title}
                className={`group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 2) * 150}ms` }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <audience.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-4">{audience.title}</h3>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
