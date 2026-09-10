import type { Config, Context } from "@netlify/functions";
import { processAiChatMessage } from "../../server/aiService.js";

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

    let body: unknown;
    try {
      body = await req.json();
    } catch {
      body = {};
    }

    const result = await processAiChatMessage(body, clientIp);

    return new Response(JSON.stringify(result), {
      status: result.success ? 200 : 200, // Return 200 with result payload so frontend displays friendly message
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("❌ Error no controlado en Netlify Function ai-chat:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message:
          "Ocurrió un error inesperado al procesar la consulta. Por favor intente nuevamente o comuníquese por WhatsApp al 11-40705211.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export const config: Config = {
  path: "/api/ai-chat",
};
