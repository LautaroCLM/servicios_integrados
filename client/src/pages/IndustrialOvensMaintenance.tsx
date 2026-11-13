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
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";

export default function IndustrialOvensMaintenance() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const prevTitle = document.title;
    document.title = "Mantenimiento de Hornos Industriales y Placas Wafer | Servicios Integrados";

    // Description meta tag
    let descMeta = document.querySelector('meta[name="description"]');
    const prevDesc = descMeta ? descMeta.getAttribute("content") : "";
    if (descMeta) {
      descMeta.setAttribute(
        "content",
        "Mantenimiento y limpieza técnica de placas de hornos de obleas (wafer): desincrustación, calibración de planchas, overhaul térmico y ajuste de turbos mixer."
      );
    }

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonicalLink ? canonicalLink.getAttribute("href") : "";
    if (canonicalLink) {
      canonicalLink.setAttribute("href", "https://serviciosintegradosweb.com/mantenimiento-hornos-industriales/");
    }

    // OG Title
    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    const prevOgTitle = ogTitleMeta ? ogTitleMeta.getAttribute("content") : "";
    if (ogTitleMeta) {
      ogTitleMeta.setAttribute("content", "Mantenimiento de Hornos Industriales y Placas Wafer | Servicios Integrados");
    }

    // OG Description
    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    const prevOgDesc = ogDescMeta ? ogDescMeta.getAttribute("content") : "";
    if (ogDescMeta) {
      ogDescMeta.setAttribute(
        "content",
        "Mantenimiento y limpieza técnica de placas de hornos de obleas (wafer): desincrustación, calibración de planchas, overhaul térmico y ajuste de turbos mixer."
      );
    }

    // OG URL
    let ogUrlMeta = document.querySelector('meta[property="og:url"]');
    const prevOgUrl = ogUrlMeta ? ogUrlMeta.getAttribute("content") : "";
    if (ogUrlMeta) {
      ogUrlMeta.setAttribute("content", "https://serviciosintegradosweb.com/mantenimiento-hornos-industriales/");
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
              <span className="text-white/80">Hornos Industriales y Placas Wafer</span>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:gap-16 items-center">
              <div>
                <span className="orange-dot eyebrow text-[#fff7ee]/80">
                  Especialización de Más de 30 Años
                </span>
                <h1 className="headline mt-4 text-[clamp(2.1rem,5.5vw,5.2rem)] leading-tight text-white">
                  Mantenimiento y Limpieza de Hornos Industriales de{" "}
                  <span className="text-[#7c3aed]">Obleas y Placas Wafer.</span>
                </h1>
                <p className="mt-6 text-base leading-relaxed text-[#fff7ee]/85 sm:text-lg max-w-2xl">
                  En <strong>Servicios Integrados</strong> somos especialistas en el mantenimiento, desincrustación técnica de placas de cocción, calibración y overhaul integral para hornos de obleas (wafer) y líneas de panificación continua.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="/#contacto" className="safety-button inline-flex items-center gap-2">
                    Solicitar Servicio para Hornos <ArrowUpRight size={17} />
                  </a>
                  <a
                    href="https://wa.me/5491140705211?text=Hola%20Servicios%20Integrados,%20quisiera%20consultar%20por%20limpieza%20y%20mantenimiento%20de%20hornos%20de%20obleas."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="outline-button inline-flex items-center gap-2 text-[#fff7ee]"
                  >
                    <MessageSquare size={17} className="text-[#a78bfa]" /> WhatsApp Directo
                  </a>
                </div>
              </div>

              {/* Specialist Experience Card */}
              <div className="rounded-2xl border border-white/15 bg-white/5 p-7 sm:p-9 shadow-2xl backdrop-blur-md">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#6d28d9]/30 text-[#a78bfa]">
                    <Flame size={22} />
                  </div>
                  <div>
                    <h2 className="font-display text-lg font-bold text-white">Especialistas en Hornos Wafer</h2>
                    <p className="text-xs text-[#fff7ee]/70">Experiencia comprobada en las principales plantas</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3.5 text-xs sm:text-sm text-[#fff7ee]/85">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="text-[#7c3aed] shrink-0 mt-0.5" />
                    <span><strong>Limpieza Técnica de Placas:</strong> Desincrustación profunda sin alterar el grabado de cocción.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="text-[#7c3aed] shrink-0 mt-0.5" />
                    <span><strong>Calibración de Planchas:</strong> Control de paralelismo, nivelación y espesor uniforme de hoja.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="text-[#7c3aed] shrink-0 mt-0.5" />
                    <span><strong>Overhaul Térmico:</strong> Reemplazo de rodamientos de alta temperatura y lubricación sintética.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="text-[#7c3aed] shrink-0 mt-0.5" />
                    <span><strong>Línea de Proceso Integral:</strong> Turbos mixer, untadores, enfriadores espirales y cortadoras.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios Específicos para Hornos Section */}
        <section className="bg-[#162229] px-5 py-20 md:px-10 md:py-28 border-y border-white/10">
          <div className="mx-auto max-w-[1600px]">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#a78bfa]">
                Intervenciones Técnicas
              </span>
              <h2 className="headline mt-3 text-3xl font-extrabold sm:text-4xl text-white">
                Servicios en Hornos y Placas de Cocción
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#fff7ee]/75">
                El correcto mantenimiento de las planchas de cocción es determinante para evitar el descarte de masa, garantizar el dorado homogéneo y proteger la vida útil del horno.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Card 1: Limpieza de Placas */}
              <div className="rounded-xl border border-white/10 bg-[#10181d]/80 p-6 shadow-md transition-all hover:border-[#a78bfa]/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#6d28d9]/20 text-[#a78bfa] mb-5">
                  <Sparkles size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Limpieza y Desincrustación</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                  Eliminación técnica de capas de carbón y desmoldante adheridas a las matrices de cocción, preservando las aristas y el diseño del grabado de la oblea.
                </p>
              </div>

              {/* Card 2: Calibración y Paralelismo */}
              <div className="rounded-xl border border-white/10 bg-[#10181d]/80 p-6 shadow-md transition-all hover:border-[#a78bfa]/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#6d28d9]/20 text-[#a78bfa] mb-5">
                  <FileCheck size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Ajuste y Calibración de Planchas</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                  Regulación micrométrica del cierre, juego lateral y paralelismo de las placas para asegurar espesor uniforme y reducir el desperdicio por bordes irregulares.
                </p>
              </div>

              {/* Card 3: Overhaul en Hornos Wafer */}
              <div className="rounded-xl border border-white/10 bg-[#10181d]/80 p-6 shadow-md transition-all hover:border-[#a78bfa]/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#6d28d9]/20 text-[#a78bfa] mb-5">
                  <RotateCcw size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Overhaul Integral de Horno</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                  Desarmado, inspección estructural, cambio de cadenas de arrastre, casquillos, pasadores y puesta en sincronismo general del túnel de cocción.
                </p>
              </div>

              {/* Card 4: Rodamientos de Alta Temperatura */}
              <div className="rounded-xl border border-white/10 bg-[#10181d]/80 p-6 shadow-md transition-all hover:border-[#a78bfa]/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#6d28d9]/20 text-[#a78bfa] mb-5">
                  <Cog size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Rodamientos y Lubricación Térmica</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                  Reemplazo de rodamientos especiales para alta temperatura (hasta 300°C) y aplicación de lubricantes sintéticos con certificación de grado alimenticio.
                </p>
              </div>

              {/* Card 5: Turbos Mixer y Mezcladores */}
              <div className="rounded-xl border border-white/10 bg-[#10181d]/80 p-6 shadow-md transition-all hover:border-[#a78bfa]/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#6d28d9]/20 text-[#a78bfa] mb-5">
                  <Zap size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Turbos Mixer y Batidoras</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                  Mantenimiento de estatores, rotores, sellos mecánicos y bombas de dosificación de masa para garantizar la emulsión y densidad homogénea del batido.
                </p>
              </div>

              {/* Card 6: Enfriadores y Untadores */}
              <div className="rounded-xl border border-white/10 bg-[#10181d]/80 p-6 shadow-md transition-all hover:border-[#a78bfa]/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#6d28d9]/20 text-[#a78bfa] mb-5">
                  <Layers size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Enfriadores Espirales y Línea</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                  Mantenimiento mecánico de torres de enfriamiento de hojas, untadoras de crema, cortadoras de bloque y cintas transportadoras asociadas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Especialización y Sinergia con Mantenimiento y Tornería */}
        <section className="px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-[1600px]">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#a78bfa]">
                  Ventaja Competitiva
                </span>
                <h2 className="headline mt-3 text-3xl font-extrabold sm:text-4xl text-white">
                  30 Años Interviniendo Líneas de Obleas en Planta
                </h2>
                <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#fff7ee]/80">
                  El conocimiento de la dinámica térmica y mecánica de los hornos continuos nos permite diagnosticar problemas que escapan a cuadrillas generales de mantenimiento.
                </p>

                <div className="mt-6 space-y-4 text-xs sm:text-sm text-[#fff7ee]/85">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4 flex items-start gap-3">
                    <Wrench size={20} className="text-[#a78bfa] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-0.5">Tornería de Repuestos Inmediata:</strong>
                      <span>Mecanizamos pasadores, bujes de bronce al aluminio y ruedas de arrastre a medida en nuestro taller de tornería 24 hs.</span>
                    </div>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/5 p-4 flex items-start gap-3">
                    <ShieldCheck size={20} className="text-[#a78bfa] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-0.5">Conexión con Confiabilidad de Planta:</strong>
                      <span>Entrenamiento a supervisores y operadores bajo el Método FARO para el cuidado autónomo de las planchas durante la producción.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contextual Synergy Box */}
              <div className="rounded-2xl border border-[#a78bfa]/30 bg-gradient-to-br from-[#6d28d9]/20 via-[#10181d] to-[#162229] p-8 sm:p-10 shadow-xl">
                <span className="inline-block rounded-full bg-[#6d28d9]/40 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#a78bfa]">
                  Servicios Relacionados
                </span>
                <h3 className="font-display mt-4 text-2xl font-bold text-white">
                  Soluciones Complementarias de Planta
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#fff7ee]/80">
                  Combine la atención de sus hornos con nuestros servicios de{" "}
                  <Link href="/mantenimiento-industrial/" className="text-[#a78bfa] underline hover:text-white font-semibold">
                    Mantenimiento Industrial
                  </Link>
                  ,{" "}
                  <Link href="/torneria-mecanizado/" className="text-[#a78bfa] underline hover:text-white font-semibold">
                    Tornería y Mecanizado
                  </Link>{" "}
                  y{" "}
                  <Link href="/confiabilidad-industrial/" className="text-[#a78bfa] underline hover:text-white font-semibold">
                    Confiabilidad Industrial
                  </Link>.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <Link
                    href="/mantenimiento-industrial/"
                    className="inline-flex items-center justify-between rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white hover:border-[#a78bfa] transition-colors"
                  >
                    <span>Mantenimiento Industrial</span>
                    <ArrowRight size={14} className="text-[#a78bfa]" />
                  </Link>

                  <Link
                    href="/torneria-mecanizado/"
                    className="inline-flex items-center justify-between rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white hover:border-[#a78bfa] transition-colors"
                  >
                    <span>Tornería y Mecanizado 24 hs</span>
                    <ArrowRight size={14} className="text-[#a78bfa]" />
                  </Link>

                  <Link
                    href="/confiabilidad-industrial/"
                    className="inline-flex items-center justify-between rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white hover:border-[#a78bfa] transition-colors sm:col-span-2"
                  >
                    <span>Confiabilidad Industrial y Método FARO</span>
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
                Atención para Hornos y Líneas Wafer
              </span>
              <h2 className="font-display mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                ¿Requiere limpieza técnica o calibración en su horno?
              </h2>
              <p className="mt-2 text-sm text-[#fff7ee]/90 max-w-xl">
                Coordine una visita técnica en su planta para evaluar el estado de las planchas de cocción y programar el servicio sin alterar los compromisos de entrega.
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
                href="https://wa.me/5491140705211?text=Hola%20Servicios%20Integrados,%20quisiera%20solicitar%20servicio%20para%20hornos%20de%20obleas."
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
