import { NovedadesButton } from "@/components/NovedadesButton";
import { AboutSection } from "@/components/sections/AboutSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FaroSection } from "@/components/sections/FaroSection";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { SectorsSection } from "@/components/sections/SectorsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TrustBand } from "@/components/sections/TrustBand";

/**
 * SISTEMA DE PRECISIÓN — Web Corporativa Servicios Integrados
 * Mantenimiento, Ingeniería y Confiabilidad Industrial para la Industria Alimentaria.
 */
export default function Home() {
  return (
    <div id="inicio" className="bg-[#10181d] text-[#fff7ee] selection:bg-[#6d28d9] selection:text-white">
      <Header />
      <main>
        <Hero />
        <TrustBand />
        <AboutSection />
        <ServicesSection />
        <SectorsSection />
        <FaroSection />
        <MethodologySection />
        <ClientsSection />
        <ContactSection />
      </main>
      <Footer />
      <NovedadesButton />
    </div>
  );
}
