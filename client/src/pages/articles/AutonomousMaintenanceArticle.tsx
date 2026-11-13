import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Compass,
  Droplets,
  Eye,
  GraduationCap,
  Layers,
  Phone,
  ShieldCheck,
  Target,
  UserCheck,
  Wrench,
  Zap,
} from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";

export default function AutonomousMaintenanceArticle() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const prevTitle = document.title;
    document.title = "Confiabilidad Industrial y Mantenimiento Autónomo | Servicios Integrados";

    let descMeta = document.querySelector('meta[name="description"]');
    const prevDesc = descMeta ? descMeta.getAttribute("content") : "";
    if (descMeta) {
      descMeta.setAttribute(
        "content",
        "Cómo integrar la confiabilidad industrial con el mantenimiento autónomo (LIL) y el Método FARO para involucrar al operador y maximizar la productividad."
      );
    }

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonicalLink ? canonicalLink.getAttribute("href") : "";
    if (canonicalLink) {
      canonicalLink.setAttribute("href", "https://serviciosintegradosweb.com/blog/confiabilidad-industrial-mantenimiento-autonomo/");
    }

    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    const prevOgTitle = ogTitleMeta ? ogTitleMeta.getAttribute("content") : "";
    if (ogTitleMeta) {
      ogTitleMeta.setAttribute("content", "Confiabilidad Industrial y Mantenimiento Autónomo | Servicios Integrados");
    }

    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    const prevOgDesc = ogDescMeta ? ogDescMeta.getAttribute("content") : "";
    if (ogDescMeta) {
      ogDescMeta.setAttribute(
        "content",
        "Cómo integrar la confiabilidad industrial con el mantenimiento autónomo (LIL) y el Método FARO para involucrar al operador y maximizar la productividad."
      );
    }

    let ogUrlMeta = document.querySelector('meta[property="og:url"]');
    const prevOgUrl = ogUrlMeta ? ogUrlMeta.getAttribute("content") : "";
    if (ogUrlMeta) {
      ogUrlMeta.setAttribute("content", "https://serviciosintegradosweb.com/blog/confiabilidad-industrial-mantenimiento-autonomo/");
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
              <span className="text-white/80">Confiabilidad y Mantenimiento Autónomo</span>
            </div>

            {/* Header / Meta */}
            <div className="border-b border-white/10 pb-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#6d28d9]/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#a78bfa]">
                <Target size={13} />
                Cultura de Confiabilidad
              </div>

              <h1 className="headline mt-4 text-[clamp(2rem,4.5vw,3.8rem)] leading-tight text-white">
                Confiabilidad Industrial y Mantenimiento Autónomo:{" "}
                <span className="text-[#7c3aed]">Claves para Erradicar Pérdidas.</span>
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
                La <strong>confiabilidad industrial</strong> no se logra únicamente con herramientas tecnológicas de última generación: se construye todos los días en la interacción física entre el operador de línea y su máquina. En este contexto, el <strong>mantenimiento autónomo</strong> es el pilar que transforma la cultura de planta desde la pasividad hacia el cuidado proactivo del activo.
              </p>

              <div>
                <h2 className="font-display text-2xl font-bold text-white mb-3">
                  Los Estándares LIL: Limpieza, Inspección y Lubricación
                </h2>
                <p>
                  El corazón del mantenimiento autónomo se resume en el concepto LIL, donde la limpieza no es una tarea estética, sino un acto fundamental de inspección técnica:
                </p>

                <div className="grid gap-4 sm:grid-cols-3 mt-4">
                  <div className="rounded-xl border border-white/10 bg-[#162229] p-5">
                    <div className="flex items-center gap-2 text-[#a78bfa] mb-2 font-display font-bold">
                      <Eye size={18} />
                      <h4>Limpieza = Inspección</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-[#fff7ee]/75">
                      Al limpiar la máquina, el operario descubre tornillos flojos, pequeñas fisuras, fugas de aceite incipientes o desalineaciones.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#162229] p-5">
                    <div className="flex items-center gap-2 text-[#a78bfa] mb-2 font-display font-bold">
                      <Droplets size={18} />
                      <h4>Lubricación Correcta</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-[#fff7ee]/75">
                      Aplicación de la cantidad exacta de lubricante en los puntos señalizados, evitando tanto la falta como el exceso perjudicial.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#162229] p-5">
                    <div className="flex items-center gap-2 text-[#a78bfa] mb-2 font-display font-bold">
                      <Wrench size={18} />
                      <h4>Ajuste Sistemático</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-[#fff7ee]/75">
                      Apriete de pernos y fijaciones que sufren vibraciones continuas para evitar holguras que aceleran el deterioro mecánico.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-white mb-3">
                  La Filosofía del Método Líder FARO® en Planta
                </h2>
                <p>
                  Para que el mantenimiento autónomo funcione de manera sostenible, el entrenamiento debe realizarse directamente sobre la máquina, no en un aula teórica. El <strong>Método Líder FARO®</strong> estructura este aprendizaje bajo un esquema práctico:
                </p>
                <div className="mt-4 grid gap-3 text-xs sm:text-sm">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4 flex items-center justify-between">
                    <span className="font-display font-bold text-white">70% Aprendizaje en Campo</span>
                    <span className="text-[#a78bfa] font-bold">Entrenamiento Práctico en la Línea</span>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4 flex items-center justify-between">
                    <span className="font-display font-bold text-white">20% Acompañamiento y Coaching</span>
                    <span className="text-[#a78bfa] font-bold">Guía de Supervisores Técnicos</span>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4 flex items-center justify-between">
                    <span className="font-display font-bold text-white">10% Conceptos Teóricos</span>
                    <span className="text-[#a78bfa] font-bold">Fundamento Esencial</span>
                  </div>
                </div>
                <p className="mt-4 text-xs text-[#fff7ee]/70">
                  Fundamentado en 4 pilares: <strong>Fortaleza</strong>, <strong>Acción</strong>, <strong>Responsabilidad</strong> y <strong>Orientación</strong>, bajo la base innegociable de la <strong>Disciplina Operativa</strong>.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-white mb-3">
                  Eliminación de Microparadas y Pérdidas Crónicas
                </h2>
                <p>
                  El resultado inmediato de capacitar al operador en mantenimiento autónomo es la erradicación de las &quot;microparadas&quot; de 2 a 5 minutos, que suelen pasar desapercibidas en los registros pero destruyen hasta un 15% del rendimiento diario de la línea de producción.
                </p>
              </div>

              {/* Contextual Service Callout */}
              <div className="rounded-2xl border border-[#a78bfa]/40 bg-gradient-to-br from-[#6d28d9]/25 via-[#10181d] to-[#162229] p-6 sm:p-8 mt-10">
                <span className="text-xs font-bold uppercase tracking-widest text-[#a78bfa]">
                  Capacitación y Transformación Operativa
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-2">
                  Implemente Confiabilidad y Método FARO en su Planta
                </h3>
                <p className="mt-3 text-sm text-[#fff7ee]/85">
                  Conozca nuestro programa integral de{" "}
                  <Link href="/confiabilidad-industrial/" className="text-[#a78bfa] underline hover:text-white font-semibold">
                    Confiabilidad Industrial
                  </Link>
                  , articulado con servicios de{" "}
                  <Link href="/mantenimiento-industrial/" className="text-[#a78bfa] underline hover:text-white font-semibold">
                    Mantenimiento Industrial
                  </Link>{" "}
                  e{" "}
                  <Link href="/ingenieria-de-mantenimiento/" className="text-[#a78bfa] underline hover:text-white font-semibold">
                    Ingeniería de Mantenimiento
                  </Link>.
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href="/confiabilidad-industrial/"
                    className="safety-button inline-flex items-center gap-2 text-xs"
                  >
                    Ver Confiabilidad y Método FARO <ArrowRight size={14} />
                  </Link>
                  <a
                    href="/#contacto"
                    className="outline-button inline-flex items-center gap-2 text-xs text-white"
                  >
                    Coordinar Diagnóstico Operativo <ArrowUpRight size={14} />
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
