import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  ChevronDown,
  CircleHelp,
  MessageSquare,
  RefreshCw,
  Send,
  Sparkles,
  User,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { ChatMessage } from "@shared/aiKnowledge";
import { findPredefinedResponse, SUGGESTED_QUESTIONS } from "@/data/faqData";
import { sendAiChatMessage } from "@/services/aiChatService";

interface AIChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToContact: () => void;
}

const INITIAL_MESSAGE: ChatMessage = {
  role: "assistant",
  content:
    "Hola. Soy el asistente virtual de Servicios Integrados. Puedo ayudarte con información sobre nuestros servicios, especialidades, mantenimiento, visitas técnicas y formas de contacto.",
};

export function AIChatModal({ isOpen, onClose, onNavigateToContact }: AIChatModalProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showFaqDrawer, setShowFaqDrawer] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll to latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      // Focus input when opened on desktop
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen, messages, isLoading]);

  // Handle ESC key to close chat
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

  // Lock body scroll on small screens when open
  useEffect(() => {
    if (isOpen && typeof window !== "undefined" && window.innerWidth < 640) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  const handleSendMessage = async (
    textToSend?: string,
    source: "predefined" | "manual" = "manual"
  ) => {
    const text = (textToSend !== undefined ? textToSend : inputMessage).trim();
    if (!text || isLoading) return;

    setInputMessage("");
    setShowFaqDrawer(false); // Collapse drawer when question selected

    // Add user message to conversation with source property
    const userMsg: ChatMessage = { role: "user", content: text, source };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);

    // =========================================================================
    // 1. MENSAJES PREDEFINIDOS (Botones/chips) -> Simula breve escritura (<1s)
    // (NO llama a Gemini, NO hace fetch, NO usa GEMINI_API_KEY)
    // =========================================================================
    if (source === "predefined") {
      setIsLoading(true);
      const localAnswer = findPredefinedResponse(text);
      const answerText =
        localAnswer ||
        "En Servicios Integrados brindamos soluciones de mantenimiento industrial, visitas técnicas y asesoramiento especializado. Podés consultarnos directamente por WhatsApp al 11 4070-5211.";

      await new Promise((resolve) => setTimeout(resolve, 600));
      setMessages((prev) => [...prev, { role: "assistant", content: answerText }]);
      setIsLoading(false);
      return;
    }

    // =========================================================================
    // 2. MENSAJES MANUALES (Input de texto) -> Servicio IA (Gemini 2.5 Flash)
    // =========================================================================
    setIsLoading(true);

    try {
      // Send history (excluding system messages, only recent turns)
      const historyToSend = updatedMessages
        .filter((m) => m.role === "user" || m.role === "assistant")
        .slice(-6)
        .map((m) => ({ role: m.role as "user" | "assistant", content: m.content }));

      const result = await sendAiChatMessage(text, historyToSend);

      if (result.success && result.reply) {
        setMessages((prev) => [...prev, { role: "assistant", content: result.reply! }]);
      } else {
        const fallbackMsg =
          result.message ||
          "El Asistente IA no se encuentra disponible temporalmente. Podés comunicarte directamente con nuestro equipo por WhatsApp al 11 4070-5211.";
        setMessages((prev) => [...prev, { role: "assistant", content: fallbackMsg }]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Ocurrió un error de conexión al consultar al asistente. Podés contactarnos directamente por WhatsApp al 11 4070-5211 para atención inmediata.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(undefined, "manual");
    }
  };

  const handleResetChat = () => {
    setMessages([INITIAL_MESSAGE]);
    setShowFaqDrawer(false);
    setInputMessage("");
    setIsLoading(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Mobile Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-[58] bg-[#0a0f12]/75 backdrop-blur-xs sm:hidden"
            aria-hidden="true"
          />

          {/* Chat Window */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            style={{ transformOrigin: "bottom left" }}
            className="fixed z-[60] inset-x-3 bottom-3 sm:inset-x-auto sm:left-6 sm:bottom-24 w-auto sm:w-[410px] md:w-[430px] h-[calc(100dvh-1.5rem)] max-h-[580px] sm:h-[min(540px,calc(100dvh-7.5rem))] sm:max-h-[calc(100dvh-7.5rem)] flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 bg-[#10181d] text-[#fff7ee] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.08)] select-text"
            role="dialog"
            aria-labelledby="ai-chat-title"
          >
            {/* Top Purple Accent Line */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#6d28d9] via-[#a78bfa] to-[#6d28d9] shrink-0" />

            {/* Header */}
            <div className="shrink-0 bg-[#152026] border-b border-white/10 p-3 sm:p-4 flex items-center justify-between gap-2.5">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#6d28d9] text-white shadow-md shadow-[#6d28d9]/30">
                  <Sparkles size={18} className="animate-pulse text-[#fff7ee]" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 id="ai-chat-title" className="font-display text-xs sm:text-sm font-bold text-white truncate">
                      Asistente de Servicios Integrados
                    </h3>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-1.5 py-0.5 text-[9px] font-bold text-emerald-300 border border-emerald-500/30 shrink-0">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Online
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] font-medium text-[#fff7ee]/60 truncate">
                    ¿En qué podemos ayudarte?
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  onClick={handleResetChat}
                  title="Reiniciar conversación"
                  aria-label="Reiniciar conversación"
                  className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/5 text-white/70 hover:bg-white/15 hover:text-white transition-colors cursor-pointer"
                >
                  <RefreshCw size={14} />
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Cerrar chat"
                  className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/5 text-white/70 hover:bg-white/15 hover:text-white transition-colors cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 min-h-0 overflow-y-auto p-3.5 sm:p-4 space-y-3 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-[#10181d] [&::-webkit-scrollbar-thumb]:bg-[#6d28d9]/40 [&::-webkit-scrollbar-thumb]:rounded-full">
              {messages.map((msg, index) => {
                const isUser = msg.role === "user";
                return (
                  <div
                    key={index}
                    className={`flex items-start gap-2.5 ${isUser ? "flex-row-reverse" : "flex-row"}`}
                  >
                    <div
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-bold ${
                        isUser
                          ? "bg-[#6d28d9] text-white"
                          : "bg-white/10 border border-white/15 text-[#a78bfa]"
                      }`}
                    >
                      {isUser ? <User size={13} /> : <Bot size={14} />}
                    </div>

                    <div
                      className={`rounded-2xl px-3.5 py-2.5 text-xs sm:text-[13px] leading-relaxed max-w-[85%] break-words shadow-sm ${
                        isUser
                          ? "bg-[#6d28d9] text-white rounded-tr-xs"
                          : "bg-[#152026] text-[#fff7ee]/90 border border-white/10 rounded-tl-xs"
                      }`}
                    >
                      <p className="whitespace-pre-line">{msg.content}</p>
                    </div>
                  </div>
                );
              })}

              {/* Loading typing indicator for Gemini freeform questions */}
              {isLoading && (
                <div className="flex items-start gap-2.5">
                  <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/10 border border-white/15 text-[#a78bfa]">
                    <Bot size={14} />
                  </div>
                  <div className="rounded-2xl rounded-tl-xs bg-[#152026] border border-white/10 px-4 py-3 flex items-center gap-1.5 text-xs text-[#a78bfa]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#a78bfa] animate-bounce [animation-delay:-0.3s]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#a78bfa] animate-bounce [animation-delay:-0.15s]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#a78bfa] animate-bounce" />
                  </div>
                </div>
              )}

              {/* Collapsible Suggested Questions Toggle Button & List */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setShowFaqDrawer((prev) => !prev)}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#a78bfa]/30 bg-[#6d28d9]/15 px-3 py-1.5 text-xs font-semibold text-[#a78bfa] hover:bg-[#6d28d9]/30 hover:border-[#a78bfa]/60 transition-all cursor-pointer shadow-xs"
                  aria-expanded={showFaqDrawer}
                >
                  <CircleHelp size={14} className="text-[#a78bfa]" />
                  <span>Preguntas frecuentes sugeridas</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${showFaqDrawer ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {showFaqDrawer && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden pt-2 space-y-1.5"
                    >
                      <div className="flex flex-col gap-1.5 pl-1">
                        {SUGGESTED_QUESTIONS.map((q) => (
                          <button
                            key={q}
                            type="button"
                            onClick={() => handleSendMessage(q, "predefined")}
                            className="text-left text-xs bg-white/5 hover:bg-[#6d28d9]/25 hover:border-[#6d28d9]/50 border border-white/10 text-[#fff7ee]/90 hover:text-white rounded-xl px-3 py-2 transition-all duration-200 cursor-pointer flex items-center justify-between gap-2 group"
                          >
                            <span>{q}</span>
                            <ArrowRight size={12} className="text-[#a78bfa] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" />
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Direct Actions Footer Bar */}
            <div className="shrink-0 bg-[#121c21] border-t border-white/10 px-3 py-2 flex items-center justify-between gap-2 text-[11px]">
              <a
                href="https://wa.me/5491140705211?text=Hola%20Servicios%20Integrados,%20quisiera%20consultar%20por%20servicios%20técnicos."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#a78bfa] hover:text-white transition-colors"
              >
                <MessageSquare size={13} />
                <span>WhatsApp Directo</span>
              </a>
              <button
                type="button"
                onClick={onNavigateToContact}
                className="text-xs text-white/70 hover:text-white underline transition-colors cursor-pointer"
              >
                Formulario de Visita
              </button>
            </div>

            {/* Input Form */}
            <div className="shrink-0 bg-[#152026] border-t border-white/10 p-2.5 sm:p-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(undefined, "manual");
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  maxLength={500}
                  disabled={isLoading}
                  placeholder="Escribe tu consulta aquí..."
                  aria-label="Mensaje para el Asistente IA"
                  className="flex-1 rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-white/40 focus:border-[#a78bfa] focus:bg-white/10 focus:outline-none transition-all disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={!inputMessage.trim() || isLoading}
                  aria-label="Enviar mensaje"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#6d28d9] text-white shadow-md shadow-[#6d28d9]/30 transition-all hover:bg-[#5b21b6] active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  <Send size={16} />
                </button>
              </form>
              <p className="mt-1.5 text-center text-[10px] text-white/40">
                Servicios Integrados · Respuestas inmediatas y asistencia técnica
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
