import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Check } from 'lucide-react';

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <section id="contato" className="py-24 md:py-32 section-light">
      <div ref={ref} className="container px-6">
        <div className="max-w-xl mx-auto">
          {!isSubmitted ? (
            <div 
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-[hsl(var(--foreground-light))] mb-4 tracking-tight">
                Receba atualizações estratégicas da Feronti
              </h2>
              <p className="text-light-muted mb-8 leading-relaxed">
                Acompanhe o que estamos construindo. Compartilhamos análises, lançamentos 
                e materiais que ajudam a compreender performance digital com mais clareza e critério.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full h-12 px-4 rounded-lg bg-[hsl(0_0%_94%)] text-[hsl(var(--foreground-light))] placeholder:text-[hsl(var(--muted-foreground-light))] border-0 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full h-12 px-4 rounded-lg bg-[hsl(0_0%_94%)] text-[hsl(var(--foreground-light))] placeholder:text-[hsl(var(--muted-foreground-light))] border-0 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-12 rounded-full bg-primary text-primary-foreground font-medium text-sm uppercase tracking-wider hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Enviando...
                    </span>
                  ) : (
                    'Receber atualizações'
                  )}
                </button>
              </form>
            </div>
          ) : (
            <div 
              className={`text-center py-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-[hsl(var(--foreground-light))] mb-4">
                Cadastro realizado com sucesso
              </h3>
              <p className="text-light-muted">
                Em breve você receberá nossas próximas atualizações.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;