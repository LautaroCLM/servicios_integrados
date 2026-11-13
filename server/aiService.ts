import {
  AI_SYSTEM_PROMPT,
  type AiChatRequest,
  type AiChatResponse,
} from "../shared/aiKnowledge.js";

// Rate limiting in-memory store: IP -> timestamps[]
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000; // 5 minutes window
const MAX_REQUESTS_PER_WINDOW = 15; // Max 15 messages per IP in 5 mins
const MAX_MESSAGE_LENGTH = 500; // Max 500 characters per message

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

// Periodic cleanup of rate limiting map
const cleanupTimer = setInterval(() => {
  const now = Date.now();
  Array.from(rateLimitMap.entries()).forEach(([ip, timestamps]) => {
    const active = timestamps.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);
    if (active.length === 0) {
      rateLimitMap.delete(ip);
    } else {
      rateLimitMap.set(ip, active);
    }
  });
}, 5 * 60 * 1000);
cleanupTimer.unref();

export async function processAiChatMessage(
  body: unknown,
  clientIp: string = "127.0.0.1"
): Promise<AiChatResponse> {
  try {
    // 1. Rate Limiting Check
    if (isRateLimited(clientIp)) {
      return {
        success: false,
        message:
          "Has alcanzado el límite de consultas por el momento. Por favor aguarda unos minutos o contactanos directamente por WhatsApp al 11 4070-5211.",
        isConfigured: true,
      };
    }

    // 2. Validate Request Body
    const request = body as AiChatRequest;
    if (!request || typeof request.message !== "string" || !request.message.trim()) {
      return {
        success: false,
        message: "Por favor escribe un mensaje válido para el asistente.",
        isConfigured: true,
      };
    }

    const cleanMessage = request.message.trim().slice(0, MAX_MESSAGE_LENGTH);
    const history = Array.isArray(request.history) ? request.history.slice(-6) : [];

    // 3. Check Gemini API Key
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || !apiKey.trim()) {
      return {
        success: false,
        message:
          "El Asistente IA no se encuentra disponible en este momento. Por favor comunicate directamente por WhatsApp al 11 4070-5211 o a través de nuestro formulario de contacto.",
        isConfigured: false,
      };
    }

    // 4. Format contents for Gemini REST API
    const geminiContents = [
      ...history
        .filter((h) => h && typeof h.content === "string" && (h.role === "user" || h.role === "assistant"))
        .map((h) => ({
          role: h.role === "user" ? "user" : "model",
          parts: [{ text: h.content.trim().slice(0, MAX_MESSAGE_LENGTH) }],
        })),
      {
        role: "user",
        parts: [{ text: cleanMessage }],
      },
    ];

    const primaryUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000); // 12s timeout

    let response: Response;
    try {
      response = await fetch(primaryUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: AI_SYSTEM_PROMPT }],
          },
          contents: geminiContents,
          generationConfig: {
            temperature: 0.2,
            maxOutputTokens: 600,
            topP: 0.85,
          },
        }),
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timeoutId);
    }

    if (!response.ok) {
      const errText = await response.text().catch(() => "");
      console.warn(`[AI-CHAT] Error respuesta Gemini status ${response.status}: ${errText.slice(0, 150)}`);

      // Try fallback to gemini-2.5-flash retry if first attempt encountered a transient issue
      try {
        const fallbackUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
        const fallbackResp = await fetch(fallbackUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            system_instruction: { parts: [{ text: AI_SYSTEM_PROMPT }] },
            contents: geminiContents,
            generationConfig: { temperature: 0.2, maxOutputTokens: 600 },
          }),
        });

        if (fallbackResp.ok) {
          const fallbackData = (await fallbackResp.json()) as any;
          const replyText =
            fallbackData?.candidates?.[0]?.content?.parts?.[0]?.text || "";
          if (replyText.trim()) {
            return { success: true, reply: replyText.trim(), isConfigured: true };
          }
        }
      } catch {
        /* ignore fallback error, will return standard friendly fallback below */
      }

      return {
        success: false,
        message:
          "En este momento no pudimos procesar tu consulta técnica. Por favor intenta nuevamente o comunicate por WhatsApp al 11 4070-5211.",
        isConfigured: true,
      };
    }

    const data = (await response.json()) as any;
    const replyText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!replyText || typeof replyText !== "string" || !replyText.trim()) {
      return {
        success: false,
        message:
          "No se pudo generar una respuesta técnica en este momento. Por favor comunicate con nuestro equipo al 11 4070-5211.",
        isConfigured: true,
      };
    }

    return {
      success: true,
      reply: replyText.trim(),
      isConfigured: true,
    };
  } catch (error: any) {
    if (error?.name === "AbortError") {
      return {
        success: false,
        message:
          "La consulta tardó más de lo esperado. Por favor reintenta o escribinos por WhatsApp al 11 4070-5211 para atención inmediata.",
        isConfigured: true,
      };
    }

    console.warn("[AI-CHAT] Error no controlado al procesar mensaje");
    return {
      success: false,
      message:
        "Ocurrió un inconveniente al conectar con el asistente. Podés contactarnos directamente por WhatsApp al 11 4070-5211.",
      isConfigured: true,
    };
  }
}
