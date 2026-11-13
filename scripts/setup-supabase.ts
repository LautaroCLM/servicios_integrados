import { createClient } from "@supabase/supabase-js";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, "..");

// Cargar .env
try {
  if (typeof (process as any).loadEnvFile === "function") {
    (process as any).loadEnvFile(path.join(PROJECT_ROOT, ".env"));
  }
} catch {}

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || "https://icnaufhmralkaukefpop.supabase.co";
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "";

if (!SERVICE_KEY) {
  console.error("❌ No se encontró SUPABASE_SERVICE_ROLE_KEY en .env");
  process.exit(1);
}

if (ADMIN_PASSWORD.length < 10) {
  console.error("❌ ADMIN_PASSWORD no está definida en .env o tiene menos de 10 caracteres.");
  process.exit(1);
}

const supabaseAdmin = createClient(SUPABASE_URL, SERVICE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});

async function main() {
  console.log("🛠️ [CONFIGURACIÓN] Iniciando configuración de Supabase...");

  // 1. Crear el bucket novedades-images
  console.log("1. Verificando bucket de Storage 'novedades-images'...");
  const { data: buckets, error: getBucketsError } = await supabaseAdmin.storage.listBuckets();
  const bucketExists = buckets?.some((b) => b.name === "novedades-images");

  if (!bucketExists) {
    console.log("   Creando bucket 'novedades-images' público...");
    const { data: createdBucket, error: createError } = await supabaseAdmin.storage.createBucket("novedades-images", {
      public: true,
      fileSizeLimit: 5242880, // 5MB
      allowedMimeTypes: ["image/jpeg", "image/png", "image/webp", "image/gif"],
    });

    if (createError) {
      console.warn("   ⚠️ No se pudo crear bucket:", createError.message);
    } else {
      console.log("   ✅ Bucket 'novedades-images' creado con éxito.");
    }
  } else {
    console.log("   ✅ El bucket 'novedades-images' ya existe.");
  }

  // 2. Crear o actualizar usuario admin en Supabase Auth
  console.log("2. Verificando usuario administrador en Supabase Auth...");
  const adminEmail = "admin@serviciosintegradosweb.com";
  const { data: usersData } = await supabaseAdmin.auth.admin.listUsers();
  const existingUser = usersData?.users?.find((u) => u.email === adminEmail);

  if (existingUser) {
    console.log(`   Actualizando contraseña para ${adminEmail}...`);
    const { error: updateError } = await supabaseAdmin.auth.admin.updateUserById(existingUser.id, {
      password: ADMIN_PASSWORD,
    });
    if (updateError) console.warn("   ⚠️ Error actualizando contraseña:", updateError.message);
    else console.log(`   ✅ Contraseña actualizada correctamente a la indicada en .env.`);
  } else {
    console.log(`   Creando usuario ${adminEmail}...`);
    const { error: createError } = await supabaseAdmin.auth.admin.createUser({
      email: adminEmail,
      password: ADMIN_PASSWORD,
      email_confirm: true,
    });
    if (createError) console.warn("   ⚠️ Error creando usuario admin:", createError.message);
    else console.log(`   ✅ Usuario ${adminEmail} creado exitosamente.`);
  }

  console.log("\n🎉 Configuración en Supabase completada con éxito.");
}

main().catch((err) => console.error("Error fatal:", err));
