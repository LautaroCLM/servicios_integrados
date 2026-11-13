import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Cog,
  Cpu,
  Flame,
  Maximize2,
  RotateCcw,
  Snowflake,
  Wrench,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
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

interface ServiceItem {
  number: string;
  title: string;
  subtitle: string;
  items: string[];
  icon: ReactNode;
  image: string;
  imageAlt: string;
  link?: string;
  linkText?: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    number: "01",
    title: "Mantenimiento Industrial",
    subtitle: "Maximiza la confiabilidad operativa y extiende la vida útil de los activos.",
    items: [
      "Mantenimiento Preventivo / Predictivo / Correctivo",
      "Overhaul en equipos",
      "Paradas de Planta y puestas en marcha",
      "Alineaciones y calibraciones de precisión",
    ],
    icon: <Wrench size={24} />,
    image: "/img/servicio1.webp",
    imageAlt: "Mantenimiento preventivo, predictivo, correctivo y paradas de planta industrial",
    link: "/mantenimiento-industrial/",
    linkText: "Ver detalles de Mantenimiento Industrial",
  },
  {
    number: "02",
    title: "Ingeniería y Proyectos",
    subtitle: "Diseñamos soluciones técnicas a medida de las necesidades de cada planta.",
    items: [
      "Ingeniería Mecánica y de Procesos",
      "Rediseño y optimización de equipos",
      "Automatización y proyectos especiales",
      "Diseño y desarrollo de proyectos",
    ],
    icon: <Cpu size={24} />,
    image: "/img/nuevafoto1.webp",
    imageAlt: "Ingeniería mecánica y diseño de proyectos industriales para plantas de manufactura",
    link: "/ingenieria-de-mantenimiento/",
    linkText: "Ver detalles de Ingeniería de Mantenimiento",
  },
  {
    number: "03",
    title: "Fabricación en Acero Inoxidable",
    subtitle: "Fabricación de componentes con estándares sanitarios e industriales.",
    items: [
      "Fabricación de termos y silos",
      "Cañerías sanitarias de proceso",
      "Estructuras, tolvas y transportadores",
      "Soldaduras sanitarias certificadas",
    ],
    icon: <Activity size={24} />,
    image: "/img/servicio3.webp",
    imageAlt: "Fabricación de termos, silos, cañerías sanitarias y estructuras en acero inoxidable",
    link: "/fabricacion-acero-inoxidable/",
    linkText: "Ver detalles de Fabricación en Acero Inox",
  },
  {
    number: "04",
    title: "Tornería y Mecanizado 24 hs",
    subtitle: "Servicio permanente de mecanizado para urgencias y fabricación de piezas.",
    items: [
      "Tornería y mecanizado 24/7",
      "Fabricación de repuestos mecánicos",
      "Restauración de piezas",
      "Componentes inoxidables a medida",
    ],
    icon: <Cog size={24} />,
    image: "/images/torneria-mecanizado-taller.webp",
    imageAlt: "Taller de tornería y mecanizado de piezas de repuesto para urgencias industriales 24 hs",
    link: "/torneria-mecanizado/",
    linkText: "Ver detalles de Tornería y Mecanizado",
  },
  {
    number: "05",
    title: "Refrigeración Industrial",
    subtitle: "Mantenimiento e instalaciones especializadas para sistemas de frío.",
    items: [
      "Cámaras frigoríficas industriales",
      "Chillers y torres de enfriamiento",
      "Compresores y bombas de proceso",
      "Modernización y servicio de emergencia",
    ],
    icon: <Snowflake size={24} />,
    image: "/img/servicio5.webp",
    imageAlt: "Mantenimiento e instalación de chillers, torres de enfriamiento y cámaras frigoríficas",
    link: "/refrigeracion-industrial/",
    linkText: "Ver detalles de Refrigeración Industrial",
  },
  {
    number: "06",
    title: "Limpieza y Mantenimiento de Placas de horno de obleas",
    subtitle: "Servicio especializado de mantenimiento e inspección profunda.",
    items: [
      "Limpieza técnica de planchas en horno wafer",
      "Ajuste y calibración en planchas",
      "Overhaul especializado en horno wafer",
      "Servicio técnico y diagnóstico en horno wafer",
    ],
    icon: <Flame size={24} />,
    image: "/images/foto3.webp",
    imageAlt: "Limpieza técnica, ajuste y overhaul de planchas de cocción para hornos de obleas",
    link: "/mantenimiento-hornos-industriales/",
    linkText: "Ver detalles de Hornos de Obleas",
  },
];

interface ServiceCardProps {
  service: ServiceItem;
  onImageClick: () => void;
}

function ServiceCard({ service, onImageClick }: ServiceCardProps) {
  const { number, title, subtitle, items, image, imageAlt } = service;

  return (
    <Reveal className="group border-b border-[#10181d]/15 py-10 transition-colors duration-300 hover:bg-[#10181d]/5">
      <div className="grid gap-8 lg:grid-cols-[50px_1fr_auto] lg:items-center">
        <span className="font-display text-lg font-bold text-[#6d28d9]">{number}</span>

        <div className="space-y-4">
          <div>
            <h3 className="font-display text-2xl font-bold tracking-[-.04em] text-[#10181d] md:text-3xl">
              {title}
            </h3>
            <p className="mt-1 text-sm font-semibold text-[#4b5456]">{subtitle}</p>
          </div>

          <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 text-xs font-medium text-[#535a59]">
            {items.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#6d28d9]" />
                {item}
              </li>
            ))}
          </ul>

          {service.link && (
            <div className="pt-1">
              <Link
                href={service.link}
                className="inline-flex min-h-11 items-center gap-1.5 font-display text-xs font-bold uppercase tracking-wider text-[#6d28d9] hover:underline transition-colors"
              >
                <span>{service.linkText || "Ver servicio"}</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          )}
        </div>

        {/* Clickable Image Box */}
        <button
          type="button"
          onClick={onImageClick}
          aria-label={`Ver imagen de ${title} en tamaño completo y con zoom`}
          className="group/img relative h-52 w-full overflow-hidden rounded-xl border border-[#10181d]/15 shadow-md transition-all duration-300 hover:shadow-xl hover:border-[#6d28d9]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6d28d9] focus-visible:ring-offset-2 cursor-pointer lg:h-56 lg:w-96 text-left"
        >
          <img
            src={image}
            alt={imageAlt || title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover/img:scale-105"
          />
          {/* Rich hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#10181d]/75 via-[#10181d]/15 to-transparent opacity-0 transition-opacity duration-300 group-hover/img:opacity-100 flex items-end justify-between p-3.5 sm:p-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-[#10181d] shadow-md backdrop-blur-md">
              <ZoomIn size={14} className="text-[#6d28d9]" />
              <span>Tocar para ampliar</span>
            </span>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[#6d28d9] text-white shadow-lg transition-transform duration-200 group-hover/img:scale-110">
              <Maximize2 size={14} />
            </span>
          </div>

          {/* Persistent subtle indicator badge in top right */}
          <div className="absolute top-2.5 right-2.5 rounded-full bg-[#10181d]/60 px-2 py-1 text-[12px] font-medium text-white backdrop-blur-md transition-opacity duration-300 group-hover/img:opacity-0">
            <span className="flex items-center gap-1">
              <ZoomIn size={12} />
              <span>Zoom</span>
            </span>
          </div>
        </button>
      </div>
    </Reveal>
  );
}

interface ImageZoomModalProps {
  services: ServiceItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

function ImageZoomModal({
  services,
  currentIndex,
  onClose,
  onNavigate,
}: ImageZoomModalProps) {
  const [scale, setScale] = useState(1);
  const [dragKey, setDragKey] = useState(0);

  const isOpen = currentIndex !== null;
  const currentService = isOpen ? services[currentIndex] : null;

  // Reset zoom & drag when changing image
  const resetZoom = useCallback(() => {
    setScale(1);
    setDragKey((prev) => prev + 1);
  }, []);

  const handleZoomIn = useCallback(() => {
    setScale((prev) => Math.min(Number((prev + 0.5).toFixed(1)), 3.5));
  }, []);

  const handleZoomOut = useCallback(() => {
    setScale((prev) => {
      const next = Math.max(Number((prev - 0.5).toFixed(1)), 1);
      if (next === 1) resetZoom();
      return next;
    });
  }, [resetZoom]);

  const handleToggleZoom = useCallback(() => {
    if (scale > 1) {
      resetZoom();
    } else {
      setScale(2);
    }
  }, [scale, resetZoom]);

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const prevIndex = (currentIndex - 1 + services.length) % services.length;
    resetZoom();
    onNavigate(prevIndex);
  }, [currentIndex, services.length, onNavigate, resetZoom]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const nextIndex = (currentIndex + 1) % services.length;
    resetZoom();
    onNavigate(nextIndex);
  }, [currentIndex, services.length, onNavigate, resetZoom]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "+" || e.key === "=") {
        e.preventDefault();
        handleZoomIn();
      } else if (e.key === "-" || e.key === "_") {
        e.preventDefault();
        handleZoomOut();
      } else if (e.key === "0" || e.key.toLowerCase() === "r") {
        e.preventDefault();
        resetZoom();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext, handleZoomIn, handleZoomOut, resetZoom]);

  // Wheel zoom handler
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      handleZoomIn();
    } else {
      handleZoomOut();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && currentService && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-black/92 backdrop-blur-md select-none"
          role="dialog"
          aria-modal="true"
          aria-label={`Visor de imagen: ${currentService.title}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              onClose();
            }
          }}
        >
          {/* Top Bar */}
          <div className="relative z-20 flex items-center justify-between border-b border-white/10 bg-black/50 px-4 py-3 sm:px-6 sm:py-4 backdrop-blur-lg">
            {/* Service info */}
            <div className="flex items-center gap-3 pr-2">
              <span className="rounded-full bg-[#6d28d9] px-2.5 py-0.5 font-display text-xs font-bold text-white shadow-sm">
                {currentService.number}
              </span>
              <div className="truncate">
                <h4 className="truncate font-display text-sm font-bold text-white sm:text-base">
                  {currentService.title}
                </h4>
                <p className="hidden text-xs text-white/70 sm:block">
                  Servicio {currentIndex + 1} de {services.length}
                </p>
              </div>
            </div>

            {/* Toolbar: Zoom controls + Close 'X' button */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Zoom Out Button */}
              <button
                type="button"
                onClick={handleZoomOut}
                disabled={scale <= 1}
                title="Alejar (-)"
                aria-label="Alejar imagen"
                className="grid h-9 w-9 place-items-center rounded-lg border border-white/15 bg-white/10 text-white transition-all hover:bg-white/20 hover:border-white/30 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                <ZoomOut size={16} />
              </button>

              {/* Zoom percentage indicator badge */}
              <button
                type="button"
                onClick={resetZoom}
                title="Restablecer tamaño (100%)"
                className="hidden rounded-lg border border-white/15 bg-white/10 px-2.5 py-1.5 text-xs font-bold text-white transition-all hover:bg-white/20 hover:border-white/30 active:scale-95 cursor-pointer sm:block"
              >
                {Math.round(scale * 100)}%
              </button>

              {/* Zoom In Button */}
              <button
                type="button"
                onClick={handleZoomIn}
                disabled={scale >= 3.5}
                title="Acercar (+)"
                aria-label="Acercar imagen"
                className="grid h-9 w-9 place-items-center rounded-lg border border-white/15 bg-white/10 text-white transition-all hover:bg-white/20 hover:border-white/30 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                <ZoomIn size={16} />
              </button>

              {/* Reset zoom */}
              {scale > 1 && (
                <button
                  type="button"
                  onClick={resetZoom}
                  title="Restablecer zoom (0)"
                  aria-label="Restablecer zoom"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-white/15 bg-[#6d28d9]/80 text-white transition-all hover:bg-[#6d28d9] active:scale-95 cursor-pointer"
                >
                  <RotateCcw size={15} />
                </button>
              )}

              {/* Vertical Separator */}
              <div className="mx-1 h-5 w-[1px] bg-white/20" />

              {/* Close Button "X" */}
              <button
                type="button"
                onClick={onClose}
                title="Cerrar (Esc)"
                aria-label="Cerrar modal"
                className="group grid h-9 w-9 place-items-center rounded-lg border border-white/20 bg-white/10 text-white transition-all hover:bg-red-500 hover:border-red-500 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <X size={19} className="transition-transform duration-200 group-hover:rotate-90" />
              </button>
            </div>
          </div>

          {/* Center Image Viewport */}
          <div
            className="relative flex flex-1 items-center justify-center overflow-hidden p-3 sm:p-6"
            onWheel={handleWheel}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                onClose();
              }
            }}
          >
            {/* Prev arrow */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label="Servicio anterior"
              className="absolute left-3 sm:left-6 z-30 grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all duration-200 hover:bg-[#6d28d9] hover:border-[#6d28d9] hover:scale-110 active:scale-95 cursor-pointer shadow-xl"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next arrow */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Servicio siguiente"
              className="absolute right-3 sm:right-6 z-30 grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all duration-200 hover:bg-[#6d28d9] hover:border-[#6d28d9] hover:scale-110 active:scale-95 cursor-pointer shadow-xl"
            >
              <ChevronRight size={24} />
            </button>

            {/* Main Interactive Zoomable & Draggable Image */}
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
              <motion.div
                key={`${currentIndex}-${dragKey}`}
                drag={scale > 1}
                dragConstraints={{
                  left: -240 * (scale - 1),
                  right: 240 * (scale - 1),
                  top: -180 * (scale - 1),
                  bottom: 180 * (scale - 1),
                }}
                dragElastic={0.2}
                animate={{ scale }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onDoubleClick={handleToggleZoom}
                className={`relative flex items-center justify-center max-h-[75vh] max-w-[90vw] md:max-w-[80vw] ${
                  scale > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-in"
                }`}
              >
                <img
                  src={currentService.image}
                  alt={currentService.imageAlt || currentService.title}
                  draggable={false}
                  decoding="async"
                  className="max-h-[72vh] max-w-full rounded-lg object-contain shadow-2xl ring-1 ring-white/15"
                />
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar: Caption & Tips */}
          <div className="relative z-20 flex flex-col items-center justify-between gap-1 border-t border-white/10 bg-black/50 px-4 py-2.5 sm:flex-row sm:px-6 backdrop-blur-lg text-center sm:text-left">
            <p className="text-xs text-white/80 font-medium truncate max-w-xl">
              {currentService.subtitle}
            </p>
            <div className="flex items-center gap-3 text-[12px] text-white/50">
              <span className="hidden md:inline">
                Doble clic: alternar zoom • Rueda: acercar/alejar • Arrastrar para explorar
              </span>
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-white/70 font-semibold">
                {currentIndex + 1} / {services.length}
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function ServicesSection() {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState<number | null>(null);

  return (
    <section id="servicios" className="relative bg-[#f4f1e8] px-5 py-24 text-[#10181d] md:px-10 md:py-36">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_.72fr] lg:gap-24">
          <Reveal>
            <p className="orange-dot eyebrow text-[#10181d]">Servicios Industriales</p>
            <h2 className="headline mt-8 max-w-[790px] text-[clamp(2.1rem,6.5vw,6.5rem)] text-[#10181d]">
              Compromiso con la eficiencia y{" "}
              <span className="text-[#6d28d9]">la calidad</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="self-end pb-2">
            <p className="max-w-[420px] text-[1rem] leading-7 text-[#4b5456]">
              Brindamos soluciones integrales que reducen tiempos de parada y 
              garantizamos el correcto funcionamiento de los procesos industriales
            </p>
          </Reveal>
        </div>

        <div className="mt-16 border-t border-[#10181d]/15">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard
              key={service.number}
              service={service}
              onImageClick={() => setSelectedServiceIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen Image Zoom Modal */}
      <ImageZoomModal
        services={SERVICES_DATA}
        currentIndex={selectedServiceIndex}
        onClose={() => setSelectedServiceIndex(null)}
        onNavigate={(newIndex) => setSelectedServiceIndex(newIndex)}
      />
    </section>
  );
}

