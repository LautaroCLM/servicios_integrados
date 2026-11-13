import { motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  ["Nosotros", "/#nosotros"],
  ["Servicio", "/#servicios"],
  ["Especialista", "/#especialidad"],
  ["Entrenamiento", "/#metodo-faro"],
  ["Metodología", "/#metodologia"],
  ["Cliente", "/#clientes"],
  ["Contacto", "/#contacto"],
] as const;

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="/#inicio" aria-label="Servicios Integrados — Inicio" className="group flex items-center gap-3">
      <div className="relative h-11 w-11 overflow-hidden rounded-full border border-white/20 bg-white/10 p-1 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
        <img
          src="/img/logoapp2.png"
          alt="Servicios Integrados — Mantenimiento, Ingeniería y Confiabilidad Industrial"
          loading="eager"
          decoding="async"
          className="h-full w-full object-contain"
        />
      </div>
      <div className={inverse ? "text-[#fff7ee]" : "text-[#10181d]"}>
        <div className="font-display text-[1.25rem] font-bold leading-none tracking-[-0.05em] uppercase">
          Servicios <span className="text-[#6d28d9]">Integrados</span>
        </div>
        <div className="mt-1 text-[0.48rem] font-bold uppercase tracking-[0.18em] opacity-80">
          Mantenimiento · Ingeniería · Confiabilidad
        </div>
      </div>
    </a>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 36);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-[#10181d]/10 bg-[#f4f1e8]/95 text-[#10181d] shadow-[0_10px_32px_rgba(16,24,29,.08)] backdrop-blur-xl"
            : "text-[#fff7ee]"
        }`}
      >
        <div className="mx-auto flex h-[76px] max-w-[1600px] items-center justify-between px-5 md:h-[88px] md:px-10">
          <Brand inverse={!scrolled} />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
            {navItems.map(([name, href]) => (
              <a
                key={href}
                href={href}
                className="nav-link font-display text-xs font-bold uppercase tracking-[.09em]"
              >
                {name}
              </a>
            ))}
          </nav>
          <a
            href="/#contacto"
            className={`hidden items-center gap-2 font-display text-xs font-bold uppercase tracking-[.09em] lg:flex ${
              scrolled ? "text-[#6d28d9]" : "text-[#fff7ee]"
            }`}
          >
            Hablemos <ArrowUpRight size={16} strokeWidth={2.4} />
          </a>
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú de navegación"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            className="grid h-11 w-11 place-items-center border border-current rounded-md lg:hidden"
            type="button"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <motion.div
        id="mobile-nav-drawer"
        className={`fixed inset-0 z-[60] flex flex-col bg-[#6d28d9] px-5 py-7 text-[#fff7ee] lg:hidden ${
          !menuOpen ? "pointer-events-none" : ""
        }`}
        initial={false}
        animate={{ x: menuOpen ? 0 : "100%" }}
        transition={{ duration: 0.42, ease: [0.77, 0, 0.175, 1] }}
        aria-hidden={!menuOpen}
      >
        <div className="flex items-center justify-between">
          <Brand inverse />
          <button
            onClick={closeMenu}
            aria-label="Cerrar menú de navegación"
            className="grid h-11 w-11 place-items-center border border-[#fff7ee]/50 rounded-md"
            type="button"
          >
            <X size={22} />
          </button>
        </div>
        <nav className="my-auto flex flex-col gap-2" aria-label="Menú móvil">
          {navItems.map(([name, href], index) => (
            <a
              onClick={closeMenu}
              key={href}
              href={href}
              className="group flex items-center justify-between border-b border-[#fff7ee]/30 py-4 font-display text-3xl font-semibold tracking-[-.07em]"
            >
              <span>
                <span className="mr-3 align-top font-display text-[.65rem] font-bold tracking-normal opacity-70">
                  0{index + 1}
                </span>
                {name}
              </span>
              <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          ))}
        </nav>
        <p className="eyebrow text-[#fff7ee]/80">
          Ingeniería · Mantenimiento · Confiabilidad Industrial
        </p>
      </motion.div>
    </>
  );
}
