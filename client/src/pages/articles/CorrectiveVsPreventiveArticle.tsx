import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Layers,
  Phone,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";

export default function CorrectiveVsPreventiveArticle() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const prevTitle = document.title;
    document.title = "Mantenimiento Correctivo vs Preventivo: Diferencias Clave | Servicios Integrados";

    let descMeta = document.querySelector('meta[name="description"]');
    const prevDesc = descMeta ? descMeta.getAttribute("content") : "";
    if (descMeta) {
      descMeta.setAttribute(
        "content",
        "Comparativa técnica entre mantenimiento correctivo y preventivo en plantas industriales: impacto en costos, tiempos de parada y estrategia combinada."
      );
    }

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonicalLink ? canonicalLink.getAttribute("href") : "";
    if (canonicalLink) {
      canonicalLink.setAttribute("href", "https://serviciosintegradosweb.com/blog/mantenimiento-correctivo-vs-preventivo/");
    }

    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    const prevOgTitle = ogTitleMeta ? ogTitleMeta.getAttribute("content") : "";
    if (ogTitleMeta) {
      ogTitleMeta.setAttribute("content", "Mantenimiento Correctivo vs Preventivo: Diferencias Clave | Servicios Integrados");
    }

    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    const prevOgDesc = ogDescMeta ? ogDescMeta.getAttribute("content") : "";
    if (ogDescMeta) {
      ogDescMeta.setAttribute(
        "content",
        "Comparativa técnica entre mantenimiento correctivo y preventivo en plantas industriales: impacto en costos, tiempos de parada y estrategia combinada."
      );
    }

    let ogUrlMeta = document.querySelector('meta[property="og:url"]');
    const prevOgUrl = ogUrlMeta ? ogUrlMeta.getAttribute("content") : "";
    if (ogUrlMeta) {
      ogUrlMeta.setAttribute("content", "https://serviciosintegradosweb.com/blog/mantenimiento-correctivo-vs-preventivo/");
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
              <span className="text-white/80">Correctivo vs Preventivo</span>
            </div>

            {/* Header / Meta */}
            <div className="border-b border-white/10 pb-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#6d28d9]/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#a78bfa]">
                <Scale size={13} />
                Estrategia y Costos
              </div>

              <h1 className="headline mt-4 text-[clamp(2rem,4.5vw,3.8rem)] leading-tight text-white">
                Mantenimiento Correctivo vs. Preventivo:{" "}
                <span className="text-[#7c3aed]">Diferencias y Cuándo Aplicar Cada Uno.</span>
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
                Una de las decisiones más críticas en la gestión de una planta industrial es definir el equilibrio óptimo entre el <strong>mantenimiento correctivo</strong> (reaccionar ante la falla) y el <strong>mantenimiento preventivo</strong> (intervenir de forma programada).
              </p>

              <div>
                <h2 className="font-display text-2xl font-bold text-white mb-3">
                  Comparativa Rápida: Conceptos y Dinámica
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 mt-4">
                  <div className="rounded-xl border border-red-500/30 bg-red-950/10 p-5">
                    <h3 className="font-display text-lg font-bold text-red-300 flex items-center gap-2 mb-2">
                      <ShieldAlert size={18} />
                      Mantenimiento Correctivo
                    </h3>
                    <p className="text-xs sm:text-sm text-[#fff7ee]/75 mb-3">
                      Se activa únicamente cuando la máquina se rompe o deja de entregar el rendimiento requerido.
                    </p>
                    <ul className="space-y-1.5 text-xs text-[#fff7ee]/70">
                      <li>• Paradas no programadas en horarios pico.</li>
                      <li>• Daños colaterales sobre otros componentes.</li>
                      <li>• Horas extras y urgencias en repuestos.</li>
                    </ul>
                  </div>

                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/10 p-5">
                    <h3 className="font-display text-lg font-bold text-emerald-300 flex items-center gap-2 mb-2">
                      <ShieldCheck size={18} />
                      Mantenimiento Preventivo
                    </h3>
                    <p className="text-xs sm:text-sm text-[#fff7ee]/75 mb-3">
                      Se ejecuta a intervalos planificados para inspeccionar, lubricar y reemplazar partes desgastadas.
                    </p>
                    <ul className="space-y-1.5 text-xs text-[#fff7ee]/70">
                      <li>• Paradas controladas en ventanas pactadas.</li>
                      <li>• Presupuesto y repuestos planificados.</li>
                      <li>• Extensión constante de la vida útil del activo.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-white mb-3">
                  El Impacto Económico Real en Planta
                </h2>
                <p>
                  El mantenimiento puramente correctivo suele parecer más económico a corto plazo porque no requiere rutinas programadas frecuentes. Sin embargo, en plantas con procesos continuos (como la industria alimenticia, empaque o química), el costo de 1 hora de parada no programada supera con creces el costo anual de un plan preventivo estructurado.
                </p>
                <p className="mt-3">
                  A esto se suman los costos ocultos: mermas de materia prima atascada en líneas térmicas, descarte de lotes por desajuste y desgaste acelerado de motores.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-white mb-3">
                  ¿Tiene Lugar el Mantenimiento Correctivo?
                </h2>
                <p>
                  Sí. En activos auxiliares no críticos (aquellos que poseen redundancia inmediata o cuyo fallo no detiene la producción ni compromete la seguridad del personal), una estrategia de &quot;operar hasta la falla&quot; (Run to Failure) puede ser técnicamente justificada para no sobrecargar de tareas preventivas al equipo de mantenimiento.
                </p>
              </div>

              {/* Contextual Service Callout */}
              <div className="rounded-2xl border border-[#a78bfa]/40 bg-gradient-to-br from-[#6d28d9]/25 via-[#10181d] to-[#162229] p-6 sm:p-8 mt-10">
                <span className="text-xs font-bold uppercase tracking-widest text-[#a78bfa]">
                  Estrategia a Medida
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-2">
                  Diseñe una Matriz de Mantenimiento Eficiente
                </h3>
                <p className="mt-3 text-sm text-[#fff7ee]/85">
                  En <strong>Servicios Integrados</strong> ayudamos a las plantas a clasificar sus equipos por criticidad y ejecutar planes de{" "}
                  <Link href="/mantenimiento-industrial/" className="text-[#a78bfa] underline hover:text-white font-semibold">
                    Mantenimiento Industrial
                  </Link>{" "}
                  e{" "}
                  <Link href="/ingenieria-de-mantenimiento/" className="text-[#a78bfa] underline hover:text-white font-semibold">
                    Ingeniería de Mantenimiento
                  </Link>{" "}
                  que balancean costos y confiabilidad.
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href="/mantenimiento-industrial/"
                    className="safety-button inline-flex items-center gap-2 text-xs"
                  >
                    Ver Servicios de Mantenimiento <ArrowRight size={14} />
                  </Link>
                  <a
                    href="/#contacto"
                    className="outline-button inline-flex items-center gap-2 text-xs text-white"
                  >
                    Consultar con un Ingeniero <ArrowUpRight size={14} />
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
