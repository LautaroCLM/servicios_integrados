import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  CircleHelp,
  MessageSquare,
  Search,
  Sparkles,
  Wrench,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { FAQ_CATEGORIES, FAQ_DATA, type FaqItem } from "@/data/faqData";

interface FaqModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToContact: () => void;
}

export function FaqModal({ isOpen, onClose, onNavigateToContact }: FaqModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "servicios-ofrecen": true, // Open the first item by default
  });

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

  // Handle ESC key to close
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Reset search when opening modal
  useEffect(() => {
    if (isOpen) {
      setSearchQuery("");
      setSelectedCategory("Todas");
    }
  }, [isOpen]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const allOpen: Record<string, boolean> = {};
    filteredFaqs.forEach((item) => {
      allOpen[item.id] = true;
    });
    setOpenItems(allOpen);
  };

  const collapseAll = () => {
    setOpenItems({});
  };

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory =
        selectedCategory === "Todas" || item.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const matchQuestion = item.question.toLowerCase().includes(q);
      const matchAnswer = item.answer.toLowerCase().includes(q);
      const matchKeywords = item.keywords?.some((k) => k.toLowerCase().includes(q));

      return matchQuestion || matchAnswer || matchKeywords;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="faq-modal-title"
          aria-describedby="faq-modal-description"
        >
          {/* Backdrop with dark blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0a0f12]/85 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="relative w-full max-w-4xl h-[88vh] max-h-[840px] overflow-hidden rounded-2xl border border-white/15 bg-[#10181d] text-[#fff7ee] shadow-2xl flex flex-col z-10"
          >
            {/* Top Accent Gradient Line */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#6d28d9] via-[#a78bfa] to-[#6d28d9] shrink-0" />

            {/* Header Container */}
            <div className="shrink-0 bg-[#152026] border-b border-white/10 p-4 sm:p-6 space-y-4">
              {/* Top Row: Tag + Close Button */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#a78bfa]/40 bg-[#6d28d9]/30 px-3 py-1 text-[12px] font-bold uppercase tracking-widest text-[#a78bfa]">
                    <CircleHelp size={13} /> Preguntas Frecuentes
                  </span>
                  <span className="text-xs font-medium text-[#fff7ee]/60">
                    Servicios Integrados
                  </span>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Cerrar preguntas frecuentes"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all duration-200 hover:bg-white/15 hover:text-white hover:scale-105 cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Title and Description */}
              <div>
                <h2
                  id="faq-modal-title"
                  className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight"
                >
                  Respuestas y Asistencia sobre Nuestros Servicios
                </h2>
                <p
                  id="faq-modal-description"
                  className="mt-1 text-xs sm:text-sm text-[#fff7ee]/70 leading-relaxed"
                >
                  Información técnica y operativa sobre mantenimiento industrial, especialidades en planta y modalidades de contacto.
                </p>
              </div>

              {/* Search Bar + Controls */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <div className="relative flex-1">
                  <Search
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
                  />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar pregunta o tema (ej. hornos, preventivo, tornería, presupuesto)..."
                    aria-label="Buscar en preguntas frecuentes"
                    className="w-full rounded-xl border border-white/15 bg-white/5 py-2.5 pl-10 pr-9 text-xs sm:text-sm text-white placeholder-white/40 focus:border-[#a78bfa] focus:bg-white/10 focus:outline-none transition-all"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      aria-label="Limpiar búsqueda"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-2 text-[12px] text-white/60">
                  <button
                    type="button"
                    onClick={expandAll}
                    className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 font-semibold text-white/80 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                  >
                    Desplegar todas
                  </button>
                  <button
                    type="button"
                    onClick={collapseAll}
                    className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 font-semibold text-white/80 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                  >
                    Contraer todas
                  </button>
                </div>
              </div>

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1">
                {FAQ_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-full px-3 py-1 text-xs font-bold transition-all duration-200 cursor-pointer ${
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

            {/* Scrollable Accordion Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 space-y-3 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#10181d] [&::-webkit-scrollbar-thumb]:bg-[#6d28d9]/50 [&::-webkit-scrollbar-thumb]:rounded-full">
              {filteredFaqs.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-white/5 text-white/40 mb-3">
                    <CircleHelp size={24} />
                  </div>
                  <h4 className="font-display text-base font-bold text-white">
                    No se encontraron preguntas
                  </h4>
                  <p className="mt-1 text-xs text-white/60 max-w-sm">
                    No encontramos resultados para &quot;{searchQuery}&quot;. Intente con otros términos o consulte directamente con nuestro equipo.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("Todas");
                    }}
                    className="mt-4 rounded-lg bg-[#6d28d9] px-4 py-2 text-xs font-bold text-white hover:bg-[#5b21b6] transition-colors"
                  >
                    Ver todas las preguntas
                  </button>
                </div>
              ) : (
                <div className="space-y-3" role="region" aria-label="Lista de preguntas frecuentes">
                  {filteredFaqs.map((faq, index) => {
                    const isOpen = !!openItems[faq.id];
                    return (
                      <div
                        key={faq.id}
                        className={`overflow-hidden rounded-xl border transition-all duration-200 ${
                          isOpen
                            ? "border-[#a78bfa]/50 bg-white/[0.08] shadow-lg shadow-black/30"
                            : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
                        }`}
                      >
                        {/* Accordion Trigger Header */}
                        <button
                          type="button"
                          onClick={() => toggleItem(faq.id)}
                          aria-expanded={isOpen}
                          aria-controls={`faq-answer-${faq.id}`}
                          id={`faq-question-${faq.id}`}
                          className="flex w-full items-center justify-between gap-4 p-4 sm:p-5 text-left cursor-pointer transition-colors"
                        >
                          <div className="flex items-start gap-3.5">
                            <span
                              className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md text-[12px] font-bold font-mono transition-colors ${
                                isOpen
                                  ? "bg-[#6d28d9] text-white"
                                  : "border border-white/15 bg-white/5 text-white/70"
                              }`}
                            >
                              {(index + 1).toString().padStart(2, "0")}
                            </span>
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-[#a78bfa]">
                                  {faq.category}
                                </span>
                              </div>
                              <h3
                                className={`font-display text-sm sm:text-base font-bold transition-colors ${
                                  isOpen ? "text-white" : "text-[#fff7ee]/90"
                                }`}
                              >
                                {faq.question}
                              </h3>
                            </div>
                          </div>

                          <div
                            className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 transition-transform duration-300 ${
                              isOpen
                                ? "bg-[#6d28d9] text-white rotate-180 border-[#6d28d9]"
                                : "bg-white/5 text-white/70"
                            }`}
                          >
                            <ChevronDown size={16} />
                          </div>
                        </button>

                        {/* Accordion Collapsible Answer */}
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              id={`faq-answer-${faq.id}`}
                              role="region"
                              aria-labelledby={`faq-question-${faq.id}`}
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                              className="overflow-hidden border-t border-white/10 bg-[#10181d]/60"
                            >
                              <div className="p-4 sm:p-5 pt-3 sm:pt-4 text-xs sm:text-sm leading-relaxed text-[#fff7ee]/85 space-y-3">
                                <p>{faq.answer}</p>

                                {/* Contextual action banner if it's a contact or service item */}
                                {faq.category === "Contacto y Presupuestos" ? (
                                  <div className="mt-3 flex flex-wrap items-center gap-2 pt-2 border-t border-white/10">
                                    <button
                                      type="button"
                                      onClick={onNavigateToContact}
                                      className="inline-flex items-center gap-1.5 rounded-lg bg-[#6d28d9] px-3.5 py-1.5 text-xs font-bold text-white hover:bg-[#5b21b6] transition-colors cursor-pointer"
                                    >
                                      Ir al Formulario de Contacto <ArrowRight size={13} />
                                    </button>
                                    <a
                                      href="https://wa.me/5491140705211?text=Hola%20Servicios%20Integrados,%20quisiera%20solicitar%20un%20presupuesto%20o%20información%20técnica."
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-white/20 transition-colors"
                                    >
                                      <MessageSquare size={13} className="text-[#a78bfa]" /> WhatsApp Directo
                                    </a>
                                  </div>
                                ) : (
                                  <div className="mt-2 flex items-center justify-between text-[12px] text-white/50 pt-2 border-t border-white/5">
                                    <span>Servicios Integrados — Mantenimiento Industrial</span>
                                    <button
                                      type="button"
                                      onClick={onNavigateToContact}
                                      className="text-[#a78bfa] hover:text-white underline font-medium transition-colors cursor-pointer"
                                    >
                                      Consultar por este servicio
                                    </button>
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Bottom Support Banner inside modal */}
              <div className="mt-6 rounded-xl border border-dashed border-[#a78bfa]/40 bg-gradient-to-r from-[#6d28d9]/15 via-[#10181d] to-[#6d28d9]/15 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#6d28d9]/30 text-[#a78bfa]">
                    <Wrench size={20} />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-white">
                      ¿Tiene un requerimiento técnico específico en su planta?
                    </h4>
                    <p className="text-xs text-white/70">
                      Coordinamos una visita técnica o evaluación diagnóstica sin compromiso.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={onNavigateToContact}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-lg bg-[#6d28d9] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#5b21b6] transition-colors cursor-pointer"
                  >
                    Solicitar Visita <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10 bg-[#152026] p-4 px-6 md:px-8">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-[#fff7ee]/60">
                <span>© {new Date().getFullYear()} <strong>Servicios Integrados</strong>. Todos los derechos reservados.</span>
                <span className="hidden sm:inline">•</span>
                <a
                  href="/privacidad/"
                  onClick={onClose}
                  className="text-[#a78bfa] underline hover:text-white transition-colors"
                >
                  Política de Privacidad
                </a>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border border-white/20 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/20 cursor-pointer shrink-0"
              >
                Cerrar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
