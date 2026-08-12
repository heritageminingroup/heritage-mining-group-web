export type Project = {
  slug: string;
  index: string;
  name: string;
  focus: string;
  kicker: string;
  summary: string;
  context: string;
  approach: string;
  accent: "copper" | "iron" | "carbon" | "sulfur" | "manganese";
  properties: Array<{
    name: string;
    description: string;
  }>;
  seoTitle: string;
  seoDescription: string;
};

export const projects: Project[] = [
  {
    slug: "lucero",
    index: "01",
    name: "Lucero",
    focus: "Cobre · metales base",
    kicker: "Exploración de cobre en el oeste de Malargüe",
    summary:
      "Una plataforma de exploración orientada al estudio de mineralizaciones de cobre y metales base en un ambiente geológico andino.",
    context:
      "Lucero se ubica en una región de geología compleja, donde la interacción entre unidades sedimentarias, actividad magmática, estructuras y circulación de fluidos hidrotermales configura distintos escenarios de interés exploratorio.",
    approach:
      "La estrategia integra antecedentes geológicos, interpretación estructural, reconocimiento de alteraciones, análisis espacial, sensores remotos y observaciones de campo para mejorar progresivamente el modelo geológico.",
    accent: "copper",
    properties: [
      {
        name: "Cobre del Sur",
        description:
          "Propiedad con interés exploratorio principalmente asociado al cobre. La evaluación busca comprender la relación entre manifestaciones minerales, estructuras y litologías locales.",
      },
      {
        name: "Plomo del Sur",
        description:
          "Propiedad complementaria orientada al reconocimiento de mineralizaciones de metales base y a su posible relación geológica con el sistema general del proyecto.",
      },
    ],
    seoTitle: "Proyecto Lucero | Exploración de Cobre en Mendoza",
    seoDescription:
      "Proyecto de exploración de cobre y metales base en Malargüe, Mendoza, integrado por Cobre del Sur y Plomo del Sur.",
  },
  {
    slug: "atlas",
    index: "02",
    name: "Atlas",
    focus: "Hierro · manganeso",
    kicker: "Hierro y manganeso en un contexto geológico andino",
    summary:
      "Un proyecto que combina antecedentes geológicos y mineros históricos con nuevas herramientas de interpretación técnica.",
    context:
      "Atlas reúne objetivos vinculados a hierro y manganeso. Los antecedentes disponibles se consideran un punto de partida para estudiar el contexto litológico, estructural y territorial de las manifestaciones conocidas.",
    approach:
      "El trabajo integra cartografía geológica, documentación histórica, análisis GIS, imágenes satelitales, modelos digitales del terreno y observaciones de campo antes de considerar programas más avanzados.",
    accent: "iron",
    properties: [
      {
        name: "Atlas I",
        description:
          "Propiedad con interés exploratorio en hierro. La estrategia prioriza la interpretación de su contexto litológico y estructural y de los controles geológicos de la mineralización.",
      },
      {
        name: "Atlas II",
        description:
          "Propiedad con interés principal en manganeso, estudiada de forma complementaria con Atlas I y preservando la independencia de cada modelo mineral.",
      },
    ],
    seoTitle: "Proyecto Atlas | Hierro y Manganeso en Mendoza",
    seoDescription:
      "Atlas I y Atlas II integran un proyecto de exploración de hierro y manganeso en Malargüe, Mendoza, Argentina.",
  },
  {
    slug: "tinta-nero",
    index: "03",
    name: "Tinta Nero",
    focus: "Asfaltita",
    kicker: "Asfaltitas del sur de Mendoza",
    summary:
      "Cuatro propiedades orientadas al estudio de ocurrencias de asfaltita dentro de los sistemas sedimentarios del sur de Mendoza.",
    context:
      "El proyecto forma parte de una región con una extensa historia de investigación geológica e hidrocarburífera. Los registros históricos se utilizan para orientar nuevas investigaciones, sin extrapolarlos hacia conclusiones económicas actuales.",
    approach:
      "La evaluación busca comprender la distribución, geometría y controles geológicos de las manifestaciones mediante antecedentes, interpretación regional, cartografía y reconocimiento de campo.",
    accent: "carbon",
    properties: [
      {
        name: "Barrancas",
        description:
          "Propiedad con interés exploratorio en asfaltita. Su evaluación reconstruye el contexto geológico de las manifestaciones conocidas para orientar futuras tareas de reconocimiento.",
      },
      {
        name: "Santa Rita",
        description:
          "Propiedad abordada desde una perspectiva de reinterpretación geológica, sin asumir continuidad ni potencial económico hasta contar con evidencia suficiente.",
      },
      {
        name: "El Ñaco",
        description:
          "Propiedad cuyo análisis conceptual estudia la relación entre estructuras locales, unidades sedimentarias y presencia de hidrocarburos sólidos.",
      },
      {
        name: "María Cristina",
        description:
          "Propiedad que amplía el análisis regional y permite comparar distintas expresiones de mineralización dentro de un mismo contexto territorial.",
      },
    ],
    seoTitle: "Proyecto Tinta Nero | Asfaltita en Mendoza",
    seoDescription:
      "Proyecto de exploración de asfaltita en Malargüe, Mendoza, integrado por Barrancas, Santa Rita, El Ñaco y María Cristina.",
  },
  {
    slug: "los-seis",
    index: "04",
    name: "Los Seis",
    focus: "Carbón",
    kicker: "Exploración de carbón en Malargüe",
    summary:
      "Dos propiedades orientadas a la evaluación geológica de carbón dentro de ambientes sedimentarios del sur mendocino.",
    context:
      "El proyecto busca comprender la distribución y las características de los niveles de interés dentro de un marco sedimentario regional, distinguiendo siempre los antecedentes históricos de la evidencia técnica actual.",
    approach:
      "La evaluación integra antecedentes geológicos, interpretación estratigráfica, cartografía y reconocimiento territorial para construir una base ordenada y definir progresivamente áreas que requieran estudios adicionales.",
    accent: "manganese",
    properties: [
      {
        name: "Don Ángel",
        description:
          "Propiedad con interés exploratorio en carbón. El análisis se concentra en comprender la estratigrafía y los controles relevantes para futuras decisiones exploratorias.",
      },
      {
        name: "Cerro de la Laguna",
        description:
          "Propiedad complementaria que integra antecedentes y nuevas interpretaciones para establecer un marco técnico de evaluación progresiva.",
      },
    ],
    seoTitle: "Proyecto Los Seis | Exploración de Carbón en Mendoza",
    seoDescription:
      "Don Ángel y Cerro de la Laguna integran Los Seis, proyecto orientado a la evaluación geológica de carbón en Malargüe, Mendoza.",
  },
  {
    slug: "volcan-overo",
    index: "05",
    name: "Volcán Overo",
    focus: "Azufre",
    kicker: "Azufre en los Andes del sur de Mendoza",
    summary:
      "Un proyecto asociado a la exploración de azufre en un ambiente geológico de origen volcánico e hidrotermal.",
    context:
      "Volcán Overo incorpora una expresión geológica diferente al portafolio y amplía su diversificación hacia sistemas minerales vinculados con procesos volcánicos e hidrotermales.",
    approach:
      "La estrategia combina antecedentes históricos y geológicos con análisis geomorfológico, interpretación territorial y herramientas modernas de exploración para construir una base técnica de evaluación.",
    accent: "sulfur",
    properties: [
      {
        name: "Volcán Overo I",
        description:
          "Propiedad con interés en azufre asociada a un ambiente volcánico andino. El estudio busca comprender las manifestaciones conocidas y sus controles geológicos.",
      },
      {
        name: "Volcán Overo II",
        description:
          "Propiedad complementaria que permite analizar el sistema desde una perspectiva territorial más amplia y comparar distintas manifestaciones.",
      },
    ],
    seoTitle: "Proyecto Volcán Overo | Azufre en Mendoza",
    seoDescription:
      "Proyecto de exploración de azufre en ambientes volcánicos andinos del sur de Mendoza, integrado por Volcán Overo I y II.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
