import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Check,
  ChevronUp,
  CircleHelp,
  Mail,
  MessageSquare,
  Phone,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AIChatModal } from "./AIChatModal";
import { FaqModal } from "./FaqModal";
import { getPublicNovedades, FALLBACK_NOVEDADES } from "@/services/novedadesService";
import type { Novedad } from "@/lib/supabase";

export function NovedadesButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isNovedadesModalOpen, setIsNovedadesModalOpen] = useState(false);
  const [isFaqModalOpen, setIsFaqModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");
  const [novedades, setNovedades] = useState<Novedad[]>(FALLBACK_NOVEDADES);
  const [isLoadingNovedades, setIsLoadingNovedades] = useState(false);
  const menuContainerRef = useRef<HTMLDivElement>(null);

  // Carga asíncrona de novedades desde Supabase en el navegador
  useEffect(() => {
    let isMounted = true;
    async function load() {
      try {
        setIsLoadingNovedades(true);
        const data = await getPublicNovedades();
        if (isMounted && data && data.length > 0) {
          setNovedades(data);
        }
      } catch (err) {
        console.warn("⚠️ [Novedades] Error en carga de novedades dinámicas:", err);
      } finally {
        if (isMounted) setIsLoadingNovedades(false);
      }
    }
    load();
    return () => {
      isMounted = false;
    };
  }, []);

  // Lock body scroll when full-screen modal (Novedades or FAQ) is open
  useEffect(() => {
    if (isNovedadesModalOpen || isFaqModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isNovedadesModalOpen, isFaqModalOpen]);

  // Handle ESC key press and Click Outside
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isChatOpen) {
          setIsChatOpen(false);
        } else if (isFaqModalOpen) {
          setIsFaqModalOpen(false);
        } else if (isNovedadesModalOpen) {
          setIsNovedadesModalOpen(false);
        } else if (isMenuOpen) {
          setIsMenuOpen(false);
        }
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuContainerRef.current &&
        !menuContainerRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, isChatOpen, isNovedadesModalOpen, isFaqModalOpen]);

  const dynamicCategories = [
    "Todas",
    ...Array.from(new Set(novedades.map((item) => item.category))),
  ];

  const filteredNovedades =
    selectedCategory === "Todas"
      ? novedades
      : novedades.filter((item) => item.category === selectedCategory);

  const handleToggleChat = () => {
    setIsMenuOpen(false);
    setIsChatOpen((prev) => !prev);
  };

  const handleToggleMenu = () => {
    setIsChatOpen(false);
    setIsMenuOpen((prev) => !prev);
  };

  const handleOpenNovedades = () => {
    setIsMenuOpen(false);
    setIsNovedadesModalOpen(true);
  };

  const handleOpenFaq = () => {
    setIsMenuOpen(false);
    setIsFaqModalOpen(true);
  };

  const handleScheduleMeeting = () => {
    setIsMenuOpen(false);
    const contactElement = document.getElementById("contacto");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClickFromNovedades = () => {
    setIsNovedadesModalOpen(false);
    const contactElement = document.getElementById("contacto");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClickFromFaq = () => {
    setIsFaqModalOpen(false);
    const contactElement = document.getElementById("contacto");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClickFromChat = () => {
    setIsChatOpen(false);
    const contactElement = document.getElementById("contacto");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 1. Panel Flotante del Asistente IA (Independiente con z-[60] para evitar colisiones y desbordamientos) */}
      <AIChatModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        onNavigateToContact={handleContactClickFromChat}
      />

      {/* Un único botón flotante (abajo a la izquierda) que abre el menú con Asistente IA,
          Novedades, preguntas frecuentes y contacto. Va a la izquierda para no chocar con el
          cartel "Powered by Netlify" (esquina inferior derecha) y es compacto (círculo en
          celular) para tapar lo mínimo del contenido. */}
      <div
        ref={menuContainerRef}
        className="fixed z-40 flex flex-col items-start gap-2.5 bottom-[calc(1.5rem_+_env(safe-area-inset-bottom,0px))]"
        style={{
          left: "calc(1.5rem + env(safe-area-inset-left, 0px))",
        }}
      >
        {/* 2. Desplegable emergente de Contacto y Novedades hacia arriba */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="novedades-menu"
              role="menu"
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.95 }}
              transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
              style={{ transformOrigin: "bottom left" }}
              className="mb-1 w-[290px] sm:w-[320px] overflow-hidden rounded-2xl border border-black/10 bg-white p-2 text-[#10181d] shadow-[0_20px_50px_rgba(0,0,0,0.25)] ring-1 ring-black/5"
            >
              <div className="flex flex-col divide-y divide-neutral-100">
                {/* 0. ASISTENTE IA (antes era un botón flotante aparte) */}
                <button
                  type="button"
                  onClick={handleToggleChat}
                  aria-haspopup="dialog"
                  className="group flex w-full items-center gap-3.5 rounded-xl p-3 text-left transition-all duration-200 hover:bg-neutral-50 active:scale-[0.98] cursor-pointer"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#10181d] text-[#a78bfa] shadow-md shadow-black/20 transition-transform duration-300 group-hover:scale-105">
                    <Sparkles size={19} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-display text-sm font-bold text-[#10181d] group-hover:text-[#6d28d9] transition-colors">
                      Asistente IA
                    </div>
                    <p className="text-[11px] font-medium text-neutral-500 truncate">
                      Consultá sobre nuestros servicios
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-[#6d28d9] opacity-70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </button>

                {/* 1. TOP HIERARCHY: NOVEDADES */}
                <button
                  type="button"
                  onClick={handleOpenNovedades}
                  className="group relative flex w-full items-center gap-3.5 rounded-xl p-3 text-left transition-all duration-200 hover:bg-[#6d28d9]/5 active:scale-[0.98] cursor-pointer"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#6d28d9] text-white shadow-md shadow-[#6d28d9]/30 transition-transform duration-300 group-hover:scale-105">
                    <Sparkles size={20} className="animate-pulse text-[#fff7ee]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-display text-sm font-extrabold text-[#10181d] group-hover:text-[#6d28d9] transition-colors">
                        Novedades
                      </span>
                      <span className="rounded-full bg-[#6d28d9] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                        Nuevo
                      </span>
                    </div>
                    <p className="text-[11px] font-medium text-neutral-500 truncate">
                      Últimas actualizaciones y proyectos
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-[#6d28d9] opacity-70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </button>

                {/* 2. PREGUNTAS FRECUENTES */}
                <button
                  type="button"
                  onClick={handleOpenFaq}
                  className="group flex w-full items-center gap-3.5 rounded-xl p-3 text-left transition-all duration-200 hover:bg-neutral-50 active:scale-[0.98] cursor-pointer"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-neutral-200/80 bg-neutral-50 text-[#10181d] group-hover:border-[#6d28d9]/30 group-hover:bg-[#6d28d9]/10 group-hover:text-[#6d28d9] transition-colors">
                    <CircleHelp size={19} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-display text-sm font-bold text-[#10181d] group-hover:text-[#6d28d9] transition-colors">
                      Preguntas frecuentes
                    </div>
                    <p className="text-[11px] font-medium text-neutral-500 truncate">
                      Respuestas sobre nuestros servicios
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-[#6d28d9] opacity-70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </button>

                {/* 3. WHATSAPP */}
                <a
                  href="https://wa.me/5491140705211?text=Hola%20Servicios%20Integrados,%20quisiera%20solicitar%20informaci%C3%B3n%20o%20visita%20t%C3%A9cnica."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="group flex w-full items-center gap-3.5 rounded-xl p-3 text-left transition-all duration-200 hover:bg-neutral-50 active:scale-[0.98]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-neutral-200/80 bg-neutral-50 text-[#10181d] group-hover:border-[#6d28d9]/30 group-hover:bg-[#6d28d9]/10 group-hover:text-[#6d28d9] transition-colors">
                    <MessageSquare size={19} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-display text-sm font-bold text-[#10181d] group-hover:text-[#6d28d9] transition-colors">
                      WhatsApp
                    </div>
                    <p className="text-[11px] font-medium text-neutral-500 truncate">
                      Escríbenos por WhatsApp
                    </p>
                  </div>
                </a>

                {/* 4. GMAIL */}
                <a
                  href="mailto:serviciosintegrados68@gmail.com"
                  onClick={() => setIsMenuOpen(false)}
                  className="group flex w-full items-center gap-3.5 rounded-xl p-3 text-left transition-all duration-200 hover:bg-neutral-50 active:scale-[0.98]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-neutral-200/80 bg-neutral-50 text-[#10181d] group-hover:border-[#6d28d9]/30 group-hover:bg-[#6d28d9]/10 group-hover:text-[#6d28d9] transition-colors">
                    <Mail size={19} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-display text-sm font-bold text-[#10181d] group-hover:text-[#6d28d9] transition-colors">
                      Gmail
                    </div>
                    <p className="text-[11px] font-medium text-neutral-500 truncate">
                      Envíanos un correo
                    </p>
                  </div>
                </a>

                {/* 5. LLÁMANOS */}
                <a
                  href="tel:+5491150705211"
                  onClick={() => setIsMenuOpen(false)}
                  className="group flex w-full items-center gap-3.5 rounded-xl p-3 text-left transition-all duration-200 hover:bg-neutral-50 active:scale-[0.98]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-neutral-200/80 bg-neutral-50 text-[#10181d] group-hover:border-[#6d28d9]/30 group-hover:bg-[#6d28d9]/10 group-hover:text-[#6d28d9] transition-colors">
                    <Phone size={19} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-display text-sm font-bold text-[#10181d] group-hover:text-[#6d28d9] transition-colors">
                      Llámanos
                    </div>
                    <p className="text-[11px] font-medium text-neutral-500 truncate">
                      +54 9 11 5070-5211
                    </p>
                  </div>
                </a>

                {/* 6. AGENDAR REUNIÓN */}
                <button
                  type="button"
                  onClick={handleScheduleMeeting}
                  className="group flex w-full items-center gap-3.5 rounded-xl p-3 text-left transition-all duration-200 hover:bg-neutral-50 active:scale-[0.98] cursor-pointer"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-neutral-200/80 bg-neutral-50 text-[#10181d] group-hover:border-[#6d28d9]/30 group-hover:bg-[#6d28d9]/10 group-hover:text-[#6d28d9] transition-colors">
                    <Calendar size={19} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-display text-sm font-bold text-[#10181d] group-hover:text-[#6d28d9] transition-colors">
                      Agendar reunión
                    </div>
                    <p className="text-[11px] font-medium text-neutral-500 truncate">
                      Coordinemos una reunión
                    </p>
                  </div>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Botón flotante único. Círculo de 56 px en celular (solo ícono) y píldora con texto
            desde sm. Abre el menú de contacto, novedades y asistente. */}
        <button
          type="button"
          onClick={handleToggleMenu}
          className={`group inline-flex h-14 w-14 items-center justify-center gap-2.5 rounded-full border bg-white font-display text-xs font-bold uppercase tracking-wider text-[#10181d] shadow-[0_10px_30px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.3)] active:translate-y-0 active:scale-[0.97] cursor-pointer sm:h-12 sm:w-auto sm:rounded-2xl sm:px-5 ${
            isMenuOpen
              ? "border-[#6d28d9]/40 ring-2 ring-[#6d28d9]/20"
              : "border-black/10 hover:border-black/20"
          }`}
          aria-haspopup="true"
          aria-expanded={isMenuOpen}
          aria-controls="novedades-menu"
          aria-label={isMenuOpen ? "Cerrar menú de contacto y novedades" : "Abrir menú de contacto, novedades y asistente"}
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            {isMenuOpen ? (
              <X size={22} className="text-[#6d28d9]" strokeWidth={2.4} />
            ) : (
              <MessageSquare size={22} className="text-[#6d28d9]" strokeWidth={2.2} />
            )}
          </motion.div>
          <span className="hidden font-extrabold tracking-wide text-[#10181d] sm:inline">
            {isMenuOpen ? "CERRAR" : "CONTACTO"}
          </span>
          <ChevronUp
            size={16}
            className={`hidden text-[#6d28d9] transition-transform duration-300 sm:block ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Modal Dialog for Preguntas Frecuentes */}
      <FaqModal
        isOpen={isFaqModalOpen}
        onClose={() => setIsFaqModalOpen(false)}
        onNavigateToContact={handleContactClickFromFaq}
      />

      {/* Modal Dialog for Novedades Completo */}
      <AnimatePresence>
        {isNovedadesModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Novedades de Servicios Integrados"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsNovedadesModalOpen(false)}
              className="absolute inset-0 bg-[#0a0f12]/85 backdrop-blur-md"
              aria-hidden="true"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
              className="relative w-full max-w-5xl h-[88vh] max-h-[820px] overflow-hidden rounded-2xl border border-white/15 bg-[#10181d] text-[#fff7ee] shadow-2xl flex flex-col z-10"
            >
              {/* Top Accent Line */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#6d28d9] via-[#a78bfa] to-[#6d28d9] shrink-0" />

              {/* Header Container */}
              <div className="shrink-0 bg-[#152026] border-b border-white/10 p-5 sm:p-6 space-y-4">
                {/* Top Row: Tag + Close Button */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#a78bfa]/40 bg-[#6d28d9]/30 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#a78bfa]">
                      <Sparkles size={12} /> Centro de Novedades
                    </span>
                    <span className="text-xs font-medium text-[#fff7ee]/60">
                      Servicios Integrados 2026
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsNovedadesModalOpen(false)}
                    aria-label="Cerrar modal"
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all duration-200 hover:bg-white/15 hover:text-white hover:scale-105 cursor-pointer"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
                    Últimas Actualizaciones Técnicas y Proyectos
                  </h3>
                </div>

                {/* Category Filter Tabs */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {dynamicCategories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-all duration-200 cursor-pointer ${
                        selectedCategory === cat
                          ? "bg-[#6d28d9] text-white shadow-md shadow-[#6d28d9]/40"
                          : "border border-white/10 bg-white/5 text-[#fff7ee]/70 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Scrollable Content Body */}
              <div className="flex-1 overflow-y-auto p-5 sm:p-6 md:p-8 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#10181d] [&::-webkit-scrollbar-thumb]:bg-[#6d28d9]/50 [&::-webkit-scrollbar-thumb]:rounded-full">
                {filteredNovedades.length === 0 ? (
                  <div className="py-16 text-center text-neutral-400">
                    <Sparkles size={32} className="mx-auto text-neutral-600 mb-2" />
                    <p className="text-base font-bold text-white">No hay novedades disponibles en esta categoría</p>
                    <p className="text-xs text-neutral-400 mt-1">Seleccione "Todas" para explorar todas las actualizaciones técnicas.</p>
                  </div>
                ) : (
                  <div className="grid gap-6 md:grid-cols-2">
                    {filteredNovedades.map((item) => (
                      <div
                        key={item.id}
                        className="group flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-[#a78bfa]/50 hover:bg-white/10 hover:shadow-xl"
                      >
                        <div>
                          {/* Image banner */}
                          <div className="relative h-44 sm:h-48 w-full overflow-hidden rounded-lg border border-white/10">
                            <img
                              src={item.image}
                              alt={`${item.title} — ${item.subtitle}`}
                              loading="lazy"
                              decoding="async"
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = "/img/servicio1.webp";
                              }}
                            />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#10181d] via-transparent to-transparent opacity-75" />
                          <div className="absolute top-3 left-3 flex items-center gap-2">
                            <span className="rounded-md border border-[#a78bfa]/40 bg-[#6d28d9]/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                              {item.category}
                            </span>
                          </div>
                          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[11px] font-semibold text-[#fff7ee]/90">
                            <Calendar size={13} className="text-[#a78bfa]" />
                            {item.date}
                          </div>
                        </div>

                        {/* Text info */}
                        <h4 className="font-display mt-4 text-lg sm:text-xl font-bold text-white group-hover:text-[#a78bfa] transition-colors leading-snug">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-xs font-semibold text-[#a78bfa]">
                          {item.subtitle}
                        </p>
                        <p className="mt-3 text-xs leading-5 text-[#fff7ee]/75">
                          {item.description}
                        </p>

                        {/* Bullet points */}
                        <div className="mt-4 space-y-2 border-t border-white/10 pt-3">
                          {item.highlights.map((point) => (
                            <div key={point} className="flex items-center gap-2 text-xs text-[#fff7ee]/90">
                              <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[#6d28d9]/40 text-[#a78bfa]">
                                <Check size={10} strokeWidth={3} />
                              </span>
                              {point}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Card Action */}
                      <div className="mt-6 pt-2">
                        <button
                          type="button"
                          onClick={handleContactClickFromNovedades}
                          className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#6d28d9] hover:border-[#6d28d9] cursor-pointer"
                        >
                          Consultar sobre este servicio <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              </div>

              {/* Footer */}
              <div className="shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10 bg-[#152026] p-4 px-6 md:px-8">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-[#fff7ee]/60">
                  <span>© {new Date().getFullYear()} <strong>Servicios Integrados</strong> — Mantenimiento e Ingeniería.</span>
                  <span className="hidden sm:inline">•</span>
                  <a
                    href="/privacidad/"
                    onClick={() => setIsNovedadesModalOpen(false)}
                    className="text-[#a78bfa] underline hover:text-white transition-colors"
                  >
                    Política de Privacidad
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => setIsNovedadesModalOpen(false)}
                  className="rounded-lg border border-white/20 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/20 cursor-pointer shrink-0"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
