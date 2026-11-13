import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  Clock,
  Layers,
  Phone,
  ShieldCheck,
  Timer,
  Wrench,
  Zap,
} from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";

export default function PlantShutdownsArticle() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const prevTitle = document.title;
    document.title = "Paradas de Planta Industriales: Guía de Planificación | Servicios Integrados";

    let descMeta = document.querySelector('meta[name="description"]');
    const prevDesc = descMeta ? descMeta.getAttribute("content") : "";
    if (descMeta) {
      descMeta.setAttribute(
        "content",
        "Cómo planificar y ejecutar paradas de planta industriales: etapas críticas, coordinación de cuadrillas técnicas, seguridad y control de puesta en marcha."
      );
    }

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonicalLink ? canonicalLink.getAttribute("href") : "";
    if (canonicalLink) {
      canonicalLink.setAttribute("href", "https://serviciosintegradosweb.com/blog/paradas-de-planta-industriales/");
    }

    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    const prevOgTitle = ogTitleMeta ? ogTitleMeta.getAttribute("content") : "";
    if (ogTitleMeta) {
      ogTitleMeta.setAttribute("content", "Paradas de Planta Industriales: Guía de Planificación | Servicios Integrados");
    }

    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    const prevOgDesc = ogDescMeta ? ogDescMeta.getAttribute("content") : "";
    if (ogDescMeta) {
      ogDescMeta.setAttribute(
        "content",
        "Cómo planificar y ejecutar paradas de planta industriales: etapas críticas, coordinación de cuadrillas técnicas, seguridad y control de puesta en marcha."
      );
    }

    let ogUrlMeta = document.querySelector('meta[property="og:url"]');
    const prevOgUrl = ogUrlMeta ? ogUrlMeta.getAttribute("content") : "";
    if (ogUrlMeta) {
      ogUrlMeta.setAttribute("content", "https://serviciosintegradosweb.com/blog/paradas-de-planta-industriales/");
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
              <span className="text-white/80">Paradas de Planta</span>
            </div>

            {/* Header / Meta */}
            <div className="border-b border-white/10 pb-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#6d28d9]/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#a78bfa]">
                <Timer size={13} />
                Operaciones Mayores
              </div>

              <h1 className="headline mt-4 text-[clamp(2rem,4.5vw,3.8rem)] leading-tight text-white">
                Paradas de Planta Industriales:{" "}
                <span className="text-[#7c3aed]">Planificación, Ejecución y Control.</span>
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-[#fff7ee]/60">
                <span className="flex items-center gap-1">
                  <Clock size={14} /> Lectura estimada: 7 min
                </span>
                <span>•</span>
                <span>Servicios Integrados — Ingeniería y Mantenimiento</span>
              </div>
            </div>

            {/* Article Body Content */}
            <div className="mt-10 space-y-8 text-sm sm:text-base leading-relaxed text-[#fff7ee]/85">
              <p className="text-base sm:text-lg leading-relaxed text-white">
                Una <strong>parada de planta industrial</strong> (o parada técnica programada) es el evento operativo más complejo del calendario industrial. Durante un período acotado de tiempo, cientos de tareas de mantenimiento mayor, inspección estructural, calibración y mejoras mecánicas deben ejecutarse con precisión milimétrica.
              </p>

              <div>
                <h2 className="font-display text-2xl font-bold text-white mb-3">
                  Las 4 Fases Críticas de una Parada de Planta
                </h2>

                <div className="space-y-4 mt-4">
                  <div className="rounded-xl border border-white/10 bg-[#162229] p-5">
                    <strong className="text-white text-base block mb-1">1. Pre-Parada (Planificación y Compras)</strong>
                    <p className="text-xs sm:text-sm text-[#fff7ee]/75">
                      Definición del alcance (Scope), listado de repuestos estratégicos en pañol, contratación de servicios especializados, permisos de trabajo seguro (PTS) y confección de la ruta crítica en diagrama de Gantt.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#162229] p-5">
                    <strong className="text-white text-base block mb-1">2. Detención Segura y Acondicionamiento (LOTO)</strong>
                    <p className="text-xs sm:text-sm text-[#fff7ee]/75">
                      Parada ordenada de líneas, bloqueo y etiquetado de energías peligrosas (eléctrica, neumática, vapor, térmica), enfriamiento y despresurización de circuitos de fluidos.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#162229] p-5">
                    <strong className="text-white text-base block mb-1">3. Ejecución y Coordinación en Campo</strong>
                    <p className="text-xs sm:text-sm text-[#fff7ee]/75">
                      Trabajos simultáneos de cuadrillas mecánicas, soldadores, torneros y electricistas. Supervisión estricta de tiempos para no demorar las tareas críticas que condicionan el arranque.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#162229] p-5">
                    <strong className="text-white text-base block mb-1">4. Puesta en Marcha y Validación (Commissioning)</strong>
                    <p className="text-xs sm:text-sm text-[#fff7ee]/75">
                      Pruebas en vacío, calibración de sincronismo, pruebas con carga de producto y monitoreo térmico/vibracional durante las primeras 48 horas de marcha continua.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-white mb-3">
                  Factores de Éxito en una Parada Técnica
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-[#fff7ee]/80">
                  <li><strong>Respaldo de taller propio de mecanizado:</strong> Capacidad de tornería y fabricación de piezas 24 hs para resolver imprevistos mecánicos en el momento sin frenar el cronograma.</li>
                  <li><strong>Coordinación interdisciplinaria:</strong> Integración fluida entre personal de mantenimiento propio de la planta y cuadrillas externas contratadas.</li>
                  <li><strong>Control riguroso de seguridad:</strong> Cero accidentes mediante protocolos de trabajo en altura, espacios confinados y manejo de soldadura sanitaria.</li>
                </ul>
              </div>

              {/* Contextual Service Callout */}
              <div className="rounded-2xl border border-[#a78bfa]/40 bg-gradient-to-br from-[#6d28d9]/25 via-[#10181d] to-[#162229] p-6 sm:p-8 mt-10">
                <span className="text-xs font-bold uppercase tracking-widest text-[#a78bfa]">
                  Experiencia Comprobada en Campo
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-2">
                  Cuadrillas Especializadas para Paradas de Planta
                </h3>
                <p className="mt-3 text-sm text-[#fff7ee]/85">
                  En <strong>Servicios Integrados</strong> gestionamos y ejecutamos intervenciones mayores de{" "}
                  <Link href="/mantenimiento-industrial/" className="text-[#a78bfa] underline hover:text-white font-semibold">
                    Mantenimiento Industrial
                  </Link>
                  , montaje de{" "}
                  <Link href="/fabricacion-acero-inoxidable/" className="text-[#a78bfa] underline hover:text-white font-semibold">
                    Cañerías en Acero Inoxidable
                  </Link>{" "}
                  y asistencia permanente de{" "}
                  <Link href="/torneria-mecanizado/" className="text-[#a78bfa] underline hover:text-white font-semibold">
                    Tornería 24 hs
                  </Link>.
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href="/mantenimiento-industrial/"
                    className="safety-button inline-flex items-center gap-2 text-xs"
                  >
                    Ver Servicios de Paradas de Planta <ArrowRight size={14} />
                  </Link>
                  <a
                    href="/#contacto"
                    className="outline-button inline-flex items-center gap-2 text-xs text-white"
                  >
                    Planificar su Próxima Parada <ArrowUpRight size={14} />
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
