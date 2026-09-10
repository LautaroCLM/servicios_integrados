import { supabase, type Novedad } from "@/lib/supabase";

/**
 * Fallback estático con las 4 novedades originales para contingencia,
 * pre-rendering seguro en SSR y navegación offline.
 */
export const FALLBACK_NOVEDADES: Novedad[] = [
  {
    id: "10000000-0000-0000-0000-000000000001",
    category: "Operaciones 24/7",
    date: "24 de Agosto, 2026",
    title: "Nuevo Servicio de Tornería y Mecanizado de Guardia 24 hs",
    subtitle: "Respuesta inmediata ante paradas de planta no programadas.",
    description:
      "Hemos habilitado un turno de guardia activa las 24 horas los 365 días del año para el mecanizado y rectificado urgente de componentes mecánicos, ejes, bujes y piezas en acero inoxidable sanitario para la industria alimenticia.",
    image: "/img/servicio1.webp",
    highlights: [
      "Respuesta rápida en campo y taller",
      "Mecanizado en acero inoxidable 304 / 316L",
      "Fabricación según muestra física o plano técnico",
    ],
    active: true,
    sort_order: 1,
  },
  {
    id: "10000000-0000-0000-0000-000000000002",
    category: "Líder FARO",
    date: "18 de Agosto, 2026",
    title: "Formación Operativa: Método Líder FARO® en Planta",
    subtitle: "Entrenamiento práctico a supervisores, líderes técnicos y operadores de línea.",
    description:
      "Finalizamos con éxito la nueva etapa de capacitación en planta aplicando el modelo 70/20/10. Los supervisores y operadores trabajaron directamente sobre pizarrón y equipos en línea de producción, reforzando los 4 pilares: Fortaleza, Acción, Responsabilidad y Orientación.",
    image: "/img/faro.webp",
    highlights: [
      "70% aprendizaje directo sobre equipos en planta",
      "Coaching a supervisores, mandos medios y operadores de línea",
      "Enfoque directo en continuidad operativa",
    ],
    active: true,
    sort_order: 2,
  },
  {
    id: "10000000-0000-0000-0000-000000000003",
    category: "Nuevas Tecnologías",
    date: "12 de Agosto, 2026",
    title: "Optimización en Mantenimiento Térmico para Hornos de Obleas",
    subtitle: "Desincrustación profunda y calibración de paralelismo.",
    description:
      "Implementamos nuestro nuevo sistema de limpieza y calibración de alta precisión en planchas de cocción para hornos de obleas continuos, logrando una reducción significativa del tiempo de parada y mejorando la homogeneidad del horneado.",
    image: "/img/oblea2.webp",
    highlights: [
      "Calibración micrométrica de planchas de cocción",
      "Limpieza técnica no corrosiva",
      "Mayor rendimiento energético y vida útil",
    ],
    active: true,
    sort_order: 3,
  },
  {
    id: "10000000-0000-0000-0000-000000000004",
    category: "Servicios",
    date: "05 de Agosto, 2026",
    title: "Sistemas de Frío e Instalación de Chillers de Alta Capacidad",
    subtitle: "Soluciones térmicas para líneas de moldeo y túneles de congelado.",
    description:
      "Ampliamos nuestra capacidad de atención técnica para plantas de chocolates y productos congelados, integrando auditorías térmicas, mantenimiento preventivo de compresores y calibración de bombas de proceso.",
    image: "/img/servicio5.webp",
    highlights: [
      "Mantenimiento preventivo en túneles de frío",
      "Auditoría y balance térmico de proceso",
      "Atención permanente de emergencias",
    ],
    active: true,
    sort_order: 4,
  },
];

let cachedNovedades: Novedad[] | null = null;
let lastFetchTime = 0;
const CACHE_TTL_MS = 60 * 1000; // 1 minuto de caché en cliente

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
      return [raw];
    }
  }
  return [];
}

/**
 * Obtiene las novedades activas desde Supabase.
 * En caso de fallo de red, respuesta vacía o entorno SSR, retorna el dataset de respaldo de forma segura.
 */
export async function getPublicNovedades(forceRefresh = false): Promise<Novedad[]> {
  const now = Date.now();
  if (!forceRefresh && cachedNovedades && now - lastFetchTime < CACHE_TTL_MS) {
    return cachedNovedades;
  }

  try {
    const { data, error } = await supabase
      .from("novedades")
      .select("*")
      .eq("active", true)
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: false });

    if (error) {
      console.warn("⚠️ [Novedades] Error consultando Supabase, usando respaldo estático:", error.message);
      return cachedNovedades || FALLBACK_NOVEDADES;
    }

    if (data && data.length > 0) {
      const formatted: Novedad[] = data.map((item: any) => ({
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

      cachedNovedades = formatted;
      lastFetchTime = now;
      return formatted;
    }

    // Si la tabla estuviese vacía inicialmente, usamos el fallback
    return cachedNovedades || FALLBACK_NOVEDADES;
  } catch (err: any) {
    console.warn("⚠️ [Novedades] Error de red inesperado al consultar Supabase:", err?.message || err);
    return cachedNovedades || FALLBACK_NOVEDADES;
  }
}
