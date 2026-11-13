import type { AiChatResponse } from "@shared/aiKnowledge";

// La clave de Gemini vive solo en el servidor (variable GEMINI_API_KEY en Netlify).
// El navegador nunca la ve: siempre consulta a la función /api/ai-chat.

const MAX_MESSAGE_LENGTH = 500;
const REQUEST_TIMEOUT_MS = 20000;

const FALLBACK_MESSAGE =
  "Ocurrió un inconveniente al conectar con el asistente. Podés contactarnos directamente por WhatsApp al 11 4070-5211.";

export async function sendAiChatMessage(
  message: string,
  history: Array<{ role: "user" | "assistant"; content: string }>
): Promise<AiChatResponse> {
  const cleanMessage = message.trim().slice(0, MAX_MESSAGE_LENGTH);
  const cleanHistory = (history || []).slice(-6);

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
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

    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return { success: false, message: FALLBACK_MESSAGE, isConfigured: true };
    }

    const data = (await response.json()) as AiChatResponse;
    if (data && typeof data.success === "boolean") {
      return data;
    }
    return { success: false, message: FALLBACK_MESSAGE, isConfigured: true };
  } catch (error: any) {
    if (error?.name === "AbortError") {
      return {
        success: false,
        message:
          "La consulta tardó más de lo esperado. Por favor reintenta o escribinos por WhatsApp al 11 4070-5211 para atención inmediata.",
        isConfigured: true,
      };
    }
    return { success: false, message: FALLBACK_MESSAGE, isConfigured: true };
  } finally {
    clearTimeout(timeoutId);
  }
}
