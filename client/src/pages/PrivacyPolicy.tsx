import { ArrowLeft, ArrowUpRight, CheckCircle2, Lock, Mail, MessageSquare, Phone, Shield } from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";

export default function PrivacyPolicy() {
  // Update SEO head metadata on mount and restore on unmount
  useEffect(() => {
    window.scrollTo(0, 0);

    const prevTitle = document.title;
    document.title = "Política de Privacidad | Servicios Integrados";

    // Description meta tag
    let descMeta = document.querySelector('meta[name="description"]');
    const prevDesc = descMeta ? descMeta.getAttribute("content") : "";
    if (descMeta) {
      descMeta.setAttribute(
        "content",
        "Política de privacidad y tratamiento de datos personales de Servicios Integrados conforme a la Ley N° 25.326 de la República Argentina."
      );
    }

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonicalLink ? canonicalLink.getAttribute("href") : "";
    if (canonicalLink) {
      canonicalLink.setAttribute("href", "https://serviciosintegradosweb.com/privacidad/");
    }

    return () => {
      document.title = prevTitle;
      if (descMeta && prevDesc) {
        descMeta.setAttribute("content", prevDesc);
      }
      if (canonicalLink && prevCanonical) {
        canonicalLink.setAttribute("href", prevCanonical);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#10181d] text-[#fff7ee] selection:bg-[#6d28d9] selection:text-white flex flex-col justify-between">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#10181d]/90 backdrop-blur-md">
        <div className="mx-auto flex h-[76px] max-w-[1600px] items-center justify-between px-5 md:h-[88px] md:px-10">
          <Link
            href="/"
            aria-label="Servicios Integrados — Volver al Inicio"
            className="group flex items-center gap-3 cursor-pointer"
          >
            <div className="relative h-11 w-11 overflow-hidden rounded-full border border-white/20 bg-white/10 p-1 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
              <img
                src="/img/logoapp2.webp"
                alt="Servicios Integrados — Mantenimiento, Ingeniería y Confiabilidad Industrial"
                loading="eager"
                decoding="async"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="text-[#fff7ee]">
              <div className="font-display text-[1.25rem] font-bold leading-none tracking-[-0.05em] uppercase">
                Servicios <span className="text-[#a78bfa]">Integrados</span>
              </div>
              <div className="mt-1 hidden text-[0.6875rem] font-bold uppercase tracking-[0.14em] opacity-80 sm:block">
                Mantenimiento · Ingeniería · Confiabilidad
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2 font-display text-xs font-bold uppercase tracking-[.09em] text-[#fff7ee] transition-all hover:bg-white/10 cursor-pointer"
            >
              <ArrowLeft size={15} /> Volver al Inicio
            </Link>
            <a
              href="/#contacto"
              className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-[#6d28d9] px-4 py-2 font-display text-xs font-bold uppercase tracking-[.09em] text-white transition-all hover:bg-[#5b21b6]"
            >
              Contacto Directo <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </header>

      {/* Main Privacy Policy Container */}
      <main className="relative mx-auto max-w-4xl px-5 py-12 md:py-20 flex-1">
        {/* Ambient background glow */}
        <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#6d28d9]/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-80 h-72 w-72 rounded-full bg-[#7c3aed]/10 blur-3xl" />

        <div className="relative z-10">
          {/* Badge & Title */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#a78bfa]/30 bg-[#6d28d9]/20 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#a78bfa]">
            <Shield size={14} /> Compromiso de Privacidad y Transparencia
          </div>

          <h1 className="font-display mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Política de Privacidad
          </h1>

          <p className="mt-4 text-sm text-[#fff7ee]/70 sm:text-base">
            Última actualización: <strong>Agosto de 2026</strong>. En <strong>Servicios Integrados</strong> valoramos la confianza de nuestros clientes, proveedores y visitantes, y nos comprometemos a proteger sus datos personales con absoluta seriedad y apego a las leyes aplicables de la República Argentina (Ley N° 25.326 de Protección de los Datos Personales).
          </p>

          <hr className="my-8 border-white/10" />

          {/* Policy Sections */}
          <div className="space-y-10 text-sm leading-relaxed text-[#fff7ee]/85 sm:text-base">
            {/* Section 1: Responsible Party */}
            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-white flex items-center gap-2">
                <span className="text-[#a78bfa]">01.</span> Responsable del Tratamiento
              </h2>
              <p>
                El presente sitio web es administrado por <strong>Servicios Integrados</strong> (Responsable Técnico: <strong>Antonio Andrada</strong>), prestadora de servicios de ingeniería, mantenimiento industrial, mecanizado 24 hs y consultoría técnica para la industria alimentaria y afines en la República Argentina.
              </p>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-xs sm:text-sm text-[#fff7ee]/80">
                <p>
                  Para cualquier consulta relativa a la gestión de datos, requerimientos societarios formales o contacto institucional, puede comunicarse a:
                </p>
                <ul className="mt-2 space-y-1 font-semibold text-white">
                  <li>• Correo Electrónico: <a href="mailto:antonioa@serviciosintegradosweb.com" className="text-[#a78bfa] underline">antonioa@serviciosintegradosweb.com</a></li>
                  <li>• Teléfono / WhatsApp: <a href="https://wa.me/5491140705211" target="_blank" rel="noopener noreferrer" className="text-[#a78bfa] underline">+54 9 11 4070-5211</a> / <a href="tel:+5491150705211" className="text-[#a78bfa] underline">+54 9 11 5070-5211</a></li>
                </ul>
              </div>
            </section>

            {/* Section 2: Data Collected */}
            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-white flex items-center gap-2">
                <span className="text-[#a78bfa]">02.</span> Datos que Recopila este Sitio Web
              </h2>
              <p>
                Nuestra web recopila <strong>única y exclusivamente</strong> la información que usted decide proporcionar de forma libre y voluntaria a través de nuestro formulario de contacto y solicitud de visita técnica:
              </p>
              <ul className="grid gap-2 sm:grid-cols-2 pt-2 text-xs sm:text-sm">
                <li className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-3">
                  <CheckCircle2 size={16} className="text-[#a78bfa] shrink-0" />
                  <span><strong>Nombre y Apellido</strong> del solicitante</span>
                </li>
                <li className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-3">
                  <CheckCircle2 size={16} className="text-[#a78bfa] shrink-0" />
                  <span><strong>Empresa / Planta Industrial</strong></span>
                </li>
                <li className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-3">
                  <CheckCircle2 size={16} className="text-[#a78bfa] shrink-0" />
                  <span><strong>Teléfono / WhatsApp</strong> de contacto directo</span>
                </li>
                <li className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-3">
                  <CheckCircle2 size={16} className="text-[#a78bfa] shrink-0" />
                  <span><strong>Correo Electrónico</strong> corporativo o personal</span>
                </li>
                <li className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-3">
                  <CheckCircle2 size={16} className="text-[#a78bfa] shrink-0" />
                  <span><strong>Tipo de Servicio Requerido</strong></span>
                </li>
                <li className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-3">
                  <CheckCircle2 size={16} className="text-[#a78bfa] shrink-0" />
                  <span><strong>Mensaje / Detalle Técnico</strong> de la consulta</span>
                </li>
              </ul>
              <p className="pt-2 text-xs text-[#fff7ee]/65">
                No solicitamos datos financieros, números de tarjetas de crédito ni datos sensibles a través de esta plataforma pública.
              </p>
            </section>

            {/* Section 3: Purpose */}
            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-white flex items-center gap-2">
                <span className="text-[#a78bfa]">03.</span> Finalidad del Tratamiento
              </h2>
              <p>
                Los datos recibidos son utilizados estrictamente para los siguientes fines legítimos:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-[#fff7ee]/85">
                <li>Responder a requerimientos comerciales, diagnósticos y consultas técnicas enviadas por usuarios o representantes de plantas industriales.</li>
                <li>Coordinar visitas técnicas en campo, evaluaciones de línea o presupuestos de mantenimiento, mecanizado y fabricación.</li>
                <li>Mantener una comunicación fluida y profesional entre nuestro equipo de ingeniería y su empresa durante la gestión del servicio.</li>
              </ul>
            </section>

            {/* Section 4: Confidentiality & Third Parties */}
            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-white flex items-center gap-2">
                <span className="text-[#a78bfa]">04.</span> Confidencialidad y No Cesión a Terceros
              </h2>
              <div className="rounded-xl border border-[#a78bfa]/30 bg-[#6d28d9]/10 p-4 sm:p-5 flex items-start gap-4">
                <Lock size={24} className="text-[#a78bfa] shrink-0 mt-1" />
                <div className="text-xs sm:text-sm">
                  <p className="font-bold text-white mb-1">
                    Cero Venta o Comercialización de Datos
                  </p>
                  <p className="text-[#fff7ee]/85">
                    <strong>Servicios Integrados</strong> bajo ninguna circunstancia vende, arrienda, comercializa ni transfiere los datos personales o empresariales recopilados a terceros con fines publicitarios, masivos o comerciales.
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#fff7ee]/75">
                La información solo es accesible por el personal técnico y administrativo autorizado y directamente asignado a dar curso a su requerimiento.
              </p>
            </section>

            {/* Section 5: Cookies & Storage */}
            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-white flex items-center gap-2">
                <span className="text-[#a78bfa]">05.</span> Cookies y Tecnologías de Almacenamiento
              </h2>
              <p>
                Este sitio web opera bajo un criterio estricto de privacidad por diseño:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-[#fff7ee]/85">
                <li><strong>Cookies Técnicas y Funcionales:</strong> Se emplean exclusivamente para permitir la correcta navegación web, mantener preferencias de interfaz visual y proteger el formulario contra envíos automatizados o ataques de spam (rate limiting).</li>
                <li><strong>Sin Rastreo Invasivo:</strong> No utilizamos cookies de perfilado comercial, trackers publicitarios de terceros ni redes de seguimiento cruzado.</li>
              </ul>
            </section>

            {/* Section 6: User Rights */}
            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-white flex items-center gap-2">
                <span className="text-[#a78bfa]">06.</span> Derechos del Titular de los Datos (ARCO)
              </h2>
              <p>
                Conforme a la <strong>Ley Nacional N° 25.326</strong> de Protección de los Datos Personales de la República Argentina, usted tiene derecho a:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-[#fff7ee]/85">
                <li><strong>Acceder</strong> a los datos personales que tengamos registrados sobre su persona o empresa.</li>
                <li>Solicitar la <strong>rectificación o actualización</strong> de datos inexactos o desactualizados.</li>
                <li>Solicitar la <strong>supresión o cancelación</strong> definitiva de sus datos de nuestros registros cuando así lo desee.</li>
              </ul>
              <p className="pt-2 text-xs sm:text-sm">
                Para ejercer cualquiera de estos derechos sin costo alguno, basta con remitir un correo electrónico con su solicitud a <a href="mailto:antonioa@serviciosintegradosweb.com" className="text-[#a78bfa] underline font-semibold">antonioa@serviciosintegradosweb.com</a> o comunicarse vía WhatsApp al <a href="https://wa.me/5491140705211" target="_blank" rel="noopener noreferrer" className="text-[#a78bfa] underline font-semibold">11 4070-5211</a>.
              </p>
            </section>

            {/* Section 7: Security Measures */}
            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-white flex items-center gap-2">
                <span className="text-[#a78bfa]">07.</span> Seguridad de la Información
              </h2>
              <p>
                Adoptamos medidas técnicas y organizativas adecuadas para proteger la información contra accesos no autorizados, pérdidas o alteraciones, incluyendo canales de comunicación cifrados (HTTPS) y filtros anti-spam del lado del servidor.
              </p>
            </section>

            {/* Section 8: Changes */}
            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-white flex items-center gap-2">
                <span className="text-[#a78bfa]">08.</span> Modificaciones a esta Política
              </h2>
              <p>
                Nos reservamos el derecho de actualizar esta Política de Privacidad para adecuarla a novedades técnicas, regulatorias o de servicio. Cualquier cambio sustancial será debidamente publicado en esta misma sección.
              </p>
            </section>
          </div>

          {/* Quick Actions Box */}
          <div className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-lg font-bold text-white">¿Tiene alguna duda o consulta técnica?</h3>
              <p className="mt-1 text-xs sm:text-sm text-[#fff7ee]/70">
                Estamos a su disposición para coordinar una visita técnica a su planta industrial.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 w-full sm:w-auto">
              <Link
                href="/"
                className="safety-button inline-flex items-center justify-center gap-2 rounded-lg cursor-pointer flex-1 sm:flex-none"
              >
                Volver a la Web
              </Link>
              <a
                href="https://wa.me/5491140705211?text=Hola%20Servicios%20Integrados,%20quisiera%20hacer%20una%20consulta%20técnica."
                target="_blank"
                rel="noopener noreferrer"
                className="outline-button inline-flex items-center justify-center gap-2 rounded-lg text-[#fff7ee] flex-1 sm:flex-none"
              >
                <MessageSquare size={16} className="text-[#a78bfa]" /> WhatsApp Directo
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Bar */}
      <footer className="border-t border-white/10 bg-[#10181d] px-5 py-6 text-xs text-[#fff7ee]/50">
        <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left md:px-10">
          <p>© {new Date().getFullYear()} Servicios Integrados — Mantenimiento, Ingeniería y Confiabilidad Industrial.</p>
          <div className="flex items-center gap-4">
            <a href="tel:+5491150705211" className="hover:text-white transition-colors">
              Tel: +54 9 11 5070-5211
            </a>
            <span>•</span>
            <a href="mailto:antonioa@serviciosintegradosweb.com" className="hover:text-white transition-colors">
              antonioa@serviciosintegradosweb.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
