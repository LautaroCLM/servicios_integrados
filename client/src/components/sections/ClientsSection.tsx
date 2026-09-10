import { motion, useReducedMotion } from "framer-motion";
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
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}

const clientsList = [
  "Bonafide",
  "Nevares",
  "Alfajor Jorgito",
  "Codeland (Chocolates Premium)",
  "El Makzal",
  "El Paulista (Biznikke)",
  "Risbio",
  "Pilares Compañía Alimenticia",
  "Icedream (Frozen Food)",
  "Fideos 308",
];

export function ClientsSection() {
  return (
    <section id="clientes" className="relative bg-[#10181d] px-5 py-24 text-[#fff7ee] md:px-10 md:py-36">
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="text-center">
          <p className="orange-dot eyebrow mx-auto w-fit text-[#fff7ee]/80">Trayectoria Comprobada</p>
          <h2 className="headline mt-4 text-[clamp(2.1rem,5.5vw,5.5rem)]">
            Empresas que confían en nuestro trabajo.
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-sm text-[#fff7ee]/70 md:text-base">
            Trabajamos junto a las empresas líderes del sector alimenticio para garantizar la continuidad técnica de sus líneas de producción.
          </p>
        </Reveal>

        {/* Real image showcase from presentation */}
        <Reveal delay={0.15} className="mt-14">
          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <img
              src="/images/empresas_confian.webp"
              alt="Empresas que confían en Servicios Integrados: Bonafide, Nevares, Alfajor Jorgito, Codeland, El Paulista Biznikke, Fideos 308, Risbio, Pilares Compañía Alimenticia, Icedream, El Makzal"
              loading="lazy"
              decoding="async"
              className="w-full object-cover"
            />
          </div>
        </Reveal>

        {/* Text badges for accessibility */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {clientsList.map((client) => (
            <div
              key={client}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wide text-[#fff7ee]/80 transition-colors hover:border-[#7c3aed] hover:text-[#fff7ee]"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
