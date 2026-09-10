export interface FaqItem {
  id: string;
  category: "Mantenimiento" | "Industria y Plantas" | "Especialidades" | "Contacto y Presupuestos";
  question: string;
  answer: string;
  aliases?: string[];
  keywords?: string[];
}

export const FAQ_CATEGORIES = [
  "Todas",
  "Mantenimiento",
  "Industria y Plantas",
  "Especialidades",
  "Contacto y Presupuestos",
] as const;

export const SUGGESTED_QUESTIONS = [
  "¿Qué servicios ofrecen?",
  "¿Realizan visitas técnicas?",
  "¿Cómo solicito un presupuesto?",
  "¿Trabajan con hornos industriales?",
  "¿Tienen tornería de urgencia 24 hs?",
] as const;

export const FAQ_DATA: FaqItem[] = [
  {
    id: "servicios-ofrecen",
    category: "Mantenimiento",
    question: "¿Qué servicios ofrecen?",
    aliases: [
      "¿Qué servicios de mantenimiento realizan?",
      "que servicios ofrecen",
      "que servicios realizan",
      "servicios que ofrecen",
      "cuales son sus servicios",
      "que hacen",
    ],
    answer:
      "Brindamos soluciones integrales de mantenimiento industrial en modalidades preventiva, predictiva y correctiva. También realizamos overhaul de maquinaria, paradas de planta, puesta en marcha y calibraciones. Contamos además con especialización en hornos de obleas, líneas de chocolate, sistemas de refrigeración industrial, tornería y mecanizado, y fabricación en acero inoxidable.",
    keywords: ["servicios", "mantenimiento", "overhaul", "paradas", "plantas", "calibración", "ofrecen"],
  },
  {
    id: "visitas-tecnicas",
    category: "Contacto y Presupuestos",
    question: "¿Realizan visitas técnicas?",
    aliases: [
      "realizan visitas tecnicas",
      "hacen visitas tecnicas",
      "visitas tecnicas en planta",
      "pueden venir a la planta",
      "solicitar visita tecnica",
    ],
    answer:
      "Sí. Coordinamos visitas técnicas y diagnósticos especializados directamente en planta. Nuestro equipo releva el estado de los equipos, analiza las necesidades operativas y define la mejor propuesta técnica para cada caso.",
    keywords: ["visita técnica", "diagnóstico", "relevamiento", "planta", "visitas"],
  },
  {
    id: "solicitar-presupuesto",
    category: "Contacto y Presupuestos",
    question: "¿Cómo solicito un presupuesto?",
    aliases: [
      "¿Cómo puedo solicitar un presupuesto?",
      "como solicito un presupuesto",
      "como pedir cotizacion",
      "solicitar presupuesto",
      "pedir presupuesto",
      "cuanto cuesta",
      "como cotizar",
    ],
    answer:
      "Podés solicitar un presupuesto completando el formulario de contacto de nuestra web, comunicándote por WhatsApp o escribiéndonos por correo. Para una cotización más precisa, recomendamos indicar el equipo, servicio requerido y una breve descripción de la necesidad.",
    keywords: ["presupuesto", "cotización", "formulario", "whatsapp", "contacto", "precio"],
  },
  {
    id: "mantenimiento-hornos",
    category: "Especialidades",
    question: "¿Trabajan con hornos industriales?",
    aliases: [
      "¿Realizan mantenimiento de hornos industriales?",
      "trabajan con hornos industriales",
      "mantenimiento de hornos industriales",
      "hornos de obleas",
      "hornos wafer",
      "limpieza de planchas de horno",
    ],
    answer:
      "Sí. Contamos con especialización en hornos industriales, especialmente hornos de obleas (wafer) y líneas continuas de cocción. Realizamos limpieza técnica, mantenimiento, calibraciones, overhaul y trabajos sobre componentes asociados al sistema térmico.",
    keywords: ["hornos", "obleas", "wafer", "planchas", "limpieza", "placas", "desincrustación", "térmico"],
  },
  {
    id: "torneria-mecanizado",
    category: "Especialidades",
    question: "¿Tienen tornería de urgencia 24 hs?",
    aliases: [
      "¿Realizan trabajos de tornería y mecanizado?",
      "tienen torneria de urgencia 24 hs",
      "torneria 24 hs",
      "torneria y mecanizado de urgencia",
      "guardia de torneria",
      "repuestos de urgencia",
    ],
    answer:
      "Sí. Contamos con servicio de tornería y mecanizado con guardia activa para urgencias de planta. Fabricamos y mecanizamos repuestos según muestra o plano técnico, incluyendo ejes, bujes, bridas, engranajes y otros componentes mecánicos.",
    keywords: ["tornería", "mecanizado", "24 hs", "repuestos", "ejes", "bujes", "urgencias", "guardia"],
  },
  {
    id: "mantenimiento-preventivo",
    category: "Mantenimiento",
    question: "¿Realizan mantenimiento preventivo?",
    aliases: ["realizan mantenimiento preventivo", "hacen preventivo", "planes de mantenimiento preventivo"],
    answer:
      "Sí. Diseñamos y ejecutamos programas de mantenimiento preventivo adaptados a la operación de cada planta: inspecciones periódicas, lubricación bajo estándares LIL (Limpieza, Inspección y Lubricación), ajustes mecánicos y reemplazo planificado de componentes para evitar paradas no programadas y maximizar la vida útil de los equipos.",
    keywords: ["preventivo", "inspección", "lubricación", "LIL", "ajustes", "vida útil"],
  },
  {
    id: "mantenimiento-predictivo",
    category: "Mantenimiento",
    question: "¿Realizan mantenimiento predictivo?",
    aliases: ["realizan mantenimiento predictivo", "hacen predictivo", "monitoreo de condicion"],
    answer:
      "Sí. Realizamos monitoreo de condición operativa y seguimiento de parámetros críticos en maquinaria de producción continua. Esto permite identificar desgastes y anomalías antes de que ocurra una avería imprevista, planificando la intervención de manera eficiente.",
    keywords: ["predictivo", "monitoreo", "condición", "vibraciones", "anomalías"],
  },
  {
    id: "plantas-industriales",
    category: "Industria y Plantas",
    question: "¿Trabajan con plantas industriales?",
    aliases: ["trabajan con plantas industriales", "trabajan en planta", "experiencia en plantas"],
    answer:
      "Sí. Contamos con más de 30 años de experiencia trabajando en plantas industriales de manufactura y líneas de proceso continuo, adaptando nuestros trabajos a las ventanas operativas y turnos de producción de cada cliente.",
    keywords: ["plantas", "industriales", "experiencia", "manufactura", "turnos"],
  },
  {
    id: "industria-alimenticia",
    category: "Industria y Plantas",
    question: "¿Trabajan con la industria alimenticia?",
    aliases: ["trabajan con la industria alimenticia", "industria alimentaria", "plantas de alimentos", "chocolates y galletitas"],
    answer:
      "Sí. La industria alimentaria es nuestra principal especialidad técnica. Trabajamos bajo estrictas normas de inocuidad y estándares sanitarios en líneas de elaboración de chocolate, plantas de obleas y galletitas, sistemas de cañerías sanitarias y almacenamiento en acero inoxidable.",
    keywords: ["alimenticia", "alimentos", "chocolate", "obleas", "sanitario", "inocuidad"],
  },
  {
    id: "fabricacion-acero-inoxidable",
    category: "Especialidades",
    question: "¿Realizan fabricación en acero inoxidable?",
    aliases: ["realizan fabricacion en acero inoxidable", "fabricacion inox", "canerias sanitarias", "silos de acero inoxidable"],
    answer:
      "Sí. Diseñamos, fabricamos e instalamos cañerías sanitarias de proceso, silos, termos de almacenamiento, tolvas y estructuras en acero inoxidable AISI 304 y AISI 316L, con soldaduras sanitarias certificadas y control de calidad.",
    keywords: ["acero inoxidable", "cañerías", "sanitarias", "silos", "termos", "tolvas", "AISI 304", "AISI 316L"],
  },
  {
    id: "contactar-especialista",
    category: "Contacto y Presupuestos",
    question: "¿Cómo puedo contactar con un especialista?",
    aliases: ["como contactar con un especialista", "hablar con un especialista", "telefono de contacto", "contacto directo"],
    answer:
      "Puede comunicarse de manera inmediata con nuestros especialistas a través de WhatsApp (11-40705211), mediante llamada telefónica (+54 9 11 5070 5211), o solicitando una visita técnica a través del formulario de la web para coordinar una evaluación en planta.",
    keywords: ["especialista", "técnico", "asesoramiento", "whatsapp", "llamada", "contacto"],
  },
];

/**
 * Normalizes text removing accents, punctuation and excess whitespace
 */
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove accents
    .replace(/[¿?¡!.,;:()\-_'"]/g, " ") // remove punctuation
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Hybrid matching engine: Looks for an exact or high-confidence match
 * against predefined local FAQ answers. Returns the answer if matched, or null if it
 * should be handled by Gemini (freeform question).
 */
export function findPredefinedResponse(query: string): string | null {
  if (!query || typeof query !== "string") return null;

  const normalizedQuery = normalizeText(query);
  if (!normalizedQuery) return null;

  // 1. Direct Match against Questions and Aliases
  for (const item of FAQ_DATA) {
    if (normalizeText(item.question) === normalizedQuery) {
      return item.answer;
    }
    if (item.aliases) {
      for (const alias of item.aliases) {
        if (normalizeText(alias) === normalizedQuery) {
          return item.answer;
        }
      }
    }
  }

  // 2. Contains Substring Match (for queries of reasonable length)
  if (normalizedQuery.length >= 8) {
    for (const item of FAQ_DATA) {
      const normQ = normalizeText(item.question);
      if (normQ.includes(normalizedQuery) || normalizedQuery.includes(normQ)) {
        return item.answer;
      }
      if (item.aliases) {
        for (const alias of item.aliases) {
          const normA = normalizeText(alias);
          if (normA.includes(normalizedQuery) || normalizedQuery.includes(normA)) {
            return item.answer;
          }
        }
      }
    }
  }

  // 3. High-Confidence Keyword / Intent Matchers
  // Services
  if (
    (normalizedQuery.includes("servicio") || normalizedQuery.includes("servicios")) &&
    (normalizedQuery.includes("ofrecen") ||
      normalizedQuery.includes("realizan") ||
      normalizedQuery.includes("hacen") ||
      normalizedQuery.includes("brindan") ||
      normalizedQuery.includes("tienen"))
  ) {
    return FAQ_DATA[0].answer;
  }

  // Technical visits
  if (
    (normalizedQuery.includes("visita") || normalizedQuery.includes("visitas")) &&
    (normalizedQuery.includes("tecnica") ||
      normalizedQuery.includes("tecnicas") ||
      normalizedQuery.includes("planta") ||
      normalizedQuery.includes("diagnostico") ||
      normalizedQuery.includes("relevamiento"))
  ) {
    return FAQ_DATA[1].answer;
  }

  // Quotes / Budgets
  if (
    normalizedQuery.includes("presupuesto") ||
    normalizedQuery.includes("cotizacion") ||
    normalizedQuery.includes("cotizar") ||
    normalizedQuery.includes("pedir presupuesto") ||
    normalizedQuery.includes("solicitar presupuesto")
  ) {
    return FAQ_DATA[2].answer;
  }

  // Wafer / Industrial Ovens
  if (
    (normalizedQuery.includes("horno") || normalizedQuery.includes("hornos")) &&
    (normalizedQuery.includes("industrial") ||
      normalizedQuery.includes("industriales") ||
      normalizedQuery.includes("obleas") ||
      normalizedQuery.includes("wafer") ||
      normalizedQuery.includes("planchas") ||
      normalizedQuery.includes("limpieza"))
  ) {
    return FAQ_DATA[3].answer;
  }

  // Turnery 24 hs
  if (
    (normalizedQuery.includes("torneria") || normalizedQuery.includes("mecanizado")) &&
    (normalizedQuery.includes("urgencia") ||
      normalizedQuery.includes("24") ||
      normalizedQuery.includes("guardia") ||
      normalizedQuery.includes("repuesto") ||
      normalizedQuery.includes("repuestos"))
  ) {
    return FAQ_DATA[4].answer;
  }

  // Preventive Maintenance
  if (normalizedQuery.includes("preventivo") || normalizedQuery.includes("preventiva")) {
    return FAQ_DATA[5].answer;
  }

  // Predictive Maintenance
  if (normalizedQuery.includes("predictivo") || normalizedQuery.includes("predictiva")) {
    return FAQ_DATA[6].answer;
  }

  // Industrial Plants
  if (
    (normalizedQuery.includes("planta") || normalizedQuery.includes("plantas")) &&
    (normalizedQuery.includes("industrial") || normalizedQuery.includes("industriales") || normalizedQuery.includes("fabrica"))
  ) {
    return FAQ_DATA[7].answer;
  }

  // Food Industry
  if (
    normalizedQuery.includes("alimenticia") ||
    normalizedQuery.includes("alimentaria") ||
    normalizedQuery.includes("alimentos") ||
    normalizedQuery.includes("chocolate")
  ) {
    return FAQ_DATA[8].answer;
  }

  // Stainless Steel
  if (
    (normalizedQuery.includes("acero") && normalizedQuery.includes("inoxidable")) ||
    normalizedQuery.includes("inox") ||
    normalizedQuery.includes("canerias sanitarias")
  ) {
    return FAQ_DATA[9].answer;
  }

  // Contact specialist
  if (
    normalizedQuery.includes("contactar especialista") ||
    normalizedQuery.includes("hablar con un especialista") ||
    normalizedQuery.includes("comunicarme con un tecnico")
  ) {
    return FAQ_DATA[10].answer;
  }

  // No match -> Level 2: Gemini
  return null;
}
