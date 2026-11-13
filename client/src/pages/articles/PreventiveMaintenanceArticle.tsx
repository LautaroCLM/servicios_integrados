import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  Layers,
  Phone,
  ShieldCheck,
  Target,
  Wrench,
  Zap,
} from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";

export default function PreventiveMaintenanceArticle() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const prevTitle = document.title;
    document.title = "Mantenimiento Preventivo Industrial: Guía y Aplicación | Servicios Integrados";

    let descMeta = document.querySelector('meta[name="description"]');
    const prevDesc = descMeta ? descMeta.getAttribute("content") : "";
    if (descMeta) {
      descMeta.setAttribute(
        "content",
        "Guía técnica sobre mantenimiento preventivo industrial: qué es, beneficios en plantas continuas, planificación periódica y cómo evitar paradas no programadas."
      );
    }

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonicalLink ? canonicalLink.getAttribute("href") : "";
    if (canonicalLink) {
      canonicalLink.setAttribute("href", "https://serviciosintegradosweb.com/blog/mantenimiento-preventivo-industrial/");
    }

    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    const prevOgTitle = ogTitleMeta ? ogTitleMeta.getAttribute("content") : "";
    if (ogTitleMeta) {
      ogTitleMeta.setAttribute("content", "Mantenimiento Preventivo Industrial: Guía y Aplicación | Servicios Integrados");
    }

    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    const prevOgDesc = ogDescMeta ? ogDescMeta.getAttribute("content") : "";
    if (ogDescMeta) {
      ogDescMeta.setAttribute(
        "content",
        "Guía técnica sobre mantenimiento preventivo industrial: qué es, beneficios en plantas continuas, planificación periódica y cómo evitar paradas no programadas."
      );
    }

    let ogUrlMeta = document.querySelector('meta[property="og:url"]');
    const prevOgUrl = ogUrlMeta ? ogUrlMeta.getAttribute("content") : "";
    if (ogUrlMeta) {
      ogUrlMeta.setAttribute("content", "https://serviciosintegradosweb.com/blog/mantenimiento-preventivo-industrial/");
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
              <span className="text-white/80">Mantenimiento Preventivo</span>
            </div>

            {/* Header / Meta */}
            <div className="border-b border-white/10 pb-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#6d28d9]/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#a78bfa]">
                <Wrench size={13} />
                Gestión de Mantenimiento
              </div>

              <h1 className="headline mt-4 text-[clamp(2rem,4.5vw,3.8rem)] leading-tight text-white">
                Mantenimiento Preventivo Industrial:{" "}
                <span className="text-[#7c3aed]">Qué es, Ventajas y Cuándo Aplicarlo.</span>
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-[#fff7ee]/60">
                <span className="flex items-center gap-1">
                  <Clock size={14} /> Lectura estimada: 5 min
                </span>
                <span>•</span>
                <span>Servicios Integrados — Ingeniería y Mantenimiento</span>
              </div>
            </div>

            {/* Article Body Content */}
            <div className="mt-10 space-y-8 text-sm sm:text-base leading-relaxed text-[#fff7ee]/85">
              <p className="text-base sm:text-lg leading-relaxed text-white">
                En el entorno industrial moderno, donde las paradas no programadas representan pérdidas económicas directas y compromisos de entrega insatisfechos, el <strong>mantenimiento preventivo industrial</strong> constituye la primera línea de defensa para preservar la continuidad operativa.
              </p>

              <div>
                <h2 className="font-display text-2xl font-bold text-white mb-3">
                  ¿Qué es el Mantenimiento Preventivo Industrial?
                </h2>
                <p>
                  El mantenimiento preventivo comprende el conjunto de inspecciones planificadas, ajustes mecánicos, lubricaciones, calibraciones y sustituciones de piezas que se realizan de manera periódica en los equipos de planta antes de que ocurra una falla funcional.
                </p>
                <p className="mt-3">
                  A diferencia de la modalidad correctiva —que actúa únicamente una vez que el equipo se detuvo—, la estrategia preventiva se basa en intervalos fijos de tiempo o en horas efectivas de funcionamiento para intervenir el activo en condiciones controladas.
                </p>
              </div>

              {/* Highlight Box */}
              <div className="rounded-xl border border-[#a78bfa]/30 bg-[#162229] p-6 shadow-md">
                <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="text-[#a78bfa]" size={20} />
                  Pilares de un Plan Preventivo Exitoso
                </h3>
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-[#fff7ee]/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-[#7c3aed] shrink-0 mt-0.5" />
                    <span><strong>Rutas de lubricación estandarizadas:</strong> Selección del lubricante adecuado y frecuencia exacta para evitar fallas prematuras de rodamientos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-[#7c3aed] shrink-0 mt-0.5" />
                    <span><strong>Inspecciones visuales y sensoriales:</strong> Detección temprana de ruidos, fugas, calentamiento excesivo o vibraciones.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-[#7c3aed] shrink-0 mt-0.5" />
                    <span><strong>Reemplazo programado de consumibles:</strong> Filtros, sellos mecánicos, correas y empaquetaduras dentro de su vida útil nominal.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-white mb-3">
                  Principales Ventajas del Mantenimiento Preventivo
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 mt-4">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <strong className="text-white block mb-1">1. Reducción de Tiempos de Parada</strong>
                    <span className="text-xs sm:text-sm text-[#fff7ee]/75">Permite programar las intervenciones en ventanas horarias que no interfieran con la producción activa.</span>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <strong className="text-white block mb-1">2. Menores Costos de Reparación</strong>
                    <span className="text-xs sm:text-sm text-[#fff7ee]/75">Evita que el desgaste de un componente menor derive en averías catastróficas sobre ejes o motores principales.</span>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <strong className="text-white block mb-1">3. Mayor Seguridad para los Operarios</strong>
                    <span className="text-xs sm:text-sm text-[#fff7ee]/75">La maquinaria calibrada y mantenida disminuye drásticamente el riesgo de accidentes laborales.</span>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <strong className="text-white block mb-1">4. Extensión de la Vida Útil</strong>
                    <span className="text-xs sm:text-sm text-[#fff7ee]/75">Los activos industriales operan bajo tolerancias de fábrica, postergando la necesidad de renovación de maquinaria.</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-white mb-3">
                  ¿Cuándo Aplicar Mantenimiento Preventivo en Planta?
                </h2>
                <p>
                  El mantenimiento preventivo es indispensable en:
                </p>
                <ul className="mt-3 list-disc pl-5 space-y-2 text-[#fff7ee]/80">
                  <li><strong>Equipos de cuello de botella:</strong> Máquinas cuya detención paraliza la totalidad de la línea continua.</li>
                  <li><strong>Líneas continuas de elaboración:</strong> Plantas de alimentos, hornos de cocción, mezcladoras y sistemas de bombeo.</li>
                  <li><strong>Equipos con patrones de desgaste predecibles:</strong> Bombas de proceso, cadenas transportadoras y reductores de velocidad.</li>
                </ul>
              </div>

              {/* Contextual Service Callout */}
              <div className="rounded-2xl border border-[#a78bfa]/40 bg-gradient-to-br from-[#6d28d9]/25 via-[#10181d] to-[#162229] p-6 sm:p-8 mt-10">
                <span className="text-xs font-bold uppercase tracking-widest text-[#a78bfa]">
                  Servicio Técnico Especializado
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-2">
                  Ejecución Profesional de Mantenimiento en Planta
                </h3>
                <p className="mt-3 text-sm text-[#fff7ee]/85">
                  En <strong>Servicios Integrados</strong> contamos con más de 30 años de experiencia ejecutando programas de{" "}
                  <Link href="/mantenimiento-industrial/" className="text-[#a78bfa] underline hover:text-white font-semibold">
                    Mantenimiento Industrial
                  </Link>{" "}
                  preventivo, predictivo y paradas de planta, respaldados por nuestra área de{" "}
                  <Link href="/ingenieria-de-mantenimiento/" className="text-[#a78bfa] underline hover:text-white font-semibold">
                    Ingeniería de Mantenimiento
                  </Link>{" "}
                  y programas de{" "}
                  <Link href="/confiabilidad-industrial/" className="text-[#a78bfa] underline hover:text-white font-semibold">
                    Confiabilidad Industrial
                  </Link>.
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href="/mantenimiento-industrial/"
                    className="safety-button inline-flex items-center gap-2 text-xs"
                  >
                    Ver Servicio de Mantenimiento Industrial <ArrowRight size={14} />
                  </Link>
                  <a
                    href="/#contacto"
                    className="outline-button inline-flex items-center gap-2 text-xs text-white"
                  >
                    Consultar con un Técnico <ArrowUpRight size={14} />
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
