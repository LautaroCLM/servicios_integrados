import { Router, type Request, type Response } from "express";
import { contactSchema } from "../shared/contactSchema.js";
import { sendContactEmail } from "./email.js";
import { processAiChatMessage } from "./aiService.js";
import { handleAdminNovedadesRequest } from "./adminNovedadesHandler.js";

export const apiRouter = Router();

// Rate limiting in-memory store: IP -> timestamps[]
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 6; // Max 6 submissions per IP in 10 mins

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];

  // Filter timestamps within current window
  const activeTimestamps = timestamps.filter(
    (ts: number) => now - ts < RATE_LIMIT_WINDOW_MS
  );

  if (activeTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    rateLimitMap.set(ip, activeTimestamps);
    return true;
  }

  activeTimestamps.push(now);
  rateLimitMap.set(ip, activeTimestamps);
  return false;
}

// Clean up old entries in rateLimitMap periodically
const cleanupInterval = setInterval(() => {
  const now = Date.now();
  Array.from(rateLimitMap.entries()).forEach(([ip, timestamps]: [string, number[]]) => {
    const active = timestamps.filter((ts: number) => now - ts < RATE_LIMIT_WINDOW_MS);
    if (active.length === 0) {
      rateLimitMap.delete(ip);
    } else {
      rateLimitMap.set(ip, active);
    }
  });
}, 5 * 60 * 1000);
cleanupInterval.unref();

/**
 * POST /api/contact
 * Endpoint for receiving and validating contact form submissions, then sending the email.
 */
apiRouter.post("/contact", async (req: Request, res: Response): Promise<void> => {
  try {
    const clientIp =
      (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ||
      req.socket.remoteAddress ||
      "127.0.0.1";
    const userAgent = req.headers["user-agent"] || "";

    // 1. Anti-spam Check: Honeypot field
    // If the invisible website_hp input was filled in, it is definitely an automated bot
    if (req.body.website_hp && String(req.body.website_hp).trim().length > 0) {
      console.warn(`⚠️ [ANTI-SPAM] Bot bloqueado por Honeypot desde IP: ${clientIp}`);
      // Return 200 to trick the bot into thinking it succeeded without sending any email
      res.status(200).json({
        success: true,
        message: "Consulta recibida exitosamente.",
      });
      return;
    }

    // 2. Anti-spam Check: Basic Rate Limiting
    if (isRateLimited(clientIp)) {
      console.warn(`⚠️ [ANTI-SPAM] Límite de envíos excedido para IP: ${clientIp}`);
      res.status(429).json({
        success: false,
        message:
          "Ha alcanzado el límite de consultas permitidas por el momento. Por favor espere unos minutos o comuníquese directamente por WhatsApp al 11 4070-5211.",
      });
      return;
    }

    // 3. Backend Validation using shared Zod schema
    const parsed = contactSchema.safeParse(req.body);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] ? String(issue.path[0]) : "form";
        if (!fieldErrors[key]) {
          fieldErrors[key] = issue.message;
        }
      }

      res.status(400).json({
        success: false,
        message: "Por favor corrija los errores en el formulario.",
        errors: fieldErrors,
      });
      return;
    }

    const formData = parsed.data;

    // 4. Send Email via Nodemailer
    const emailResult = await sendContactEmail(formData, {
      ip: clientIp,
      userAgent,
    });

    if (!emailResult.success) {
      res.status(500).json({
        success: false,
        message:
          "Ocurrió un inconveniente al procesar el envío del correo. Por favor intente nuevamente o comuníquese por WhatsApp al 11 4070-5211.",
        error: process.env.NODE_ENV === "development" ? emailResult.error : undefined,
      });
      return;
    }

    // 5. Success Response
    res.status(200).json({
      success: true,
      message: `Gracias ${formData.name}. Hemos recibido su consulta para ${formData.company}. Nos pondremos en contacto a la brevedad.`,
    });
  } catch (error) {
    console.error("❌ Error no controlado en /api/contact:", error);
    res.status(500).json({
      success: false,
      message:
        "Ocurrió un error inesperado al enviar el formulario. Por favor intente nuevamente más tarde.",
    });
  }
});

/**
 * POST /api/ai-chat
 * Endpoint for processing AI assistant chat requests securely.
 */
apiRouter.post("/ai-chat", async (req: Request, res: Response): Promise<void> => {
  try {
    const clientIp =
      (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ||
      req.socket.remoteAddress ||
      "127.0.0.1";

    const result = await processAiChatMessage(req.body, clientIp);
    res.status(200).json(result);
  } catch (error) {
    console.error("❌ Error no controlado en /api/ai-chat:", error);
    res.status(500).json({
      success: false,
      message:
        "Ocurrió un error inesperado al procesar la consulta. Por favor comuníquese por WhatsApp al 11 4070-5211.",
    });
  }
});

/**
 * ALL /api/admin-novedades
 * Administration endpoint for managing novedades securely.
 */
apiRouter.all("/admin-novedades*", async (req: Request, res: Response): Promise<void> => {
  try {
    const pathParts = req.path.split("/").filter(Boolean);
    const lastPart = pathParts[pathParts.length - 1];
    let action = (req.query.action as string) || (lastPart && lastPart !== "admin-novedades" ? lastPart : "");
    if (!action && req.body?.action) action = req.body.action;
    if (!action) action = req.method === "GET" ? "list" : "verify";

    const authHeader = req.headers.authorization || null;
    const clientIp = req.socket.remoteAddress || "unknown";
    const result = await handleAdminNovedadesRequest(action, req.body, authHeader, clientIp);
    res.status(result.status).json(result.data);
  } catch (error: any) {
    console.error("❌ Error en Express /api/admin-novedades:", error);
    res.status(500).json({
      success: false,
      message: "Error interno del servidor al procesar la operación administrativa.",
      error: error?.message,
    });
  }
});


