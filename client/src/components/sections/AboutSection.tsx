import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}

const ABOUT_IMAGES = [
  {
    src: "/images/equipo-tecnico-intervencion-planta.webp",
    alt: "Equipo de técnicos de Servicios Integrados realizando mantenimiento preventivo en planta industrial",
  },
  {
    src: "/img/nosotros2.webp",
    alt: "Personal especializado de Servicios Integrados supervisando líneas de producción alimenticia",
  },
  {
    src: "/img/nosotros3.webp",
    alt: "Especialistas en ingeniería mecánica y control de activos industriales en planta",
  },
  {
    src: "/img/nosotros4.webp",
    alt: "Técnicos de campo de Servicios Integrados en tareas de diagnóstico operativo",
  },
  {
    src: "/img/nosotros5.webp",
    alt: "Equipo técnico de Servicios Integrados en planta de manufactura de alimentos",
  },
];

export function AboutSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % ABOUT_IMAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const SWIPE_THRESHOLD = 50;
    if (Math.abs(touchDeltaX.current) > SWIPE_THRESHOLD) {
      if (touchDeltaX.current < 0) {
        // Swipe left → next
        setCurrentImageIndex((prev) => (prev + 1) % ABOUT_IMAGES.length);
      } else {
        // Swipe right → prev
        setCurrentImageIndex((prev) => (prev - 1 + ABOUT_IMAGES.length) % ABOUT_IMAGES.length);
      }
    }
    touchDeltaX.current = 0;
  }, []);

  return (
    <section id="nosotros" className="relative bg-[#10181d] px-5 py-24 text-[#fff7ee] md:px-10 md:py-36">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">
          <Reveal>
            <p className="orange-dot eyebrow text-[#fff7ee]/80">¿Quiénes Somos?</p>
            <h2 className="headline mt-6 text-[clamp(2.1rem,5.5vw,5.5rem)]">
              Mantenimiento industrial en ingeniería, <br />
              <span className="text-[#7c3aed]">fabricación y asesoramiento técnico.</span>
            </h2>
            <p className="mt-8 text-[1.05rem] leading-8 text-[#fff7ee]/75">
              En <strong>Servicios Integrados</strong> acompañamos a las empresas de la industria alimenticia en todo el ciclo de vida de sus activos. Nuestra misión es aumentar la disponibilidad, reducir pérdidas imprevistas y mejorar la eficiencia mediante soluciones técnicas e ingeniería aplicada.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-4 border-l-2 border-[#6d28d9] pl-4">
                <div>
                  <h3 className="font-display text-xl font-bold">Experiencia en Planta</h3>
                  <p className="mt-1 text-sm text-[#fff7ee]/65">
                    Más de 30 años diagnosticando, reparando y optimizando líneas de producción.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 border-l-2 border-[#6d28d9] pl-4">
                <div>
                  <h3 className="font-display text-xl font-bold">Un Solo Proveedor</h3>
                  <p className="mt-1 text-sm text-[#fff7ee]/65">
                    Integramos ingeniería, fabricación, mantenimiento y capacitación en un solo socio.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#fff7ee]/80">
                <CheckCircle2 size={16} className="text-[#7c3aed]" /> Industria Alimentaria
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#fff7ee]/80">
                <Zap size={16} className="text-[#7c3aed]" /> Tornería 24 hs
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#fff7ee]/80">
                <Zap size={16} className="text-[#7c3aed]" /> Ingeniería/Fabricación de equipos
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#fff7ee]/80">
                <ShieldCheck size={16} className="text-[#7c3aed]" /> Entrenamiento
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <div
              className="relative isolate h-[480px] w-full overflow-hidden rounded-lg border border-white/10 shadow-2xl md:h-[560px]"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              role="region"
              aria-label="Galería de fotos del equipo de Servicios Integrados"
              aria-roledescription="carrusel"
            >
              {ABOUT_IMAGES.map((img, index) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                    index === currentImageIndex ? "opacity-100 z-0" : "opacity-0 pointer-events-none"
                  }`}
                  aria-hidden={index !== currentImageIndex}
                />
              ))}

              {/* Indicator dots — larger hit area for touch */}
              <div className="absolute top-4 right-4 z-20 flex gap-1 rounded-full border border-white/10 bg-[#10181d]/60 px-2 py-1 backdrop-blur-md" role="tablist" aria-label="Indicadores del carrusel">
                {ABOUT_IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    role="tab"
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`flex items-center justify-center min-h-[44px] min-w-[28px] px-1`}
                    aria-selected={idx === currentImageIndex}
                    aria-label={`Ver foto ${idx + 1} de ${ABOUT_IMAGES.length}`}
                  >
                    <span className={`block h-2 rounded-full transition-all duration-300 ${
                      idx === currentImageIndex
                        ? "w-6 bg-[#7c3aed]"
                        : "w-2 bg-white/40 hover:bg-white/70"
                    }`} />
                  </button>
                ))}
              </div>

              {/* Static gradient overlay */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#10181d] via-transparent to-transparent opacity-80 pointer-events-none" />

              {/* Static text overlay box */}
              <div className="absolute bottom-6 left-6 right-6 z-20 rounded-lg border border-white/15 bg-[#10181d]/85 p-6 backdrop-blur-md">
                <div className="font-display text-3xl font-bold text-[#7c3aed]">+30 Años</div>
                <div className="mt-1 text-sm font-semibold uppercase tracking-wider text-[#fff7ee]">
                  Compromiso y presencia en campo
                </div>
                <p className="mt-2 text-xs text-[#fff7ee]/70">
                  Equipo especializado con gorras e indumentaria oficial de Servicios Integrados durante intervención técnica en planta.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
