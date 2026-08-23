import type { Project } from "./projects";

export const projectsEn: Project[] = [
  {
    slug: "lucero",
    index: "01",
    name: "Lucero",
    focus: "Copper · base metals",
    kicker: "Copper exploration evaluation in western Malargüe",
    summary:
      "An exploration evaluation platform focused on copper and base metals within an Andean geological setting.",
    context:
      "Lucero is located in a geologically complex region, where the interaction of sedimentary units, magmatic activity, structures and hydrothermal fluid circulation creates several exploration scenarios of interest.",
    approach:
      "The strategy integrates geological background, structural interpretation, alteration recognition, spatial analysis, remote sensing and field observations to progressively improve the geological model.",
    accent: "copper",
    properties: [
      {
        name: "Cobre del Sur",
        description:
          "A property with exploration interest primarily associated with copper. Its evaluation seeks to understand the relationship between mineral occurrences, structures and local lithologies.",
      },
      {
        name: "Plomo del Sur",
        description:
          "A complementary property focused on identifying base-metal mineralization and assessing its potential geological relationship with the broader project system.",
      },
    ],
    seoTitle: "Lucero Project | Copper Exploration in Mendoza",
    seoDescription:
      "A copper and base-metals exploration project in Malargüe, Mendoza, comprising the Cobre del Sur and Plomo del Sur properties.",
  },
  {
    slug: "atlas",
    index: "02",
    name: "Atlas",
    focus: "Iron · manganese",
    kicker: "Iron and manganese evaluation in an Andean geological setting",
    summary:
      "A progressive evaluation project integrating historical geological and mining background with contemporary technical interpretation tools.",
    context:
      "Atlas brings together iron and manganese exploration targets. Available background information is treated as a starting point for understanding the lithological, structural and territorial setting of known mineral occurrences.",
    approach:
      "The work integrates geological mapping, historical documentation, GIS analysis, satellite imagery, digital terrain models and field observations before considering more advanced programs.",
    accent: "iron",
    properties: [
      {
        name: "Atlas I",
        description:
          "A property with iron exploration interest. The current strategy prioritizes interpretation of its lithological and structural setting and the geological controls on mineralization.",
      },
      {
        name: "Atlas II",
        description:
          "A property primarily focused on manganese, studied in conjunction with Atlas I while preserving the independence of each mineral model.",
      },
    ],
    seoTitle: "Atlas Project | Iron and Manganese in Mendoza",
    seoDescription:
      "Atlas I and Atlas II form an iron and manganese exploration project in Malargüe, Mendoza, Argentina.",
  },
  {
    slug: "tinta-nero",
    index: "03",
    name: "Tinta Nero",
    focus: "Asphaltite",
    kicker: "Evaluation of asphaltites in southern Mendoza",
    summary:
      "Four properties focused on the progressive study of asphaltite occurrences within the sedimentary systems of southern Mendoza.",
    context:
      "The project is located in a region with a long history of geological and hydrocarbon research. Historical records are used to guide new investigations and are not extrapolated into present-day economic conclusions.",
    approach:
      "The evaluation seeks to understand the distribution, geometry and geological controls of the occurrences by integrating background information, regional interpretation, mapping and field reconnaissance.",
    accent: "carbon",
    properties: [
      {
        name: "Barrancas",
        description:
          "A property with asphaltite exploration interest. Its evaluation reconstructs the geological setting of known occurrences to guide future reconnaissance work.",
      },
      {
        name: "Santa Rita",
        description:
          "A property approached through geological reinterpretation, without assuming continuity or economic potential until sufficient technical evidence is available.",
      },
      {
        name: "El Ñaco",
        description:
          "A property whose conceptual analysis examines the relationship between local structures, sedimentary units and the presence of solid hydrocarbons.",
      },
      {
        name: "María Cristina",
        description:
          "A property that broadens the regional analysis and allows different expressions of mineralization to be compared within the same territorial setting.",
      },
    ],
    seoTitle: "Tinta Nero Project | Asphaltite in Mendoza",
    seoDescription:
      "An asphaltite exploration project in Malargüe, Mendoza, comprising Barrancas, Santa Rita, El Ñaco and María Cristina.",
  },
  {
    slug: "los-seis",
    index: "04",
    name: "Los Seis",
    focus: "Coal",
    kicker: "Geological evaluation of coal in Malargüe",
    summary:
      "Two properties focused on the progressive geological evaluation of coal within sedimentary environments in southern Mendoza.",
    context:
      "The project seeks to understand the distribution and characteristics of target horizons within a regional sedimentary framework, consistently distinguishing historical background from current technical evidence.",
    approach:
      "The evaluation integrates geological background, stratigraphic interpretation, mapping and territorial reconnaissance to build an organized knowledge base and progressively define areas requiring further study.",
    accent: "manganese",
    properties: [
      {
        name: "Don Ángel",
        description:
          "A property with coal exploration interest. Analysis focuses on understanding the stratigraphy and relevant controls for future exploration decisions.",
      },
      {
        name: "Cerro de la Laguna",
        description:
          "A complementary property integrating background information and new interpretations to establish a technical framework for progressive evaluation.",
      },
    ],
    seoTitle: "Los Seis Project | Coal Exploration in Mendoza",
    seoDescription:
      "Don Ángel and Cerro de la Laguna form Los Seis, a project focused on the geological evaluation of coal in Malargüe, Mendoza.",
  },
  {
    slug: "volcan-overo",
    index: "05",
    name: "Volcán Overo",
    focus: "Sulfur",
    kicker: "Sulfur evaluation in the Andes of southern Mendoza",
    summary:
      "A sulfur exploration evaluation project within a geological environment shaped by volcanic and hydrothermal processes.",
    context:
      "Volcán Overo adds a distinct geological expression to the portfolio and expands its diversification into mineral systems associated with volcanic and hydrothermal processes.",
    approach:
      "The strategy combines historical and geological background with geomorphological analysis, territorial interpretation and modern exploration tools to build a technical evaluation framework.",
    accent: "sulfur",
    properties: [
      {
        name: "Volcán Overo I",
        description:
          "A sulfur exploration property associated with an Andean volcanic environment. The study seeks to understand known occurrences and their geological controls.",
      },
      {
        name: "Volcán Overo II",
        description:
          "A complementary property that enables the system to be assessed from a broader territorial perspective and different occurrences to be compared.",
      },
    ],
    seoTitle: "Volcán Overo Project | Sulfur in Mendoza",
    seoDescription:
      "A sulfur exploration project in Andean volcanic environments in southern Mendoza, comprising Volcán Overo I and II.",
  },
];

export function getProjectEn(slug: string) {
  return projectsEn.find((project) => project.slug === slug);
}
