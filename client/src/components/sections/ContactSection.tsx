import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@shared/contactSchema";
import { motion, useReducedMotion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Mail,
  MessageSquare,
  Phone,
  RotateCcw,
  Send,
  ShieldCheck,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

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

export function ContactSection() {
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      company: "",
      phone: "",
      email: "",
      serviceType: "",
      message: "",
      website_hp: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setFormStatus("loading");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.success) {
        const message =
          result.message ||
          "No se pudo enviar la consulta técnica en este momento. Por favor intente nuevamente o comuníquese por WhatsApp al 11 4070-5211.";
        setFormStatus("error");
        setErrorMessage(message);
        toast.error("Error al enviar la consulta", {
          description: message,
        });
        return;
      }

      // Success
      setFormStatus("success");
      setSubmittedData(data);
      toast.success("Consulta enviada exitosamente", {
        description: `Gracias ${data.name}. El equipo técnico de Servicios Integrados se pondrá en contacto con ${data.company} a la brevedad.`,
      });
      reset();
    } catch {
      const networkError =
        "Ocurrió un error de conexión al enviar el formulario. Por favor verifique su conexión o comuníquese por WhatsApp al 11 4070-5211.";
      setFormStatus("error");
      setErrorMessage(networkError);
      toast.error("Error de conexión", {
        description: networkError,
      });
    }
  };

  const handleResetForm = () => {
    setFormStatus("idle");
    setErrorMessage(null);
    setSubmittedData(null);
    reset();
  };

  const isLoading = formStatus === "loading" || isSubmitting;

  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-[#6d28d9] px-5 py-24 text-[#fff7ee] md:px-10 md:py-36"
    >
      <div className="absolute bottom-[-16vw] right-[-4vw] pointer-events-none font-display text-[50vw] font-bold leading-none tracking-[-.12em] text-[#10181d]/10">
        SI
      </div>

      <div className="relative mx-auto max-w-[1600px]">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          {/* Left Info Column */}
          <Reveal>
            <p className="eyebrow text-[#fff7ee]/80">Próximo Paso · Asistencia Técnica</p>
            <h2 className="headline mt-6 max-w-[650px] text-[clamp(2.1rem,6.5vw,6.5rem)] text-[#fff7ee]">
              Hablemos de su <span className="text-[#10181d]">producción.</span>
            </h2>

            <p className="mt-6 max-w-[480px] text-base leading-7 text-[#fff7ee]/90">
              Solicite una visita técnica o un diagnóstico especializado en planta. Revisamos juntos el punto de partida técnico y la disponibilidad de sus equipos.
            </p>

            {/* Direct Contact Buttons */}
            <div className="mt-10 flex flex-col gap-4">
              <a
                href="https://wa.me/5491140705211?text=Hola%20Servicios%20Integrados,%20quisiera%20solicitar%20una%20visita%20t%C3%A9cnica%20o%20presupuesto."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 rounded-lg bg-[#10181d] px-6 py-4 font-display text-sm font-bold uppercase tracking-wider text-[#fff7ee] transition-transform duration-200 hover:-translate-y-1 active:scale-[.98]"
              >
                <MessageSquare size={20} className="text-[#a78bfa]" />
                WhatsApp Directo: 11 4070-5211
              </a>

              <a
                href="tel:+5491150705211"
                className="inline-flex items-center gap-4 rounded-lg border border-[#fff7ee]/40 bg-[#fff7ee]/10 px-6 py-4 font-display text-sm font-bold uppercase tracking-wider text-[#fff7ee] backdrop-blur-sm transition-colors duration-200 hover:bg-[#fff7ee] hover:text-[#10181d]"
              >
                <Phone size={20} />
                Teléfono: +54 9 11 5070-5211
              </a>
            </div>

            {/* Emails */}
            <div className="mt-8 space-y-2 border-t border-[#fff7ee]/25 pt-6 text-xs font-semibold text-[#fff7ee]/85">
              <div className="flex items-center gap-3">
                <Mail size={16} />
                <a
                  href="mailto:antonioa@serviciosintegradosweb.com"
                  className="inline-flex min-h-11 items-center underline hover:text-[#10181d]"
                >
                  antonioa@serviciosintegradosweb.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} />
                <a
                  href="mailto:antonionandrada@gmail.com"
                  className="inline-flex min-h-11 items-center underline hover:text-[#10181d]"
                >
                  antonionandrada@gmail.com
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right Form Column */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-white/20 bg-[#10181d] p-8 text-[#fff7ee] shadow-2xl md:p-10">
              {formStatus === "success" ? (
                /* Success State Inside Form */
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-[#6d28d9]/20 text-[#a78bfa] ring-8 ring-[#6d28d9]/10">
                    <CheckCircle2 size={36} className="text-[#a78bfa]" />
                  </div>

                  <span className="mt-6 font-display text-xs font-bold uppercase tracking-widest text-[#a78bfa]">
                    Solicitud Registrada
                  </span>

                  <h3 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">
                    ¡Consulta enviada con éxito!
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-relaxed text-[#fff7ee]/85">
                    Gracias{" "}
                    <strong className="text-white">
                      {submittedData?.name || "por su contacto"}
                    </strong>
                    . Hemos recibido su requerimiento técnico para{" "}
                    <strong className="text-white">
                      {submittedData?.company || "su empresa"}
                    </strong>
                    . Nuestro equipo de ingeniería y confiabilidad industrial revisará los detalles y se pondrá en contacto a la brevedad.
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-[#fff7ee] transition-all hover:bg-white/20 active:scale-[.98] cursor-pointer"
                    >
                      <RotateCcw size={15} />
                      Enviar otra consulta
                    </button>
                    <a
                      href="https://wa.me/5491140705211?text=Hola%20Servicios%20Integrados,%20acabo%20de%20enviar%20una%20consulta%20t%C3%A9cnica%20desde%20la%20web."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#6d28d9] px-5 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#5b21b6] active:scale-[.98]"
                    >
                      <MessageSquare size={15} />
                      WhatsApp Directo
                    </a>
                  </div>
                </div>
              ) : (
                /* Active Form (idle / loading / error) */
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#a78bfa]">
                      <ShieldCheck size={18} /> Solicitud de Visita Técnica y Presupuesto
                    </div>
                  </div>

                  {/* Anti-spam Honeypot: invisible to human users */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: "-9999px",
                      top: "-9999px",
                      opacity: 0,
                      pointerEvents: "none",
                      height: 0,
                      width: 0,
                      zIndex: -1,
                    }}
                  >
                    <label htmlFor="website_hp">Deje este campo vacío</label>
                    <input
                      id="website_hp"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      {...register("website_hp")}
                    />
                  </div>

                  {/* Inline Error Banner */}
                  {formStatus === "error" && errorMessage && (
                    <div className="mt-5 flex items-start gap-3 rounded-lg border border-red-500/40 bg-red-950/40 p-4 text-xs text-red-200 backdrop-blur-sm">
                      <AlertCircle size={18} className="shrink-0 text-red-400 mt-0.5" />
                      <div className="flex-1">
                        <strong className="font-bold text-red-300 block mb-1">
                          No se pudo procesar la solicitud
                        </strong>
                        <p>{errorMessage}</p>
                      </div>
                    </div>
                  )}

                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-[#fff7ee]/75">
                        Nombre completo *
                      </label>
                      <input
                        {...register("name")}
                        id="contact-name"
                        disabled={isLoading}
                        placeholder="Ej. Ing. Carlos Rodríguez"
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "error-name" : undefined}
                        className="mt-2 w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-[#fff7ee] placeholder-white/40 focus:border-[#a78bfa] focus:outline-none disabled:opacity-60"
                      />
                      {errors.name && (
                        <p id="error-name" className="mt-1 text-xs text-red-400" role="alert">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-company" className="block text-xs font-bold uppercase tracking-wider text-[#fff7ee]/75">
                        Empresa / Planta *
                      </label>
                      <input
                        {...register("company")}
                        id="contact-company"
                        disabled={isLoading}
                        placeholder="Ej. Planta Alimenticia S.A."
                        aria-required="true"
                        aria-invalid={!!errors.company}
                        aria-describedby={errors.company ? "error-company" : undefined}
                        className="mt-2 w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-[#fff7ee] placeholder-white/40 focus:border-[#a78bfa] focus:outline-none disabled:opacity-60"
                      />
                      {errors.company && (
                        <p id="error-company" className="mt-1 text-xs text-red-400" role="alert">{errors.company.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-[#fff7ee]/75">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        {...register("phone")}
                        id="contact-phone"
                        disabled={isLoading}
                        placeholder="Ej. 11 4455-6677"
                        aria-required="true"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? "error-phone" : undefined}
                        className="mt-2 w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-[#fff7ee] placeholder-white/40 focus:border-[#a78bfa] focus:outline-none disabled:opacity-60"
                      />
                      {errors.phone && (
                        <p id="error-phone" className="mt-1 text-xs text-red-400" role="alert">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-[#fff7ee]/75">
                        Correo electrónico *
                      </label>
                      <input
                        {...register("email")}
                        id="contact-email"
                        disabled={isLoading}
                        type="email"
                        placeholder="crodriguez@empresa.com"
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "error-email" : undefined}
                        className="mt-2 w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-[#fff7ee] placeholder-white/40 focus:border-[#a78bfa] focus:outline-none disabled:opacity-60"
                      />
                      {errors.email && (
                        <p id="error-email" className="mt-1 text-xs text-red-400" role="alert">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="mt-5">
                    <label htmlFor="contact-serviceType" className="block text-xs font-bold uppercase tracking-wider text-[#fff7ee]/75">
                      Servicio requerido *
                    </label>
                    <select
                      {...register("serviceType")}
                      id="contact-serviceType"
                      disabled={isLoading}
                      aria-required="true"
                      aria-invalid={!!errors.serviceType}
                      aria-describedby={errors.serviceType ? "error-serviceType" : undefined}
                      className="mt-2 w-full rounded-md border border-white/15 bg-[#1b2a32] px-4 py-3 text-sm text-[#fff7ee] focus:border-[#a78bfa] focus:outline-none disabled:opacity-60"
                    >
                      <option value="">-- Seleccionar opción --</option>
                      <option value="Mantenimiento u Overhaul">Mantenimiento Industrial</option>
                      <option value="Ingeniería y Diseño">Ingeniería y Proyectos</option>
                      <option value="Fabricación Inox">Fabricación en Acero Inoxidable / Cañerías</option>
                      <option value="Tornería 24hs">Tornería y Mecanizado 24 hs</option>
                      <option value="Limpieza Placas Wafer">Limpieza y Mantenimiento de Placas de horno de obleas</option>
                      <option value="Refrigeración Industrial">Refrigeración Industrial / Chillers</option>
                      <option value="Método FARO">Entrenamiento Método Líder FARO®</option>
                      <option value="Otro">Otro / Consulta General</option>
                    </select>
                    {errors.serviceType && (
                      <p id="error-serviceType" className="mt-1 text-xs text-red-400" role="alert">{errors.serviceType.message}</p>
                    )}
                  </div>

                  <div className="mt-5">
                    <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-[#fff7ee]/75">
                      Mensaje / Detalle técnico *
                    </label>
                    <textarea
                      {...register("message")}
                      id="contact-message"
                      disabled={isLoading}
                      rows={4}
                      placeholder="Describa el equipo, línea o necesidad técnica de su planta..."
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "error-message" : undefined}
                      className="mt-2 w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-[#fff7ee] placeholder-white/40 focus:border-[#a78bfa] focus:outline-none disabled:opacity-60"
                    />
                    {errors.message && (
                      <p id="error-message" className="mt-1 text-xs text-red-400" role="alert">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="mt-8 flex w-full items-center justify-center gap-3 rounded-md bg-[#6d28d9] py-4 font-display text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-[#5b21b6] active:scale-[.98] disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        <span>Enviando solicitud técnica...</span>
                      </>
                    ) : (
                      <>
                        <span>Enviar Consulta Técnica</span>
                        <Send size={18} />
                      </>
                    )}
                  </button>

                  <p className="mt-4 text-center text-[11px] leading-relaxed text-[#fff7ee]/60">
                    Al enviar este formulario, usted acepta nuestra{" "}
                    <a
                      href="/privacidad/"
                      className="text-[#a78bfa] underline hover:text-white transition-colors"
                    >
                      Política de Privacidad
                    </a>
                    . Sus datos son confidenciales y serán tratados exclusivamente para responder su requerimiento técnico.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
