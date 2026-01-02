import { ArrowRight } from 'lucide-react';
import conceptNetwork from '@/assets/concept-network.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen section-gradient-dark overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
      
      {/* Content */}
      <div className="container relative z-10 px-6 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[70vh]">
          {/* Left column - Text content */}
          <div className="text-white">
            {/* Badge */}
            <div className="mb-6 animate-fade-up opacity-0">
              <span className="badge-dark">
                Feronti Group
              </span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 animate-fade-up opacity-0 stagger-1">
              Clareza estratégica para{' '}
              <span className="text-gradient-orange">decisões</span> em performance digital.
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-dark leading-relaxed max-w-xl mb-10 animate-fade-up opacity-0 stagger-2">
              A Feronti atua no desenvolvimento de competências estratégicas em performance digital. 
              Desenvolvemos treinamentos estruturados e frameworks conceituais para apoiar a construção 
              de raciocínio, leitura de cenário e organização.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 stagger-3">
              <a href="#contato" className="btn-primary">
                Saiba mais
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a href="#o-que-fazemos" className="btn-secondary-dark">
                O que fazemos
              </a>
            </div>
          </div>

          {/* Right column - Image */}
          <div className="hidden lg:flex items-center justify-center animate-scale-in opacity-0 stagger-2">
            <img 
              src={conceptNetwork} 
              alt="Visualização de rede digital" 
              className="w-full max-w-lg h-auto"
              loading="eager"
            />
          </div>
        </div>

        {/* Navigation tabs */}
        <div className="hidden md:flex items-center gap-1 mt-16 pt-8 border-t border-white/10 animate-fade-up opacity-0 stagger-4">
          {[
            { href: '#o-que-fazemos', label: 'O que fazemos' },
            { href: '#abordagem', label: 'Nossa abordagem' },
            { href: '#para-quem', label: 'Para quem' },
            { href: '#contato', label: 'Contato' },
          ].map((tab, index) => (
            <a
              key={tab.href}
              href={tab.href}
              className={`px-5 py-3 text-sm font-medium transition-colors ${
                index === 0
                  ? 'text-white border-b-2 border-primary'
                  : 'text-muted-dark hover:text-white'
              }`}
            >
              {tab.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
