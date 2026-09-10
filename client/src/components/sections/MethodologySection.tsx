import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  Award,
  Calculator,
  ClipboardCheck,
  Droplets,
  Gauge,
  GraduationCap,
  SearchCheck,
  ShieldAlert,
  ShieldCheck,
  Stethoscope,
  TrendingUp,
} from "lucide-react";
import type { ReactNode } from "react";

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
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}

interface MethodologyItem {
  id: string;
  title: string;
  icon: ReactNode;
  category: string;
}

const methodologyData: MethodologyItem[] = [
  {
    id: "01",
    title: "Entrenamiento en mantenimiento.",
    icon: <GraduationCap size={24} className="text-[#a78bfa]" />,
    category: "Liderazgo y Formación",
  },
  {
    id: "02",
    title: "Diagnóstico técnico.",
    icon: <Stethoscope size={24} className="text-[#a78bfa]" />,
    category: "Evaluación Inicial",
  },
  {
    id: "03",
    title: "Detección, contención y eliminación de fuentes de contaminación.",
    icon: <ShieldAlert size={24} className="text-[#a78bfa]" />,
    category: "Control Operativo",
  },
  {
    id: "04",
    title: "Análisis de criticidad de equipos.",
    icon: <Activity size={24} className="text-[#a78bfa]" />,
    category: "Ingeniería de Activos",
  },
  {
    id: "05",
    title: "Mantenimiento LIL: limpieza, inspección y lubricación.",
    icon: <Droplets size={24} className="text-[#a78bfa]" />,
    category: "Mantenimiento Autónomo",
  },
  {
    id: "06",
    title: "Análisis de falla y soporte técnico en búsqueda de causa raíz.",
    icon: <SearchCheck size={24} className="text-[#a78bfa]" />,
    category: "Confiabilidad",
  },
  {
    id: "07",
    title: "Concepto de cero pérdidas.",
    icon: <TrendingUp size={24} className="text-[#a78bfa]" />,
    category: "Filosofía Operativa",
  },
  {
    id: "08",
    title: "Búsqueda de productividad en equipos y líneas.",
    icon: <Gauge size={24} className="text-[#a78bfa]" />,
    category: "Optimización de Procesos",
  },
  {
    id: "09",
    title: "Soporte técnico en pre-auditorías de calidad y seguridad.",
    icon: <ClipboardCheck size={24} className="text-[#a78bfa]" />,
    category: "Cumplimiento Normativo",
  },
  {
    id: "10",
    title: "Ejecución de casos de mejora (Kaizen).",
    icon: <Award size={24} className="text-[#a78bfa]" />,
    category: "Mejora Continua",
  },
  {
    id: "11",
    title: "Soporte técnico en finanzas y presupuestos.",
    icon: <Calculator size={24} className="text-[#a78bfa]" />,
    category: "Gestión Económica",
  },
  {
    id: "12",
    title: "Entrenamiento en la operación.",
    icon: <ShieldCheck size={24} className="text-[#a78bfa]" />,
    category: "Capacitación Operativa",
  },
];

export function MethodologySection() {
  return (
    <section
      id="metodologia"
      className="relative overflow-hidden bg-[#162229] px-5 py-24 text-[#fff7ee] md:px-10 md:py-36"
    >
      {/* Decorative ambient gradients */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-[#6d28d9]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-[#7c3aed]/15 blur-3xl" />

      <div className="relative mx-auto max-w-[1600px]">
        {/* Section Header */}
        <Reveal className="max-w-3xl">
          <p className="orange-dot eyebrow text-[#fff7ee]/80">
            Procesos y Herramientas Técnicas
          </p>
          <h2 className="headline mt-4 text-[clamp(2.1rem,5.5vw,5.5rem)] uppercase">
            METODOLOGÍA Y <span className="text-[#a78bfa]">HERRAMIENTAS</span>
          </h2>
          <p className="mt-6 text-base leading-7 text-[#fff7ee]/75 md:text-lg">
            Implantamos herramientas sistemáticas y probadas en planta para asegurar la confiabilidad, eliminar pérdidas y potenciar la productividad operativa de cada equipo.
          </p>
        </Reveal>

        {/* 12 Methodology Items Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {methodologyData.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.04}>
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#10181d]/70 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#a78bfa]/50 hover:bg-[#10181d]/95 hover:shadow-xl hover:shadow-[#6d28d9]/10">
                {/* Subtle top border accent on hover */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#a78bfa]/0 to-transparent transition-all duration-500 group-hover:via-[#a78bfa]" />

                <div>
                  {/* Card Header: Badge & Number */}
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xs font-bold uppercase tracking-wider text-[#a78bfa]/80">
                      {item.category}
                    </span>
                    <span className="font-display text-xs font-extrabold tracking-widest text-[#fff7ee]/40 group-hover:text-[#a78bfa]">
                      #{item.id}
                    </span>
                  </div>

                  {/* Icon Container */}
                  <div className="mt-5 grid h-12 w-12 place-items-center rounded-lg border border-white/10 bg-white/5 transition-transform duration-300 group-hover:scale-110 group-hover:border-[#a78bfa]/40 group-hover:bg-[#6d28d9]/20">
                    {item.icon}
                  </div>

                  {/* Title / Description */}
                  <p className="mt-4 text-base font-semibold leading-snug text-[#fff7ee] group-hover:text-white">
                    {item.title}
                  </p>
                </div>

                {/* Subtle indicator bottom */}
                <div className="mt-6 flex items-center gap-2 pt-2 text-[0.7rem] font-bold uppercase tracking-wider text-[#fff7ee]/40 group-hover:text-[#a78bfa]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#a78bfa]" />
                  <span>Estándar Operativo</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Banner Note */}
        <Reveal delay={0.3} className="mt-16">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-[#a78bfa]/30 bg-gradient-to-r from-[#6d28d9]/20 via-[#10181d] to-[#162229] p-8 md:flex-row md:p-10">
            <div className="max-w-2xl">
              <span className="inline-block rounded-full bg-[#6d28d9]/30 px-3 py-1 font-display text-xs font-bold uppercase tracking-wider text-[#a78bfa]">
                Enfoque de Excelencia Industrial
              </span>
              <h3 className="mt-3 font-display text-xl font-bold text-[#fff7ee] md:text-2xl">
                Metodologías integradas para resultados medibles en planta
              </h3>
              <p className="mt-2 text-sm text-[#fff7ee]/75">
                Cada una de estas herramientas se adapta a la realidad específica de tu empresa, garantizando transferencias de conocimiento efectivas y sosteniendo las mejoras en el tiempo.
              </p>
            </div>
            <a
              href="#contacto"
              className="safety-button whitespace-nowrap rounded-lg shadow-lg hover:shadow-[#6d28d9]/40"
            >
              Solicitar Asesoría Técnica
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
