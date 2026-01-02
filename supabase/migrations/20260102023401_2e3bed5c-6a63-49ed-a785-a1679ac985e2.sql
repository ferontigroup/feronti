-- Add new columns to leads table for contact form
ALTER TABLE public.leads
ADD COLUMN company TEXT,
ADD COLUMN position TEXT,
ADD COLUMN phone TEXT,
ADD COLUMN message TEXT;