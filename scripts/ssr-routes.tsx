import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import Home from "../client/src/pages/Home.js";
import IndustrialMaintenance from "../client/src/pages/IndustrialMaintenance.js";
import MaintenanceEngineering from "../client/src/pages/MaintenanceEngineering.js";
import IndustrialReliability from "../client/src/pages/IndustrialReliability.js";
import MachiningTurnery from "../client/src/pages/MachiningTurnery.js";
import StainlessSteelManufacturing from "../client/src/pages/StainlessSteelManufacturing.js";
import IndustrialRefrigeration from "../client/src/pages/IndustrialRefrigeration.js";
import IndustrialOvensMaintenance from "../client/src/pages/IndustrialOvensMaintenance.js";
import BlogIndex from "../client/src/pages/BlogIndex.js";
import PreventiveMaintenanceArticle from "../client/src/pages/articles/PreventiveMaintenanceArticle.js";
import PredictiveMaintenanceArticle from "../client/src/pages/articles/PredictiveMaintenanceArticle.js";
import CorrectiveVsPreventiveArticle from "../client/src/pages/articles/CorrectiveVsPreventiveArticle.js";
import PlantShutdownsArticle from "../client/src/pages/articles/PlantShutdownsArticle.js";
import IndustrialOverhaulArticle from "../client/src/pages/articles/IndustrialOverhaulArticle.js";
import RootCauseAnalysisArticle from "../client/src/pages/articles/RootCauseAnalysisArticle.js";
import AutonomousMaintenanceArticle from "../client/src/pages/articles/AutonomousMaintenanceArticle.js";
import PrivacyPolicy from "../client/src/pages/PrivacyPolicy.js";

export const routesMap: Record<string, React.ComponentType> = {
  "/": Home,
  "/mantenimiento-industrial": IndustrialMaintenance,
  "/ingenieria-de-mantenimiento": MaintenanceEngineering,
  "/confiabilidad-industrial": IndustrialReliability,
  "/torneria-mecanizado": MachiningTurnery,
  "/fabricacion-acero-inoxidable": StainlessSteelManufacturing,
  "/refrigeracion-industrial": IndustrialRefrigeration,
  "/mantenimiento-hornos-industriales": IndustrialOvensMaintenance,
  "/blog": BlogIndex,
  "/blog/mantenimiento-preventivo-industrial": PreventiveMaintenanceArticle,
  "/blog/mantenimiento-predictivo-industrial": PredictiveMaintenanceArticle,
  "/blog/mantenimiento-correctivo-vs-preventivo": CorrectiveVsPreventiveArticle,
  "/blog/paradas-de-planta-industriales": PlantShutdownsArticle,
  "/blog/overhaul-industrial": IndustrialOverhaulArticle,
  "/blog/analisis-causa-raiz-mantenimiento": RootCauseAnalysisArticle,
  "/blog/confiabilidad-industrial-mantenimiento-autonomo": AutonomousMaintenanceArticle,
  "/privacidad": PrivacyPolicy,
};

export function renderRouteHtml(path: string): string {
  const Component = routesMap[path];
  if (!Component) return "";

  // Set up SSR location context
  if (typeof (globalThis as any).location === "undefined") {
    (globalThis as any).location = {
      pathname: path,
      search: "",
      hash: "",
      origin: "https://serviciosintegradosweb.com",
      href: "https://serviciosintegradosweb.com" + path,
    };
  } else {
    (globalThis as any).location.pathname = path;
    (globalThis as any).location.href = "https://serviciosintegradosweb.com" + path;
  }

  return renderToString(
    React.createElement(
      Router,
      { ssrPath: path },
      React.createElement(Component)
    )
  );
}
