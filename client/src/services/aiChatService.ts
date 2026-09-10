import { AI_SYSTEM_PROMPT, type AiChatResponse } from "@shared/aiKnowledge";

const GEMINI_API_KEY =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_GEMINI_API_KEY) ||
  (typeof process !== "undefined" && process.env?.VITE_GEMINI_API_KEY) ||
  (typeof process !== "undefined" && process.env?.GEMINI_API_KEY) ||
  "";

const MAX_MESSAGE_LENGTH = 500;

export async function sendAiChatMessage(
  message: string,
  history: Array<{ role: "user" | "assistant"; content: string }>
): Promise<AiChatResponse> {
  const cleanMessage = message.trim().slice(0, MAX_MESSAGE_LENGTH);
  const cleanHistory = (history || []).slice(-6);

  const isLocalhost =
    typeof window !== "undefined" &&
    (window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1");

  // 1. En desarrollo local, intentar primero el endpoint de Vite /api/ai-chat
  if (isLocalhost) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6000);

      const response = await fetch("/api/ai-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          message: cleanMessage,
          history: cleanHistory,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const contentType = response.headers.get("content-type") || "";
      if (response.ok && contentType.includes("application/json")) {
        const data = (await response.json()) as AiChatResponse;
        if (data && data.success && data.reply) {
          return data;
        }
      }
    } catch {
      // Si falla localmente, continúa abajo con llamada directa a Gemini
    }
  }

  // 2. Llamada directa a Gemini 2.5 Flash (Producción en Netlify estático)
  try {
    if (!GEMINI_API_KEY || !GEMINI_API_KEY.trim()) {
      return {
        success: false,
        message:
          "El Asistente IA no se encuentra disponible temporalmente. Podés comunicarte directamente con nuestro equipo por WhatsApp al 11-40705211.",
        isConfigured: false,
      };
    }

    const geminiContents = [
      ...cleanHistory
        .filter(
          (h) =>
            h &&
            typeof h.content === "string" &&
            (h.role === "user" || h.role === "assistant")
        )
        .map((h) => ({
          role: h.role === "user" ? "user" : "model",
          parts: [{ text: h.content.trim().slice(0, MAX_MESSAGE_LENGTH) }],
        })),
      {
        role: "user",
        parts: [{ text: cleanMessage }],
      },
    ];

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000); // 12s timeout

    let response: Response;
    try {
      response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
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
        }
      );
    } finally {
      clearTimeout(timeoutId);
    }

    if (!response.ok) {
      console.warn("[AI-CHAT] Error respuesta Gemini status:", response.status);
      return {
        success: false,
        message:
          "En este momento no pudimos procesar tu consulta técnica. Por favor intenta nuevamente o comunicate por WhatsApp al 11-40705211.",
        isConfigured: true,
      };
    }

    const data = (await response.json()) as any;
    const replyText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!replyText || typeof replyText !== "string" || !replyText.trim()) {
      return {
        success: false,
        message:
          "No se pudo generar una respuesta técnica en este momento. Por favor comunicate con nuestro equipo al 11-40705211.",
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
          "La consulta tardó más de lo esperado. Por favor reintenta o escribinos por WhatsApp al 11-40705211 para atención inmediata.",
        isConfigured: true,
      };
    }

    console.warn("[AI-CHAT] Error al conectar con Gemini:", error);
    return {
      success: false,
      message:
        "Ocurrió un inconveniente al conectar con el asistente. Podés contactarnos directamente por WhatsApp al 11-40705211.",
      isConfigured: true,
    };
  }
}
