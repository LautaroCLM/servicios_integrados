import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as esbuild from "esbuild";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, "..");
const DIST_PUBLIC = path.resolve(PROJECT_ROOT, "dist", "public");

interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
}

const PAGES_METADATA: Record<string, PageMeta> = {
  "/": {
    title: "Servicios Integrados | Mantenimiento Industrial, Ingeniería y Confiabilidad",
    description: "Servicios Integrados brinda soluciones de mantenimiento industrial, ingeniería y confiabilidad para la industria, con más de 30 años de experiencia.",
    canonical: "https://serviciosintegradosweb.com/",
  },
  "/mantenimiento-industrial/": {
    title: "Mantenimiento Industrial | Servicios Integrados",
    description: "Servicios de mantenimiento industrial preventivo, predictivo y correctivo para plantas y equipos. Más de 30 años de experiencia técnica en planta.",
    canonical: "https://serviciosintegradosweb.com/mantenimiento-industrial/",
  },
  "/ingenieria-de-mantenimiento/": {
    title: "Ingeniería de Mantenimiento | Servicios Integrados",
    description: "Servicios de ingeniería de mantenimiento mecánico y de procesos, optimización de maquinaria y desarrollo de proyectos industriales.",
    canonical: "https://serviciosintegradosweb.com/ingenieria-de-mantenimiento/",
  },
  "/confiabilidad-industrial/": {
    title: "Confiabilidad Industrial | Servicios Integrados",
    description: "Soluciones en confiabilidad industrial, planes LIL, RCM y formación de mandos técnicos para asegurar la continuidad operativa de planta.",
    canonical: "https://serviciosintegradosweb.com/confiabilidad-industrial/",
  },
  "/torneria-mecanizado/": {
    title: "Tornería y Mecanizado Industrial 24 hs | Servicios Integrados",
    description: "Taller de tornería y mecanizado con servicio de guardia 24 hs para urgencias de planta. Fabricación de repuestos según muestra o plano.",
    canonical: "https://serviciosintegradosweb.com/torneria-mecanizado/",
  },
  "/fabricacion-acero-inoxidable/": {
    title: "Fabricación en Acero Inoxidable y Piping Sanitario | Servicios Integrados",
    description: "Fabricación e instalación de cañerías sanitarias, silos, termos, tolvas y estructuras en acero inoxidable AISI 304 y 316L para industria alimentaria.",
    canonical: "https://serviciosintegradosweb.com/fabricacion-acero-inoxidable/",
  },
  "/refrigeracion-industrial/": {
    title: "Refrigeración Industrial y Mantenimiento de Chillers | Servicios Integrados",
    description: "Servicio especializado de mantenimiento preventivo, overhaul y diagnóstico de chillers, torres de enfriamiento y compresores de refrigeración industrial.",
    canonical: "https://serviciosintegradosweb.com/refrigeracion-industrial/",
  },
  "/mantenimiento-hornos-industriales/": {
    title: "Mantenimiento de Hornos Industriales y Placas Wafer | Servicios Integrados",
    description: "Servicio especializado de mantenimiento, limpieza técnica sin desgaste abrasivo, calibración de paralelismo y overhaul de planchas de cocción para hornos de obleas.",
    canonical: "https://serviciosintegradosweb.com/mantenimiento-hornos-industriales/",
  },
  "/blog/": {
    title: "Artículos Técnicos e Ingeniería de Mantenimiento | Servicios Integrados",
    description: "Guías técnicas, análisis y buenas prácticas sobre mantenimiento preventivo, predictivo, paradas de planta y confiabilidad industrial.",
    canonical: "https://serviciosintegradosweb.com/blog/",
  },
  "/blog/mantenimiento-preventivo-industrial/": {
    title: "Mantenimiento Preventivo Industrial: Guía y Aplicación | Servicios Integrados",
    description: "Estrategias, periodicidad, planes LIL y mejores prácticas de mantenimiento preventivo para maximizar la disponibilidad de planta y evitar fallas no programadas.",
    canonical: "https://serviciosintegradosweb.com/blog/mantenimiento-preventivo-industrial/",
  },
  "/blog/mantenimiento-predictivo-industrial/": {
    title: "Mantenimiento Predictivo Industrial: Técnicas y Utilidad | Servicios Integrados",
    description: "Técnicas de análisis de vibraciones, termografía, análisis de aceite y monitoreo de condición para anticipar averías en plantas de producción continua.",
    canonical: "https://serviciosintegradosweb.com/blog/mantenimiento-predictivo-industrial/",
  },
  "/blog/mantenimiento-correctivo-vs-preventivo/": {
    title: "Mantenimiento Correctivo vs Preventivo: Diferencias Clave | Servicios Integrados",
    description: "Análisis comparativo de costos, tiempos de inactividad, seguridad y planificación operativa entre mantenimiento correctivo de emergencia y planes preventivos.",
    canonical: "https://serviciosintegradosweb.com/blog/mantenimiento-correctivo-vs-preventivo/",
  },
  "/blog/paradas-de-planta-industriales/": {
    title: "Paradas de Planta Industriales: Guía de Planificación | Servicios Integrados",
    description: "Metodología integral para planificar, coordinar recursos, gestionar repuestos críticos y ejecutar paradas técnicas de planta sin desvíos de tiempo ni presupuesto.",
    canonical: "https://serviciosintegradosweb.com/blog/paradas-de-planta-industriales/",
  },
  "/blog/overhaul-industrial/": {
    title: "Overhaul Industrial: Qué es y Cuándo Realizarlo | Servicios Integrados",
    description: "Guía sobre reconstrucción completa de maquinaria industrial, desmontaje, rectificado, tolerancias y puesta a punto de líneas críticas de producción.",
    canonical: "https://serviciosintegradosweb.com/blog/overhaul-industrial/",
  },
  "/blog/analisis-causa-raiz-mantenimiento/": {
    title: "Análisis de Causa Raíz (RCA) en Mantenimiento | Servicios Integrados",
    description: "Metodología práctica para aplicar 5 Porqués, Diagrama de Ishikawa y análisis de causa raíz para eliminar averías mecánicas recurrentes en planta.",
    canonical: "https://serviciosintegradosweb.com/blog/analisis-causa-raiz-mantenimiento/",
  },
  "/blog/confiabilidad-industrial-mantenimiento-autonomo/": {
    title: "Confiabilidad Industrial y Mantenimiento Autónomo | Servicios Integrados",
    description: "Cómo integrar a los operadores de línea en rutinas de inspección, limpieza y lubricación bajo el método Líder FARO® para reducir paradas imprevistas.",
    canonical: "https://serviciosintegradosweb.com/blog/confiabilidad-industrial-mantenimiento-autonomo/",
  },
  "/privacidad/": {
    title: "Política de Privacidad | Servicios Integrados",
    description: "Política de privacidad y protección de datos personales de Servicios Integrados.",
    canonical: "https://serviciosintegradosweb.com/privacidad/",
  },
};

async function runPrerender() {
  console.log("🚀 [SSG] Iniciando pre-rendering de páginas públicas para SEO...");

  const templatePath = path.join(DIST_PUBLIC, "index.html");
  if (!fs.existsSync(templatePath)) {
    throw new Error(`[SSG] Error: No se encontró la plantilla ${templatePath}. Ejecute vite build primero.`);
  }

  const baseHtml = fs.readFileSync(templatePath, "utf-8");

  // 1. Bundle ssr-routes using esbuild JS API (no shell quoting issues)
  const bundlePath = path.resolve(PROJECT_ROOT, "dist", "prerender-bundle.js");
  const ssrRoutesPath = path.resolve(PROJECT_ROOT, "scripts", "ssr-routes.tsx");
  console.log("📦 [SSG] Compilando rutas SSR con esbuild...");

  await esbuild.build({
    entryPoints: [ssrRoutesPath],
    bundle: true,
    platform: "node",
    format: "esm",
    packages: "external",
    alias: {
      "@": path.resolve(PROJECT_ROOT, "client", "src"),
      "@shared": path.resolve(PROJECT_ROOT, "shared"),
    },
    outfile: bundlePath,
  });

  // 2. Dynamic import the generated SSR renderer
  const { renderRouteHtml, routesMap } = await import(`file://${bundlePath}`);

  let successCount = 0;

  for (const [route, meta] of Object.entries(PAGES_METADATA)) {
    if (!routesMap[route]) {
      console.warn(`⚠️ [SSG] Advertencia: La ruta ${route} no tiene componente mapeado en routesMap.`);
      continue;
    }

    try {
      const pageBodyHtml = renderRouteHtml(route);

      // Replace metadata and HTML in template
      let html = baseHtml;

      // Replace title
      html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${meta.title}</title>`);

      // Replace meta description
      html = html.replace(
        /<meta[^>]+name=["']description["'][^>]*>/i,
        `<meta name="description" content="${meta.description}" />`
      );

      // Replace canonical tag
      html = html.replace(
        /<link[^>]+rel=["']canonical["'][^>]*>/i,
        `<link rel="canonical" href="${meta.canonical}" />`
      );

      // Replace Open Graph tags
      html = html.replace(
        /<meta[^>]+property=["']og:title["'][^>]*>/i,
        `<meta property="og:title" content="${meta.ogTitle || meta.title}" />`
      );
      html = html.replace(
        /<meta[^>]+property=["']og:description["'][^>]*>/i,
        `<meta property="og:description" content="${meta.ogDescription || meta.description}" />`
      );
      html = html.replace(
        /<meta[^>]+property=["']og:url["'][^>]*>/i,
        `<meta property="og:url" content="${meta.canonical}" />`
      );

      // Replace Twitter tags
      html = html.replace(
        /<meta[^>]+name=["']twitter:title["'][^>]*>/i,
        `<meta name="twitter:title" content="${meta.ogTitle || meta.title}" />`
      );
      html = html.replace(
        /<meta[^>]+name=["']twitter:description["'][^>]*>/i,
        `<meta name="twitter:description" content="${meta.ogDescription || meta.description}" />`
      );

      // Inject rendered content inside <div id="root"></div>
      html = html.replace(
        /<div id=["']root["']>[\s\S]*?<\/div>/i,
        `<div id="root" data-prerendered-path="${route}">${pageBodyHtml}</div>`
      );

      // Determine destination file path
      let outFilePath: string;
      if (route === "/" || route === "") {
        outFilePath = path.join(DIST_PUBLIC, "index.html");
      } else {
        const cleanRoute = route.replace(/^\/+|\/+$/g, "");
        const routeDir = path.join(DIST_PUBLIC, cleanRoute);
        fs.mkdirSync(routeDir, { recursive: true });
        outFilePath = path.join(routeDir, "index.html");
      }

      fs.writeFileSync(outFilePath, html, "utf-8");
      console.log(`✅ [SSG] Generado: ${route} -> ${path.relative(DIST_PUBLIC, outFilePath)} (${(html.length / 1024).toFixed(1)} KB)`);
      successCount++;
    } catch (err: any) {
      console.error(`❌ [SSG] Error generando página para ${route}:`, err.message);
    }
  }

  // Clean up temporary bundle
  try {
    if (fs.existsSync(bundlePath)) {
      fs.unlinkSync(bundlePath);
    }
  } catch {
    /* ignore cleanup error */
  }

  console.log(`\n🎉 [SSG] Finalizado con éxito: ${successCount} páginas estáticas pre-renderizadas.`);
}

runPrerender().catch((err) => {
  console.error("❌ [SSG] Error fatal en pre-rendering:", err);
  process.exit(1);
});
