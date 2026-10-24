export type Scenario = {
  slug: string;
  title: string;
  sector: string;
  image: string;
  imageAlt: string;
  summary: string;
  context: string;
  challenge: string;
  constraints: string[];
  approach: string[];
  technologies: string[];
  implementation: string[];
  outcomesNote: string;
  lessons: string[];
  relatedServices: string[];
};

export const scenarios: Scenario[] = [
  {
    slug: "reliability-on-a-growing-platform",
    title: "Reliability on a growing platform",
    sector: "B2B software",
    image: "/images/work-platform.jpg",
    imageAlt: "Empty operations floor with a muted status wall and city light at the windows",
    summary:
      "An illustrative programme for a product company whose path to production no longer matched the number of teams shipping into it.",
    context:
      "A multi-tenant product had moved from a single deploy script to several squads sharing one production account. Incidents were taking too long to classify, and releases clustered on evenings because nobody trusted the daytime path.",
    challenge:
      "Create a delivery and operations baseline that squads would actually use, without pausing the roadmap or inventing a platform team that the company could not staff.",
    constraints: [
      "No freeze on feature work.",
      "Existing cloud vendor and Git host stay in place.",
      "On-call is a duty for product engineers, not a separate NOC.",
    ],
    approach: [
      "Map the unofficial release path, including the two people who still held production keys.",
      "Introduce infrastructure as code for the environments that already existed, rather than a greenfield redesign.",
      "Split CI into build-once artefacts and an explicit promote step.",
      "Define three user-facing symptoms as the only pages that wake someone at night.",
      "Add a tenant identifier to logs and traces so support can isolate a customer without a production query.",
    ],
    technologies: [
      "The organisation’s existing cloud and Git platform",
      "Infrastructure as code already familiar to the team",
      "The observability stack already licensed",
    ],
    implementation: [
      "Week one produced an accurate diagram of the current path — including the embarrassing parts.",
      "Shared modules covered network, identity, and the runtime used by all services.",
      "A canary on the highest-traffic read path was rehearsed, including rollback.",
      "Runbooks were written from the last three real incidents, not from a template.",
    ],
    outcomesNote:
      "No measured client result is shown here. In a live engagement we would only publish restore-time, change-fail, or adoption numbers that the customer has approved.",
    lessons: [
      "A platform nobody uses is just another system to maintain. The golden path has to be the easy path.",
      "Alerting is a product. If it cries wolf, engineers will mute it.",
      "Tenant-aware observability is a support feature, not a nice-to-have for enterprise deals.",
    ],
    relatedServices: ["devops-engineering", "cloud-engineering", "software-development"],
  },
  {
    slug: "commerce-data-that-agrees",
    title: "Commerce data that agrees",
    sector: "Retail and commerce",
    image: "/images/work-commerce.jpg",
    imageAlt: "Empty contemporary retail interior with linear lighting and concrete floors",
    summary:
      "An illustrative data programme for a multi-channel retailer whose inventory, orders, and finance reports could not be reconciled in the same meeting.",
    context:
      "Web, store, and marketplace channels each produced a version of sell-through. Finance closed the month on a different extract. Promotions made the disagreement worse.",
    challenge:
      "Establish a certified set of order, inventory, and contribution metrics that operations and finance would both use, without replacing the commerce platform mid-season.",
    constraints: [
      "Peak trading window could not host a cutover.",
      "Marketplace and POS vendors remain systems of record for their channels.",
      "Existing BI licences stay; the semantic layer has to meet the tools people already open.",
    ],
    approach: [
      "Write metric contracts for five numbers only: ordered, fulfilled, returned, on-hand, and contribution after known costs.",
      "Land raw extracts with lineage rather than transforming in the BI tool.",
      "Model inventory movements as events, even when the source only offered daily snapshots.",
      "Publish certified tables and retire the three unofficial workbooks that had become policy.",
    ],
    technologies: [
      "The warehouse or lakehouse the company already paid for",
      "Existing orchestration and BI tools",
      "Source extracts from commerce, POS, and finance",
    ],
    implementation: [
      "A war-room week documented every unofficial definition of “available”.",
      "Tests failed the pipeline when grain or uniqueness broke, instead of emailing a screenshot.",
      "A weekly operating review moved onto the certified model; slide assembly stopped being a role.",
    ],
    outcomesNote:
      "Illustrative only. We would not invent a percentage improvement in forecast accuracy or margin.",
    lessons: [
      "Five trusted numbers beat fifty unofficial ones.",
      "If finance is not in the contract review, the warehouse will be ignored at month-end.",
      "Snapshots can be modeled as events, but the limitations must be written down.",
    ],
    relatedServices: ["data-engineering", "analytical-platforms", "crm-solutions"],
  },
  {
    slug: "extracting-a-service-without-a-rewrite",
    title: "Extracting a service without a rewrite",
    sector: "Operations software",
    image: "/images/work-pipeline.jpg",
    imageAlt: "Repeating industrial pipe gallery under a skylight",
    summary:
      "An illustrative modernization path for a revenue-critical monolith that needed an independent billing capability — not a two-year rewrite.",
    context:
      "A long-lived application handled onboarding, scheduling, and invoicing in one deployable. Invoicing needed a new tax treatment and a second product wanted to reuse it. Every release still required the full suite’s regression.",
    challenge:
      "Extract billing behind a stable contract, keep a single writer for money, and leave the rest of the monolith intact.",
    constraints: [
      "No dual-write to two ledgers.",
      "Feature work on scheduling continues.",
      "The team is small; a service mesh and twelve new repositories would be malpractice.",
    ],
    approach: [
      "Treat billing as a module with a public API inside the monolith first.",
      "Move persistence only after the in-process boundary was proven with contract tests.",
      "Publish invoice facts as events for the second product; do not let it write to billing tables.",
      "Keep deploy independent only when on-call and observability were ready.",
    ],
    technologies: [
      "The language and datastore already in production",
      "Contract tests in the existing CI",
      "The organisation’s current message transport, or a boring alternative if none existed",
    ],
    implementation: [
      "The first release changed nothing about runtime shape — only module boundaries and tests.",
      "A compatibility façade allowed old screens to keep working.",
      "The second product consumed events, then a read API, never the billing database.",
    ],
    outcomesNote:
      "No invented reduction in lead time. The point of the scenario is the sequence, not a vanity metric.",
    lessons: [
      "A modular monolith is a valid end state, not a failure of nerve.",
      "Extract the capability that has a real second consumer or a real independent risk.",
      "Events are facts. They are a poor substitute for a request/response when the caller needs an answer now.",
    ],
    relatedServices: ["microservices", "software-development", "devops-engineering"],
  },
];

export function getScenario(slug: string) {
  return scenarios.find((s) => s.slug === slug);
}
