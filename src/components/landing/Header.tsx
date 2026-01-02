import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#o-que-fazemos', label: 'O que fazemos' },
    { href: '#abordagem', label: 'Abordagem' },
    { href: '#para-quem', label: 'Para quem' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <span className="text-xl font-bold tracking-tight">
            Fer<span className="text-primary">onti</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contato"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-sm bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Fale conosco
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-sm bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity mt-2"
            >
              Fale conosco
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
