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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-xl font-semibold tracking-tight">
            Fer<span className="text-primary">onti</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#o-que-fazemos"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            O que fazemos
          </a>
          <a
            href="#abordagem"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Abordagem
          </a>
          <a
            href="#para-quem"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Para quem
          </a>
          <a
            href="#contato"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;