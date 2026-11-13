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
import { AppShell } from "../client/src/App.js";

export const routesMap: Record<string, React.ComponentType> = {
  "/": Home,
  "/mantenimiento-industrial": IndustrialMaintenance,
  "/mantenimiento-industrial/": IndustrialMaintenance,
  "/ingenieria-de-mantenimiento": MaintenanceEngineering,
  "/ingenieria-de-mantenimiento/": MaintenanceEngineering,
  "/confiabilidad-industrial": IndustrialReliability,
  "/confiabilidad-industrial/": IndustrialReliability,
  "/torneria-mecanizado": MachiningTurnery,
  "/torneria-mecanizado/": MachiningTurnery,
  "/fabricacion-acero-inoxidable": StainlessSteelManufacturing,
  "/fabricacion-acero-inoxidable/": StainlessSteelManufacturing,
  "/refrigeracion-industrial": IndustrialRefrigeration,
  "/refrigeracion-industrial/": IndustrialRefrigeration,
  "/mantenimiento-hornos-industriales": IndustrialOvensMaintenance,
  "/mantenimiento-hornos-industriales/": IndustrialOvensMaintenance,
  "/blog": BlogIndex,
  "/blog/": BlogIndex,
  "/blog/mantenimiento-preventivo-industrial": PreventiveMaintenanceArticle,
  "/blog/mantenimiento-preventivo-industrial/": PreventiveMaintenanceArticle,
  "/blog/mantenimiento-predictivo-industrial": PredictiveMaintenanceArticle,
  "/blog/mantenimiento-predictivo-industrial/": PredictiveMaintenanceArticle,
  "/blog/mantenimiento-correctivo-vs-preventivo": CorrectiveVsPreventiveArticle,
  "/blog/mantenimiento-correctivo-vs-preventivo/": CorrectiveVsPreventiveArticle,
  "/blog/paradas-de-planta-industriales": PlantShutdownsArticle,
  "/blog/paradas-de-planta-industriales/": PlantShutdownsArticle,
  "/blog/overhaul-industrial": IndustrialOverhaulArticle,
  "/blog/overhaul-industrial/": IndustrialOverhaulArticle,
  "/blog/analisis-causa-raiz-mantenimiento": RootCauseAnalysisArticle,
  "/blog/analisis-causa-raiz-mantenimiento/": RootCauseAnalysisArticle,
  "/blog/confiabilidad-industrial-mantenimiento-autonomo": AutonomousMaintenanceArticle,
  "/blog/confiabilidad-industrial-mantenimiento-autonomo/": AutonomousMaintenanceArticle,
  "/privacidad": PrivacyPolicy,
  "/privacidad/": PrivacyPolicy,
};

export function renderRouteHtml(path: string): string {
  const normalizedPath = path === "/" ? "/" : path.replace(/\/+$/, "");
  const Component = routesMap[path] || routesMap[normalizedPath] || routesMap[normalizedPath + "/"];
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

  // Mismo árbol que el cliente (AppShell + Suspense por ruta) para que hydrateRoot coincida.
  return renderToString(
    React.createElement(
      AppShell,
      null,
      React.createElement(
        Router,
        { ssrPath: path },
        React.createElement(React.Suspense, { fallback: null }, React.createElement(Component))
      )
    )
  );
}
