export function TrustBand() {
  return (
    <section className="border-y border-[#f4f1e8]/15 bg-[#10181d] px-5 py-6 md:px-10">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-6 md:grid-cols-[1fr_auto] md:items-center">
        <p className="font-display text-sm font-medium tracking-[-.02em] text-[#fff7ee]/85">
          "Una intervención técnica debe devolverle a la planta algo más que una pieza reparada: debe devolverle ritmo y confianza."
        </p>
        <div className="flex flex-wrap gap-x-7 gap-y-3 eyebrow text-[#fff7ee]/60">
          <span>Disponibilidad</span>
          <span className="text-[#7c3aed]">/</span>
          <span>Eficiencia</span>
          <span className="text-[#7c3aed]">/</span>
          <span>Mentalidad Cero Pérdidas</span>
          <span className="text-[#7c3aed]">/</span>
          <span>Tornería 24hs</span>
        </div>
      </div>
    </section>
  );
}
