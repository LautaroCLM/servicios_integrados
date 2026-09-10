import { supabase, type Novedad } from "@/lib/supabase";

const ADMIN_EMAIL = "admin@serviciosintegradosweb.com";

export interface CreateNovedadPayload {
  category: string;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  highlights: string[];
  active: boolean;
  sort_order: number;
}

export interface UpdateNovedadPayload extends CreateNovedadPayload {
  id: string;
  old_image?: string;
}

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

function extractStoragePath(imageUrl: string): string | null {
  if (!imageUrl || typeof imageUrl !== "string") return null;
  const match = imageUrl.match(/novedades-images\/([^?#]+)/);
  return match ? decodeURIComponent(match[1]) : null;
}

export const adminNovedadesService = {
  /**
   * Inicia sesión con la contraseña administrativa contra Supabase Auth.
   * El cliente solo ingresa la contraseña en pantalla.
   */
  async login(password: string): Promise<{ success: boolean; token: string }> {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: ADMIN_EMAIL,
      password: password.trim(),
    });

    if (error) {
      console.warn("⚠️ Error de autenticación en Supabase:", error.message);
      throw new Error("Contraseña incorrecta. Verifique sus credenciales.");
    }

    const token = data.session?.access_token || "session-active";
    return { success: true, token };
  },

  async logout(): Promise<void> {
    await supabase.auth.signOut();
  },

  async verifySession(): Promise<boolean> {
    const { data } = await supabase.auth.getSession();
    return Boolean(data?.session?.user);
  },

  async listAll(): Promise<Novedad[]> {
    const { data, error } = await supabase
      .from("novedades")
      .select("*")
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: false });

    if (error) {
      console.error("❌ Error listando novedades:", error);
      throw new Error(error.message || "Error al obtener novedades.");
    }

    return (data || []).map((item: any) => ({
      id: String(item.id),
      category: String(item.category || "General"),
      date: String(item.date || ""),
      title: String(item.title || ""),
      subtitle: String(item.subtitle || ""),
      description: String(item.description || ""),
      image: String(item.image || "/img/servicio1.webp"),
      highlights: normalizeHighlights(item.highlights),
      active: Boolean(item.active),
      sort_order: Number(item.sort_order ?? 0),
      created_at: item.created_at,
      updated_at: item.updated_at,
    }));
  },

  async create(payload: CreateNovedadPayload): Promise<Novedad> {
    const insertData = {
      category: payload.category.trim(),
      date: payload.date.trim() || new Date().toLocaleDateString("es-AR", { day: "2-digit", month: "long", year: "numeric" }),
      title: payload.title.trim(),
      subtitle: (payload.subtitle || "").trim(),
      description: payload.description.trim(),
      image: payload.image.trim(),
      highlights: normalizeHighlights(payload.highlights),
      active: Boolean(payload.active),
      sort_order: Number(payload.sort_order ?? 0),
    };

    const { data, error } = await supabase
      .from("novedades")
      .insert([insertData])
      .select()
      .single();

    if (error) {
      console.error("❌ Error creando novedad:", error);
      throw new Error(error.message || "Error al crear la novedad.");
    }

    return {
      ...data,
      highlights: normalizeHighlights(data.highlights),
    };
  },

  async update(payload: UpdateNovedadPayload): Promise<Novedad> {
    const updateData: Record<string, any> = {
      category: payload.category.trim(),
      date: payload.date.trim(),
      title: payload.title.trim(),
      subtitle: (payload.subtitle || "").trim(),
      description: payload.description.trim(),
      image: payload.image.trim(),
      highlights: normalizeHighlights(payload.highlights),
      active: Boolean(payload.active),
      sort_order: Number(payload.sort_order ?? 0),
    };

    const { data, error } = await supabase
      .from("novedades")
      .update(updateData)
      .eq("id", payload.id)
      .select()
      .single();

    if (error) {
      console.error("❌ Error actualizando novedad:", error);
      throw new Error(error.message || "Error al actualizar la novedad.");
    }

    // Si la imagen cambió y había una previa en Storage, eliminar la antigua si no está duplicada
    if (payload.old_image && payload.image && payload.old_image !== payload.image) {
      const oldStoragePath = extractStoragePath(payload.old_image);
      if (oldStoragePath) {
        const { data: duplicate } = await supabase
          .from("novedades")
          .select("id")
          .eq("image", payload.old_image)
          .neq("id", payload.id)
          .limit(1);

        if (!duplicate || duplicate.length === 0) {
          await supabase.storage.from("novedades-images").remove([oldStoragePath]);
        }
      }
    }

    return {
      ...data,
      highlights: normalizeHighlights(data.highlights),
    };
  },

  async toggleActive(id: string, active: boolean): Promise<void> {
    const { error } = await supabase
      .from("novedades")
      .update({ active: Boolean(active) })
      .eq("id", id);

    if (error) {
      console.error("❌ Error en toggleActive:", error);
      throw new Error(error.message || "Error al cambiar estado de la novedad.");
    }
  },

  async delete(id: string, image?: string): Promise<void> {
    const { error } = await supabase.from("novedades").delete().eq("id", id);
    if (error) {
      console.error("❌ Error eliminando novedad:", error);
      throw new Error(error.message || "Error al eliminar la novedad.");
    }

    if (image) {
      const storagePath = extractStoragePath(image);
      if (storagePath) {
        const { data: duplicate } = await supabase
          .from("novedades")
          .select("id")
          .eq("image", image)
          .limit(1);

        if (!duplicate || duplicate.length === 0) {
          await supabase.storage.from("novedades-images").remove([storagePath]);
        }
      }
    }
  },

  async reorder(items: Array<{ id: string; sort_order: number }>): Promise<void> {
    for (const item of items) {
      await supabase
        .from("novedades")
        .update({ sort_order: Number(item.sort_order) })
        .eq("id", item.id);
    }
  },

  async uploadImage(file: File): Promise<{ url: string; path: string }> {
    const allowedMimes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (!allowedMimes.includes(file.type)) {
      throw new Error("Formato no permitido. Utilice WebP, JPG o PNG.");
    }

    if (file.size > 5 * 1024 * 1024) {
      throw new Error("La imagen supera el límite máximo de 5 MB.");
    }

    const ext = file.name.split(".").pop()?.toLowerCase() || "webp";
    const sanitizedName = file.name
      .replace(/\.[^/.]+$/, "")
      .replace(/[^a-zA-Z0-9-_]/g, "_")
      .toLowerCase();
    const storageKey = `novedad-${Date.now()}-${sanitizedName}.${ext}`;

    const { error: uploadError } = await supabase.storage
      .from("novedades-images")
      .upload(storageKey, file, {
        contentType: file.type,
        cacheControl: "3600",
        upsert: true,
      });

    if (uploadError) {
      console.error("❌ Error subiendo imagen a Supabase Storage:", uploadError);
      throw new Error(uploadError.message || "Error al subir imagen al Storage.");
    }

    const { data: publicUrlData } = supabase.storage
      .from("novedades-images")
      .getPublicUrl(storageKey);

    return {
      url: publicUrlData.publicUrl,
      path: storageKey,
    };
  },
};
