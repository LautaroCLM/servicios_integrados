import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Calendar,
  Clock,
  Cpu,
  Flame,
  Layers,
  Phone,
  RotateCcw,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Wrench,
  Zap,
} from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";

interface ArticleSummary {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  description: string;
  icon: typeof Wrench;
  targetServiceUrl: string;
  targetServiceName: string;
}

const ARTICLES_LIST: ArticleSummary[] = [
  {
    slug: "/blog/mantenimiento-preventivo-industrial",
    title: "Mantenimiento Preventivo Industrial: Qué es, Ventajas y Cuándo Aplicarlo",
    category: "Mantenimiento",
    readTime: "5 min",
    description: "Guía técnica sobre la planificación de rutinas preventivas en plantas continuas para evitar fallas imprevistas y extender la vida útil de los activos.",
    icon: Wrench,
    targetServiceUrl: "/mantenimiento-industrial",
    targetServiceName: "Mantenimiento Industrial",
  },
  {
    slug: "/blog/mantenimiento-predictivo-industrial",
    title: "Mantenimiento Predictivo Industrial: Técnicas y Monitoreo de Condición",
    category: "Ingeniería",
    readTime: "6 min",
    description: "Cómo implementar monitoreo de condición, análisis de vibraciones y termografía para anticipar desvíos antes de que ocurran paradas no programadas.",
    icon: Activity,
    targetServiceUrl: "/ingenieria-de-mantenimiento",
    targetServiceName: "Ingeniería de Mantenimiento",
  },
  {
    slug: "/blog/mantenimiento-correctivo-vs-preventivo",
    title: "Mantenimiento Correctivo vs. Preventivo: Diferencias y Cuándo Aplicar Cada Uno",
    category: "Estrategia",
    readTime: "5 min",
    description: "Análisis comparativo entre el mantenimiento reactivo y preventivo: impacto económico, disponibilidad operativa y equilibrio estratégico en planta.",
    icon: Layers,
    targetServiceUrl: "/mantenimiento-industrial",
    targetServiceName: "Mantenimiento Industrial",
  },
  {
    slug: "/blog/paradas-de-planta-industriales",
    title: "Paradas de Planta Industriales: Planificación, Ejecución y Control",
    category: "Operaciones",
    readTime: "7 min",
    description: "Metodología para gestionar paradas técnicas mayores: coordinación de cuadrillas, tareas en ruta crítica, seguridad y control de puesta en marcha.",
    icon: Clock,
    targetServiceUrl: "/mantenimiento-industrial",
    targetServiceName: "Mantenimiento Industrial",
  },
  {
    slug: "/blog/overhaul-industrial",
    title: "Overhaul Industrial: Reacondicionamiento Integral de Maquinaria",
    category: "Mantenimiento Mayor",
    readTime: "6 min",
    description: "Qué implica un overhaul técnico mayor en equipos de proceso continuo, cuándo justificarlo y cómo recupera las tolerancias originales de fábrica.",
    icon: RotateCcw,
    targetServiceUrl: "/mantenimiento-industrial",
    targetServiceName: "Mantenimiento Industrial",
  },
  {
    slug: "/blog/analisis-causa-raiz-mantenimiento",
    title: "Análisis de Causa Raíz (RCA) Aplicado al Mantenimiento Industrial",
    category: "Ingeniería",
    readTime: "6 min",
    description: "Aplicación práctica del método de análisis de causa raíz para investigar averías crónicas y diseñar soluciones mecánicas definitivas.",
    icon: Cpu,
    targetServiceUrl: "/ingenieria-de-mantenimiento",
    targetServiceName: "Ingeniería de Mantenimiento",
  },
  {
    slug: "/blog/confiabilidad-industrial-mantenimiento-autonomo",
    title: "Confiabilidad Industrial y Mantenimiento Autónomo: Claves para Erradicar Pérdidas",
    category: "Confiabilidad & FARO",
    readTime: "6 min",
    description: "Cómo la integración del mantenimiento autónomo (estándares LIL) y la capacitación operativa transforman la cultura técnica del piso de planta.",
    icon: Target,
    targetServiceUrl: "/confiabilidad-industrial",
    targetServiceName: "Confiabilidad Industrial",
  },
];

export default function BlogIndex() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const prevTitle = document.title;
    document.title = "Artículos Técnicos e Ingeniería de Mantenimiento | Servicios Integrados";

    let descMeta = document.querySelector('meta[name="description"]');
    const prevDesc = descMeta ? descMeta.getAttribute("content") : "";
    if (descMeta) {
      descMeta.setAttribute(
        "content",
        "Publicaciones técnicas y guías prácticas sobre mantenimiento industrial, ingeniería de confiabilidad, overhaul, paradas de planta y mecanizado de precisión."
      );
    }

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonicalLink ? canonicalLink.getAttribute("href") : "";
    if (canonicalLink) {
      canonicalLink.setAttribute("href", "https://serviciosintegradosweb.com/blog");
    }

    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    const prevOgTitle = ogTitleMeta ? ogTitleMeta.getAttribute("content") : "";
    if (ogTitleMeta) {
      ogTitleMeta.setAttribute("content", "Artículos Técnicos e Ingeniería de Mantenimiento | Servicios Integrados");
    }

    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    const prevOgDesc = ogDescMeta ? ogDescMeta.getAttribute("content") : "";
    if (ogDescMeta) {
      ogDescMeta.setAttribute(
        "content",
        "Publicaciones técnicas y guías prácticas sobre mantenimiento industrial, ingeniería de confiabilidad, overhaul, paradas de planta y mecanizado de precisión."
      );
    }

    let ogUrlMeta = document.querySelector('meta[property="og:url"]');
    const prevOgUrl = ogUrlMeta ? ogUrlMeta.getAttribute("content") : "";
    if (ogUrlMeta) {
      ogUrlMeta.setAttribute("content", "https://serviciosintegradosweb.com/blog");
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
              <span className="text-white/80">Artículos y Guías Técnicas</span>
            </div>

            <div className="max-w-3xl">
              <span className="orange-dot eyebrow text-[#fff7ee]/80">
                Centro de Conocimiento Industrial
              </span>
              <h1 className="headline mt-4 text-[clamp(2.1rem,5.5vw,5.2rem)] leading-tight text-white">
                Artículos Técnicos de Mantenimiento,{" "}
                <span className="text-[#7c3aed]">Ingeniería y Confiabilidad.</span>
              </h1>
              <p className="mt-6 text-base leading-relaxed text-[#fff7ee]/85 sm:text-lg">
                Recursos, guías prácticas y fundamentos de ingeniería aplicados a plantas de manufactura continua, sistemas mecánicos y gestión de activos industriales.
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid Section */}
        <section className="bg-[#162229] px-5 py-20 md:px-10 md:py-28 border-y border-white/10">
          <div className="mx-auto max-w-[1600px]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#a78bfa]">
                  Publicaciones Especializadas
                </span>
                <h2 className="headline mt-2 text-2xl sm:text-3xl font-extrabold text-white">
                  Guías de Gestión y Mantenimiento de Planta
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#fff7ee]/70 max-w-md">
                Desarrolladas con base en más de 30 años de intervención directa en líneas productivas continuas.
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {ARTICLES_LIST.map((article) => {
                const IconComponent = article.icon;
                return (
                  <article
                    key={article.slug}
                    className="group rounded-2xl border border-white/10 bg-[#10181d]/90 p-7 shadow-lg transition-all duration-300 hover:border-[#a78bfa]/50 hover:shadow-2xl flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-5">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#6d28d9]/25 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#a78bfa]">
                          <IconComponent size={14} />
                          {article.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-[#fff7ee]/60">
                          <BookOpen size={13} />
                          {article.readTime}
                        </span>
                      </div>

                      <h3 className="font-display text-xl font-bold leading-snug text-white transition-colors group-hover:text-[#a78bfa]">
                        <Link href={article.slug} className="hover:underline">
                          {article.title}
                        </Link>
                      </h3>

                      <p className="mt-3 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed">
                        {article.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                      <Link
                        href={article.slug}
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#a78bfa] group-hover:text-white transition-colors"
                      >
                        <span>Leer artículo</span>
                        <ArrowRight size={14} />
                      </Link>

                      <Link
                        href={article.targetServiceUrl}
                        className="text-[11px] text-[#fff7ee]/60 hover:text-[#a78bfa] underline transition-colors"
                      >
                        {article.targetServiceName}
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Contact Section */}
        <section className="bg-[#6d28d9] px-5 py-16 md:px-10 md:py-20 text-white">
          <div className="mx-auto max-w-[1400px] flex flex-col items-center justify-between gap-8 md:flex-row text-center md:text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#fff7ee]/80">
                Soporte Técnico en Planta
              </span>
              <h2 className="font-display mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                ¿Requiere asesoramiento para su plan de mantenimiento?
              </h2>
              <p className="mt-2 text-sm text-[#fff7ee]/90 max-w-xl">
                Contáctenos para evaluar juntos el estado de sus equipos y diseñar una estrategia a la medida de sus operaciones.
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
                href="https://wa.me/5491140705211?text=Hola%20Servicios%20Integrados,%20quisiera%20hacer%20una%20consulta%20técnica."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/40 bg-white/10 px-6 py-4 font-display text-sm font-bold uppercase tracking-wider text-white hover:bg-white hover:text-[#10181d] transition-all"
              >
                <Phone size={16} /> WhatsApp Directo
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
