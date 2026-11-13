import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Cog,
  FileCheck,
  Flame,
  Layers,
  Phone,
  RotateCcw,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";

export default function IndustrialOverhaulArticle() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const prevTitle = document.title;
    document.title = "Overhaul Industrial: Qué es y Cuándo Realizarlo | Servicios Integrados";

    let descMeta = document.querySelector('meta[name="description"]');
    const prevDesc = descMeta ? descMeta.getAttribute("content") : "";
    if (descMeta) {
      descMeta.setAttribute(
        "content",
        "Qué es un overhaul industrial, cuándo conviene realizar un reacondicionamiento mayor en equipos de producción y cómo extiende la vida útil de los activos."
      );
    }

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonicalLink ? canonicalLink.getAttribute("href") : "";
    if (canonicalLink) {
      canonicalLink.setAttribute("href", "https://serviciosintegradosweb.com/blog/overhaul-industrial/");
    }

    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    const prevOgTitle = ogTitleMeta ? ogTitleMeta.getAttribute("content") : "";
    if (ogTitleMeta) {
      ogTitleMeta.setAttribute("content", "Overhaul Industrial: Qué es y Cuándo Realizarlo | Servicios Integrados");
    }

    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    const prevOgDesc = ogDescMeta ? ogDescMeta.getAttribute("content") : "";
    if (ogDescMeta) {
      ogDescMeta.setAttribute(
        "content",
        "Qué es un overhaul industrial, cuándo conviene realizar un reacondicionamiento mayor en equipos de producción y cómo extiende la vida útil de los activos."
      );
    }

    let ogUrlMeta = document.querySelector('meta[property="og:url"]');
    const prevOgUrl = ogUrlMeta ? ogUrlMeta.getAttribute("content") : "";
    if (ogUrlMeta) {
      ogUrlMeta.setAttribute("content", "https://serviciosintegradosweb.com/blog/overhaul-industrial/");
    }

    return () => {
      document.title = prevTitle;
      if (descMeta && prevDesc) descMeta.setAttribute("content", prevDesc);
      if (canonicalLink && prevCanonical) canonicalLink.setAttribute("href", prevCanonical);
      if (ogTitleMeta && prevOgTitle) ogTitleMeta.setAttribute("content", prevOgTitle);
      if (ogDescMeta && prevOgDesc) ogDescMeta.setAttribute("content", prevOgDesc);
      if (ogUrlMeta && prevOgUrl) ogUrlMeta.setAttribute("content", prevOgUrl);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#10181d] text-[#fff7ee] selection:bg-[#6d28d9] selection:text-white flex flex-col justify-between">
      <Header />

      <main className="pt-28 md:pt-36">
        <article className="px-5 pb-16 md:px-10 md:pb-24">
          <div className="mx-auto max-w-4xl">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#a78bfa] mb-6">
              <Link href="/" className="hover:underline flex items-center gap-1">
                <ArrowLeft size={13} /> Inicio
              </Link>
              <span>/</span>
              <Link href="/blog/" className="hover:underline">
                Blog Técnico
              </Link>
              <span>/</span>
              <span className="text-white/80">Overhaul Industrial</span>
            </div>

            {/* Header / Meta */}
            <div className="border-b border-white/10 pb-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#6d28d9]/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#a78bfa]">
                <RotateCcw size={13} />
                Reacondicionamiento Mayor
              </div>

              <h1 className="headline mt-4 text-[clamp(2rem,4.5vw,3.8rem)] leading-tight text-white">
                Overhaul Industrial:{" "}
                <span className="text-[#7c3aed]">Reacondicionamiento Integral de Maquinaria.</span>
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-[#fff7ee]/60">
                <span className="flex items-center gap-1">
                  <Clock size={14} /> Lectura estimada: 6 min
                </span>
                <span>•</span>
                <span>Servicios Integrados — Ingeniería y Mantenimiento</span>
              </div>
            </div>

            {/* Article Body Content */}
            <div className="mt-10 space-y-8 text-sm sm:text-base leading-relaxed text-[#fff7ee]/85">
              <p className="text-base sm:text-lg leading-relaxed text-white">
                El <strong>overhaul industrial</strong> es el procedimiento de mantenimiento mayor por excelencia: consiste en desmontar completamente un equipo, inspeccionar y medir cada uno de sus componentes internos, rectificar o sustituir piezas desgastadas y volver a ensamblarlo bajo tolerancias originales de fabricante.
              </p>

              <div>
                <h2 className="font-display text-2xl font-bold text-white mb-3">
                  ¿Cuándo se Justifica Realizar un Overhaul?
                </h2>
                <p>
                  Un overhaul no reemplaza las tareas rutinarias de mantenimiento preventivo, sino que se planifica cuando un equipo de alto valor ha acumulado miles de horas de marcha y se acerca al final de su ciclo de vida útil esperado.
                </p>
                <div className="grid gap-4 sm:grid-cols-2 mt-4">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <strong className="text-white block mb-1">Aumento Crónico de Fallas</strong>
                    <span className="text-xs sm:text-sm text-[#fff7ee]/75">Cuando los desvíos menores son tan recurrentes que las cuadrillas de turno no dan abasto con parches temporales.</span>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <strong className="text-white block mb-1">Pérdida de Calidad del Producto</strong>
                    <span className="text-xs sm:text-sm text-[#fff7ee]/75">Juego mecánico o descalibraciones térmicas que provocan piezas defectuosas o espesores desparejos.</span>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <strong className="text-white block mb-1">Fin de Vida Útil de Componentes Clave</strong>
                    <span className="text-xs sm:text-sm text-[#fff7ee]/75">Desgaste generalizado en cadenas de arrastre, bujes estructurales, engranajes y ejes principales.</span>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <strong className="text-white block mb-1">Costo vs. Equipo Nuevo</strong>
                    <span className="text-xs sm:text-sm text-[#fff7ee]/75">Un overhaul cuesta habitualmente entre un 20% y 40% del valor de una máquina nueva, devolviéndole años de operación.</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-white mb-3">
                  Ejemplo Práctico: Overhaul en Hornos de Obleas (Wafer)
                </h2>
                <p>
                  En hornos continuos de cocción de obleas, un overhaul implica desarmar las planchas de cocción, desincrustar carbón acumulado, reemplazar pasadores y casquillos de bronce al aluminio, renovar rodamientos para alta temperatura (hasta 300°C) y regular el paralelismo de matrices.
                </p>
                <p className="mt-3">
                  Este reacondicionamiento restituye la uniformidad térmica y el espesor exacto de la galleta, eliminando de raíz mermas de producto.
                </p>
              </div>

              {/* Contextual Service Callout */}
              <div className="rounded-2xl border border-[#a78bfa]/40 bg-gradient-to-br from-[#6d28d9]/25 via-[#10181d] to-[#162229] p-6 sm:p-8 mt-10">
                <span className="text-xs font-bold uppercase tracking-widest text-[#a78bfa]">
                  Especialistas en Reacondicionamiento
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-2">
                  Servicio de Overhaul con Respaldo de Tornería Propia
                </h3>
                <p className="mt-3 text-sm text-[#fff7ee]/85">
                  Realizamos overhauls en plantas industriales combinando cuadrillas de{" "}
                  <Link href="/mantenimiento-industrial/" className="text-[#a78bfa] underline hover:text-white font-semibold">
                    Mantenimiento Industrial
                  </Link>
                  , taller de{" "}
                  <Link href="/torneria-mecanizado/" className="text-[#a78bfa] underline hover:text-white font-semibold">
                    Tornería 24 hs
                  </Link>{" "}
                  y especialización en{" "}
                  <Link href="/mantenimiento-hornos-industriales/" className="text-[#a78bfa] underline hover:text-white font-semibold">
                    Hornos Industriales de Obleas
                  </Link>.
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href="/mantenimiento-industrial/"
                    className="safety-button inline-flex items-center gap-2 text-xs"
                  >
                    Ver Servicios de Overhaul <ArrowRight size={14} />
                  </Link>
                  <a
                    href="/#contacto"
                    className="outline-button inline-flex items-center gap-2 text-xs text-white"
                  >
                    Cotizar un Overhaul Técnico <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
