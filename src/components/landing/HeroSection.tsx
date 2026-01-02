import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-grid opacity-30" />
      
      {/* Glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
      
      <div className="container relative z-10 px-6 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/60 border border-border/50 mb-8 animate-fade-up opacity-0">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground font-body">
              Consultoria em Performance Digital
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 animate-fade-up opacity-0 stagger-1">
            Clareza estratégica para{' '}
            <span className="text-gradient-gold">decisões</span> em performance digital
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10 font-body animate-fade-up opacity-0 stagger-2">
            A Feronti atua no desenvolvimento de competências estratégicas em performance digital. 
            Desenvolvemos treinamentos estruturados e frameworks conceituais para apoiar a construção 
            de raciocínio, leitura de cenário e organização.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0 stagger-3">
            <a
              href="#contato"
              className="inline-flex items-center justify-center h-14 px-8 rounded-xl bg-gradient-to-r from-primary to-gold-dark text-primary-foreground font-semibold shadow-lg hover:shadow-glow hover:scale-105 transition-all duration-300 font-body"
            >
              Receber atualizações
            </a>
            <a
              href="#o-que-fazemos"
              className="inline-flex items-center justify-center h-14 px-8 rounded-xl bg-secondary border border-primary/30 text-foreground font-medium hover:border-primary hover:shadow-glow transition-all duration-300 font-body"
            >
              Conhecer mais
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <a
            href="#o-que-fazemos"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-xs font-body tracking-wider uppercase">Explorar</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
