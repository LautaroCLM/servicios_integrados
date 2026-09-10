import { createClient } from "@supabase/supabase-js";
import crypto from "node:crypto";

const SUPABASE_URL =
  process.env.SUPABASE_URL ||
  process.env.VITE_SUPABASE_URL ||
  "https://icnaufhmralkaukefpop.supabase.co";

// En producción debe ser SUPABASE_SERVICE_ROLE_KEY. En desarrollo si no está definida aún, usa fallback.
const SUPABASE_SERVICE_ROLE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  "sb_publishable_n7glU5wNpTfkqBLCTuapNQ_9yzi0Vn4";

const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

// Contraseña administrativa en variable de entorno
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "servicios2026";
const SESSION_SECRET =
  process.env.ADMIN_SESSION_SECRET ||
  crypto.createHash("sha256").update(ADMIN_PASSWORD + "_si_session_salt").digest("hex");

const SESSION_DURATION_MS = 8 * 60 * 60 * 1000; // 8 horas

/**
 * Genera un token HMAC-SHA256 firmado para la sesión de administración
 */
export function generateAdminToken(): { token: string; expiresAt: number } {
  const expiresAt = Date.now() + SESSION_DURATION_MS;
  const payload = JSON.stringify({ role: "admin", exp: expiresAt });
  const base64Payload = Buffer.from(payload).toString("base64url");
  const signature = crypto
    .createHmac("sha256", SESSION_SECRET)
    .update(base64Payload)
    .digest("base64url");
  return {
    token: `${base64Payload}.${signature}`,
    expiresAt,
  };
}

/**
 * Valida un token HMAC-SHA256
 */
export function verifyAdminToken(token: string | null | undefined): boolean {
  if (!token || typeof token !== "string") return false;
  const parts = token.split(".");
  if (parts.length !== 2) return false;

  const [base64Payload, signature] = parts;
  const expectedSignature = crypto
    .createHmac("sha256", SESSION_SECRET)
    .update(base64Payload)
    .digest("base64url");

  if (signature.length !== expectedSignature.length) return false;

  const valid = crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );
  if (!valid) return false;

  try {
    const payload = JSON.parse(Buffer.from(base64Payload, "base64url").toString("utf-8"));
    if (payload.role !== "admin" || !payload.exp || Date.now() > payload.exp) {
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

/**
 * Normaliza highlights a array de strings
 */
function normalizeHighlights(raw: any): string[] {
  if (Array.isArray(raw)) {
    return raw.map((item) => String(item).trim()).filter(Boolean);
  }
  if (typeof raw === "string") {
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        return parsed.map((item) => String(item).trim()).filter(Boolean);
      }
    } catch {
      return [raw.trim()].filter(Boolean);
    }
  }
  return [];
}

/**
 * Extrae el path del bucket de Supabase si la imagen pertenece a novedades-images
 */
function extractStoragePath(imageUrl: string): string | null {
  if (!imageUrl || typeof imageUrl !== "string") return null;
  const match = imageUrl.match(/novedades-images\/([^?#]+)/);
  return match ? decodeURIComponent(match[1]) : null;
}

/**
 * Dispatcher principal para solicitudes de administración de novedades
 */
export async function handleAdminNovedadesRequest(
  action: string,
  body: any,
  authHeader: string | null | undefined
): Promise<{ status: number; data: any }> {
  // 1. Endpoint público: Login
  if (action === "login") {
    const password = String(body?.password || "");
    const adminPass = ADMIN_PASSWORD;

    // Validación segura en tiempo constante
    const passBuf = Buffer.from(password);
    const adminBuf = Buffer.from(adminPass);

    let isMatch = false;
    if (passBuf.length === adminBuf.length) {
      isMatch = crypto.timingSafeEqual(passBuf, adminBuf);
    }

    if (!isMatch) {
      return {
        status: 401,
        data: { success: false, message: "Contraseña incorrecta." },
      };
    }

    const { token, expiresAt } = generateAdminToken();
    return {
      status: 200,
      data: {
        success: true,
        message: "Autenticación exitosa.",
        token,
        expiresAt,
      },
    };
  }

  // 2. Todos los demás endpoints requieren verificación de token
  const token = authHeader?.replace(/^Bearer\s+/i, "") || "";
  if (!verifyAdminToken(token)) {
    return {
      status: 401,
      data: { success: false, message: "Sesión no válida o expirada. Inicie sesión nuevamente." },
    };
  }

  // 3. Verificación de sesión activa
  if (action === "verify") {
    return {
      status: 200,
      data: { success: true, message: "Sesión válida." },
    };
  }

  // 4. Listar todas las novedades (incluyendo inactivas)
  if (action === "list") {
    try {
      const { data, error } = await supabaseAdmin
        .from("novedades")
        .select("*")
        .order("sort_order", { ascending: true })
        .order("created_at", { ascending: false });

      if (error) throw error;

      const formatted = (data || []).map((item: any) => ({
        ...item,
        highlights: normalizeHighlights(item.highlights),
      }));

      return {
        status: 200,
        data: { success: true, data: formatted },
      };
    } catch (err: any) {
      console.error("❌ Error en admin list novedades:", err);
      return {
        status: 500,
        data: { success: false, message: "Error al obtener novedades.", error: err.message },
      };
    }
  }

  // 5. Crear Novedad
  if (action === "create") {
    try {
      const {
        category,
        date,
        title,
        subtitle,
        description,
        image,
        highlights,
        active,
        sort_order,
      } = body;

      if (!title || !description || !category || !image) {
        return {
          status: 400,
          data: { success: false, message: "Faltan campos obligatorios (título, descripción, categoría o imagen)." },
        };
      }

      const insertPayload = {
        category: String(category).trim(),
        date: String(date || new Date().toLocaleDateString("es-AR", { day: "2-digit", month: "long", year: "numeric" })),
        title: String(title).trim(),
        subtitle: String(subtitle || "").trim(),
        description: String(description).trim(),
        image: String(image).trim(),
        highlights: normalizeHighlights(highlights),
        active: Boolean(active ?? true),
        sort_order: Number(sort_order ?? 0),
      };

      const { data, error } = await supabaseAdmin
        .from("novedades")
        .insert([insertPayload])
        .select()
        .single();

      if (error) throw error;

      return {
        status: 201,
        data: { success: true, message: "Novedad creada exitosamente.", data },
      };
    } catch (err: any) {
      console.error("❌ Error creando novedad:", err);
      return {
        status: 500,
        data: { success: false, message: "Error al crear novedad en la base de datos.", error: err.message },
      };
    }
  }

  // 6. Actualizar Novedad
  if (action === "update") {
    try {
      const {
        id,
        category,
        date,
        title,
        subtitle,
        description,
        image,
        highlights,
        active,
        sort_order,
        old_image,
      } = body;

      if (!id) {
        return {
          status: 400,
          data: { success: false, message: "ID de novedad requerido." },
        };
      }

      const updatePayload: Record<string, any> = {};
      if (category !== undefined) updatePayload.category = String(category).trim();
      if (date !== undefined) updatePayload.date = String(date).trim();
      if (title !== undefined) updatePayload.title = String(title).trim();
      if (subtitle !== undefined) updatePayload.subtitle = String(subtitle).trim();
      if (description !== undefined) updatePayload.description = String(description).trim();
      if (image !== undefined) updatePayload.image = String(image).trim();
      if (highlights !== undefined) updatePayload.highlights = normalizeHighlights(highlights);
      if (active !== undefined) updatePayload.active = Boolean(active);
      if (sort_order !== undefined) updatePayload.sort_order = Number(sort_order);

      const { data, error } = await supabaseAdmin
        .from("novedades")
        .update(updatePayload)
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;

      // Si la imagen cambió y había una imagen anterior en el Storage, verificar si se puede eliminar
      if (old_image && image && old_image !== image) {
        const oldStoragePath = extractStoragePath(old_image);
        if (oldStoragePath) {
          // Verificar si otro registro aún usa la misma imagen
          const { data: duplicateUsage } = await supabaseAdmin
            .from("novedades")
            .select("id")
            .eq("image", old_image)
            .neq("id", id)
            .limit(1);

          if (!duplicateUsage || duplicateUsage.length === 0) {
            await supabaseAdmin.storage.from("novedades-images").remove([oldStoragePath]);
          }
        }
      }

      return {
        status: 200,
        data: { success: true, message: "Novedad actualizada exitosamente.", data },
      };
    } catch (err: any) {
      console.error("❌ Error actualizando novedad:", err);
      return {
        status: 500,
        data: { success: false, message: "Error al actualizar la novedad.", error: err.message },
      };
    }
  }

  // 7. Toggle Activa / Inactiva
  if (action === "toggle-active") {
    try {
      const { id, active } = body;
      if (!id || active === undefined) {
        return {
          status: 400,
          data: { success: false, message: "ID y estado active requeridos." },
        };
      }

      const { data, error } = await supabaseAdmin
        .from("novedades")
        .update({ active: Boolean(active) })
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;

      return {
        status: 200,
        data: { success: true, message: `Novedad ${active ? "activada" : "desactivada"}.`, data },
      };
    } catch (err: any) {
      console.error("❌ Error cambiando estado activo:", err);
      return {
        status: 500,
        data: { success: false, message: "Error al actualizar estado.", error: err.message },
      };
    }
  }

  // 8. Eliminar Novedad
  if (action === "delete") {
    try {
      const { id, image } = body;
      if (!id) {
        return {
          status: 400,
          data: { success: false, message: "ID de novedad requerido." },
        };
      }

      const { error } = await supabaseAdmin.from("novedades").delete().eq("id", id);
      if (error) throw error;

      // Limpiar imagen del bucket si no está en uso por otra novedad
      if (image) {
        const storagePath = extractStoragePath(image);
        if (storagePath) {
          const { data: duplicateUsage } = await supabaseAdmin
            .from("novedades")
            .select("id")
            .eq("image", image)
            .limit(1);

          if (!duplicateUsage || duplicateUsage.length === 0) {
            await supabaseAdmin.storage.from("novedades-images").remove([storagePath]);
          }
        }
      }

      return {
        status: 200,
        data: { success: true, message: "Novedad eliminada correctamente." },
      };
    } catch (err: any) {
      console.error("❌ Error eliminando novedad:", err);
      return {
        status: 500,
        data: { success: false, message: "Error al eliminar la novedad.", error: err.message },
      };
    }
  }

  // 9. Reordenar Lote
  if (action === "reorder") {
    try {
      const items: Array<{ id: string; sort_order: number }> = body?.items || [];
      if (!Array.isArray(items) || items.length === 0) {
        return {
          status: 400,
          data: { success: false, message: "Lista de items requerida." },
        };
      }

      for (const item of items) {
        await supabaseAdmin
          .from("novedades")
          .update({ sort_order: Number(item.sort_order) })
          .eq("id", item.id);
      }

      return {
        status: 200,
        data: { success: true, message: "Orden actualizado exitosamente." },
      };
    } catch (err: any) {
      console.error("❌ Error reordenando novedades:", err);
      return {
        status: 500,
        data: { success: false, message: "Error al actualizar el orden.", error: err.message },
      };
    }
  }

  // 10. Subir Imagen a Storage
  if (action === "upload") {
    try {
      const { fileName, fileType, fileBase64 } = body;
      if (!fileName || !fileBase64 || !fileType) {
        return {
          status: 400,
          data: { success: false, message: "Nombre, tipo y contenido base64 de archivo requeridos." },
        };
      }

      const allowedMimes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
      if (!allowedMimes.includes(fileType)) {
        return {
          status: 400,
          data: { success: false, message: "Formato no permitido. Use WebP, PNG, JPG o GIF." },
        };
      }

      const buffer = Buffer.from(fileBase64, "base64");
      if (buffer.length > 5 * 1024 * 1024) {
        return {
          status: 400,
          data: { success: false, message: "La imagen supera el tamaño máximo permitido de 5 MB." },
        };
      }

      const ext = fileName.split(".").pop()?.toLowerCase() || "webp";
      const sanitizedName = fileName
        .replace(/\.[^/.]+$/, "")
        .replace(/[^a-zA-Z0-9-_]/g, "_")
        .toLowerCase();
      const storageKey = `novedad-${Date.now()}-${sanitizedName}.${ext}`;

      const { data: uploadData, error: uploadError } = await supabaseAdmin.storage
        .from("novedades-images")
        .upload(storageKey, buffer, {
          contentType: fileType,
          cacheControl: "3600",
          upsert: true,
        });

      if (uploadError) throw uploadError;

      const { data: publicUrlData } = supabaseAdmin.storage
        .from("novedades-images")
        .getPublicUrl(storageKey);

      return {
        status: 200,
        data: {
          success: true,
          message: "Imagen subida exitosamente.",
          url: publicUrlData.publicUrl,
          path: storageKey,
        },
      };
    } catch (err: any) {
      console.error("❌ Error subiendo imagen a Supabase Storage:", err);
      return {
        status: 500,
        data: { success: false, message: "Error al subir la imagen al Storage.", error: err.message },
      };
    }
  }

  return {
    status: 404,
    data: { success: false, message: `Acción '${action}' no reconocida.` },
  };
}
