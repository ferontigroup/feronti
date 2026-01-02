import GeometricShapes from './GeometricShapes';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-dark">
      {/* Geometric wireframe shapes */}
      <GeometricShapes />

      {/* Content */}
      <div className="container relative z-10 px-6 pt-24 pb-20">
        <div className="max-w-3xl mx-auto md:mx-0 md:ml-[10%]">
          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight mb-8 animate-fade-up opacity-0">
            Clareza estratégica para{' '}
            <span className="text-gradient-orange">decisões</span> em{' '}
            <br className="hidden md:block" />
            performance digital.
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mb-10 animate-fade-up opacity-0 stagger-1">
            A Feronti atua no desenvolvimento de competências estratégicas em performance digital. 
            Desenvolvemos treinamentos estruturados e frameworks conceituais para apoiar a construção 
            de raciocínio, leitura de cenário e organização em ambientes onde dados, mídia e comércio se cruzam.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-up opacity-0 stagger-2">
            <a
              href="#contato"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground text-sm font-medium uppercase tracking-wider hover:opacity-90 transition-opacity duration-200"
            >
              Saiba mais
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator badge - bottom right */}
      <div className="absolute bottom-8 right-8 md:right-16 animate-fade-in opacity-0 stagger-3">
        <div className="relative w-20 h-20">
          {/* Rotating text */}
          <svg className="w-full h-full animate-rotate-slow" viewBox="0 0 100 100">
            <defs>
              <path
                id="circlePath"
                d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text className="text-[8px] uppercase tracking-[0.3em] fill-muted-foreground">
              <textPath href="#circlePath">
                ROLE PARA BAIXO • ROLE PARA BAIXO •
              </textPath>
            </text>
          </svg>
          {/* Center pill */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-8 rounded-full bg-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;