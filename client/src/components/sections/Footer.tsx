import { Brand } from "./Header";

const navItems = [
  ["Nosotros", "/#nosotros"],
  ["Servicio", "/#servicios"],
  ["Especialista", "/#especialidad"],
  ["Entrenamiento", "/#metodo-faro"],
  ["Metodología", "/#metodologia"],
  ["Cliente", "/#clientes"],
  ["Contacto", "/#contacto"],
] as const;

export function Footer() {
  return (
    <footer className="bg-[#10181d] px-5 pb-8 pt-12 text-[#fff7ee] md:px-10 md:pt-16" style={{ paddingBottom: "calc(2rem + env(safe-area-inset-bottom, 0px))" }}>
      <div className="mx-auto flex max-w-[1600px] flex-col gap-12">
        <div className="flex flex-col justify-between gap-9 border-b border-[#fff7ee]/15 pb-12 md:flex-row md:items-end">
          <Brand inverse />
          <nav aria-label="Navegación de pie de página" className="flex flex-wrap gap-x-6 gap-y-3">
            {navItems.map(([name, href]) => (
              <a
                key={href}
                href={href}
                className="nav-link inline-flex min-h-11 items-center font-display text-xs font-bold uppercase tracking-[.09em] text-[#fff7ee]/75"
              >
                {name}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col justify-between items-start md:items-center gap-4 text-[.75rem] font-medium text-[#fff7ee]/60 md:flex-row">
          <p>© {new Date().getFullYear()} <strong>Servicios Integrados</strong> — Mantenimiento, Ingeniería y Confiabilidad Industrial.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
            <a href="tel:+5491150705211" className="inline-flex min-h-11 items-center hover:text-white transition-colors">
              Tel: +54 9 11 5070-5211
            </a>
            <span className="hidden sm:inline text-white/30">•</span>
            <a href="https://wa.me/5491140705211" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center hover:text-white transition-colors">
              WhatsApp: 11 4070-5211
            </a>
            <span className="hidden sm:inline text-white/30">•</span>
            <a href="mailto:antonioa@serviciosintegradosweb.com" className="inline-flex min-h-11 items-center hover:text-white transition-colors">
              antonioa@serviciosintegradosweb.com
            </a>
            <span className="hidden sm:inline text-white/30">•</span>
            <a href="/blog/" className="inline-flex min-h-11 items-center text-[#a78bfa] hover:text-white underline transition-colors">
              Blog Técnico
            </a>
            <span className="hidden sm:inline text-white/30">•</span>
            <a href="/privacidad/" className="inline-flex min-h-11 items-center text-[#a78bfa] hover:text-white underline transition-colors">
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
