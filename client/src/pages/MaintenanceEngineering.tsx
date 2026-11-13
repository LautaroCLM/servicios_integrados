import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  CheckCircle2,
  Cpu,
  Gauge,
  Lightbulb,
  MessageSquare,
  Phone,
  SearchCheck,
  ShieldAlert,
  ShieldCheck,
  TrendingUp,
  Wrench,
} from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";

export default function MaintenanceEngineering() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const prevTitle = document.title;
    document.title = "Ingeniería de Mantenimiento | Servicios Integrados";

    // Description meta tag
    let descMeta = document.querySelector('meta[name="description"]');
    const prevDesc = descMeta ? descMeta.getAttribute("content") : "";
    if (descMeta) {
      descMeta.setAttribute(
        "content",
        "Ingeniería de mantenimiento industrial: diagnóstico de fallas, análisis de criticidad, rediseño de equipos y optimización de procesos para plantas continuas."
      );
    }

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonicalLink ? canonicalLink.getAttribute("href") : "";
    if (canonicalLink) {
      canonicalLink.setAttribute("href", "https://serviciosintegradosweb.com/ingenieria-de-mantenimiento/");
    }

    // OG Title
    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    const prevOgTitle = ogTitleMeta ? ogTitleMeta.getAttribute("content") : "";
    if (ogTitleMeta) {
      ogTitleMeta.setAttribute("content", "Ingeniería de Mantenimiento | Servicios Integrados");
    }

    // OG Description
    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    const prevOgDesc = ogDescMeta ? ogDescMeta.getAttribute("content") : "";
    if (ogDescMeta) {
      ogDescMeta.setAttribute(
        "content",
        "Ingeniería de mantenimiento industrial: diagnóstico de fallas, análisis de criticidad, rediseño de equipos y optimización de procesos para plantas continuas."
      );
    }

    // OG URL
    let ogUrlMeta = document.querySelector('meta[property="og:url"]');
    const prevOgUrl = ogUrlMeta ? ogUrlMeta.getAttribute("content") : "";
    if (ogUrlMeta) {
      ogUrlMeta.setAttribute("content", "https://serviciosintegradosweb.com/ingenieria-de-mantenimiento/");
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
              <span className="text-white/80">Ingeniería de Mantenimiento</span>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:gap-16 items-center">
              <div>
                <span className="orange-dot eyebrow text-[#fff7ee]/80">
                  Ingeniería Aplicada y Optimización Técnica
                </span>
                <h1 className="headline mt-4 text-[clamp(2.1rem,5.5vw,5.2rem)] leading-tight text-white">
                  Ingeniería de{" "}
                  <span className="text-[#7c3aed]">Mantenimiento Industrial.</span>
                </h1>
                <p className="mt-6 text-base leading-relaxed text-[#fff7ee]/85 sm:text-lg max-w-2xl">
                  En <strong>Servicios Integrados</strong> aplicamos herramientas sistemáticas de ingeniería para transformar el mantenimiento reactivo en una estrategia estructurada de optimización, análisis de causa raíz y rediseño de equipos en planta.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="/#contacto" className="safety-button inline-flex items-center gap-2">
                    Consultar con Ingeniería <ArrowUpRight size={17} />
                  </a>
                  <a
                    href="https://wa.me/5491140705211?text=Hola%20Servicios%20Integrados,%20quisiera%20hacer%20una%20consulta%20técnica%20de%20ingeniería%20de%20mantenimiento."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="outline-button inline-flex items-center gap-2 text-[#fff7ee]"
                  >
                    <MessageSquare size={17} className="text-[#a78bfa]" /> WhatsApp Directo
                  </a>
                </div>
              </div>

              {/* Technical Value Card */}
              <div className="rounded-2xl border border-white/15 bg-white/5 p-7 sm:p-9 shadow-2xl backdrop-blur-md">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#6d28d9]/30 text-[#a78bfa]">
                    <Cpu size={22} />
                  </div>
                  <div>
                    <h2 className="font-display text-lg font-bold text-white">Ingeniería Mecánica y de Procesos</h2>
                    <p className="text-xs text-[#fff7ee]/70">Soluciones técnicas a medida de cada planta</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3.5 text-xs sm:text-sm text-[#fff7ee]/85">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="text-[#7c3aed] shrink-0 mt-0.5" />
                    <span><strong>Análisis de Causa Raíz (RCA):</strong> Identificación del origen del fallo para evitar su repetición.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="text-[#7c3aed] shrink-0 mt-0.5" />
                    <span><strong>Matriz de Criticidad:</strong> Clasificación de activos por impacto operativo y de seguridad.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="text-[#7c3aed] shrink-0 mt-0.5" />
                    <span><strong>Rediseño de Componentes:</strong> Modificaciones mecánicas para reducir desgastes y facilitar servicio.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="text-[#7c3aed] shrink-0 mt-0.5" />
                    <span><strong>Casos de Mejora (Kaizen):</strong> Ejecución de proyectos para eliminar pérdidas crónicas.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pilares de la Ingeniería de Mantenimiento Section */}
        <section className="bg-[#162229] px-5 py-20 md:px-10 md:py-28 border-y border-white/10">
          <div className="mx-auto max-w-[1600px]">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#a78bfa]">
                Metodología y Procesos
              </span>
              <h2 className="headline mt-3 text-3xl font-extrabold sm:text-4xl text-white">
                Pilares de la Ingeniería de Mantenimiento
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#fff7ee]/75">
                La ingeniería de mantenimiento proporciona la estructura analítica para que las operaciones industriales alcancen estabilidad, predictibilidad y control de costos técnicos.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Card 1: Causa Raíz */}
              <div className="rounded-xl border border-white/10 bg-[#10181d]/80 p-6 shadow-md transition-all hover:border-[#a78bfa]/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#6d28d9]/20 text-[#a78bfa] mb-5">
                  <SearchCheck size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Análisis de Falla y Causa Raíz</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                  Investigación técnica sistemática para determinar si el origen del desvío responde a fatiga de material, lubricación inadecuada, desajuste mecánico o condición de proceso.
                </p>
              </div>

              {/* Card 2: Criticidad de Equipos */}
              <div className="rounded-xl border border-white/10 bg-[#10181d]/80 p-6 shadow-md transition-all hover:border-[#a78bfa]/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#6d28d9]/20 text-[#a78bfa] mb-5">
                  <Activity size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Análisis de Criticidad</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                  Jerarquización de líneas y máquinas en función de su criticidad para la seguridad, continuidad productiva y costos de reparación, focalizando los recursos donde generan mayor impacto.
                </p>
              </div>

              {/* Card 3: Rediseño Mecánico */}
              <div className="rounded-xl border border-white/10 bg-[#10181d]/80 p-6 shadow-md transition-all hover:border-[#a78bfa]/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#6d28d9]/20 text-[#a78bfa] mb-5">
                  <Lightbulb size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Rediseño y Mejoras Técnicas</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                  Modificación de sistemas mecánicos, adaptación de materiales más resistentes y rediseño de piezas para alargar los intervalos entre intervenciones y facilitar el mantenimiento.
                </p>
              </div>

              {/* Card 4: Contaminación */}
              <div className="rounded-xl border border-white/10 bg-[#10181d]/80 p-6 shadow-md transition-all hover:border-[#a78bfa]/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#6d28d9]/20 text-[#a78bfa] mb-5">
                  <ShieldAlert size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Control de Fuentes de Contaminación</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                  Detección, contención y eliminación de puntos de fuga de producto, polvo o lubricante que aceleran el desgaste de mecanismos y comprometen los estándares sanitarios.
                </p>
              </div>

              {/* Card 5: Productividad Kaizen */}
              <div className="rounded-xl border border-white/10 bg-[#10181d]/80 p-6 shadow-md transition-all hover:border-[#a78bfa]/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#6d28d9]/20 text-[#a78bfa] mb-5">
                  <Award size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Ejecución de Casos Kaizen</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                  Desarrollo de proyectos puntuales de mejora continua aplicados a cuellos de botella mecánicos, optimizando tiempos de ciclo y reduciendo microparadas en línea.
                </p>
              </div>

              {/* Card 6: Gestión y Presupuestos */}
              <div className="rounded-xl border border-white/10 bg-[#10181d]/80 p-6 shadow-md transition-all hover:border-[#a78bfa]/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#6d28d9]/20 text-[#a78bfa] mb-5">
                  <Gauge size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Soporte Técnico en Presupuestos</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                  Asistencia técnica para dimensionar adecuadamente planes de inversión, reposición de repuestos estratégicos y costos operativos asociados al ciclo de vida de los activos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Articulación con Mantenimiento y Confiabilidad */}
        <section className="px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-[1600px]">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#a78bfa]">
                  Articulación Operativa
                </span>
                <h2 className="headline mt-3 text-3xl font-extrabold sm:text-4xl text-white">
                  Ingeniería Conectada con la Realidad de Planta
                </h2>
                <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#fff7ee]/80">
                  La ingeniería de mantenimiento no es un ejercicio teórico de oficina. Nace y se valida en el contacto permanente con la maquinaria y los operadores de línea:
                </p>

                <div className="mt-6 space-y-4 text-xs sm:text-sm text-[#fff7ee]/85">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4 flex items-start gap-3">
                    <Wrench size={20} className="text-[#a78bfa] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-0.5">Sustento para el Mantenimiento en Campo:</strong>
                      <span>Define los procedimientos, tolerancias y frecuencias que ejecuta el equipo técnico de mantenimiento preventivo y correctivo.</span>
                    </div>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/5 p-4 flex items-start gap-3">
                    <TrendingUp size={20} className="text-[#a78bfa] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-0.5">Base para la Confiabilidad Industrial:</strong>
                      <span>Aporta los datos y el diagnóstico de ingeniería necesarios para estructurar programas de confiabilidad y mentalidad Cero Pérdidas.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contextual Synergy Box */}
              <div className="rounded-2xl border border-[#a78bfa]/30 bg-gradient-to-br from-[#6d28d9]/20 via-[#10181d] to-[#162229] p-8 sm:p-10 shadow-xl">
                <span className="inline-block rounded-full bg-[#6d28d9]/40 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#a78bfa]">
                  Conexión de Servicios
                </span>
                <h3 className="font-display mt-4 text-2xl font-bold text-white">
                  Explore Nuestras Áreas Complementarias
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#fff7ee]/80">
                  Descubra cómo nuestra capacidad de ingeniería se integra directamente con los servicios de ejecución de{" "}
                  <Link href="/mantenimiento-industrial/" className="text-[#a78bfa] underline hover:text-white font-semibold">
                    Mantenimiento Industrial
                  </Link>{" "}
                  y con la gestión integral de{" "}
                  <Link href="/confiabilidad-industrial/" className="text-[#a78bfa] underline hover:text-white font-semibold">
                    Confiabilidad Industrial
                  </Link>.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/mantenimiento-industrial/"
                    className="inline-flex items-center justify-between rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white hover:border-[#a78bfa] transition-colors"
                  >
                    <span>Mantenimiento Industrial</span>
                    <ArrowRight size={14} className="text-[#a78bfa]" />
                  </Link>

                  <Link
                    href="/confiabilidad-industrial/"
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
                Consultoría e Ingeniería en Planta
              </span>
              <h2 className="font-display mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                ¿Busca optimizar la ingeniería de sus equipos?
              </h2>
              <p className="mt-2 text-sm text-[#fff7ee]/90 max-w-xl">
                Contáctenos para coordinar una evaluación técnica en su planta y analizar conjuntamente oportunidades de mejora en sus líneas de proceso.
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
                href="https://wa.me/5491140705211?text=Hola%20Servicios%20Integrados,%20quisiera%20solicitar%20asesoramiento%20en%20ingeniería%20de%20mantenimiento."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/40 bg-white/10 px-6 py-4 font-display text-sm font-bold uppercase tracking-wider text-white hover:bg-white hover:text-[#10181d] transition-all"
              >
                <Phone size={16} /> WhatsApp: 11 4070-5211
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
