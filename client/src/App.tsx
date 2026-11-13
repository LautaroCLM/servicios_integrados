import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import { lazy, Suspense, type ComponentType, type ReactNode } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

/**
 * Cada página se descarga por separado (code splitting). El <Suspense> de cada ruta
 * también se usa en el prerender (scripts/ssr-routes.tsx), así el HTML estático queda
 * visible mientras se descarga el JS de la página y React lo hidrata sin re-dibujarlo.
 */
function page(loader: () => Promise<{ default: ComponentType }>) {
  const LazyPage = lazy(loader);
  return function Page() {
    return (
      <Suspense fallback={null}>
        <LazyPage />
      </Suspense>
    );
  };
}

const Home = page(() => import("./pages/Home"));
const IndustrialMaintenance = page(() => import("@/pages/IndustrialMaintenance"));
const MaintenanceEngineering = page(() => import("@/pages/MaintenanceEngineering"));
const IndustrialReliability = page(() => import("@/pages/IndustrialReliability"));
const MachiningTurnery = page(() => import("@/pages/MachiningTurnery"));
const StainlessSteelManufacturing = page(() => import("@/pages/StainlessSteelManufacturing"));
const IndustrialRefrigeration = page(() => import("@/pages/IndustrialRefrigeration"));
const IndustrialOvensMaintenance = page(() => import("@/pages/IndustrialOvensMaintenance"));
const BlogIndex = page(() => import("@/pages/BlogIndex"));
const PreventiveMaintenanceArticle = page(() => import("@/pages/articles/PreventiveMaintenanceArticle"));
const PredictiveMaintenanceArticle = page(() => import("@/pages/articles/PredictiveMaintenanceArticle"));
const CorrectiveVsPreventiveArticle = page(() => import("@/pages/articles/CorrectiveVsPreventiveArticle"));
const PlantShutdownsArticle = page(() => import("@/pages/articles/PlantShutdownsArticle"));
const IndustrialOverhaulArticle = page(() => import("@/pages/articles/IndustrialOverhaulArticle"));
const RootCauseAnalysisArticle = page(() => import("@/pages/articles/RootCauseAnalysisArticle"));
const AutonomousMaintenanceArticle = page(() => import("@/pages/articles/AutonomousMaintenanceArticle"));
const PrivacyPolicy = page(() => import("@/pages/PrivacyPolicy"));
const NotFound = page(() => import("@/pages/NotFound"));

const AdminNovedades = lazy(() => import("./pages/AdminNovedades"));

function AdminRoute() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#10181d] flex items-center justify-center text-white">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#a78bfa] border-t-transparent" />
        </div>
      }
    >
      <AdminNovedades />
    </Suspense>
  );
}

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/mantenimiento-industrial"} component={IndustrialMaintenance} />
      <Route path={"/mantenimiento-industrial/"} component={IndustrialMaintenance} />
      <Route path={"/ingenieria-de-mantenimiento"} component={MaintenanceEngineering} />
      <Route path={"/ingenieria-de-mantenimiento/"} component={MaintenanceEngineering} />
      <Route path={"/confiabilidad-industrial"} component={IndustrialReliability} />
      <Route path={"/confiabilidad-industrial/"} component={IndustrialReliability} />
      <Route path={"/torneria-mecanizado"} component={MachiningTurnery} />
      <Route path={"/torneria-mecanizado/"} component={MachiningTurnery} />
      <Route path={"/fabricacion-acero-inoxidable"} component={StainlessSteelManufacturing} />
      <Route path={"/fabricacion-acero-inoxidable/"} component={StainlessSteelManufacturing} />
      <Route path={"/refrigeracion-industrial"} component={IndustrialRefrigeration} />
      <Route path={"/refrigeracion-industrial/"} component={IndustrialRefrigeration} />
      <Route path={"/mantenimiento-hornos-industriales"} component={IndustrialOvensMaintenance} />
      <Route path={"/mantenimiento-hornos-industriales/"} component={IndustrialOvensMaintenance} />
      <Route path={"/blog"} component={BlogIndex} />
      <Route path={"/blog/"} component={BlogIndex} />
      <Route path={"/blog/mantenimiento-preventivo-industrial"} component={PreventiveMaintenanceArticle} />
      <Route path={"/blog/mantenimiento-preventivo-industrial/"} component={PreventiveMaintenanceArticle} />
      <Route path={"/blog/mantenimiento-predictivo-industrial"} component={PredictiveMaintenanceArticle} />
      <Route path={"/blog/mantenimiento-predictivo-industrial/"} component={PredictiveMaintenanceArticle} />
      <Route path={"/blog/mantenimiento-correctivo-vs-preventivo"} component={CorrectiveVsPreventiveArticle} />
      <Route path={"/blog/mantenimiento-correctivo-vs-preventivo/"} component={CorrectiveVsPreventiveArticle} />
      <Route path={"/blog/paradas-de-planta-industriales"} component={PlantShutdownsArticle} />
      <Route path={"/blog/paradas-de-planta-industriales/"} component={PlantShutdownsArticle} />
      <Route path={"/blog/overhaul-industrial"} component={IndustrialOverhaulArticle} />
      <Route path={"/blog/overhaul-industrial/"} component={IndustrialOverhaulArticle} />
      <Route path={"/blog/analisis-causa-raiz-mantenimiento"} component={RootCauseAnalysisArticle} />
      <Route path={"/blog/analisis-causa-raiz-mantenimiento/"} component={RootCauseAnalysisArticle} />
      <Route path={"/blog/confiabilidad-industrial-mantenimiento-autonomo"} component={AutonomousMaintenanceArticle} />
      <Route path={"/blog/confiabilidad-industrial-mantenimiento-autonomo/"} component={AutonomousMaintenanceArticle} />
      <Route path={"/privacidad"} component={PrivacyPolicy} />
      <Route path={"/privacidad/"} component={PrivacyPolicy} />
      <Route path={"/politica-de-privacidad"} component={PrivacyPolicy} />
      <Route path={"/politica-de-privacidad/"} component={PrivacyPolicy} />
      <Route path={"/panel-novedades-gestion-si"} component={AdminRoute} />
      <Route path={"/panel-novedades-gestion-si/"} component={AdminRoute} />
      <Route path={"/404"} component={NotFound} />
      <Route path={"/404/"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

/**
 * Proveedores globales. Se comparte con el prerender para que el HTML estático
 * y el árbol del cliente coincidan al hidratar.
 */
export function AppShell({ children }: { children: ReactNode }) {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          {children}
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

function App() {
  return (
    <AppShell>
      <Router />
    </AppShell>
  );
}

export default App;
