import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Cpu,
  FileCheck,
  HelpCircle,
  Layers,
  Lightbulb,
  Phone,
  Search,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";

export default function RootCauseAnalysisArticle() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const prevTitle = document.title;
    document.title = "Análisis de Causa Raíz (RCA) en Mantenimiento | Servicios Integrados";

    let descMeta = document.querySelector('meta[name="description"]');
    const prevDesc = descMeta ? descMeta.getAttribute("content") : "";
    if (descMeta) {
      descMeta.setAttribute(
        "content",
        "Cómo aplicar el Análisis de Causa Raíz (RCA) en mantenimiento industrial para erradicar fallas repetitivas y optimizar la disponibilidad en planta."
      );
    }

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonicalLink ? canonicalLink.getAttribute("href") : "";
    if (canonicalLink) {
      canonicalLink.setAttribute("href", "https://serviciosintegradosweb.com/blog/analisis-causa-raiz-mantenimiento/");
    }

    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    const prevOgTitle = ogTitleMeta ? ogTitleMeta.getAttribute("content") : "";
    if (ogTitleMeta) {
      ogTitleMeta.setAttribute("content", "Análisis de Causa Raíz (RCA) en Mantenimiento | Servicios Integrados");
    }

    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    const prevOgDesc = ogDescMeta ? ogDescMeta.getAttribute("content") : "";
    if (ogDescMeta) {
      ogDescMeta.setAttribute(
        "content",
        "Cómo aplicar el Análisis de Causa Raíz (RCA) en mantenimiento industrial para erradicar fallas repetitivas y optimizar la disponibilidad en planta."
      );
    }

    let ogUrlMeta = document.querySelector('meta[property="og:url"]');
    const prevOgUrl = ogUrlMeta ? ogUrlMeta.getAttribute("content") : "";
    if (ogUrlMeta) {
      ogUrlMeta.setAttribute("content", "https://serviciosintegradosweb.com/blog/analisis-causa-raiz-mantenimiento/");
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
              <span className="text-white/80">Análisis Causa Raíz (RCA)</span>
            </div>

            {/* Header / Meta */}
            <div className="border-b border-white/10 pb-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#6d28d9]/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#a78bfa]">
                <Cpu size={13} />
                Ingeniería de Mantenimiento
              </div>

              <h1 className="headline mt-4 text-[clamp(2rem,4.5vw,3.8rem)] leading-tight text-white">
                Análisis de Causa Raíz (RCA) Aplicado al{" "}
                <span className="text-[#7c3aed]">Mantenimiento Industrial.</span>
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
                Cuando una máquina industrial se detiene repetidamente por la misma avería, sustituir la pieza rota sin indagar las causas profundas es una trampa costosa. El <strong>Análisis de Causa Raíz (RCA — Root Cause Analysis)</strong> es la disciplina de ingeniería que permite identificar el origen físico, humano o latente de la falla para erradicarla de forma definitiva.
              </p>

              <div>
                <h2 className="font-display text-2xl font-bold text-white mb-3">
                  Los Tres Niveles de Causa en una Falla Mecánica
                </h2>

                <div className="space-y-4 mt-4">
                  <div className="rounded-xl border border-white/10 bg-[#162229] p-5">
                    <strong className="text-white text-base block mb-1">1. Causa Física (El Síntoma Directo)</strong>
                    <p className="text-xs sm:text-sm text-[#fff7ee]/75">
                      Por ejemplo, un rodamiento que se engrana o un eje que se fractura por fatiga mecánica.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#162229] p-5">
                    <strong className="text-white text-base block mb-1">2. Causa Humana / Operativa (La Acción Desencadenante)</strong>
                    <p className="text-xs sm:text-sm text-[#fff7ee]/75">
                      Por ejemplo, lubricación con un tipo de grasa inadecuado para la temperatura del proceso o montaje con desalineación angular.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#162229] p-5">
                    <strong className="text-white text-base block mb-1">3. Causa Latente / Sistémica (La Falla de Proceso o Gestión)</strong>
                    <p className="text-xs sm:text-sm text-[#fff7ee]/75">
                      Falta de procedimiento estándar de lubricación en planta, ausencia de instrumentos de alineación láser o capacitación insuficiente del personal de turno.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-white mb-3">
                  Herramientas Prácticas Utilizadas en Planta
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 mt-4">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-2 text-[#a78bfa] mb-1 font-display font-bold">
                      <HelpCircle size={17} />
                      <h4>Los 5 Porqués (5 Whys)</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-[#fff7ee]/75">
                      Preguntar sucesivamente &quot;¿por qué ocurrió?&quot; hasta llegar al fallo de control o diseño que originó la cadena de eventos.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-2 text-[#a78bfa] mb-1 font-display font-bold">
                      <Layers size={17} />
                      <h4>Diagrama de Ishikawa (Espina de Pescado)</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-[#fff7ee]/75">
                      Clasificación de posibles causas en 6 dimensiones: Máquina, Método, Mano de obra, Materiales, Medición y Medio ambiente.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-white mb-3">
                  Del Diagnóstico al Rediseño Mecánico
                </h2>
                <p>
                  El resultado de un RCA efectivo no es un informe teórico archivado: es una acción concreta de ingeniería en planta. Esto puede implicar modificar el material de un buje a bronce fosforoso, rediseñar un sistema de sellado para evitar el ingreso de polvo de producto o reubicar un punto de lubricación de difícil acceso.
                </p>
              </div>

              {/* Contextual Service Callout */}
              <div className="rounded-2xl border border-[#a78bfa]/40 bg-gradient-to-br from-[#6d28d9]/25 via-[#10181d] to-[#162229] p-6 sm:p-8 mt-10">
                <span className="text-xs font-bold uppercase tracking-widest text-[#a78bfa]">
                  Ingeniería en Piso de Planta
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-2">
                  Soluciones Definitivas para Fallas Crónicas
                </h3>
                <p className="mt-3 text-sm text-[#fff7ee]/85">
                  En <strong>Servicios Integrados</strong> combinamos la consultoría de{" "}
                  <Link href="/ingenieria-de-mantenimiento/" className="text-[#a78bfa] underline hover:text-white font-semibold">
                    Ingeniería de Mantenimiento
                  </Link>{" "}
                  con la fabricación de mejoras mecánicas en nuestro taller de{" "}
                  <Link href="/torneria-mecanizado/" className="text-[#a78bfa] underline hover:text-white font-semibold">
                    Tornería y Mecanizado
                  </Link>{" "}
                  y programas de{" "}
                  <Link href="/confiabilidad-industrial/" className="text-[#a78bfa] underline hover:text-white font-semibold">
                    Confiabilidad Industrial
                  </Link>.
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href="/ingenieria-de-mantenimiento/"
                    className="safety-button inline-flex items-center gap-2 text-xs"
                  >
                    Ver Ingeniería de Mantenimiento <ArrowRight size={14} />
                  </Link>
                  <a
                    href="/#contacto"
                    className="outline-button inline-flex items-center gap-2 text-xs text-white"
                  >
                    Solicitar Estudio de Causa Raíz <ArrowUpRight size={14} />
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
