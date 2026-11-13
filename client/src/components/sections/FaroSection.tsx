import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Compass, ShieldCheck, Target, UserCheck, Zap } from "lucide-react";
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

function FaroIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Haz de luz */}
      <path d="M22 18L8 13V23L22 21" fill="currentColor" />
      <path d="M42 18L56 13V23L42 21" fill="currentColor" />

      {/* Luz */}
      <rect x="25" y="12" width="14" height="11" rx="2" fill="currentColor" />

      {/* Techo */}
      <path d="M22 12L26 7H38L42 12H22Z" fill="currentColor" />

      {/* Torre */}
      <path d="M25 23L23 54H41L39 23H25Z" fill="currentColor" />

      {/* Ventanas */}
      <rect x="28" y="28" width="8" height="7" rx="1" fill="#fff7ee" />
      <rect x="27" y="40" width="10" height="5" rx="1" fill="#fff7ee" />

      {/* Base */}
      <path d="M19 54H45L48 59H16L19 54Z" fill="currentColor" />
    </svg>
  );
}

export function FaroSection() {
  return (
    <section id="metodo-faro" className="relative overflow-hidden bg-[#1b2a32] px-5 py-24 text-[#fff7ee] md:px-10 md:py-36">
      <div className="absolute -right-28 -top-28 h-[440px] w-[440px] rounded-full border border-[#fff7ee]/10" />
      <div className="absolute -right-4 -top-4 h-[260px] w-[260px] rounded-full border border-[#7c3aed]/70" />

      <div className="relative mx-auto max-w-[1600px]">
        {/* Top Hero: Title + Corporate Pictogram Visual */}
        <Reveal className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#6d28d9]/25 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-[#a78bfa]">
              Programa Exclusivo
            </div>
            <p className="orange-dot eyebrow mt-4 text-[#fff7ee]/80">
              Entrenamiento a supervisores, líderes y operadores de línea en manufactura y mantenimiento
            </p>
            <h2 className="headline mt-6 text-[clamp(2.1rem,6vw,5.5rem)]">
              Método <br />
              <span className="text-[#a78bfa]">
                Líder FARO
                <FaroIcon className="ml-1.5 inline-block h-[0.52em] w-[0.52em] align-super text-[#a78bfa]" />.
              </span>
            </h2>
            <p className="mt-5 max-w-[480px] text-base leading-7 text-[#fff7ee]/80">
              Los resultados no se logran en una sala de reuniones. Se construyen donde ocurre la operación: en la planta.
            </p>

            {/* Formación del Operador Activo */}
            <div className="mt-6 rounded-xl border border-[#a78bfa]/25 bg-[#10181d]/85 p-4 sm:p-5 shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-[#a78bfa] animate-pulse" />
                <span className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                  Formación del Operador Activo
                </span>
              </div>
              <ul className="mt-3 space-y-2 text-xs font-medium text-[#fff7ee]/85">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#a78bfa]" />
                  <span>Entrenamiento en principios de funcionamiento de equipos</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#a78bfa]" />
                  <span>Concepto de Cero Pérdidas y prevención de fallas</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#a78bfa]" />
                  <span>Autonomía técnica y detección temprana de desvíos en línea</span>
                </li>
              </ul>
              <div className="mt-4 pt-3 border-t border-white/10">
                <Link
                  href="/confiabilidad-industrial/"
                  className="inline-flex min-h-11 items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#a78bfa] hover:underline transition-colors"
                >
                  <span>Conocer más sobre Confiabilidad Industrial</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>

          {/* Pictogram Illustration Card */}
          <div className="group relative overflow-hidden rounded-2xl border border-[#a78bfa]/30 bg-[#0d141c] p-3 sm:p-4 shadow-2xl transition-all duration-500 hover:border-[#a78bfa]/60 hover:shadow-[0_0_40px_rgba(109,40,217,0.25)]">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#090e13]">
              <img
                src="/img/lider-faro-pictogram.webp"
                alt="Método Líder FARO — Metodología de formación y liderazgo operativo en planta industrial"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d141c]/80 via-transparent to-transparent opacity-40 pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="rounded-md border border-white/15 bg-[#10181d]/80 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#a78bfa] backdrop-blur-md">
                  Filosofía y Liderazgo de Planta
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-white/50">
                  FARO® 2026
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Origin and 70/20/10 Framework Row */}
        <Reveal delay={0.15} className="mt-20 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-14 border-t border-white/10 pt-16">
          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold uppercase tracking-wider text-[#a78bfa] flex items-center gap-2">
              El Origen del Método Líder FARO
              <FaroIcon className="h-5 w-5 text-[#a78bfa]" />
            </h3>
            <p className="text-[1.05rem] leading-7 text-[#fff7ee]/85">
              Durante muchos años observé que la mayoría de las empresas invierten grandes recursos en tecnología, maquinaria y procesos, pero muy poco en formar verdaderos líderes.
            </p>
            <p className="text-[1.05rem] leading-7 text-[#fff7ee]/85">
              Las organizaciones necesitan personas que conduzcan equipos capaces de pensar, actuar y mejorar continuamente. De esa necesidad nace{" "}
              <strong>
                Líder FARO
                <FaroIcon className="ml-1 inline-block h-[0.55em] w-[0.55em] align-super text-[#a78bfa]" />
              </strong>.
            </p>
            <div className="my-3 border-l-2 border-[#a78bfa] pl-4 text-sm font-semibold text-[#fff7ee]">
              <p className="text-[#a78bfa]">No es un curso. No es una charla motivacional.</p>
              <p className="mt-1 text-[#fff7ee]/90">
                Es una filosofía de liderazgo diseñada para transformar personas y organizaciones.
              </p>
            </div>
          </div>

          {/* 70 / 20 / 10 Framework */}
          <div className="grid gap-5 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-md transition-colors hover:border-[#a78bfa]/40">
              <div className="font-display text-4xl font-bold text-[#a78bfa]">70%</div>
              <div className="mt-2 font-display text-lg font-bold">Ejecución en Campo</div>
              <p className="mt-2 text-xs leading-5 text-[#fff7ee]/70">
                Aprender haciendo: resultados reales en el sector directamente sobre los equipos y procesos.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-md transition-colors hover:border-[#a78bfa]/40">
              <div className="font-display text-4xl font-bold text-[#a78bfa]">20%</div>
              <div className="mt-2 font-display text-lg font-bold">Entrenamiento Práctico</div>
              <p className="mt-2 text-xs leading-5 text-[#fff7ee]/70">
                Desarrollar habilidades y mejores prácticas en equipo con coaching técnico en planta.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-md transition-colors hover:border-[#a78bfa]/40">
              <div className="font-display text-4xl font-bold text-[#a78bfa]">10%</div>
              <div className="mt-2 font-display text-lg font-bold">Entrenamiento en Teoría</div>
              <p className="mt-2 text-xs leading-5 text-[#fff7ee]/70">
                Conocer lo esencial para entender, fundamentar y tomar mejores decisiones operativas.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Los 4 Pilares del Método Líder FARO® en Tarjetas */}
        <div className="mt-20">
          <Reveal>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#a78bfa]">
                Fundamentos Operativos
              </span>
              <h3 className="font-display text-2xl font-bold md:text-3xl">
                Los 4 Pilares de la Filosofía
              </h3>
            </div>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <PillarBoxCard
              name="FORTALEZA"
              keywords="Disciplina · Constancia · Resiliencia"
              text="Fortaleza técnica y mental para afrontar los desafíos diarios en planta y garantizar la continuidad operativa."
              icon={<ShieldCheck className="text-[#a78bfa]" size={24} />}
            />
            <PillarBoxCard
              name="ACCIÓN"
              keywords="Hacer · Decidir · Ejecutar"
              text="Capacidad de respuesta inmediata en campo para resolver problemas y transformar decisiones en resultados."
              icon={<Zap className="text-[#a78bfa]" size={24} />}
            />
            <PillarBoxCard
              name="RESPONSABILIDAD"
              keywords="Compromiso · Disciplina · Dueño del resultado"
              text="Asumir el liderazgo con rigor y disciplina en cada intervención técnica, adueñándose de la confiabilidad global del proceso."
              icon={<UserCheck className="text-[#a78bfa]" size={24} />}
            />
            <PillarBoxCard
              name="ORIENTACIÓN"
              keywords="Dirección · Propósito · Visión"
              text="Alineación estratégica constante hacia las metas de eficiencia y rentabilidad que demanda la industria."
              icon={<Compass className="text-[#a78bfa]" size={24} />}
            />
          </div>

          {/* Base Rectangular: Disciplina */}
          <Reveal delay={0.2} className="mt-5">
            <div className="group relative overflow-hidden rounded-xl border border-[#a78bfa]/30 bg-gradient-to-r from-[#6d28d9]/20 via-[#10181d]/90 to-[#6d28d9]/20 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-[#a78bfa]/60 md:p-8">
              {/* Top accent glow line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#a78bfa] to-transparent opacity-80" />

              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-[#a78bfa]/40 bg-[#6d28d9]/30 text-[#a78bfa] shadow-inner transition-transform duration-300 group-hover:scale-105">
                    <Target size={26} />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h4 className="font-display text-2xl font-extrabold uppercase tracking-wider text-white md:text-3xl">
                        DISCIPLINA
                      </h4>
                      <span className="rounded-full border border-[#a78bfa]/30 bg-[#6d28d9]/30 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#a78bfa]">
                        Base del Líder
                      </span>
                    </div>
                    <p className="mt-1 text-xs font-bold uppercase tracking-widest text-[#a78bfa] md:text-sm">
                      BASE DE TODO LÍDER DE RESULTADOS
                    </p>
                  </div>
                </div>

                <div className="max-w-2xl border-t border-white/10 pt-4 text-xs leading-6 text-[#fff7ee]/80 lg:border-t-0 lg:border-l lg:border-white/10 lg:pt-0 lg:pl-6 md:text-sm md:leading-6">
                  La disciplina es el estándar innegociable que transforma el método en hábito. Es la base estructural sobre la cual se apoyan la <strong>Fortaleza</strong>, la <strong>Acción</strong>, la <strong>Responsabilidad</strong> y la <strong>Orientación</strong>, asegurando el rigor técnico, la constancia operativa y los resultados sostenibles en planta.
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Photos of real training in Carousels */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <FaroPhotoCarouselCard slides={FARO_SLIDES_LEFT} delay={0.1} />
          <FaroPhotoCarouselCard slides={FARO_SLIDES_RIGHT} delay={0.2} />
        </div>
      </div>
    </section>
  );
}

interface FaroSlide {
  tag: string;
  text: string;
  image: string;
}

const FARO_SLIDES_LEFT: FaroSlide[] = [
  {
    tag: "Formación en Planta",
    text: "Sesiones teóricas y resolución de problemas sobre pizarrón en plantas industriales donde ocurren los temas.",
    image: "/images/foto1.webp",
  },
  {
    tag: "Formación en Planta",
    text: "Trabajo de campo y dinámicas de equipo directamente sobre líneas de producción.",
    image: "/img/faro.webp",
  },
  {
    tag: "Formación en Planta",
    text: "Análisis operativo y fortalecimiento del liderazgo técnico en planta.",
    image: "/img/faro2.webp",
  },
  {
    tag: "Formación en Planta",
    text: "Intervención práctica y capacitación continua en procesos industriales.",
    image: "/img/faro3.webp",
  },
];

const FARO_SLIDES_RIGHT: FaroSlide[] = [
  {
    tag: "Desarrollo de supervisores, líderes y operadores de línea en producción y mantenimiento",
    text: "Presentaciones de casos concretos y entrenamiento con nuestro equipo.",
    image: "/images/foto2.webp",
  },
  {
    tag: "Desarrollo de supervisores, líderes y operadores de línea en producción y mantenimiento",
    text: "Capacitación en sala y seguimiento de metas de eficiencia y confiabilidad.",
    image: "/img/nuevafoto2.webp",
  },
  {
    tag: "Desarrollo de supervisores, líderes y operadores de línea en producción y mantenimiento",
    text: "Mentoría estratégica en gestión de equipos y desempeño operativo.",
    image: "/img/faro5.webp",
  },
];

function FaroPhotoCarouselCard({
  slides,
  delay = 0,
}: {
  slides: FaroSlide[];
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
        className="group relative isolate h-[340px] md:h-[380px] w-full overflow-hidden rounded-lg border border-white/10 bg-[#10181d] text-[#fff7ee] shadow-xl"
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
            alt={`${slide.tag} — ${slide.text}`}
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
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#10181d] via-[#10181d]/40 to-transparent pointer-events-none" />

        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Anterior foto"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-30 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-[#10181d]/60 text-white backdrop-blur-md transition-all duration-300 hover:bg-[#7c3aed] hover:border-[#7c3aed] hover:scale-110 active:scale-95 cursor-pointer opacity-80 group-hover:opacity-100"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Siguiente foto"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-30 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-[#10181d]/60 text-white backdrop-blur-md transition-all duration-300 hover:bg-[#7c3aed] hover:border-[#7c3aed] hover:scale-110 active:scale-95 cursor-pointer opacity-80 group-hover:opacity-100"
        >
          <ChevronRight size={20} />
        </button>

        {/* Top-Right Indicator Pills */}
        <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5 rounded-full border border-white/15 bg-[#10181d]/70 px-3 py-1.5 backdrop-blur-md">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`relative rounded-full px-2 py-0.5 text-[12px] font-bold transition-all duration-300 cursor-pointer before:absolute before:-inset-x-0.5 before:-inset-y-3 before:content-[''] ${
                idx === currentIndex
                  ? "bg-[#7c3aed] text-white shadow-md"
                  : "text-[#fff7ee]/70 hover:text-white hover:bg-white/10"
              }`}
            >
              0{idx + 1}
            </button>
          ))}
        </div>

        {/* Bottom Text Overlay */}
        <div className="absolute bottom-4 left-4 right-4 z-20">
          {slides.map((slide, index) => (
            <div
              key={slide.image + index}
              className={`transition-all duration-700 ease-in-out ${
                index === currentIndex
                  ? "opacity-100 translate-y-0 relative z-10"
                  : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
              }`}
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-[#a78bfa]">
                {slide.tag}
              </span>
              <p className="mt-1 text-xs sm:text-sm font-medium text-[#fff7ee] leading-relaxed drop-shadow">
                {slide.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function PillarBoxCard({
  name,
  keywords,
  text,
  icon,
}: {
  name: string;
  keywords: string;
  text: string;
  icon: ReactNode;
}) {
  const firstLetter = name.charAt(0);
  const restOfName = name.slice(1);

  return (
    <Reveal className="group flex flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-[#a78bfa]/50 hover:bg-white/10 hover:shadow-xl">
      <div>
        <div className="flex items-center justify-between">
          <div className="font-display text-lg font-extrabold uppercase tracking-wider">
            <span className="inline-block text-[1.2em] font-black text-white drop-shadow-[0_0_6px_rgba(167,139,250,0.6)] transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]">
              {firstLetter}
            </span>
            <span className="text-[#a78bfa]">{restOfName}</span>
          </div>
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#6d28d9]/20 transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
        </div>
        <div className="mt-3 text-xs font-bold uppercase tracking-wide text-[#fff7ee]">
          {keywords}
        </div>
        <p className="mt-3 text-xs leading-5 text-[#fff7ee]/70">
          {text}
        </p>
      </div>
    </Reveal>
  );
}
