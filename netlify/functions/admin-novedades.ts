import type { Config, Context } from "@netlify/functions";
import { handleAdminNovedadesRequest } from "../../server/adminNovedadesHandler.js";

export default async function handler(req: Request, context: Context): Promise<Response> {
  // Manejo de preflight CORS si fuera necesario
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
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

    const result = await handleAdminNovedadesRequest(action, body, authHeader);

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
