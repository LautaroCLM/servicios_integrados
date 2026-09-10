import type { Config, Context } from "@netlify/functions";
import { contactSchema } from "../../shared/contactSchema.js";
import { sendContactEmail } from "../../server/email.js";

// In-memory rate limiting store per function instance
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 6;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const active = timestamps.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);
  if (active.length >= MAX_REQUESTS_PER_WINDOW) {
    rateLimitMap.set(ip, active);
    return true;
  }
  active.push(now);
  rateLimitMap.set(ip, active);
  return false;
}

export default async function handler(req: Request, context: Context): Promise<Response> {
  // Only allow POST requests
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ success: false, message: "Método no permitido" }),
      {
        status: 405,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("client-ip") ||
      context.ip ||
      "127.0.0.1";
    const userAgent = req.headers.get("user-agent") || "";

    let body: any;
    try {
      body = await req.json();
    } catch {
      body = {};
    }

    // 1. Anti-spam Check: Honeypot field
    if (body.website_hp && String(body.website_hp).trim().length > 0) {
      console.warn(`⚠️ [ANTI-SPAM] Bot bloqueado por Honeypot desde IP: ${clientIp}`);
      return new Response(
        JSON.stringify({
          success: true,
          message: "Consulta recibida exitosamente.",
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // 2. Anti-spam Check: Basic Rate Limiting
    if (isRateLimited(clientIp)) {
      console.warn(`⚠️ [ANTI-SPAM] Límite de envíos excedido para IP: ${clientIp}`);
      return new Response(
        JSON.stringify({
          success: false,
          message:
            "Ha alcanzado el límite de consultas permitidas por el momento. Por favor espere unos minutos o comuníquese directamente por WhatsApp al 11-40705211.",
        }),
        {
          status: 429,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // 3. Schema Validation
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] ? String(issue.path[0]) : "form";
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      return new Response(
        JSON.stringify({
          success: false,
          message: "Por favor corrija los errores en el formulario.",
          errors: fieldErrors,
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // 4. Send Email via Nodemailer
    const emailResult = await sendContactEmail(parsed.data, {
      ip: clientIp,
      userAgent,
    });

    if (!emailResult.success) {
      return new Response(
        JSON.stringify({
          success: false,
          message:
            "Ocurrió un inconveniente al procesar el envío del correo. Por favor intente nuevamente o comuníquese por WhatsApp al 11-40705211.",
          error: process.env.NODE_ENV === "development" ? emailResult.error : undefined,
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // 5. Success
    return new Response(
      JSON.stringify({
        success: true,
        message: `Gracias ${parsed.data.name}. Hemos recibido su consulta para ${parsed.data.company}. Nos pondremos en contacto a la brevedad.`,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("❌ Error no controlado en Netlify Function contact:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message:
          "Ocurrió un error inesperado al enviar el formulario. Por favor intente nuevamente más tarde.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export const config: Config = {
  path: "/api/contact",
};
