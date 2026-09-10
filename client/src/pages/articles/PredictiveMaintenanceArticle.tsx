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
  Gauge,
  Layers,
  Phone,
  Radio,
  ShieldCheck,
  Thermometer,
  Wrench,
  Zap,
} from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";

export default function PredictiveMaintenanceArticle() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const prevTitle = document.title;
    document.title = "Mantenimiento Predictivo Industrial: Técnicas y Utilidad | Servicios Integrados";

    let descMeta = document.querySelector('meta[name="description"]');
    const prevDesc = descMeta ? descMeta.getAttribute("content") : "";
    if (descMeta) {
      descMeta.setAttribute(
        "content",
        "Qué es el mantenimiento predictivo industrial, cómo se aplica en maquinaria crítica mediante análisis de vibraciones y termografía, y sus ventajas operativas."
      );
    }

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonicalLink ? canonicalLink.getAttribute("href") : "";
    if (canonicalLink) {
      canonicalLink.setAttribute("href", "https://serviciosintegradosweb.com/blog/mantenimiento-predictivo-industrial");
    }

    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    const prevOgTitle = ogTitleMeta ? ogTitleMeta.getAttribute("content") : "";
    if (ogTitleMeta) {
      ogTitleMeta.setAttribute("content", "Mantenimiento Predictivo Industrial: Técnicas y Utilidad | Servicios Integrados");
    }

    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    const prevOgDesc = ogDescMeta ? ogDescMeta.getAttribute("content") : "";
    if (ogDescMeta) {
      ogDescMeta.setAttribute(
        "content",
        "Qué es el mantenimiento predictivo industrial, cómo se aplica en maquinaria crítica mediante análisis de vibraciones y termografía, y sus ventajas operativas."
      );
    }

    let ogUrlMeta = document.querySelector('meta[property="og:url"]');
    const prevOgUrl = ogUrlMeta ? ogUrlMeta.getAttribute("content") : "";
    if (ogUrlMeta) {
      ogUrlMeta.setAttribute("content", "https://serviciosintegradosweb.com/blog/mantenimiento-predictivo-industrial");
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
              <Link href="/blog" className="hover:underline">
                Blog Técnico
              </Link>
              <span>/</span>
              <span className="text-white/80">Mantenimiento Predictivo</span>
            </div>

            {/* Header / Meta */}
            <div className="border-b border-white/10 pb-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#6d28d9]/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#a78bfa]">
                <Activity size={13} />
                Ingeniería Aplicada
              </div>

              <h1 className="headline mt-4 text-[clamp(2rem,4.5vw,3.8rem)] leading-tight text-white">
                Mantenimiento Predictivo Industrial:{" "}
                <span className="text-[#7c3aed]">Técnicas y Monitoreo de Condición.</span>
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
                El <strong>mantenimiento predictivo industrial</strong> representa la evolución hacia la toma de decisiones basada en datos de funcionamiento en tiempo real, permitiendo intervenir la maquinaria únicamente cuando los síntomas físicos evidencian un desvío incipiente.
              </p>

              <div>
                <h2 className="font-display text-2xl font-bold text-white mb-3">
                  ¿Cómo Funciona el Mantenimiento Predictivo?
                </h2>
                <p>
                  A diferencia del mantenimiento preventivo tradicional —que sustituye piezas según un calendario preestablecido—, el enfoque predictivo evalúa variables operativas como vibraciones mecánicas, temperatura superficial, alineación y lubricación mientras el equipo se encuentra en plena producción.
                </p>
                <p className="mt-3">
                  De este modo, se detectan fallas mecánicas en su etapa de gestación (por ejemplo, picado inicial en pistas de rodamientos o desbalanceo de rotores), lo que otorga un margen de tiempo suficiente para planificar la intervención antes de que se produzca una rotura imprevista.
                </p>
              </div>

              {/* Técnicas Principales Grid */}
              <div>
                <h2 className="font-display text-2xl font-bold text-white mb-4">
                  Principales Técnicas de Monitoreo Predictivo
                </h2>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-[#162229] p-5">
                    <div className="flex items-center gap-2 text-[#a78bfa] mb-2 font-display font-bold">
                      <Radio size={18} />
                      <h4>Análisis de Vibraciones</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-[#fff7ee]/75">
                      Medición de espectros de vibración en rodamientos, reductores, bombas y motores para identificar desalineación, soltura mecánica o cavitación.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#162229] p-5">
                    <div className="flex items-center gap-2 text-[#a78bfa] mb-2 font-display font-bold">
                      <Thermometer size={18} />
                      <h4>Termografía Infrarroja</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-[#fff7ee]/75">
                      Inspección térmica sin contacto para detectar puntos calientes en tableros eléctricos, conexiones sueltas, chumaceras y aislamientos defectuosos.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#162229] p-5">
                    <div className="flex items-center gap-2 text-[#a78bfa] mb-2 font-display font-bold">
                      <Gauge size={18} />
                      <h4>Alineación Láser de Precisión</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-[#fff7ee]/75">
                      Verificación milimétrica de la coaxialidad entre ejes de motor y bomba o reductor para erradicar esfuerzos parásitos sobre los sellos y rodamientos.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#162229] p-5">
                    <div className="flex items-center gap-2 text-[#a78bfa] mb-2 font-display font-bold">
                      <Cpu size={18} />
                      <h4>Análisis de Lubricantes</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-[#fff7ee]/75">
                      Monitoreo de viscosidad, presencia de partículas metálicas de desgaste y contaminación por agua o sólidos en aceites industriales de proceso.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-white mb-3">
                  Beneficios Estratégicos en Plantas de Manufactura
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-[#fff7ee]/80">
                  <li><strong>Aprovechamiento total de la vida útil de los repuestos:</strong> No se descartan componentes que todavía están en condiciones óptimas.</li>
                  <li><strong>Cero paradas por sorpresas mecánicas:</strong> Las reparaciones se agendan con antelación, con los repuestos listos en pañol.</li>
                  <li><strong>Mayor seguridad operativa:</strong> Se mitigan riesgos de incendios por sobrecalentamiento eléctrico o trabas violentas de mecanismos.</li>
                </ul>
              </div>

              {/* Contextual Service Callout */}
              <div className="rounded-2xl border border-[#a78bfa]/40 bg-gradient-to-br from-[#6d28d9]/25 via-[#10181d] to-[#162229] p-6 sm:p-8 mt-10">
                <span className="text-xs font-bold uppercase tracking-widest text-[#a78bfa]">
                  Diagnóstico y Solución Integral
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-2">
                  Implemente Mantenimiento Predictivo con Profesionales
                </h3>
                <p className="mt-3 text-sm text-[#fff7ee]/85">
                  Combine la precisión del diagnóstico con la capacidad de respuesta inmediata de nuestros servicios de{" "}
                  <Link href="/mantenimiento-industrial" className="text-[#a78bfa] underline hover:text-white font-semibold">
                    Mantenimiento Industrial
                  </Link>{" "}
                  y de{" "}
                  <Link href="/ingenieria-de-mantenimiento" className="text-[#a78bfa] underline hover:text-white font-semibold">
                    Ingeniería de Mantenimiento
                  </Link>.
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href="/ingenieria-de-mantenimiento"
                    className="safety-button inline-flex items-center gap-2 text-xs"
                  >
                    Ver Ingeniería de Mantenimiento <ArrowRight size={14} />
                  </Link>
                  <a
                    href="/#contacto"
                    className="outline-button inline-flex items-center gap-2 text-xs text-white"
                  >
                    Solicitar Diagnóstico Técnico <ArrowUpRight size={14} />
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
