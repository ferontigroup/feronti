import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  company?: string;
  position?: string;
  phone?: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received contact email request");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, position, phone, message }: ContactEmailRequest = await req.json();

    console.log(`Processing contact from: ${name} (${email})`);

    // Build email content
    const emailHtml = `
      <h1>Nova mensagem de contato - Feronti</h1>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ''}
      ${position ? `<p><strong>Cargo:</strong> ${position}</p>` : ''}
      ${phone ? `<p><strong>Celular:</strong> ${phone}</p>` : ''}
      ${message ? `<p><strong>Mensagem:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>` : ''}
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
        reply_to: email,
        subject: `Novo contato: ${name}${company ? ` - ${company}` : ''}`,
        html: emailHtml,
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Resend API error:", errorText);
      throw new Error(`Resend API error: ${res.status}`);
    }

    const data = await res.json();
    console.log("Email sent successfully:", data);

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
