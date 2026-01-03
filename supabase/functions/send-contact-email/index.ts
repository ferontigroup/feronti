import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

// Allowed origins for CORS - add your production domain here
const ALLOWED_ORIGINS = [
  "https://feronti.com",
  "https://www.feronti.com",
  "http://localhost:5173",
  "http://localhost:3000",
];

// Simple in-memory rate limiting (resets on function restart)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5; // Max 5 requests per window
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute window

function isRateLimited(clientId: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(clientId);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(clientId, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  
  if (record.count >= RATE_LIMIT_MAX) {
    return true;
  }
  
  record.count++;
  return false;
}

function getCorsHeaders(origin: string | null): Record<string, string> {
  const allowedOrigin = origin && (
    ALLOWED_ORIGINS.includes(origin) || 
    origin.endsWith('.lovableproject.com') || 
    origin.endsWith('.lovable.app')
  ) ? origin : ALLOWED_ORIGINS[0];
  
  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  };
}

// HTML escape function to prevent XSS
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

interface ContactEmailRequest {
  name: string;
  email: string;
  company?: string;
  position?: string;
  phone?: string;
  message?: string;
}

// Basic email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 255;
}

// Basic input validation
function validateInput(data: ContactEmailRequest): string | null {
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    return 'Name is required';
  }
  if (data.name.length > 100) {
    return 'Name is too long';
  }
  if (!data.email || !isValidEmail(data.email)) {
    return 'Valid email is required';
  }
  if (data.company && data.company.length > 100) {
    return 'Company name is too long';
  }
  if (data.position && data.position.length > 100) {
    return 'Position is too long';
  }
  if (data.phone && data.phone.length > 20) {
    return 'Phone is too long';
  }
  if (data.message && data.message.length > 2000) {
    return 'Message is too long';
  }
  return null;
}

const handler = async (req: Request): Promise<Response> => {
  const origin = req.headers.get("origin");
  const corsHeaders = getCorsHeaders(origin);

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Validate origin
  const isValidOrigin = origin && (
    ALLOWED_ORIGINS.includes(origin) || 
    origin.endsWith('.lovableproject.com') || 
    origin.endsWith('.lovable.app')
  );
  
  if (!isValidOrigin) {
    console.log(`Rejected request from invalid origin: ${origin}`);
    return new Response(
      JSON.stringify({ success: false, error: "Forbidden" }),
      { status: 403, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }

  // Rate limiting based on origin + IP approximation
  const clientId = `${origin}-${req.headers.get("x-forwarded-for") || "unknown"}`;
  if (isRateLimited(clientId)) {
    console.log(`Rate limited: ${clientId}`);
    return new Response(
      JSON.stringify({ success: false, error: "Too many requests" }),
      { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }

  try {
    const requestData: ContactEmailRequest = await req.json();

    // Server-side validation
    const validationError = validateInput(requestData);
    if (validationError) {
      return new Response(
        JSON.stringify({ success: false, error: validationError }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const { name, email, company, position, phone, message } = requestData;

    // Escape all user inputs for HTML
    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeCompany = company ? escapeHtml(company.trim()) : '';
    const safePosition = position ? escapeHtml(position.trim()) : '';
    const safePhone = phone ? escapeHtml(phone.trim()) : '';
    const safeMessage = message ? escapeHtml(message.trim()).replace(/\n/g, '<br>') : '';

    // Build email content with escaped values
    const emailHtml = `
      <h1>Nova mensagem de contato - Feronti</h1>
      <p><strong>Nome:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      ${safeCompany ? `<p><strong>Empresa:</strong> ${safeCompany}</p>` : ''}
      ${safePosition ? `<p><strong>Cargo:</strong> ${safePosition}</p>` : ''}
      ${safePhone ? `<p><strong>Celular:</strong> ${safePhone}</p>` : ''}
      ${safeMessage ? `<p><strong>Mensagem:</strong></p><p>${safeMessage}</p>` : ''}
      <hr>
      <p style="color: #666; font-size: 12px;">Esta mensagem foi enviada através do formulário de contato do site Feronti.</p>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Feronti <onboarding@resend.dev>",
        to: ["ferontigroup@gmail.com"],
        reply_to: email.trim(),
        subject: `Novo contato: ${safeName}${safeCompany ? ` - ${safeCompany}` : ''}`,
        html: emailHtml,
      }),
    });

    if (!res.ok) {
      console.log(`Resend API returned status: ${res.status}`);
      throw new Error("Email service error");
    }

    console.log("Email sent successfully");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.log("Error processing request");
    return new Response(
      JSON.stringify({ success: false, error: "An error occurred" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
