import type { Config, Context } from "@netlify/functions";
import { handleAdminNovedadesRequest } from "../../server/adminNovedadesHandler.js";

export default async function handler(req: Request, context: Context): Promise<Response> {
  // Sin CORS abierto: el panel se sirve desde el mismo dominio.
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204 });
  }

  try {
    const url = new URL(req.url);
    // Acción puede venir como parámetro ?action=... o del final de la ruta /api/admin-novedades/:action
    const pathParts = url.pathname.split("/").filter(Boolean);
    const lastPart = pathParts[pathParts.length - 1];
    let action = url.searchParams.get("action") || (lastPart !== "admin-novedades" ? lastPart : "");

    const authHeader = req.headers.get("authorization");

    let body: any = {};
    if (req.method !== "GET" && req.method !== "HEAD") {
      try {
        body = await req.json();
      } catch {
        body = {};
      }
    }

    if (!action && body?.action) {
      action = body.action;
    }

    if (!action) {
      action = req.method === "GET" ? "list" : "verify";
    }

    const clientIp =
      req.headers.get("x-nf-client-connection-ip") ||
      context.ip ||
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "unknown";

    const result = await handleAdminNovedadesRequest(action, body, authHeader, clientIp);

    return new Response(JSON.stringify(result.data), {
      status: result.status,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: any) {
    console.error("❌ Error en Netlify Function admin-novedades:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Error interno del servidor en función administrativa.",
        error: error?.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export const config: Config = {
  path: "/api/admin-novedades",
};
