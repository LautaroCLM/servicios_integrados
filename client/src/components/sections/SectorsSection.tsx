import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { Link } from "wouter";

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

const chocolateEquip = [
  "Mezcladores",
  "Pre y refinadores",
  "Concas",
  "Termos y silos",
  "Templadora y bañadoras",
  "Armadora de sándwiches",
];

const waferEquip = [
  "Hornos",
  "Turbos mixer",
  "Mezcladores y untadores",
  "Sistema de limpieza de placas",
  "Enfriadores espirales",
  "Cortadoras y bañadoras",
];

const CHOCOLATE_CAROUSEL_SLIDES = [
  {
    title: "Chocolates y Conitos",
    subtitle: "Concas, bañadoras y líneas de moldeo.",
    image: "/img/chocolate1.webp",
  },
  {
    title: "Líneas de Moldeo y Templadoras",
    subtitle: "Templadoras, bombas y dosificadoras automáticas.",
    image: "/img/chocolate2.webp",
  },
  {
    title: "Bañadoras y Túneles de Frío",
    subtitle: "Sistemas de cobertura y enfriamiento continuo.",
    image: "/img/chocolate3.webp",
  },
  {
    title: "Concas y Tanques de Almacenamiento",
    subtitle: "Refinado, homogeneización y mantenimiento de masa.",
    image: "/img/chocolate4.webp",
  },
  {
    title: "Dosificadoras y Templadoras Automáticas",
    subtitle: "Control de cristalización y atemperado de masa.",
    image: "/img/chocolate5.webp",
  },
  {
    title: "Línea de Moldeo y Envasado",
    subtitle: "Mantenimiento especializado en plantas de chocolate.",
    image: "/img/chocolate6.webp",
  },
  {
    title: "Hornos y Obleas",
    subtitle: "Limpieza de placas y overhaul térmico.",
    image: "/img/oblea1.webp",
  },
];

const WAFER_CAROUSEL_SLIDES = [
  {
    title: "Limpieza de Placas de Horno",
    subtitle: "Desincrustación técnica y acondicionamiento de planchas.",
    image: "/img/oblea2.webp",
  },
  {
    title: "Overhaul Térmico de Planchas",
    subtitle: "Ajuste, rectificado y lubricación a alta temperatura.",
    image: "/img/oblea3.webp",
  },
  {
    title: "Enfriadores Espirales de Obleas",
    subtitle: "Mantenimiento de sistemas de transporte y enfriamiento.",
    image: "/img/oblea4.webp",
  },
  {
    title: "Ajuste y Calibración de Planchas",
    subtitle: "Control de espesor y paralelismo de cocción.",
    image: "/img/oblea5.webp",
  },
  {
    title: "Mecanizado de Repuestos e Insumos",
    subtitle: "Piezas inoxidables y repuestos para hornos wafer.",
    image: "/img/oblea6.webp",
  },
  {
    title: "Línea de Proceso de Obleas",
    subtitle: "Intervención técnica en turbos mixer y untadores.",
    image: "/img/oblea7.webp",
  },
];

function SectorCarouselCard({
  slides,
  delay = 0,
}: {
  slides: Array<{ title: string; subtitle: string; image: string }>;
  delay?: number;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.touches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 40;
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
  };

  return (
    <Reveal delay={delay} className="w-full">
      <div
        className="group relative isolate h-[380px] sm:h-[440px] md:h-[480px] w-full overflow-hidden rounded-2xl border border-[#10181d]/15 bg-[#10181d] text-[#fff7ee] shadow-xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Background Images */}
        {slides.map((slide, index) => (
          <img
            key={slide.image + index}
            src={slide.image}
            alt={`${slide.title} — ${slide.subtitle}`}
            loading="lazy"
            decoding="async"
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-in-out ${
              index === currentIndex
                ? "opacity-90 scale-100 z-0"
                : "opacity-0 scale-105 pointer-events-none"
            }`}
          />
        ))}

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#10181d] via-[#10181d]/50 to-transparent pointer-events-none" />

        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Anterior slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-30 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-[#10181d]/60 text-white backdrop-blur-md transition-all duration-300 hover:bg-[#6d28d9] hover:border-[#6d28d9] hover:scale-110 active:scale-95 cursor-pointer opacity-80 group-hover:opacity-100"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Siguiente slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-30 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-[#10181d]/60 text-white backdrop-blur-md transition-all duration-300 hover:bg-[#6d28d9] hover:border-[#6d28d9] hover:scale-110 active:scale-95 cursor-pointer opacity-80 group-hover:opacity-100"
        >
          <ChevronRight size={20} />
        </button>

        {/* Top-Right Pills / Indicators */}
        <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5 rounded-full border border-white/15 bg-[#10181d]/70 px-3 py-1.5 backdrop-blur-md">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`relative rounded-full px-2 py-0.5 text-[12px] font-bold transition-all duration-300 cursor-pointer before:absolute before:-inset-x-0.5 before:-inset-y-3 before:content-[''] ${
                idx === currentIndex
                  ? "bg-[#6d28d9] text-white shadow-md"
                  : "text-[#fff7ee]/70 hover:text-white hover:bg-white/10"
              }`}
            >
              0{idx + 1}
            </button>
          ))}
        </div>

        {/* Text Overlay Content */}
        <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8 z-20">
          {slides.map((slide, index) => (
            <div
              key={slide.title + index}
              className={`transition-all duration-700 ease-in-out ${
                index === currentIndex
                  ? "opacity-100 translate-y-0 relative z-10"
                  : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
              }`}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[#a78bfa]/40 bg-[#6d28d9]/30 px-2.5 py-0.5 text-[12px] font-bold uppercase tracking-wider text-[#a78bfa] backdrop-blur-md">
                Sector 0{index + 1} / 0{slides.length}
              </div>
              <h4 className="font-display mt-2 text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight drop-shadow-md">
                {slide.title}
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-[#fff7ee]/85 font-medium leading-relaxed drop-shadow">
                {slide.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function SectorsSection() {
  return (
    <section id="especialidad" className="bg-[#e4e0d4] px-5 py-24 text-[#10181d] md:px-10 md:py-36">
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="orange-dot eyebrow text-[#10181d]">Especialización Técnica</p>
            <h2 className="headline mt-4 text-[clamp(2.1rem,6vw,6rem)] text-[#10181d]">
              Especialización en equipos de elaboración de chocolates y obleas.
            </h2>
          </div>
          <div>
            <p className="max-w-[540px] text-[1.05rem] leading-8 text-[#4b5456]">
              Contamos con más de 30 años de experiencia especializada en equipos para la elaboración de chocolate, fabricación de obleas y líneas continuas de la industria alimentaria.
            </p>
          </div>
        </Reveal>

        {/* Specialized machinery grids */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <Reveal className="rounded-xl border border-[#10181d]/15 bg-[#f4f1e8] p-8 shadow-sm">
            <div className="flex items-center justify-between border-b border-[#10181d]/15 pb-4">
              <h3 className="font-display text-2xl font-bold text-[#10181d]">
                Líneas de Elaboración de Chocolate
              </h3>
              <span className="rounded-full bg-[#6d28d9] px-3 py-1 text-xs font-bold text-white">
                Especialistas
              </span>
            </div>
            <p className="mt-4 text-sm text-[#535a59]">
              Mantenimiento, reparación, calibración y puestas a punto:
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {chocolateEquip.map((eq) => (
                <div key={eq} className="flex items-center gap-2 text-xs font-semibold text-[#10181d]">
                  <span className="grid h-4 w-4 place-items-center rounded-full bg-[#6d28d9] text-white">
                    <Check size={10} strokeWidth={3} />
                  </span>
                  {eq}
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-[#10181d]/10">
              <Link
                href="/mantenimiento-industrial/"
                className="inline-flex min-h-11 items-center gap-1.5 font-display text-xs font-bold uppercase tracking-wider text-[#6d28d9] hover:underline transition-colors"
              >
                <span>Ver Mantenimiento Industrial</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="rounded-xl border border-[#10181d]/15 bg-[#f4f1e8] p-8 shadow-sm">
            <div className="flex items-center justify-between border-b border-[#10181d]/15 pb-4">
              <h3 className="font-display text-2xl font-bold text-[#10181d]">
                Fabricación de Obleas
              </h3>
              <span className="rounded-full bg-[#6d28d9] px-3 py-1 text-xs font-bold text-white">
                Especialistas
              </span>
            </div>
            <p className="mt-4 text-sm text-[#535a59]">
              Overhaul, limpieza de placas, reemplazo de rodamientos y calibración:
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {waferEquip.map((eq) => (
                <div key={eq} className="flex items-center gap-2 text-xs font-semibold text-[#10181d]">
                  <span className="grid h-4 w-4 place-items-center rounded-full bg-[#6d28d9] text-white">
                    <Check size={10} strokeWidth={3} />
                  </span>
                  {eq}
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-[#10181d]/10">
              <Link
                href="/mantenimiento-hornos-industriales/"
                className="inline-flex min-h-11 items-center gap-1.5 font-display text-xs font-bold uppercase tracking-wider text-[#6d28d9] hover:underline transition-colors"
              >
                <span>Ver servicio de Hornos y Placas Wafer</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Two side-by-side carousels matching the grid above */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <SectorCarouselCard slides={CHOCOLATE_CAROUSEL_SLIDES} delay={0.15} />
          <SectorCarouselCard slides={WAFER_CAROUSEL_SLIDES} delay={0.25} />
        </div>
      </div>
    </section>
  );
}
