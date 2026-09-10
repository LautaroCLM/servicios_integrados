import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import BlogIndex from "@/pages/BlogIndex";
import AutonomousMaintenanceArticle from "@/pages/articles/AutonomousMaintenanceArticle";
import CorrectiveVsPreventiveArticle from "@/pages/articles/CorrectiveVsPreventiveArticle";
import IndustrialOverhaulArticle from "@/pages/articles/IndustrialOverhaulArticle";
import PlantShutdownsArticle from "@/pages/articles/PlantShutdownsArticle";
import PredictiveMaintenanceArticle from "@/pages/articles/PredictiveMaintenanceArticle";
import PreventiveMaintenanceArticle from "@/pages/articles/PreventiveMaintenanceArticle";
import RootCauseAnalysisArticle from "@/pages/articles/RootCauseAnalysisArticle";
import IndustrialMaintenance from "@/pages/IndustrialMaintenance";
import IndustrialOvensMaintenance from "@/pages/IndustrialOvensMaintenance";
import IndustrialRefrigeration from "@/pages/IndustrialRefrigeration";
import IndustrialReliability from "@/pages/IndustrialReliability";
import MachiningTurnery from "@/pages/MachiningTurnery";
import MaintenanceEngineering from "@/pages/MaintenanceEngineering";
import NotFound from "@/pages/NotFound";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import StainlessSteelManufacturing from "@/pages/StainlessSteelManufacturing";
import { Route, Switch } from "wouter";
import { lazy, Suspense } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

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
      <Route path={"/ingenieria-de-mantenimiento"} component={MaintenanceEngineering} />
      <Route path={"/confiabilidad-industrial"} component={IndustrialReliability} />
      <Route path={"/torneria-mecanizado"} component={MachiningTurnery} />
      <Route path={"/fabricacion-acero-inoxidable"} component={StainlessSteelManufacturing} />
      <Route path={"/refrigeracion-industrial"} component={IndustrialRefrigeration} />
      <Route path={"/mantenimiento-hornos-industriales"} component={IndustrialOvensMaintenance} />
      <Route path={"/blog"} component={BlogIndex} />
      <Route path={"/blog/mantenimiento-preventivo-industrial"} component={PreventiveMaintenanceArticle} />
      <Route path={"/blog/mantenimiento-predictivo-industrial"} component={PredictiveMaintenanceArticle} />
      <Route path={"/blog/mantenimiento-correctivo-vs-preventivo"} component={CorrectiveVsPreventiveArticle} />
      <Route path={"/blog/paradas-de-planta-industriales"} component={PlantShutdownsArticle} />
      <Route path={"/blog/overhaul-industrial"} component={IndustrialOverhaulArticle} />
      <Route path={"/blog/analisis-causa-raiz-mantenimiento"} component={RootCauseAnalysisArticle} />
      <Route path={"/blog/confiabilidad-industrial-mantenimiento-autonomo"} component={AutonomousMaintenanceArticle} />
      <Route path={"/privacidad"} component={PrivacyPolicy} />
      <Route path={"/politica-de-privacidad"} component={PrivacyPolicy} />
      <Route path={"/panel-novedades-gestion-si"} component={AdminRoute} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
