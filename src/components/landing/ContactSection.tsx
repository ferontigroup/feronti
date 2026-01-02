import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Check, ArrowRight } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { contactSchema } from '@/lib/validations/contact';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validar com Zod
    const result = contactSchema.safeParse({ name, email });
    if (!result.success) {
      const fieldErrors: { name?: string; email?: string } = {};
      result.error.errors.forEach((err) => {
        if (err.path[0] === 'name') fieldErrors.name = err.message;
        if (err.path[0] === 'email') fieldErrors.email = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsLoading(true);
    
    try {
      const { error } = await supabase
        .from('leads')
        .insert({ name: result.data.name, email: result.data.email });

      if (error) {
        if (error.code === '23505') {
          toast({
            title: 'Você já está cadastrado',
            description: 'Este email já está na nossa lista de atualizações.',
            variant: 'default',
          });
        } else {
          throw error;
        }
        setIsLoading(false);
        return;
      }

      setIsSubmitted(true);
    } catch (error) {
      toast({
        title: 'Erro ao cadastrar',
        description: 'Tente novamente em alguns instantes.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contato" className="py-20 md:py-28 section-light">
      <div ref={ref} className="container px-6">
        <div className="max-w-5xl mx-auto">
          {!isSubmitted ? (
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left column - Text */}
              <div 
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <span className="badge-primary mb-6">
                  Contato
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
                  Receba atualizações estratégicas da Feronti
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Acompanhe o que estamos construindo. Compartilhamos análises, lançamentos 
                  e materiais que ajudam a compreender performance digital com mais clareza e critério.
                </p>
              </div>

              {/* Right column - Form */}
              <div 
                className={`transition-all duration-700 delay-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="card-elevated p-8">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Seu nome
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Digite seu nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className={`w-full h-12 px-4 rounded-lg bg-secondary text-foreground placeholder:text-muted-foreground border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                          errors.name ? 'border-destructive' : 'border-border'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Seu e-mail
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className={`w-full h-12 px-4 rounded-lg bg-secondary text-foreground placeholder:text-muted-foreground border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                          errors.email ? 'border-destructive' : 'border-border'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive mt-1">{errors.email}</p>
                      )}
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full h-12 rounded-sm bg-primary text-primary-foreground font-semibold text-sm tracking-wide hover:opacity-90 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          Receber atualizações
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            <div 
              className={`text-center max-w-xl mx-auto py-12 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
                <Check className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Cadastro realizado com sucesso
              </h3>
              <p className="text-muted-foreground text-lg">
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
