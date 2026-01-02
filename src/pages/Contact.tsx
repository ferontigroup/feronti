import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight, CheckCircle, Loader2, Sparkles, Target } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { contactSchema, type ContactFormData } from '@/lib/validations/contact';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      position: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      // Save to database
      const { error: dbError } = await supabase.from('leads').insert({
        name: data.name,
        email: data.email,
        company: data.company || null,
        position: data.position || null,
        phone: data.phone || null,
        message: data.message || null,
      });

      if (dbError) {
        console.error('Database error:', dbError);
        throw new Error('Erro ao salvar dados');
      }

      // Send email notification
      const { error: emailError } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: data.name,
          email: data.email,
          company: data.company,
          position: data.position,
          phone: data.phone,
          message: data.message,
        },
      });

      if (emailError) {
        console.error('Email error:', emailError);
        // Don't throw - email is secondary
      }

      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: 'Erro ao enviar',
        description: 'Tente novamente em alguns instantes.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container px-6">
          <div className="max-w-6xl mx-auto">
            {!isSubmitted ? (
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                {/* Left Column - Text */}
                <div className="lg:sticky lg:top-32">
                  <span className="badge-primary mb-6">Contato</span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
                    Vamos conversar sobre seu negócio
                  </h1>
                  <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                    Preencha o formulário ao lado e entraremos em contato em até 24 horas úteis para agendar uma conversa.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Target className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Resultados mensuráveis</h3>
                        <p className="text-muted-foreground">
                          Decisões baseadas em dados reais, não em suposições
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Sparkles className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Parceria estratégica</h3>
                        <p className="text-muted-foreground">
                          Trabalhamos lado a lado para escalar seu negócio
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Form */}
                <div className="bg-card border border-border rounded-2xl p-8 lg:p-10">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nome *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Seu nome"
                                  {...field}
                                  className="h-12"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email *</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="seu@email.com"
                                  {...field}
                                  className="h-12"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Empresa</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Nome da empresa"
                                  {...field}
                                  className="h-12"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="position"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Cargo</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Seu cargo"
                                  {...field}
                                  className="h-12"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Celular</FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="(11) 99999-9999"
                                {...field}
                                className="h-12"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Mensagem</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Como podemos ajudar?"
                                rows={5}
                                {...field}
                                className="resize-none"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full h-14 text-base font-semibold"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Enviando...
                          </>
                        ) : (
                          <>
                            Enviar mensagem
                            <ArrowRight className="w-5 h-5" />
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </div>
              </div>
            ) : (
              /* Success State */
              <div className="max-w-2xl mx-auto text-center py-20">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
                  <CheckCircle className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Mensagem enviada!
                </h2>
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                  Obrigado pelo seu contato. Nossa equipe analisará sua mensagem e retornará em até 24 horas úteis.
                </p>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                >
                  Enviar outra mensagem
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
