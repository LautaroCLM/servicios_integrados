import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Compass,
  Cpu,
  Droplets,
  Gauge,
  GraduationCap,
  MessageSquare,
  Phone,
  ShieldCheck,
  Target,
  TrendingUp,
  UserCheck,
  Wrench,
  Zap,
} from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";

export default function IndustrialReliability() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const prevTitle = document.title;
    document.title = "Confiabilidad Industrial | Servicios Integrados";

    // Description meta tag
    let descMeta = document.querySelector('meta[name="description"]');
    const prevDesc = descMeta ? descMeta.getAttribute("content") : "";
    if (descMeta) {
      descMeta.setAttribute(
        "content",
        "Soluciones de confiabilidad industrial para plantas de manufactura: mentalidad cero pérdidas, disponibilidad operativa y metodología Líder FARO en planta."
      );
    }

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonicalLink ? canonicalLink.getAttribute("href") : "";
    if (canonicalLink) {
      canonicalLink.setAttribute("href", "https://serviciosintegradosweb.com/confiabilidad-industrial");
    }

    // OG Title
    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    const prevOgTitle = ogTitleMeta ? ogTitleMeta.getAttribute("content") : "";
    if (ogTitleMeta) {
      ogTitleMeta.setAttribute("content", "Confiabilidad Industrial | Servicios Integrados");
    }

    // OG Description
    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    const prevOgDesc = ogDescMeta ? ogDescMeta.getAttribute("content") : "";
    if (ogDescMeta) {
      ogDescMeta.setAttribute(
        "content",
        "Soluciones de confiabilidad industrial para plantas de manufactura: mentalidad cero pérdidas, disponibilidad operativa y metodología Líder FARO en planta."
      );
    }

    // OG URL
    let ogUrlMeta = document.querySelector('meta[property="og:url"]');
    const prevOgUrl = ogUrlMeta ? ogUrlMeta.getAttribute("content") : "";
    if (ogUrlMeta) {
      ogUrlMeta.setAttribute("content", "https://serviciosintegradosweb.com/confiabilidad-industrial");
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
              <span className="text-white/80">Confiabilidad Industrial</span>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:gap-16 items-center">
              <div>
                <span className="orange-dot eyebrow text-[#fff7ee]/80">
                  Cultura de Planta y Disponibilidad Sostenible
                </span>
                <h1 className="headline mt-4 text-[clamp(2.1rem,5.5vw,5.2rem)] leading-tight text-white">
                  Confiabilidad Industrial y{" "}
                  <span className="text-[#7c3aed]">Disponibilidad Operativa.</span>
                </h1>
                <p className="mt-6 text-base leading-relaxed text-[#fff7ee]/85 sm:text-lg max-w-2xl">
                  En <strong>Servicios Integrados</strong> concebimos la confiabilidad industrial no como un conjunto de fórmulas teóricas, sino como un resultado concreto que se construye en el piso de planta mediante la disciplina operativa, el mantenimiento autónomo y el desarrollo de personas.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="/#contacto" className="safety-button inline-flex items-center gap-2">
                    Diagnóstico de Confiabilidad <ArrowUpRight size={17} />
                  </a>
                  <a
                    href="https://wa.me/5491140705211?text=Hola%20Servicios%20Integrados,%20quisiera%20consultar%20sobre%20programas%20de%20confiabilidad%20industrial%20y%20Método%20FARO."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="outline-button inline-flex items-center gap-2 text-[#fff7ee]"
                  >
                    <MessageSquare size={17} className="text-[#a78bfa]" /> WhatsApp Directo
                  </a>
                </div>
              </div>

              {/* Reliability Concept Card */}
              <div className="rounded-2xl border border-white/15 bg-white/5 p-7 sm:p-9 shadow-2xl backdrop-blur-md">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#6d28d9]/30 text-[#a78bfa]">
                    <Target size={22} />
                  </div>
                  <div>
                    <h2 className="font-display text-lg font-bold text-white">Mentalidad Cero Pérdidas</h2>
                    <p className="text-xs text-[#fff7ee]/70">Disciplina técnica y resultados sostenibles</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3.5 text-xs sm:text-sm text-[#fff7ee]/85">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="text-[#7c3aed] shrink-0 mt-0.5" />
                    <span><strong>Mantenimiento Autónomo LIL:</strong> Estandarización de Limpieza, Inspección y Lubricación.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="text-[#7c3aed] shrink-0 mt-0.5" />
                    <span><strong>Eliminación de Micro-Paradas:</strong> Reducción de detenciones breves que deterioran la productividad.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="text-[#7c3aed] shrink-0 mt-0.5" />
                    <span><strong>Formación del Operador Activo:</strong> Capacitación para la detección temprana de anomalías.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="text-[#7c3aed] shrink-0 mt-0.5" />
                    <span><strong>Método Líder FARO®:</strong> Liderazgo técnico y rigor operativo directamente en campo.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Dimensiones de la Confiabilidad Section */}
        <section className="bg-[#162229] px-5 py-20 md:px-10 md:py-28 border-y border-white/10">
          <div className="mx-auto max-w-[1600px]">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#a78bfa]">
                Fundamentos Técnicos
              </span>
              <h2 className="headline mt-3 text-3xl font-extrabold sm:text-4xl text-white">
                Pilares de la Confiabilidad en Planta
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#fff7ee]/75">
                La confiabilidad de los activos industriales depende de la interacción armónica entre el estado mecánico de los equipos y las conductas operativas del personal.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Card 1: Cero Pérdidas */}
              <div className="rounded-xl border border-white/10 bg-[#10181d]/80 p-6 shadow-md transition-all hover:border-[#a78bfa]/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#6d28d9]/20 text-[#a78bfa] mb-5">
                  <TrendingUp size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Concepto de Cero Pérdidas</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                  Orientación cultural para erradicar pérdidas por fallas imprevistas, mermas de velocidad y paradas menores en líneas continuas de envasado y procesamiento.
                </p>
              </div>

              {/* Card 2: Mantenimiento LIL */}
              <div className="rounded-xl border border-white/10 bg-[#10181d]/80 p-6 shadow-md transition-all hover:border-[#a78bfa]/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#6d28d9]/20 text-[#a78bfa] mb-5">
                  <Droplets size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Estándares LIL</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                  La limpieza como forma de inspección, lubricación precisa con el producto adecuado y ajuste sistemático para mantener las condiciones básicas del activo.
                </p>
              </div>

              {/* Card 3: Operador Activo */}
              <div className="rounded-xl border border-white/10 bg-[#10181d]/80 p-6 shadow-md transition-all hover:border-[#a78bfa]/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#6d28d9]/20 text-[#a78bfa] mb-5">
                  <UserCheck size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Autonomía Operativa</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                  Entrenamiento práctico a operarios y supervisores para que reconozcan ruidos, temperaturas anómalas o vibraciones antes de que deriven en una detención.
                </p>
              </div>

              {/* Card 4: Productividad de Equipos */}
              <div className="rounded-xl border border-white/10 bg-[#10181d]/80 p-6 shadow-md transition-all hover:border-[#a78bfa]/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#6d28d9]/20 text-[#a78bfa] mb-5">
                  <Gauge size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Disponibilidad y OEE</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                  Alineación de las rutinas de mantenimiento con las metas de eficiencia global del equipamiento, asegurando que las máquinas entreguen su capacidad de diseño.
                </p>
              </div>

              {/* Card 5: Pre-Auditorías */}
              <div className="rounded-xl border border-white/10 bg-[#10181d]/80 p-6 shadow-md transition-all hover:border-[#a78bfa]/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#6d28d9]/20 text-[#a78bfa] mb-5">
                  <ShieldCheck size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Pre-Auditorías Técnicas</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                  Revisión técnica de instalaciones y líneas productivas bajo estándares de calidad y seguridad industrial, detectando puntos críticos de intervención.
                </p>
              </div>

              {/* Card 6: Formación de Liderazgo */}
              <div className="rounded-xl border border-white/10 bg-[#10181d]/80 p-6 shadow-md transition-all hover:border-[#a78bfa]/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#6d28d9]/20 text-[#a78bfa] mb-5">
                  <GraduationCap size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Entrenamiento en la Operación</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                  Transferencia de conocimiento técnico directamente sobre los equipos, garantizando que las mejoras se sostengan en el tiempo por el propio equipo de planta.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Método Líder FARO Highlight */}
        <section className="px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-[1600px]">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#a78bfa]">
                  Metodología Exclusiva
                </span>
                <h2 className="headline mt-3 text-3xl font-extrabold sm:text-4xl text-white">
                  Método Líder FARO®: Filosofía de Campo
                </h2>
                <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#fff7ee]/80">
                  Desarrollado a partir de más de tres décadas de experiencia en plantas industriales, el Método Líder FARO® estructura la formación operativa bajo un esquema 70/20/10:
                </p>

                <div className="mt-6 grid gap-3 text-xs sm:text-sm">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4 flex items-center justify-between">
                    <span className="font-display font-bold text-white">70% Ejecución en Campo</span>
                    <span className="text-[#a78bfa] font-bold">Aprender Haciendo</span>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4 flex items-center justify-between">
                    <span className="font-display font-bold text-white">20% Entrenamiento Práctico</span>
                    <span className="text-[#a78bfa] font-bold">Coaching Técnico</span>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4 flex items-center justify-between">
                    <span className="font-display font-bold text-white">10% Conceptos Esenciales</span>
                    <span className="text-[#a78bfa] font-bold">Fundamento Teórico</span>
                  </div>
                </div>

                <p className="mt-5 text-xs text-[#fff7ee]/65 leading-relaxed">
                  Apoyado en los 4 pilares: <strong>Fortaleza</strong>, <strong>Acción</strong>, <strong>Responsabilidad</strong> y <strong>Orientación</strong>, sustentados sobre el estándar innegociable de la <strong>Disciplina</strong>.
                </p>
              </div>

              {/* Contextual Synergy Box */}
              <div className="rounded-2xl border border-[#a78bfa]/30 bg-gradient-to-br from-[#6d28d9]/20 via-[#10181d] to-[#162229] p-8 sm:p-10 shadow-xl">
                <span className="inline-block rounded-full bg-[#6d28d9]/40 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#a78bfa]">
                  Integración Técnica
                </span>
                <h3 className="font-display mt-4 text-2xl font-bold text-white">
                  Conexión con Mantenimiento e Ingeniería
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#fff7ee]/80">
                  La confiabilidad se nutre de la precisión en la ejecución del{" "}
                  <Link href="/mantenimiento-industrial" className="text-[#a78bfa] underline hover:text-white font-semibold">
                    Mantenimiento Industrial
                  </Link>{" "}
                  y de los métodos analíticos de la{" "}
                  <Link href="/ingenieria-de-mantenimiento" className="text-[#a78bfa] underline hover:text-white font-semibold">
                    Ingeniería de Mantenimiento
                  </Link>.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/mantenimiento-industrial"
                    className="inline-flex items-center justify-between rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white hover:border-[#a78bfa] transition-colors"
                  >
                    <span>Mantenimiento Industrial</span>
                    <ArrowRight size={14} className="text-[#a78bfa]" />
                  </Link>

                  <Link
                    href="/ingenieria-de-mantenimiento"
                    className="inline-flex items-center justify-between rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white hover:border-[#a78bfa] transition-colors"
                  >
                    <span>Ingeniería de Mantenimiento</span>
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
                Transformación Operativa en Planta
              </span>
              <h2 className="font-display mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                ¿Desea implementar confiabilidad en sus líneas?
              </h2>
              <p className="mt-2 text-sm text-[#fff7ee]/90 max-w-xl">
                Contáctenos para coordinar un diagnóstico de confiabilidad operativa y evaluar programas de entrenamiento técnico adaptados a su equipo.
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
                href="https://wa.me/5491140705211?text=Hola%20Servicios%20Integrados,%20quisiera%20solicitar%20información%20sobre%20programas%20de%20confiabilidad%20industrial."
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
