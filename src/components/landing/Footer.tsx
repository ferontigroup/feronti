import logoBranca from '@/assets/logo-branca.svg';

const Footer = () => {
  return (
    <footer className="py-16 section-gradient-dark border-t border-white/10">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          {/* Logo and description */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
            <div className="max-w-sm">
              <img src={logoBranca} alt="Feronti" className="h-8" />
              <p className="text-muted-dark text-sm mt-4 leading-relaxed">
                Clareza estratégica para decisões em performance digital.
              </p>
            </div>

            {/* Navigation links */}
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
              <div>
                <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                  Navegação
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#o-que-fazemos" className="text-sm text-muted-dark hover:text-white transition-colors">
                      O que fazemos
                    </a>
                  </li>
                  <li>
                    <a href="#abordagem" className="text-sm text-muted-dark hover:text-white transition-colors">
                      Abordagem
                    </a>
                  </li>
                  <li>
                    <a href="#para-quem" className="text-sm text-muted-dark hover:text-white transition-colors">
                      Para quem
                    </a>
                  </li>
                  <li>
                    <a href="#contato" className="text-sm text-muted-dark hover:text-white transition-colors">
                      Contato
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                  Legal
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-sm text-muted-dark hover:text-white transition-colors">
                      Política de Cookies
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-muted-dark hover:text-white transition-colors">
                      Política de Privacidade
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="py-8 border-t border-white/10">
            <p className="text-muted-dark text-sm leading-relaxed">
              Rua Funchal, 538, Sala 24 – Edifício Work<br />
              Vila Olímpia, São Paulo – SP – 04541-060
            </p>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-muted-dark text-xs">
              © Copyright 2025 – Feronti Group – Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
