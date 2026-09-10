import { createClient } from "@supabase/supabase-js";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, "..");

// Cargar variables de entorno desde .env
try {
  if (typeof (process as any).loadEnvFile === "function") {
    (process as any).loadEnvFile(path.join(PROJECT_ROOT, ".env"));
  }
} catch {
  // Ignorar si no existe o falla
}

const SUPABASE_URL =
  process.env.SUPABASE_URL ||
  process.env.VITE_SUPABASE_URL ||
  "https://icnaufhmralkaukefpop.supabase.co";

const SUPABASE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  "sb_publishable_n7glU5wNpTfkqBLCTuapNQ_9yzi0Vn4";

console.log("🚀 [MIGRACIÓN] Conectando con Supabase en:", SUPABASE_URL);
console.log("🔑 [MIGRACIÓN] Usando clave:", SUPABASE_KEY.substring(0, 16) + "...");

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const NOVEDADES_SEED = [
  {
    id: "10000000-0000-0000-0000-000000000001",
    category: "Operaciones 24/7",
    date: "24 de Agosto, 2026",
    title: "Nuevo Servicio de Tornería y Mecanizado de Guardia 24 hs",
    subtitle: "Respuesta inmediata ante paradas de planta no programadas.",
    description:
      "Hemos habilitado un turno de guardia activa las 24 horas los 365 días del año para el mecanizado y rectificado urgente de componentes mecánicos, ejes, bujes y piezas en acero inoxidable sanitario para la industria alimenticia.",
    localImagePath: "client/public/img/servicio1.webp",
    remoteFileName: "novedad-servicio1.webp",
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
    localImagePath: "client/public/img/faro.webp",
    remoteFileName: "novedad-faro.webp",
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
    localImagePath: "client/public/img/oblea2.webp",
    remoteFileName: "novedad-oblea2.webp",
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
    localImagePath: "client/public/img/servicio5.webp",
    remoteFileName: "novedad-servicio5.webp",
    highlights: [
      "Mantenimiento preventivo en túneles de frío",
      "Auditoría y balance térmico de proceso",
      "Atención permanente de emergencias",
    ],
    active: true,
    sort_order: 4,
  },
];

async function runMigration() {
  console.log("\n📦 [1/3] Verificando imágenes y Storage de Supabase...");

  const bucketName = "novedades-images";

  for (const item of NOVEDADES_SEED) {
    const fullLocalPath = path.join(PROJECT_ROOT, item.localImagePath);
    if (!fs.existsSync(fullLocalPath)) {
      console.warn(`⚠️ [MIGRACIÓN] Imagen local no encontrada: ${fullLocalPath}`);
      continue;
    }

    console.log(`🖼️ [MIGRACIÓN] Procesando imagen: ${item.localImagePath}`);
    const fileBuffer = fs.readFileSync(fullLocalPath);

    try {
      const { error: uploadError } = await supabase.storage
        .from(bucketName)
        .upload(item.remoteFileName, fileBuffer, {
          contentType: "image/webp",
          upsert: true,
        });

      if (uploadError) {
        console.warn(`⚠️ [MIGRACIÓN] No se pudo subir imagen ${item.remoteFileName} al bucket:`, uploadError.message);
        console.log(`   (Se conservará la ruta local ${item.localImagePath} como respaldo)`);
      } else {
        const { data: publicUrlData } = supabase.storage
          .from(bucketName)
          .getPublicUrl(item.remoteFileName);

        console.log(`✅ [MIGRACIÓN] Imagen subida a Storage: ${publicUrlData.publicUrl}`);
        // Asignar URL pública del bucket si se subió con éxito
        (item as any).finalImageUrl = publicUrlData.publicUrl;
      }
    } catch (e: any) {
      console.warn(`⚠️ [MIGRACIÓN] Excepción al interactuar con Storage:`, e.message);
    }
  }

  console.log("\n📝 [2/3] Verificando y sembrando registros en la tabla 'novedades'...");

  for (const item of NOVEDADES_SEED) {
    const record = {
      id: item.id,
      category: item.category,
      date: item.date,
      title: item.title,
      subtitle: item.subtitle,
      description: item.description,
      image: (item as any).finalImageUrl || `/${item.localImagePath.replace(/^client\/public\//, "")}`,
      highlights: item.highlights,
      active: item.active,
      sort_order: item.sort_order,
    };

    try {
      const { data, error } = await supabase
        .from("novedades")
        .upsert(record, { onConflict: "id" })
        .select();

      if (error) {
        console.error(`❌ [MIGRACIÓN] Error al insertar novedad "${item.title}":`, error.message);
      } else {
        console.log(`✅ [MIGRACIÓN] Novedad insertada/actualizada: "${item.title}"`);
      }
    } catch (e: any) {
      console.error(`❌ [MIGRACIÓN] Excepción en upsert:`, e.message);
    }
  }

  console.log("\n🔍 [3/3] Verificando lectura de novedades desde Supabase...");
  try {
    const { data: rows, error: readError } = await supabase
      .from("novedades")
      .select("id, title, category, active, sort_order")
      .order("sort_order", { ascending: true });

    if (readError) {
      console.warn("⚠️ [MIGRACIÓN] Error al leer tabla 'novedades':", readError.message);
      console.log("   (Asegúrese de ejecutar el archivo SQL supabase/migrations/20260907_novedades_schema.sql en el panel de Supabase si la tabla aún no fue creada)");
    } else {
      console.log(`🎉 [MIGRACIÓN] Se encontraron ${rows?.length || 0} registros en Supabase:`);
      rows?.forEach((r) => {
        console.log(`   - [${r.sort_order}] ${r.title} (${r.category}) [Activa: ${r.active}]`);
      });
    }
  } catch (e: any) {
    console.warn("⚠️ [MIGRACIÓN] Excepción en lectura final:", e.message);
  }

  console.log("\n🏁 [MIGRACIÓN] Proceso de migración finalizado.");
}

runMigration().catch((err) => {
  console.error("❌ Error fatal en script de migración:", err);
});
