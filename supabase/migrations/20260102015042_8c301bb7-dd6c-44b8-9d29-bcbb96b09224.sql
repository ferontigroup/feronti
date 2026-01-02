-- Criar tabela de leads para o formulário de contato
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Política: Qualquer pessoa pode inserir um lead (formulário público)
CREATE POLICY "Anyone can insert leads"
  ON public.leads
  FOR INSERT
  WITH CHECK (true);

-- Política: Apenas leitura interna (sem acesso público)
-- Leads só podem ser visualizados via dashboard/admin