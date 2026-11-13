import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="grain relative isolate min-h-[820px] overflow-hidden bg-[#10181d] md:min-h-screen">
      <div className="absolute inset-0">
        <img
          src="/images/principal1.webp"
          alt="Planta de producción industrial de alimentos — Servicios Integrados"
          className="h-full w-full object-cover object-center opacity-80"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,24,29,.98)_0%,rgba(16,24,29,.90)_35%,rgba(16,24,29,.45)_70%,rgba(16,24,29,.35)_100%)]" />
        <div
          className="hero-grid absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,247,238,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,247,238,.12) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      <div className="hero-orbit absolute right-[-8vw] top-[22%] z-[1] h-[34vw] w-[34vw] min-h-[260px] min-w-[260px] rounded-full border border-[#fff7ee]/25" />

      <div className="absolute bottom-11 right-5 z-10 hidden items-end gap-4 md:flex md:right-10">
        <span className="rotate-[-90deg] origin-bottom-right translate-y-[-11px] whitespace-nowrap eyebrow text-[#fff7ee]/60">
          Scroll para explorar
        </span>
        <span className="scroll-pulse h-20 w-px bg-[#6d28d9]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[820px] max-w-[1600px] flex-col justify-end px-5 pb-14 pt-32 md:min-h-screen md:px-10 md:pb-20">
        <div className="grid max-w-[1100px] grid-cols-1 gap-7 lg:grid-cols-[112px_1fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="eyebrow flex items-center gap-3 text-[#fff7ee]/70"
          >
            <span className="h-px w-9 bg-[#6d28d9]" />
            01 / 04
          </motion.div>
          <div>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.34, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="orange-dot eyebrow mb-6 text-[#fff7ee]/90"
            >
              Soluciones para la Industria · Más de 30 años de trayectoria
            </motion.p>
            {/* Sin animación de entrada: el H1 es el contenido principal (LCP) y debe verse
                desde el HTML prerenderizado, sin esperar al JavaScript. Incluye la marca. */}
            <h1 className="headline max-w-[980px] text-[clamp(2.1rem,7vw,7.2rem)]">
              <span className="eyebrow mb-4 block text-[#a78bfa]">Servicios Integrados</span>
              Mantenimiento industrial, ingeniería y{" "}
              <span className="text-[#7c3aed]">confiabilidad.</span>
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
              className="mt-8 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between"
            >
              <p className="max-w-[540px] text-[1rem] leading-7 text-[#fff7ee]/80">
                Diseñamos, fabricamos, mantenemos y optimizamos equipos industriales para que su producción nunca se detenga. Especialistas en el sector alimenticio.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a href="#contacto" className="safety-button justify-center sm:w-auto">
                  Solicitar una reunión <ArrowUpRight size={17} />
                </a>
                <a href="#servicios" className="outline-button justify-center text-[#fff7ee] sm:w-auto">
                  Conocer servicios <ArrowDown size={17} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <span className="hero-corner bottom-6 left-5 border-b border-l md:bottom-10 md:left-10" />
      <span className="hero-corner bottom-6 right-5 border-b border-r md:bottom-10 md:right-10" />
    </section>
  );
}
