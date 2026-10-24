export type Industry = {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
  image: string;
  imageAlt: string;
  caveat: string;
  challenges: { title: string; body: string }[];
  patterns: { title: string; body: string }[];
  considerations: string[];
  relatedServices: string[];
};

export const industries: Industry[] = [
  {
    slug: "financial-services",
    name: "Financial services",
    title: "Financial Services Technology Consulting",
    description:
      "How Nodeblix approaches cloud, data, and software work for financial services: controls, resilience, and systems that can be explained to risk and audit.",
    h1: "Systems that can explain themselves to risk",
    lede:
      "Financial products run on ledgers, payments, and customer records that cannot be “eventually consistent” as an afterthought. We help firms modernize platforms while keeping change evidence, access, and recovery visible.",
    image: "/images/industry-finance.jpg",
    imageAlt: "Quiet after-hours atrium in a financial office with city light through tall glass",
    caveat:
      "This page describes typical operating constraints in the sector. It is not a claim of named client work or regulated-entity status.",
    challenges: [
      {
        title: "Change that must leave a trail",
        body: "Releases, data access, and privilege changes are themselves controlled activities. Informal cloud accounts and shared credentials fail the first serious review.",
      },
      {
        title: "Core systems that cannot pause",
        body: "Modernization has to sit beside settlement windows, batch calendars, and vendor platforms that will outlive a single programme.",
      },
      {
        title: "Data that is both an asset and a liability",
        body: "Customer, transaction, and market data need lineage and retention rules. Analytics that ignore classification create a second problem.",
      },
    ],
    patterns: [
      {
        title: "Guarded landing zones",
        body: "Separated environments, identity from the corporate directory, and network paths that security can draw from memory.",
      },
      {
        title: "Contract-first integration",
        body: "Payments, CRM, and core banking interfaces versioned and tested, instead of file drops that fail silently.",
      },
      {
        title: "Certified financial metrics",
        body: "A small set of numbers with owners, used in both operational dashboards and statutory reporting prep.",
      },
    ],
    considerations: [
      "Residency, encryption, and key ownership should be decided before the first production account.",
      "Disaster recovery is a rehearsal schedule, not a diagram in a board pack.",
      "Vendor SaaS still needs an integration and exit plan.",
    ],
    relatedServices: ["cloud-engineering", "data-engineering", "software-development"],
  },
  {
    slug: "retail-and-commerce",
    name: "Retail and commerce",
    title: "Retail & Commerce Technology Consulting",
    description:
      "Retail and commerce technology patterns: inventory truth, fulfilment visibility, and customer data that can survive peak trading.",
    h1: "Commerce systems that stay honest at peak",
    lede:
      "Retail fails in public. Inventory, price, and promise dates have to agree across channels. We help teams design the data and software paths that keep those facts aligned when traffic and promotions spike.",
    image: "/images/industry-retail.jpg",
    imageAlt: "Modern fulfilment aisle with orderly cartons and overhead conveyor lighting",
    caveat:
      "Sector patterns only. Nodeblix does not list unnamed ‘leading retailers’ as clients.",
    challenges: [
      {
        title: "Many channels, one stock position",
        body: "Store, web, marketplace, and wholesale each invent a version of availability. Over-sell and under-sell are architecture problems.",
      },
      {
        title: "Peak is a different system",
        body: "Architectures that are fine in March collapse in November if caching, queues, and fulfilment capacity were never tested together.",
      },
      {
        title: "Customer identity scattered across tools",
        body: "Loyalty, checkout, and service desks disagree on who the customer is, so personalization and refunds become manual.",
      },
    ],
    patterns: [
      {
        title: "An inventory service with a single writer",
        body: "Availability is computed from a system of record, then projected to channels — not recalculated in each storefront.",
      },
      {
        title: "Evented order lifecycle",
        body: "Placed, paid, allocated, shipped, returned: facts other systems can subscribe to without nightly reconciliation.",
      },
      {
        title: "Commerce analytics with operational grain",
        body: "Fill rate, promise accuracy, and contribution by channel — not only last-click revenue.",
      },
    ],
    considerations: [
      "Marketplace and POS vendors constrain what you can own. Design around those edges early.",
      "Returns and partial fulfilment are not edge cases in this sector.",
      "Personal data from commerce and CRM should share an identity strategy.",
    ],
    relatedServices: ["microservices", "data-engineering", "analytical-platforms", "crm-solutions"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    title: "Manufacturing Technology: Data, CRM & Integration",
    description:
      "Manufacturing technology considerations: OT/IT boundaries, traceability, planning data that plant and finance both use, and CRM connected to the ERP.",
    h1: "Plant reality, not a dashboard fantasy",
    lede:
      "Manufacturing data is generated on the floor, in suppliers, and in finance. We help organisations connect those worlds without pretending a single platform will replace every controller and ERP module.",
    image: "/images/industry-manufacturing.jpg",
    imageAlt: "Precision manufacturing hall with CNC machines under skylights",
    caveat:
      "Written as a sector briefing. No implied plant-floor certifications or named manufacturers.",
    challenges: [
      {
        title: "OT and IT were designed not to meet",
        body: "Machines, historians, and MES speak different clocks and protocols. Forcing them onto the office network is not a strategy.",
      },
      {
        title: "Traceability that only exists in paper",
        body: "Quality events, batch genealogy, and supplier lots are hard to reconstruct when a recall or audit arrives.",
      },
      {
        title: "Planning numbers that finance does not recognise",
        body: "Capacity, yield, and WIP live in spreadsheets beside the ERP. S&OP becomes a negotiation.",
      },
    ],
    patterns: [
      {
        title: "A controlled integration edge",
        body: "Plant data leaves through a broker or historian export with explicit security, not ad-hoc USB and email.",
      },
      {
        title: "Genealogy as a first-class model",
        body: "Lots, serials, and process steps stored so quality and service can answer “what shipped with this?”",
      },
      {
        title: "Shared planning facts",
        body: "A curated layer for demand, inventory, and yield that both operations and finance query.",
      },
      {
        title: "CRM connected to the ERP",
        body: "Quotes, orders, and dealer or distributor accounts in a CRM that reads availability and order status from the ERP instead of re-keying it.",
      },
    ],
    considerations: [
      "Downtime windows are scarce. Change is sequenced around production, not the other way around.",
      "Safety and quality systems are out of scope unless explicitly commissioned by specialists.",
      "Supplier portals often matter as much as internal MES.",
    ],
    relatedServices: ["data-engineering", "crm-solutions", "software-development", "analytical-platforms"],
  },
  {
    slug: "healthcare-and-life-sciences",
    name: "Healthcare and life sciences",
    title: "Healthcare & Life Sciences Technology Consulting",
    description:
      "Healthcare and life sciences technology considerations: privacy, interoperability, and systems that can be validated without inventing clinical claims.",
    h1: "Careful systems around sensitive work",
    lede:
      "Healthcare and life sciences combine operational software with data that is highly constrained. We discuss architecture, integration, and analytics patterns that respect privacy and audit — without offering clinical advice.",
    image: "/images/industry-healthcare.jpg",
    imageAlt: "Calm contemporary medical research corridor with frosted glass rooms",
    caveat:
      "Nodeblix is not a clinical provider. This page does not claim hospital implementations, device work, or regulatory certifications.",
    challenges: [
      {
        title: "Identity and consent are the product",
        body: "Patient, subject, or customer records cannot be treated like ordinary SaaS contacts. Access and purpose limitation belong in the design.",
      },
      {
        title: "Interoperability is uneven",
        body: "EHR, LIMS, and sponsor systems expose different qualities of API. Integration design starts from what is actually available.",
      },
      {
        title: "Validation versus velocity",
        body: "Change control is slower than a typical product team expects. Pipelines and environments have to produce evidence.",
      },
    ],
    patterns: [
      {
        title: "Separated environments and data classes",
        body: "Production-like data is minimized in lower environments. Synthetic or tokenized sets are planned, not improvised.",
      },
      {
        title: "Explicit audit on access",
        body: "Who saw what, and why, is a query the system can answer.",
      },
      {
        title: "Analytics that never become a second care record",
        body: "Warehouses hold approved extracts. They are not a back door around the system of record.",
      },
    ],
    considerations: [
      "Local regulation varies. Counsel and compliance owners stay in the loop.",
      "We do not implement clinical decision support unless a qualified programme exists.",
      "Vendor EHRs constrain architecture more than a greenfield diagram admits.",
    ],
    relatedServices: ["data-engineering", "cloud-engineering", "software-development"],
  },
  {
    slug: "logistics-and-supply-chain",
    name: "Logistics and supply chain",
    title: "Logistics & Supply Chain Technology Consulting",
    description:
      "Logistics and supply chain technology: shipment events, partner integration, and planning data that stays close to physical reality.",
    h1: "Software that keeps up with the physical network",
    lede:
      "Goods move through partners you do not control. The useful systems in this sector are the ones that accept messy events, reconcile them, and still give planners a picture they can act on today.",
    image: "/images/industry-logistics.jpg",
    imageAlt: "Twilight container port with stacked boxes and cranes over still water",
    caveat:
      "Illustrative sector patterns. No implied carrier, 3PL, or shipper case studies.",
    challenges: [
      {
        title: "Events arrive late, twice, or not at all",
        body: "Scans, EDI, and partner APIs are imperfect. The domain model has to tolerate repair, not assume a happy path.",
      },
      {
        title: "Network visibility is a composition problem",
        body: "No single vendor sees the whole journey. Integration and identity of a shipment matter more than another tracking page.",
      },
      {
        title: "Cost-to-serve is rarely in one system",
        body: "Transport, warehousing, duties, and failure costs live apart. Margin conversations stay anecdotal.",
      },
    ],
    patterns: [
      {
        title: "A shipment as a reconstructed fact",
        body: "Ingest partner events, deduplicate, and store an auditable timeline even when messages are late.",
      },
      {
        title: "Partner contracts as products",
        body: "EDI and API mappings versioned, tested, and owned — not a folder of sample files.",
      },
      {
        title: "Operational analytics with exception lists",
        body: "What is late, what is unclaimed, what is burning cost — not a map that only looks good in a demo.",
      },
    ],
    considerations: [
      "Time zones, units, and location codes are data-quality work, not polish.",
      "Peak season is a load test the physical world will run whether you scheduled it or not.",
      "Customer promise dates belong in the same model as carrier events.",
    ],
    relatedServices: ["data-engineering", "microservices", "analytical-platforms"],
  },
  {
    slug: "software-and-technology",
    name: "B2B software and technology",
    title: "Engineering Partner for Software Companies",
    description:
      "How Nodeblix works with software and technology companies: platform hardening, delivery systems, and data products that sit beside the core product.",
    h1: "Another engineering team, not a slide deck",
    lede:
      "Product companies already have builders. The useful work is the unglamorous layer: environments, observability, data for the business, and the internal tools that let the product team ship.",
    image: "/images/industry-software.jpg",
    imageAlt: "Product engineering loft with long tables and large windows",
    caveat:
      "We do not list unnamed SaaS logos. Engagements are scoped as staff-plus-craft, not as a claim to have ‘scaled unicorns’.",
    challenges: [
      {
        title: "The product outgrew the path to production",
        body: "What a founding team could deploy from memory now blocks every squad. Platform work is overdue and chronically postponed.",
      },
      {
        title: "Customer data used as an informal warehouse",
        body: "Analytics on the primary database, or a replica that nobody wants to own, becomes both a reliability and a privacy issue.",
      },
      {
        title: "Enterprise buyers ask operational questions",
        body: "SSO, audit logs, residency, and uptime evidence are now part of the product, whether the roadmap said so or not.",
      },
    ],
    patterns: [
      {
        title: "A golden path that squads will use",
        body: "Templates, CI, and preview environments that are easier than inventing a new one.",
      },
      {
        title: "Product analytics off the primary store",
        body: "Events and certified models for growth and success teams, with a privacy review.",
      },
      {
        title: "Tenant-aware operations",
        body: "Observability and support tools that can answer “which customer is hurting?” without a production query.",
      },
    ],
    considerations: [
      "We expect to work in your repositories and on your cadence.",
      "We will not quietly replace your architects. The goal is a stronger internal team.",
      "Roadmap features stay yours; we take the systems that make those features shippable.",
    ],
    relatedServices: ["devops-engineering", "cloud-engineering", "microservices", "software-development"],
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
