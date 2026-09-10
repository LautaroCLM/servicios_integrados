import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  FileCheck,
  Flame,
  Layers,
  MessageSquare,
  PackageCheck,
  Phone,
  Pipette,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";

export default function StainlessSteelManufacturing() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const prevTitle = document.title;
    document.title = "Fabricación en Acero Inoxidable y Piping Sanitario | Servicios Integrados";

    // Description meta tag
    let descMeta = document.querySelector('meta[name="description"]');
    const prevDesc = descMeta ? descMeta.getAttribute("content") : "";
    if (descMeta) {
      descMeta.setAttribute(
        "content",
        "Fabricación en acero inoxidable para la industria alimentaria: cañerías sanitarias de proceso, soldaduras certificadas, termos, silos, tolvas y estructuras."
      );
    }

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonicalLink ? canonicalLink.getAttribute("href") : "";
    if (canonicalLink) {
      canonicalLink.setAttribute("href", "https://serviciosintegradosweb.com/fabricacion-acero-inoxidable");
    }

    // OG Title
    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    const prevOgTitle = ogTitleMeta ? ogTitleMeta.getAttribute("content") : "";
    if (ogTitleMeta) {
      ogTitleMeta.setAttribute("content", "Fabricación en Acero Inoxidable y Piping Sanitario | Servicios Integrados");
    }

    // OG Description
    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    const prevOgDesc = ogDescMeta ? ogDescMeta.getAttribute("content") : "";
    if (ogDescMeta) {
      ogDescMeta.setAttribute(
        "content",
        "Fabricación en acero inoxidable para la industria alimentaria: cañerías sanitarias de proceso, soldaduras certificadas, termos, silos, tolvas y estructuras."
      );
    }

    // OG URL
    let ogUrlMeta = document.querySelector('meta[property="og:url"]');
    const prevOgUrl = ogUrlMeta ? ogUrlMeta.getAttribute("content") : "";
    if (ogUrlMeta) {
      ogUrlMeta.setAttribute("content", "https://serviciosintegradosweb.com/fabricacion-acero-inoxidable");
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
              <span className="text-white/80">Fabricación en Acero Inoxidable</span>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:gap-16 items-center">
              <div>
                <span className="orange-dot eyebrow text-[#fff7ee]/80">
                  Estándares Sanitarios e Industriales
                </span>
                <h1 className="headline mt-4 text-[clamp(2.1rem,5.5vw,5.2rem)] leading-tight text-white">
                  Fabricación en Acero Inoxidable y{" "}
                  <span className="text-[#7c3aed]">Cañerías Sanitarias.</span>
                </h1>
                <p className="mt-6 text-base leading-relaxed text-[#fff7ee]/85 sm:text-lg max-w-2xl">
                  En <strong>Servicios Integrados</strong> diseñamos, fabricamos e instalamos cañerías sanitarias de proceso, silos, termos, tolvas y estructuras en acero inoxidable, con soldaduras certificadas para la industria alimentaria.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="/#contacto" className="safety-button inline-flex items-center gap-2">
                    Solicitar Cotización de Fabricación <ArrowUpRight size={17} />
                  </a>
                  <a
                    href="https://wa.me/5491140705211?text=Hola%20Servicios%20Integrados,%20quisiera%20consultar%20por%20fabricación%20en%20acero%20inoxidable%20o%20cañerías%20sanitarias."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="outline-button inline-flex items-center gap-2 text-[#fff7ee]"
                  >
                    <MessageSquare size={17} className="text-[#a78bfa]" /> WhatsApp Directo
                  </a>
                </div>
              </div>

              {/* Quality & Standards Card */}
              <div className="rounded-2xl border border-white/15 bg-white/5 p-7 sm:p-9 shadow-2xl backdrop-blur-md">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#6d28d9]/30 text-[#a78bfa]">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <h2 className="font-display text-lg font-bold text-white">Estándares Sanitarios de Calidad</h2>
                    <p className="text-xs text-[#fff7ee]/70">AISI 304 y AISI 316 con control de calidad</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3.5 text-xs sm:text-sm text-[#fff7ee]/85">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="text-[#7c3aed] shrink-0 mt-0.5" />
                    <span><strong>Cañerías Sanitarias de Proceso:</strong> Trazado, montaje e interconexión de líneas de fluidos y pastas.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="text-[#7c3aed] shrink-0 mt-0.5" />
                    <span><strong>Soldaduras Sanitarias Certificadas:</strong> Ensayos no destructivos mediante tintas penetrantes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="text-[#7c3aed] shrink-0 mt-0.5" />
                    <span><strong>Termos y Silos de Almacenamiento:</strong> Fabricación a medida con aislamiento y acabado sanitario.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="text-[#7c3aed] shrink-0 mt-0.5" />
                    <span><strong>Tolvas y Transportadores:</strong> Estructuras de soporte, sinfines y tolvas dosificadoras.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Productos y Equipos Fabricados Section */}
        <section className="bg-[#162229] px-5 py-20 md:px-10 md:py-28 border-y border-white/10">
          <div className="mx-auto max-w-[1600px]">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#a78bfa]">
                Fabricación y Montajes
              </span>
              <h2 className="headline mt-3 text-3xl font-extrabold sm:text-4xl text-white">
                Soluciones en Acero Inoxidable para la Industria
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#fff7ee]/75">
                Diseñamos y fabricamos equipamiento adaptado a las normativas de higiene, seguridad alimentaria y durabilidad requeridas en plantas productivas.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Card 1: Cañerías Sanitarias */}
              <div className="rounded-xl border border-white/10 bg-[#10181d]/80 p-6 shadow-md transition-all hover:border-[#a78bfa]/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#6d28d9]/20 text-[#a78bfa] mb-5">
                  <Pipette size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Cañerías Sanitarias (Piping)</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                  Montaje de circuitos de cañerías en acero inoxidable para chocolate, glucosa, masa, agua de proceso y CIP, con válvulas y accesorios sanitarios.
                </p>
              </div>

              {/* Card 2: Soldaduras con Tintas Penetrantes */}
              <div className="rounded-xl border border-white/10 bg-[#10181d]/80 p-6 shadow-md transition-all hover:border-[#a78bfa]/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#6d28d9]/20 text-[#a78bfa] mb-5">
                  <Flame size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Soldadura Sanitaria y Control</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                  Soldadura TIG con purga de gas inerte y control de calidad mediante ensayos de tintas penetrantes para verificar ausencia de poros o fisuras.
                </p>
              </div>

              {/* Card 3: Termos y Silos */}
              <div className="rounded-xl border border-white/10 bg-[#10181d]/80 p-6 shadow-md transition-all hover:border-[#a78bfa]/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#6d28d9]/20 text-[#a78bfa] mb-5">
                  <PackageCheck size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Termos y Silos Inoxidables</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                  Fabricación de tanques pulmón, termos calefaccionados y silos para almacenamiento de materias primas con agitación interna y camisas térmicas.
                </p>
              </div>

              {/* Card 4: Tolvas y Transportadores */}
              <div className="rounded-xl border border-white/10 bg-[#10181d]/80 p-6 shadow-md transition-all hover:border-[#a78bfa]/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#6d28d9]/20 text-[#a78bfa] mb-5">
                  <Layers size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Tolvas, Sinfines y Transportadores</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                  Construcción de tolvas dosificadoras, transportadores de banda sanitaria, tornillos sinfín y canaletas de desagüe en acero inoxidable.
                </p>
              </div>

              {/* Card 5: Filtros e Imanes */}
              <div className="rounded-xl border border-white/10 bg-[#10181d]/80 p-6 shadow-md transition-all hover:border-[#a78bfa]/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#6d28d9]/20 text-[#a78bfa] mb-5">
                  <Zap size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Filtros Magnéticos y Trampas</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                  Instalación de filtros magnéticos e imanes de alta intensidad para retención de partículas férricas en líneas de masa y fluidos de proceso.
                </p>
              </div>

              {/* Card 6: Estructuras y Plataformas */}
              <div className="rounded-xl border border-white/10 bg-[#10181d]/80 p-6 shadow-md transition-all hover:border-[#a78bfa]/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#6d28d9]/20 text-[#a78bfa] mb-5">
                  <FileCheck size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Estructuras y Plataformas Sanitarias</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                  Fabricación de pasarelas, escaleras, barandas y plataformas de operación en acero inoxidable para acceso seguro a maquinaria de planta.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Integración con Mantenimiento y Tornería */}
        <section className="px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-[1600px]">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#a78bfa]">
                  Enfoque Integrado
                </span>
                <h2 className="headline mt-3 text-3xl font-extrabold sm:text-4xl text-white">
                  Fabricación Propia con Soporte de Montaje en Planta
                </h2>
                <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#fff7ee]/80">
                  En <strong>Servicios Integrados</strong> no nos limitamos a fabricar piezas en taller: nuestro equipo técnico se encarga del montaje, conexionado, pruebas de estanqueidad y puesta en marcha en su planta industrial.
                </p>

                <div className="mt-6 space-y-4 text-xs sm:text-sm text-[#fff7ee]/85">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4 flex items-start gap-3">
                    <Wrench size={20} className="text-[#a78bfa] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-0.5">Complemento con Tornería 24 hs:</strong>
                      <span>Mecanizado interno de conexiones, bridas y piezas de ajuste para acelerar los tiempos de fabricación.</span>
                    </div>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/5 p-4 flex items-start gap-3">
                    <Activity size={20} className="text-[#a78bfa] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-0.5">Garantía de Continuidad Técnica:</strong>
                      <span>Instalaciones diseñadas para facilitar las rutinas de mantenimiento preventivo y limpieza CIP.</span>
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
                  Explore cómo nuestra capacidad en acero inoxidable se combina con los servicios de{" "}
                  <Link href="/mantenimiento-industrial" className="text-[#a78bfa] underline hover:text-white font-semibold">
                    Mantenimiento Industrial
                  </Link>
                  ,{" "}
                  <Link href="/torneria-mecanizado" className="text-[#a78bfa] underline hover:text-white font-semibold">
                    Tornería y Mecanizado
                  </Link>{" "}
                  e{" "}
                  <Link href="/ingenieria-de-mantenimiento" className="text-[#a78bfa] underline hover:text-white font-semibold">
                    Ingeniería de Mantenimiento
                  </Link>.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <Link
                    href="/mantenimiento-industrial"
                    className="inline-flex items-center justify-between rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white hover:border-[#a78bfa] transition-colors"
                  >
                    <span>Mantenimiento Industrial</span>
                    <ArrowRight size={14} className="text-[#a78bfa]" />
                  </Link>

                  <Link
                    href="/torneria-mecanizado"
                    className="inline-flex items-center justify-between rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white hover:border-[#a78bfa] transition-colors"
                  >
                    <span>Tornería y Mecanizado</span>
                    <ArrowRight size={14} className="text-[#a78bfa]" />
                  </Link>

                  <Link
                    href="/ingenieria-de-mantenimiento"
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
                Proyectos en Acero Inoxidable
              </span>
              <h2 className="font-display mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                ¿Necesita fabricar cañerías, silos o estructuras inoxidables?
              </h2>
              <p className="mt-2 text-sm text-[#fff7ee]/90 max-w-xl">
                Contáctenos para evaluar su proyecto técnico, realizar relevamiento en planta y enviar una propuesta detallada.
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
                href="https://wa.me/5491140705211?text=Hola%20Servicios%20Integrados,%20quisiera%20cotizar%20un%20trabajo%20en%20acero%20inoxidable."
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
