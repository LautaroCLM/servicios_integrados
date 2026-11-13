import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import {
  Activity,
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Cpu,
  Droplets,
  Gauge,
  MessageSquare,
  Phone,
  ShieldCheck,
  Snowflake,
  ThermometerSnowflake,
  Wrench,
  Zap,
} from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";

export default function IndustrialRefrigeration() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const prevTitle = document.title;
    document.title = "Refrigeración Industrial y Mantenimiento de Chillers | Servicios Integrados";

    // Description meta tag
    let descMeta = document.querySelector('meta[name="description"]');
    const prevDesc = descMeta ? descMeta.getAttribute("content") : "";
    if (descMeta) {
      descMeta.setAttribute(
        "content",
        "Servicios de refrigeración industrial para la industria: mantenimiento, instalación y reparación de chillers, cámaras frigoríficas, torres de enfriamiento y bombas."
      );
    }

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonicalLink ? canonicalLink.getAttribute("href") : "";
    if (canonicalLink) {
      canonicalLink.setAttribute("href", "https://serviciosintegradosweb.com/refrigeracion-industrial/");
    }

    // OG Title
    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    const prevOgTitle = ogTitleMeta ? ogTitleMeta.getAttribute("content") : "";
    if (ogTitleMeta) {
      ogTitleMeta.setAttribute("content", "Refrigeración Industrial y Mantenimiento de Chillers | Servicios Integrados");
    }

    // OG Description
    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    const prevOgDesc = ogDescMeta ? ogDescMeta.getAttribute("content") : "";
    if (ogDescMeta) {
      ogDescMeta.setAttribute(
        "content",
        "Servicios de refrigeración industrial para la industria: mantenimiento, instalación y reparación de chillers, cámaras frigoríficas, torres de enfriamiento y bombas."
      );
    }

    // OG URL
    let ogUrlMeta = document.querySelector('meta[property="og:url"]');
    const prevOgUrl = ogUrlMeta ? ogUrlMeta.getAttribute("content") : "";
    if (ogUrlMeta) {
      ogUrlMeta.setAttribute("content", "https://serviciosintegradosweb.com/refrigeracion-industrial/");
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
              <span className="text-white/80">Refrigeración Industrial</span>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:gap-16 items-center">
              <div>
                <span className="orange-dot eyebrow text-[#fff7ee]/80">
                  Control Térmico y Continuidad Operativa
                </span>
                <h1 className="headline mt-4 text-[clamp(2.1rem,5.5vw,5.2rem)] leading-tight text-white">
                  Refrigeración Industrial:{" "}
                  <span className="text-[#7c3aed]">Mantenimiento e Instalaciones.</span>
                </h1>
                <p className="mt-6 text-base leading-relaxed text-[#fff7ee]/85 sm:text-lg max-w-2xl">
                  En <strong>Servicios Integrados</strong> brindamos servicios especializados de mantenimiento preventivo, correctivo, instalación y modernización para chillers, cámaras frigoríficas, torres de enfriamiento y bombas de proceso en plantas industriales.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="/#contacto" className="safety-button inline-flex items-center gap-2">
                    Solicitar Asistencia en Refrigeración <ArrowUpRight size={17} />
                  </a>
                  <a
                    href="https://wa.me/5491140705211?text=Hola%20Servicios%20Integrados,%20quisiera%20consultar%20por%20mantenimiento%20de%20refrigeración%20industrial%20o%20chillers."
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
                    <Snowflake size={22} />
                  </div>
                  <div>
                    <h2 className="font-display text-lg font-bold text-white">Sistemas de Frío Industrial</h2>
                    <p className="text-xs text-[#fff7ee]/70">Especialistas en la industria de la alimentación</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3.5 text-xs sm:text-sm text-[#fff7ee]/85">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="text-[#7c3aed] shrink-0 mt-0.5" />
                    <span><strong>Chillers y Centrales de Frío:</strong> Mantenimiento, carga, control de presiones y rendimiento térmico.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="text-[#7c3aed] shrink-0 mt-0.5" />
                    <span><strong>Cámaras Frigoríficas:</strong> Acondicionamiento de evaporadores, compresores y aislamiento de salas.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="text-[#7c3aed] shrink-0 mt-0.5" />
                    <span><strong>Torres de Enfriamiento:</strong> Limpieza de rellenos, revisión de bombas y ventiladores de tiro.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="text-[#7c3aed] shrink-0 mt-0.5" />
                    <span><strong>Servicio de Emergencia:</strong> Intervención rápida ante fallas críticas de refrigeración en proceso.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios de Refrigeración Section */}
        <section className="bg-[#162229] px-5 py-20 md:px-10 md:py-28 border-y border-white/10">
          <div className="mx-auto max-w-[1600px]">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#a78bfa]">
                Cobertura de Servicios
              </span>
              <h2 className="headline mt-3 text-3xl font-extrabold sm:text-4xl text-white">
                Mantenimiento y Reparación de Equipos de Frío
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#fff7ee]/75">
                El control térmico es un parámetro crítico en la manufactura de chocolates, galletitas, lácteos y productos alimenticios. Aseguramos la confiabilidad de sus circuitos de frío.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Card 1: Chillers */}
              <div className="rounded-xl border border-white/10 bg-[#10181d]/80 p-6 shadow-md transition-all hover:border-[#a78bfa]/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#6d28d9]/20 text-[#a78bfa] mb-5">
                  <ThermometerSnowflake size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Mantenimiento de Chillers</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                  Inspección y limpieza de intercambiadores de calor, control de gases refrigerantes, calibración de termostatos y mantenimiento electromecánico de unidades enfriadoras.
                </p>
              </div>

              {/* Card 2: Cámaras Frigoríficas */}
              <div className="rounded-xl border border-white/10 bg-[#10181d]/80 p-6 shadow-md transition-all hover:border-[#a78bfa]/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#6d28d9]/20 text-[#a78bfa] mb-5">
                  <Snowflake size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Cámaras Frigoríficas</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                  Mantenimiento de forzadores, deshielo, motocompresores y válvulas de expansión en cámaras de conservación, antecámaras y túneles de congelado.
                </p>
              </div>

              {/* Card 3: Torres de Enfriamiento */}
              <div className="rounded-xl border border-white/10 bg-[#10181d]/80 p-6 shadow-md transition-all hover:border-[#a78bfa]/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#6d28d9]/20 text-[#a78bfa] mb-5">
                  <Droplets size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Torres de Enfriamiento</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                  Limpieza y desincrustación de paneles de intercambio, alineación de ejes de ventilador, cambio de rodamientos y mantenimiento de bombas de recirculación.
                </p>
              </div>

              {/* Card 4: Compresores y Bombas */}
              <div className="rounded-xl border border-white/10 bg-[#10181d]/80 p-6 shadow-md transition-all hover:border-[#a78bfa]/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#6d28d9]/20 text-[#a78bfa] mb-5">
                  <Activity size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Compresores y Bombas de Proceso</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                  Revisión integral de bombas de agua helada y glicol, sello mecánico, compresores semi-herméticos y abiertos, y control de vibraciones en bancadas.
                </p>
              </div>

              {/* Card 5: Modernización */}
              <div className="rounded-xl border border-white/10 bg-[#10181d]/80 p-6 shadow-md transition-all hover:border-[#a78bfa]/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#6d28d9]/20 text-[#a78bfa] mb-5">
                  <Cpu size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Modernización de Instalaciones</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                  Reemplazo de refrigerantes obsoletos, adecuación de cañerías aisladas en acero inoxidable, instalación de variadores y optimización energética del circuito.
                </p>
              </div>

              {/* Card 6: Servicio de Emergencia */}
              <div className="rounded-xl border border-white/10 bg-[#10181d]/80 p-6 shadow-md transition-all hover:border-[#a78bfa]/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#6d28d9]/20 text-[#a78bfa] mb-5">
                  <Clock size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Atención de Emergencias</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                  Respuesta técnica prioritaria ante pérdidas de refrigerante, disparos por alta presión o fallas de bombas que comprometan la cadena de frío o el proceso continuo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enfoque Integrado en Planta */}
        <section className="px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-[1600px]">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#a78bfa]">
                  Integración Técnica
                </span>
                <h2 className="headline mt-3 text-3xl font-extrabold sm:text-4xl text-white">
                  Frío Industrial Integrado al Proceso de Producción
                </h2>
                <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#fff7ee]/80">
                  En la industria alimentaria (líneas de templado de chocolate, túneles de enfriamiento de galletitas y salas de proceso), el sistema de refrigeración no es un servicio aislado, sino el corazón del atemperado del producto.
                </p>

                <div className="mt-6 space-y-4 text-xs sm:text-sm text-[#fff7ee]/85">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4 flex items-start gap-3">
                    <Wrench size={20} className="text-[#a78bfa] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-0.5">Mantenimiento Predictivo y Preventivo:</strong>
                      <span>Inspecciones periódicas para evitar paradas térmicas imprevistas en plena producción.</span>
                    </div>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/5 p-4 flex items-start gap-3">
                    <ShieldCheck size={20} className="text-[#a78bfa] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-0.5">Soporte Integral de Mantenimiento Mecánico:</strong>
                      <span>Capacidad de tornería y fabricación en acero inoxidable para reparar bombas, bridas y cañerías del circuito de frío.</span>
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
                  Descubra cómo combinamos la refrigeración industrial con los servicios de{" "}
                  <Link href="/mantenimiento-industrial/" className="text-[#a78bfa] underline hover:text-white font-semibold">
                    Mantenimiento Industrial
                  </Link>
                  ,{" "}
                  <Link href="/fabricacion-acero-inoxidable/" className="text-[#a78bfa] underline hover:text-white font-semibold">
                    Fabricación en Acero Inoxidable
                  </Link>{" "}
                  y{" "}
                  <Link href="/ingenieria-de-mantenimiento/" className="text-[#a78bfa] underline hover:text-white font-semibold">
                    Ingeniería de Mantenimiento
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
                    href="/fabricacion-acero-inoxidable/"
                    className="inline-flex items-center justify-between rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white hover:border-[#a78bfa] transition-colors"
                  >
                    <span>Fabricación en Acero Inox</span>
                    <ArrowRight size={14} className="text-[#a78bfa]" />
                  </Link>

                  <Link
                    href="/ingenieria-de-mantenimiento/"
                    className="inline-flex items-center justify-between rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white hover:border-[#a78bfa] transition-colors sm:col-span-2"
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
                Atención Técnica para Sistemas de Frío
              </span>
              <h2 className="font-display mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                ¿Necesita mantenimiento en chillers o cámaras frigoríficas?
              </h2>
              <p className="mt-2 text-sm text-[#fff7ee]/90 max-w-xl">
                Contáctenos para coordinar una inspección técnica de su circuito de refrigeración y asegurar la estabilidad térmica de sus líneas de producción.
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
                href="https://wa.me/5491140705211?text=Hola%20Servicios%20Integrados,%20quisiera%20solicitar%20mantenimiento%20en%20refrigeración%20industrial."
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
