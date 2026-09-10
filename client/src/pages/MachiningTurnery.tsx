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
  Layers,
  MessageSquare,
  Phone,
  RotateCcw,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";

export default function MachiningTurnery() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const prevTitle = document.title;
    document.title = "Tornería y Mecanizado Industrial 24 hs | Servicios Integrados";

    // Description meta tag
    let descMeta = document.querySelector('meta[name="description"]');
    const prevDesc = descMeta ? descMeta.getAttribute("content") : "";
    if (descMeta) {
      descMeta.setAttribute(
        "content",
        "Servicio de tornería y mecanizado industrial 24 hs: fabricación y recuperación de repuestos mecánicos, componentes inoxidables y mecanizado de precisión en planta."
      );
    }

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonicalLink ? canonicalLink.getAttribute("href") : "";
    if (canonicalLink) {
      canonicalLink.setAttribute("href", "https://serviciosintegradosweb.com/torneria-mecanizado");
    }

    // OG Title
    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    const prevOgTitle = ogTitleMeta ? ogTitleMeta.getAttribute("content") : "";
    if (ogTitleMeta) {
      ogTitleMeta.setAttribute("content", "Tornería y Mecanizado Industrial 24 hs | Servicios Integrados");
    }

    // OG Description
    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    const prevOgDesc = ogDescMeta ? ogDescMeta.getAttribute("content") : "";
    if (ogDescMeta) {
      ogDescMeta.setAttribute(
        "content",
        "Servicio de tornería y mecanizado industrial 24 hs: fabricación y recuperación de repuestos mecánicos, componentes inoxidables y mecanizado de precisión en planta."
      );
    }

    // OG URL
    let ogUrlMeta = document.querySelector('meta[property="og:url"]');
    const prevOgUrl = ogUrlMeta ? ogUrlMeta.getAttribute("content") : "";
    if (ogUrlMeta) {
      ogUrlMeta.setAttribute("content", "https://serviciosintegradosweb.com/torneria-mecanizado");
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
              <span className="text-white/80">Tornería y Mecanizado 24 hs</span>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:gap-16 items-center">
              <div>
                <span className="orange-dot eyebrow text-[#fff7ee]/80">
                  Mecanizado de Precisión y Asistencia 24 hs
                </span>
                <h1 className="headline mt-4 text-[clamp(2.1rem,5.5vw,5.2rem)] leading-tight text-white">
                  Tornería y Mecanizado Industrial de{" "}
                  <span className="text-[#7c3aed]">Repuestos y Piezas.</span>
                </h1>
                <p className="mt-6 text-base leading-relaxed text-[#fff7ee]/85 sm:text-lg max-w-2xl">
                  En <strong>Servicios Integrados</strong> contamos con taller de mecanizado y tornería con servicio permanente para urgencias operativas, fabricación de repuestos mecánicos bajo plano o muestra y restauración de componentes críticos de planta.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="/#contacto" className="safety-button inline-flex items-center gap-2">
                    Solicitar Mecanizado o Presupuesto <ArrowUpRight size={17} />
                  </a>
                  <a
                    href="https://wa.me/5491140705211?text=Hola%20Servicios%20Integrados,%20necesito%20una%20consulta%20por%20tornería%20y%20mecanizado%20de%20piezas."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="outline-button inline-flex items-center gap-2 text-[#fff7ee]"
                  >
                    <MessageSquare size={17} className="text-[#a78bfa]" /> WhatsApp Directo
                  </a>
                </div>
              </div>

              {/* Technical Capability Card */}
              <div className="rounded-2xl border border-white/15 bg-white/5 p-7 sm:p-9 shadow-2xl backdrop-blur-md">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#6d28d9]/30 text-[#a78bfa]">
                    <Cog size={22} />
                  </div>
                  <div>
                    <h2 className="font-display text-lg font-bold text-white">Taller de Tornería y Mecanizado</h2>
                    <p className="text-xs text-[#fff7ee]/70">Capacidad técnica para urgencias de planta</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3.5 text-xs sm:text-sm text-[#fff7ee]/85">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="text-[#7c3aed] shrink-0 mt-0.5" />
                    <span><strong>Servicio de Tornería 24 hs:</strong> Respuesta rápida para reposición urgente de componentes dañados.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="text-[#7c3aed] shrink-0 mt-0.5" />
                    <span><strong>Fabricación de Repuestos:</strong> Ejes, bujes, bridas, rodillos y engranajes según muestra o plano técnico.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="text-[#7c3aed] shrink-0 mt-0.5" />
                    <span><strong>Restauración de Piezas:</strong> Rellenado, torneado, rectificado y recuperación de piezas desgastadas.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="text-[#7c3aed] shrink-0 mt-0.5" />
                    <span><strong>Componentes en Acero Inoxidable:</strong> Mecanizado especializado en materiales sanitarios y aleaciones.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Capacidades de Mecanizado Section */}
        <section className="bg-[#162229] px-5 py-20 md:px-10 md:py-28 border-y border-white/10">
          <div className="mx-auto max-w-[1600px]">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#a78bfa]">
                Servicios del Taller
              </span>
              <h2 className="headline mt-3 text-3xl font-extrabold sm:text-4xl text-white">
                Capacidades de Tornería y Mecanizado
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#fff7ee]/75">
                Brindamos soluciones de mecanizado que resuelven tanto la reposición programada de repuestos como emergencias críticas en líneas de producción continua.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Card 1: Urgencias 24 hs */}
              <div className="rounded-xl border border-white/10 bg-[#10181d]/80 p-6 shadow-md transition-all hover:border-[#a78bfa]/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#6d28d9]/20 text-[#a78bfa] mb-5">
                  <Clock size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Tornería de Urgencia 24 hs</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                  Guardia técnica para el mecanizado y torneado urgente de piezas mecánicas cuando una máquina crítica detiene la producción de la planta.
                </p>
              </div>

              {/* Card 2: Fabricación de Repuestos */}
              <div className="rounded-xl border border-white/10 bg-[#10181d]/80 p-6 shadow-md transition-all hover:border-[#a78bfa]/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#6d28d9]/20 text-[#a78bfa] mb-5">
                  <Cog size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Fabricación de Repuestos Mecánicos</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                  Mecanizado de piezas de repuesto difíciles de conseguir en plaza o de provisión discontinuada: bujes, pernos, ejes de transmisión, rodillos y acoples.
                </p>
              </div>

              {/* Card 3: Restauración */}
              <div className="rounded-xl border border-white/10 bg-[#10181d]/80 p-6 shadow-md transition-all hover:border-[#a78bfa]/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#6d28d9]/20 text-[#a78bfa] mb-5">
                  <RotateCcw size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Restauración y Recuperación</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                  Acondicionamiento y rectificado de piezas de alto valor que han sufrido desgaste por fricción o cavitación, devolviéndoles medidas y tolerancias originales.
                </p>
              </div>

              {/* Card 4: Acero Inoxidable */}
              <div className="rounded-xl border border-white/10 bg-[#10181d]/80 p-6 shadow-md transition-all hover:border-[#a78bfa]/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#6d28d9]/20 text-[#a78bfa] mb-5">
                  <Zap size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Mecanizado en Acero Inoxidable</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                  Torneado y fresado de componentes en AISI 304, AISI 316 y aleaciones sanitarias requeridas en la industria alimenticia y farmacéutica.
                </p>
              </div>

              {/* Card 5: Hornos y Obleas */}
              <div className="rounded-xl border border-white/10 bg-[#10181d]/80 p-6 shadow-md transition-all hover:border-[#a78bfa]/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#6d28d9]/20 text-[#a78bfa] mb-5">
                  <Wrench size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Repuestos para Hornos y Líneas Wafer</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                  Fabricación a medida de pasadores, rodillos térmicos, ruedas de arrastre, casquillos y piezas de soporte para hornos de cocción de obleas.
                </p>
              </div>

              {/* Card 6: Control de Calidad */}
              <div className="rounded-xl border border-white/10 bg-[#10181d]/80 p-6 shadow-md transition-all hover:border-[#a78bfa]/40">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#6d28d9]/20 text-[#a78bfa] mb-5">
                  <FileCheck size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Control Dimensional y Ajustes</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                  Verificación minuciosa de tolerancias y rugosidades superficiales para garantizar el calce perfecto del componente durante el montaje en planta.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Articulación con Mantenimiento y Fabricación */}
        <section className="px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-[1600px]">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#a78bfa]">
                  Integración Operativa
                </span>
                <h2 className="headline mt-3 text-3xl font-extrabold sm:text-4xl text-white">
                  Un Taller de Mecanizado al Servicio del Mantenimiento
                </h2>
                <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#fff7ee]/80">
                  La gran ventaja de contar con tornería propia es la velocidad de respuesta: nuestro equipo de mantenimiento no depende de terceros para resolver una adaptación o reparar una pieza en el momento de la parada técnica.
                </p>

                <div className="mt-6 space-y-4 text-xs sm:text-sm text-[#fff7ee]/85">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4 flex items-start gap-3">
                    <ShieldCheck size={20} className="text-[#a78bfa] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-0.5">Soporte Directo al Mantenimiento:</strong>
                      <span>Las cuadrillas de campo coordinan directamente con el taller para fabricar o rectificar piezas sin demoras logísticas.</span>
                    </div>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/5 p-4 flex items-start gap-3">
                    <Layers size={20} className="text-[#a78bfa] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-0.5">Sinergia con Fabricación en Acero Inoxidable:</strong>
                      <span>Mecanizado de bridas, conexiones especiales y soportes que se integran en montajes de cañerías y silos.</span>
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
                  Combine nuestro servicio de tornería con nuestras capacidades integrales de{" "}
                  <Link href="/mantenimiento-industrial" className="text-[#a78bfa] underline hover:text-white font-semibold">
                    Mantenimiento Industrial
                  </Link>
                  ,{" "}
                  <Link href="/fabricacion-acero-inoxidable" className="text-[#a78bfa] underline hover:text-white font-semibold">
                    Fabricación en Acero Inoxidable
                  </Link>{" "}
                  y{" "}
                  <Link href="/mantenimiento-hornos-industriales" className="text-[#a78bfa] underline hover:text-white font-semibold">
                    Mantenimiento de Hornos Industriales
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
                    href="/fabricacion-acero-inoxidable"
                    className="inline-flex items-center justify-between rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white hover:border-[#a78bfa] transition-colors"
                  >
                    <span>Fabricación en Acero Inox</span>
                    <ArrowRight size={14} className="text-[#a78bfa]" />
                  </Link>

                  <Link
                    href="/mantenimiento-hornos-industriales"
                    className="inline-flex items-center justify-between rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white hover:border-[#a78bfa] transition-colors sm:col-span-2"
                  >
                    <span>Mantenimiento de Hornos Industriales de Obleas</span>
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
                Atención para Tornería y Mecanizado
              </span>
              <h2 className="font-display mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                ¿Necesita fabricar o reparar una pieza mecánica?
              </h2>
              <p className="mt-2 text-sm text-[#fff7ee]/90 max-w-xl">
                Envíenos los planos, especificaciones o consulte por retiro de muestra en su planta para cotización inmediata.
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
                href="https://wa.me/5491140705211?text=Hola%20Servicios%20Integrados,%20necesito%20presupuesto%20por%20tornería%20o%20mecanizado."
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
