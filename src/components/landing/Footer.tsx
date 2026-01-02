const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border/50">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <span className="font-display text-2xl font-semibold text-foreground">
              Feronti
            </span>
          </div>

          {/* Address */}
          <div className="text-center mb-8">
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Rua Funchal, 538, Sala 24 – Edifício Work<br />
              Vila Olímpia, São Paulo – SP – 04541-060
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-body"
            >
              Política de Cookies
            </a>
            <span className="hidden sm:block text-border">|</span>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-body"
            >
              Política de Privacidade
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-muted-foreground font-body text-xs">
              © Copyright 2025 – Feronti Group – Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
