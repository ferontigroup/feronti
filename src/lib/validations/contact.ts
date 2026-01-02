import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Nome deve ter pelo menos 2 caracteres' })
    .max(100, { message: 'Nome deve ter no máximo 100 caracteres' }),
  email: z
    .string()
    .trim()
    .email({ message: 'Email inválido' })
    .max(255, { message: 'Email deve ter no máximo 255 caracteres' }),
  company: z
    .string()
    .trim()
    .max(100, { message: 'Empresa deve ter no máximo 100 caracteres' })
    .optional()
    .or(z.literal('')),
  position: z
    .string()
    .trim()
    .max(100, { message: 'Cargo deve ter no máximo 100 caracteres' })
    .optional()
    .or(z.literal('')),
  phone: z
    .string()
    .trim()
    .max(20, { message: 'Celular deve ter no máximo 20 caracteres' })
    .optional()
    .or(z.literal('')),
  message: z
    .string()
    .trim()
    .max(2000, { message: 'Mensagem deve ter no máximo 2000 caracteres' })
    .optional()
    .or(z.literal('')),
});

export type ContactFormData = z.infer<typeof contactSchema>;
