import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="font-display text-2xl font-semibold text-foreground">
            Feronti
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#o-que-fazemos"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            O que fazemos
          </a>
          <a
            href="#abordagem"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Abordagem
          </a>
          <a
            href="#para-quem"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Para quem
          </a>
          <a
            href="#contato"
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-300"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
