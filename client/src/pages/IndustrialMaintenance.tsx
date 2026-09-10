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
  MessageSquare,
  Phone,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";

export default function IndustrialMaintenance() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const prevTitle = document.title;
    document.title = "Mantenimiento Industrial | Servicios Integrados";

    // Description meta tag
    let descMeta = document.querySelector('meta[name="description"]');
    const prevDesc = descMeta ? descMeta.getAttribute("content") : "";
    if (descMeta) {
      descMeta.setAttribute(
        "content",
        "Servicios de mantenimiento industrial preventivo, predictivo y correctivo para plantas y equipos. Más de 30 años de experiencia técnica en planta."
      );
    }

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonicalLink ? canonicalLink.getAttribute("href") : "";
    if (canonicalLink) {
      canonicalLink.setAttribute("href", "https://serviciosintegradosweb.com/mantenimiento-industrial");
    }

    // OG Title
    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    const prevOgTitle = ogTitleMeta ? ogTitleMeta.getAttribute("content") : "";
    if (ogTitleMeta) {
      ogTitleMeta.setAttribute("content", "Mantenimiento Industrial | Servicios Integrados");
    }

    // OG Description
    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    const prevOgDesc = ogDescMeta ? ogDescMeta.getAttribute("content") : "";
    if (ogDescMeta) {
      ogDescMeta.setAttribute(
        "content",
        "Servicios de mantenimiento industrial preventivo, predictivo y correctivo para plantas y equipos. Más de 30 años de experiencia técnica en planta."
      );
    }

    // OG URL
    let ogUrlMeta = document.querySelector('meta[property="og:url"]');
    const prevOgUrl = ogUrlMeta ? ogUrlMeta.getAttribute("content") : "";
    if (ogUrlMeta) {
      ogUrlMeta.setAttribute("content", "https://serviciosintegradosweb.com/mantenimiento-industrial");
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
        {/* Hero Section */}
        <section className="relative px-5 pb-16 md:px-10 md:pb-24">
          <div className="mx-auto max-w-[1600px]">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#a78bfa] mb-6">
              <Link href="/" className="hover:underline flex items-center gap-1">
                <ArrowLeft size={13} /> Inicio
              </Link>
              <span>/</span>
              <span>Servicios Industriales</span>
              <span>/</span>
              <span className="text-white/80">Mantenimiento Industrial</span>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:gap-16 items-center">
              <div>
                <span className="orange-dot eyebrow text-[#fff7ee]/80">
                  Disponibilidad y Confiabilidad Operativa
                </span>
                <h1 className="headline mt-4 text-[clamp(2.1rem,5.5vw,5.2rem)] leading-tight text-white">
                  Mantenimiento Industrial para{" "}
                  <span className="text-[#7c3aed]">Plantas de Producción.</span>
                </h1>
                <p className="mt-6 text-base leading-relaxed text-[#fff7ee]/85 sm:text-lg max-w-2xl">
                  En <strong>Servicios Integrados</strong> brindamos soluciones de mantenimiento industrial orientadas a maximizar la disponibilidad de los equipos, prevenir paradas no programadas y extender la vida útil de los activos críticos en líneas de proceso continuo.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="/#contacto" className="safety-button inline-flex items-center gap-2">
                    Solicitar Visita Técnica <ArrowUpRight size={17} />
                  </a>
                  <a
                    href="https://wa.me/5491140705211?text=Hola%20Servicios%20Integrados,%20quisiera%20consultar%20por%20servicios%20de%20mantenimiento%20industrial."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="outline-button inline-flex items-center gap-2 text-[#fff7ee]"
                  >
                    <MessageSquare size={17} className="text-[#a78bfa]" /> WhatsApp Directo
                  </a>
                </div>
              </div>

              {/* Highlight Card */}
              <div className="rounded-2xl border border-white/15 bg-white/5 p-7 sm:p-9 shadow-2xl backdrop-blur-md">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#6d28d9]/30 text-[#a78bfa]">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <h2 className="font-display text-lg font-bold text-white">Más de 30 Años de Experiencia</h2>
                    <p className="text-xs text-[#fff7ee]/70">Presencia directa en el piso de planta</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3.5 text-xs sm:text-sm text-[#fff7ee]/85">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="text-[#7c3aed] shrink-0 mt-0.5" />
                    <span><strong>Mantenimiento Preventivo y Predictivo:</strong> Detección temprana de anomalías antes de la falla.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="text-[#7c3aed] shrink-0 mt-0.5" />
                    <span><strong>Overhaul Integral:</strong> Desarme, recuperación mecánica y puesta a punto de líneas.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="text-[#7c3aed] shrink-0 mt-0.5" />
                    <span><strong>Paradas de Planta Programadas:</strong> Coordinación técnica para minimizar tiempos muertos.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="text-[#7c3aed] shrink-0 mt-0.5" />
                    <span><strong>Alineaciones y Calibraciones:</strong> Precisión dimensional en transmisiones y rodamientos.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Modalidades de Mantenimiento Section */}
        <section className="bg-[#162229] px-5 py-20 md:px-10 md:py-28 border-y border-white/10">
          <div className="mx-auto max-w-[1600px]">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#a78bfa]">
                Servicios Especializados
              </span>
              <h2 className="headline mt-3 text-3xl font-extrabold sm:text-4xl text-white">
                Modalidades de Mantenimiento Industrial
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#fff7ee]/75">
                Adaptamos nuestras intervenciones según las necesidades operativas de cada planta, combinando rigor técnico y capacidad de respuesta ágil en campo.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Card 1: Preventivo */}
              <div className="rounded-xl border border-white/10 bg-[#10181d]/80 p-6 shadow-md transition-all hover:border-[#a78bfa]/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#6d28d9]/20 text-[#a78bfa] mb-5">
                  <Clock size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Mantenimiento Preventivo</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                  Inspecciones periódicas, lubricación bajo estándares LIL (Limpieza, Inspección y Lubricación), ajustes mecánicos y reemplazo planificado de componentes desgastados.
                </p>
              </div>

              {/* Card 2: Predictivo */}
              <div className="rounded-xl border border-white/10 bg-[#10181d]/80 p-6 shadow-md transition-all hover:border-[#a78bfa]/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#6d28d9]/20 text-[#a78bfa] mb-5">
                  <Activity size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Mantenimiento Predictivo</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                  Monitoreo de condición operativa y seguimiento de parámetros críticos para anticipar desviaciones y planificar reparaciones antes de que se produzca una rotura imprevista.
                </p>
              </div>

              {/* Card 3: Correctivo y Urgencias */}
              <div className="rounded-xl border border-white/10 bg-[#10181d]/80 p-6 shadow-md transition-all hover:border-[#a78bfa]/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#6d28d9]/20 text-[#a78bfa] mb-5">
                  <Wrench size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Mantenimiento Correctivo</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                  Diagnóstico rápido en planta y resolución técnica de fallas críticas. Reparación de mecanismos, reposición de piezas y restablecimiento inmediato de la línea.
                </p>
              </div>

              {/* Card 4: Overhaul */}
              <div className="rounded-xl border border-white/10 bg-[#10181d]/80 p-6 shadow-md transition-all hover:border-[#a78bfa]/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#6d28d9]/20 text-[#a78bfa] mb-5">
                  <Cog size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Overhaul de Maquinaria</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                  Desmontaje completo, rectificado, cambio de rodamientos y bujes, ajuste de tolerancias y acondicionamiento integral para devolver a los equipos su rendimiento original.
                </p>
              </div>

              {/* Card 5: Paradas de Planta */}
              <div className="rounded-xl border border-white/10 bg-[#10181d]/80 p-6 shadow-md transition-all hover:border-[#a78bfa]/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#6d28d9]/20 text-[#a78bfa] mb-5">
                  <Layers size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Paradas Programadas de Planta</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                  Planificación y ejecución de tareas simultáneas de mantenimiento mayor durante ventanas de parada técnica, asegurando arranques verticales sin desvíos.
                </p>
              </div>

              {/* Card 6: Calibración y Alineación */}
              <div className="rounded-xl border border-white/10 bg-[#10181d]/80 p-6 shadow-md transition-all hover:border-[#a78bfa]/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#6d28d9]/20 text-[#a78bfa] mb-5">
                  <FileCheck size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Alineaciones y Calibraciones</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                  Alineación de ejes, control de paralelismo en planchas y cilindros, nivelación y calibración de transmisiones para reducir vibraciones y consumos anómalos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Maquinaria y Equipos Atendidos */}
        <section className="px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-[1600px]">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#a78bfa]">
                  Especialización Técnica
                </span>
                <h2 className="headline mt-3 text-3xl font-extrabold sm:text-4xl text-white">
                  Equipos Industriales y Líneas de Proceso
                </h2>
                <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#fff7ee]/80">
                  Nuestra experiencia se centra en líneas continuas de la industria alimentaria y manufacturera, donde cada hora de detención impacta directamente en la rentabilidad del negocio:
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 text-xs sm:text-sm">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <h3 className="font-display font-bold text-white flex items-center gap-2">
                      <Flame size={16} className="text-[#a78bfa]" /> Hornos y Obleas
                    </h3>
                    <p className="mt-1 text-[#fff7ee]/70 text-xs">
                      Limpieza técnica de placas, ajuste térmico, calibración de planchas y mantenimiento de turbos mixer.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <h3 className="font-display font-bold text-white flex items-center gap-2">
                      <Cog size={16} className="text-[#a78bfa]" /> Elaboración de Chocolate
                    </h3>
                    <p className="mt-1 text-[#fff7ee]/70 text-xs">
                      Mantenimiento en concas, pre-refinadores, templadoras, bañadoras y líneas de moldeo continuo.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <h3 className="font-display font-bold text-white flex items-center gap-2">
                      <Zap size={16} className="text-[#a78bfa]" /> Cañerías y Silos
                    </h3>
                    <p className="mt-1 text-[#fff7ee]/70 text-xs">
                      Intervención en termos, silos de almacenamiento, cañerías sanitarias y tolvas de transporte.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <h3 className="font-display font-bold text-white flex items-center gap-2">
                      <Activity size={16} className="text-[#a78bfa]" /> Frío y Servicios Auxiliares
                    </h3>
                    <p className="mt-1 text-[#fff7ee]/70 text-xs">
                      Mantenimiento de chillers, torres de enfriamiento, bombas y compresores de planta.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contextual Synergy Box */}
              <div className="rounded-2xl border border-[#a78bfa]/30 bg-gradient-to-br from-[#6d28d9]/20 via-[#10181d] to-[#162229] p-8 sm:p-10 shadow-xl">
                <span className="inline-block rounded-full bg-[#6d28d9]/40 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#a78bfa]">
                  Enfoque Integral
                </span>
                <h3 className="font-display mt-4 text-2xl font-bold text-white">
                  De la Reparación a la Confiabilidad Operativa
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#fff7ee]/80">
                  El mantenimiento industrial no trabaja de forma aislada. En <strong>Servicios Integrados</strong> combinamos la ejecución en campo con la planificación estratégica de nuestra división de{" "}
                  <Link href="/ingenieria-de-mantenimiento" className="text-[#a78bfa] underline hover:text-white font-semibold">
                    Ingeniería de Mantenimiento
                  </Link>{" "}
                  y la filosofía de{" "}
                  <Link href="/confiabilidad-industrial" className="text-[#a78bfa] underline hover:text-white font-semibold">
                    Confiabilidad Industrial
                  </Link>{" "}
                  para transformar intervenciones reactivas en disponibilidad sustentable.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/ingenieria-de-mantenimiento"
                    className="inline-flex items-center justify-between rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white hover:border-[#a78bfa] transition-colors"
                  >
                    <span>Ingeniería de Mantenimiento</span>
                    <ArrowRight size={14} className="text-[#a78bfa]" />
                  </Link>

                  <Link
                    href="/confiabilidad-industrial"
                    className="inline-flex items-center justify-between rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white hover:border-[#a78bfa] transition-colors"
                  >
                    <span>Confiabilidad Industrial</span>
                    <ArrowRight size={14} className="text-[#a78bfa]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="bg-[#6d28d9] px-5 py-16 md:px-10 md:py-20 text-white">
          <div className="mx-auto max-w-[1400px] flex flex-col items-center justify-between gap-8 md:flex-row text-center md:text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#fff7ee]/80">
                Atención Técnica Especializada
              </span>
              <h2 className="font-display mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                ¿Necesita soporte de mantenimiento en su planta?
              </h2>
              <p className="mt-2 text-sm text-[#fff7ee]/90 max-w-xl">
                Coordinamos una visita técnica para evaluar el estado de sus equipos y diseñar un plan de mantenimiento preventivo o correctivo adecuado a su producción.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/#contacto"
                className="inline-flex items-center gap-2 rounded-lg bg-[#10181d] px-6 py-4 font-display text-sm font-bold uppercase tracking-wider text-white hover:bg-black transition-colors"
              >
                Formulario de Contacto <ArrowUpRight size={16} />
              </a>
              <a
                href="https://wa.me/5491140705211?text=Hola%20Servicios%20Integrados,%20quisiera%20solicitar%20un%20diagnóstico%20de%20mantenimiento%20industrial."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/40 bg-white/10 px-6 py-4 font-display text-sm font-bold uppercase tracking-wider text-white hover:bg-white hover:text-[#10181d] transition-all"
              >
                <Phone size={16} /> WhatsApp: 11-40705211
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
