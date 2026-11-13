import {
  ArrowLeft,
  ArrowUpRight,
  Compass,
  FileQuestion,
  GraduationCap,
  Home,
  Mail,
  MessageSquare,
  Users,
  Wrench,
} from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";

const sectionLinks = [
  {
    title: "Inicio",
    desc: "Portada principal y visión",
    href: "/#inicio",
    icon: <Home size={18} className="text-[#a78bfa]" />,
  },
  {
    title: "¿Quiénes Somos?",
    desc: "Trayectoria y presencia en planta",
    href: "/#nosotros",
    icon: <Users size={18} className="text-[#a78bfa]" />,
  },
  {
    title: "Servicios Industriales",
    desc: "Mantenimiento, tornería e ingeniería",
    href: "/#servicios",
    icon: <Wrench size={18} className="text-[#a78bfa]" />,
  },
  {
    title: "Método Líder FARO®",
    desc: "Filosofía y formación operativa",
    href: "/#metodo-faro",
    icon: <Compass size={18} className="text-[#a78bfa]" />,
  },
  {
    title: "Metodología",
    desc: "Herramientas técnicas y confiabilidad",
    href: "/#metodologia",
    icon: <GraduationCap size={18} className="text-[#a78bfa]" />,
  },
  {
    title: "Contacto Técnico",
    desc: "Solicite una visita o presupuesto",
    href: "/#contacto",
    icon: <Mail size={18} className="text-[#a78bfa]" />,
  },
];

export default function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const prevTitle = document.title;
    document.title = "404 - Página no encontrada | Servicios Integrados";

    let robotsMeta = document.querySelector('meta[name="robots"]');
    const prevRobots = robotsMeta ? robotsMeta.getAttribute("content") : "";
    if (robotsMeta) {
      robotsMeta.setAttribute("content", "noindex, nofollow");
    }

    return () => {
      document.title = prevTitle;
      if (robotsMeta && prevRobots) {
        robotsMeta.setAttribute("content", prevRobots);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#10181d] text-[#fff7ee] selection:bg-[#6d28d9] selection:text-white flex flex-col justify-between">
      {/* Top Brand Bar */}
      <header className="border-b border-white/10 bg-[#10181d]/80 backdrop-blur-md">
        <div className="mx-auto flex h-[76px] max-w-[1600px] items-center justify-between px-5 md:h-[88px] md:px-10">
          <a
            href="/#inicio"
            aria-label="Servicios Integrados — Inicio"
            className="group flex items-center gap-3"
          >
            <div className="relative h-11 w-11 overflow-hidden rounded-full border border-white/20 bg-white/10 p-1 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
              <img
                src="/img/logoapp2.webp"
                alt="Servicios Integrados — Mantenimiento, Ingeniería y Confiabilidad Industrial"
                loading="eager"
                decoding="async"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="text-[#fff7ee]">
              <div className="font-display text-[1.25rem] font-bold leading-none tracking-[-0.05em] uppercase">
                Servicios <span className="text-[#a78bfa]">Integrados</span>
              </div>
              <div className="mt-1 hidden text-[0.6875rem] font-bold uppercase tracking-[0.14em] opacity-80 sm:block">
                Mantenimiento · Ingeniería · Confiabilidad
              </div>
            </div>
          </a>

          <a
            href="/#contacto"
            className="hidden items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2 font-display text-xs font-bold uppercase tracking-[.09em] text-[#fff7ee] transition-all hover:bg-white/10 sm:inline-flex"
          >
            Contacto Directo <ArrowUpRight size={15} />
          </a>
        </div>
      </header>

      {/* Main 404 Hero Container */}
      <main className="relative mx-auto my-auto max-w-5xl px-5 py-12 md:py-20">
        {/* Ambient background glow */}
        <div className="pointer-events-none absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-[#6d28d9]/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-1/3 h-80 w-80 rounded-full bg-[#7c3aed]/15 blur-3xl" />

        <div className="relative z-10 text-center">
          {/* Badge */}
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#a78bfa]/30 bg-[#6d28d9]/20 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#a78bfa]">
            <FileQuestion size={14} /> Error 404 · Página No Encontrada
          </div>

          {/* Big Error Number */}
          <h1 className="font-display mt-6 text-[clamp(4.5rem,14vw,9.5rem)] font-extrabold leading-none tracking-tight text-white/90">
            4<span className="text-[#a78bfa]">0</span>4
          </h1>

          {/* Title & Description */}
          <h2 className="font-display mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            La página que busca no está disponible
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#fff7ee]/75 sm:text-base">
            La dirección web solicitada no existe, ha sido modificada o no se encuentra disponible. Puede regresar al inicio o acceder directamente a las secciones principales de nuestra planta.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="safety-button inline-flex items-center gap-2 rounded-lg shadow-lg hover:shadow-[#6d28d9]/40 cursor-pointer"
            >
              <Home size={17} /> Volver al Inicio
            </Link>

            <a
              href="https://wa.me/5491140705211?text=Hola%20Servicios%20Integrados,%20estoy%20navegando%20el%20sitio%20web%20y%20quisiera%20hacer%20una%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="outline-button inline-flex items-center gap-2 rounded-lg text-[#fff7ee] hover:border-[#a78bfa] hover:text-white"
            >
              <MessageSquare size={17} className="text-[#a78bfa]" /> WhatsApp Directo
            </a>
          </div>

          {/* Quick Navigation Section Grid */}
          <div className="mt-14 border-t border-white/10 pt-10 text-left">
            <p className="font-display text-xs font-bold uppercase tracking-widest text-[#a78bfa]">
              Secciones Principales de Servicios Integrados
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {sectionLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group flex items-start gap-3.5 rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-200 hover:border-[#a78bfa]/50 hover:bg-white/10 hover:shadow-md"
                >
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 transition-transform duration-200 group-hover:scale-105 group-hover:bg-[#6d28d9]/30">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-sm font-bold text-white group-hover:text-[#a78bfa] transition-colors truncate">
                        {item.title}
                      </h3>
                      <ArrowUpRight
                        size={14}
                        className="text-white/40 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                    <p className="mt-0.5 text-xs text-[#fff7ee]/60 truncate">
                      {item.desc}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer Bar */}
      <footer className="border-t border-white/10 bg-[#10181d] px-5 py-6 text-xs text-[#fff7ee]/50">
        <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left md:px-10">
          <p>© {new Date().getFullYear()} <strong>Servicios Integrados</strong> — Mantenimiento, Ingeniería y Confiabilidad Industrial.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="tel:+5491150705211" className="hover:text-white transition-colors">
              Tel: +54 9 11 5070-5211
            </a>
            <span>•</span>
            <a href="https://wa.me/5491140705211" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              WhatsApp: 11 4070-5211
            </a>
            <span>•</span>
            <a href="mailto:antonioa@serviciosintegradosweb.com" className="hover:text-white transition-colors">
              antonioa@serviciosintegradosweb.com
            </a>
            <span>•</span>
            <a href="/privacidad/" className="text-[#a78bfa] underline hover:text-white transition-colors">
              Política de Privacidad
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
