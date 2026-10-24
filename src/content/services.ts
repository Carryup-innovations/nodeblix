export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  short: string;
  navLabel: string;
  h1: string;
  lede: string;
  title: string;
  serviceType: string;
  description: string;
  image: string;
  imageAlt: string;
  problemsTitle: string;
  problems: { title: string; body: string }[];
  capabilities: { title: string; body: string }[];
  approachTitle: string;
  approach: string[];
  architecture: string;
  useCases: { title: string; body: string }[];
  integration: string[];
  operations: { title: string; body: string }[];
  method: { title: string; body: string }[];
  related: string[];
  relatedInsights: string[];
};

export const services: Service[] = [
  {
    slug: "cloud-engineering",
    name: "Cloud Engineering",
    navLabel: "Cloud Engineering",
    short:
      "Architecture, migration, and operations for AWS, Azure, and Google Cloud environments that stay reliable as the business grows.",
    h1: "Cloud engineering for systems that stay available",
    lede:
      "Cloud is not a destination. It is an operating model. We design accounts, networks, identity, and workloads so teams can deploy with confidence, recover from failure, and understand what they are spending.",
    title: "Cloud Engineering & Consulting Services",
    serviceType: "Cloud engineering and cloud migration",
    description:
      "Cloud engineering and consulting services for AWS, Azure, and Google Cloud: landing zones, migration strategy, resilience, security, and cost control your team can run.",
    image: "/images/cloud-infrastructure.jpg",
    imageAlt:
      "Quiet data center aisle with orderly server racks and cool aisle lighting",
    problemsTitle: "Where cloud estates usually start to strain",
    problems: [
      {
        title: "Lift-and-shift without an operating model",
        body: "Workloads move, but identity, networking, backup, and deployment remain informal. The bill rises while change still feels risky.",
      },
      {
        title: "Environments that only a few people understand",
        body: "Critical paths live in undocumented consoles. New engineers cannot reproduce infrastructure, and reviews become guesswork.",
      },
      {
        title: "Availability planned after an outage",
        body: "Single points of failure, untested restore procedures, and unclear ownership appear only when a region, zone, or vendor service fails.",
      },
    ],
    capabilities: [
      {
        title: "Architecture and landing zones",
        body: "Account or subscription structure, network topology, identity boundaries, and baseline controls that match how teams actually ship software.",
      },
      {
        title: "Migration and modernization",
        body: "Workload assessment, sequencing, cutover planning, and a clear choice between rehost, replatform, and rebuild — not a single recipe for every system.",
      },
      {
        title: "Environments defined as code",
        body: "Landing zones and environments built as code with our DevOps practice, so production is reproducible and never assembled by hand.",
      },
      {
        title: "Resilience and recovery",
        body: "Availability targets, failover patterns, backup policy, and restore drills that leadership can understand without a diagram decoder.",
      },
      {
        title: "Security and access",
        body: "Least-privilege identity, secrets handling, network controls, and audit trails that fit existing security review, not a parallel shadow process.",
      },
      {
        title: "Performance and cost",
        body: "Right-sizing, storage lifecycle, reserved capacity where it is justified, and tagging that makes owners visible.",
      },
    ],
    approachTitle: "How we treat a cloud programme",
    approach: [
      "Start from workloads, data sensitivity, and operational ownership — not from a preferred vendor slide.",
      "Make the current estate visible: accounts, dependencies, blast radius, and what is already automated.",
      "Design the smallest landing zone that teams will actually use, then expand it.",
      "Move systems in waves with explicit rollback, not a single weekend that cannot fail.",
      "Leave monitoring, access, and cost reports in the hands of the people who will run the platform.",
    ],
    architecture:
      "A typical engagement produces a documented landing zone, workload placement rules, and an operations baseline. Compute, data, and integration sit behind shared identity and observability. Disaster recovery is a tested procedure, not a checkbox on an architecture review.",
    useCases: [
      {
        title: "First production landing zone",
        body: "A growing product team needs isolated environments, guarded deployments, and a cost view that finance can read.",
      },
      {
        title: "Multi-account cleanup",
        body: "Years of organic growth left unused resources, inconsistent IAM, and no shared network pattern.",
      },
      {
        title: "Regulated workload placement",
        body: "A subset of systems needs stricter isolation, encryption, and evidence for internal audit.",
      },
    ],
    integration: [
      "Identity providers and existing directory services",
      "CI/CD and artefact registries",
      "On-premises or colocated systems that will remain for a period",
      "Observability and security tooling already in use",
    ],
    operations: [
      {
        title: "Security",
        body: "Access is designed around roles people already have. Secrets do not live in tickets. Changes are attributable.",
      },
      {
        title: "Scalability",
        body: "Auto-scaling is used where load is variable. Persistent systems get capacity planning instead of hope.",
      },
      {
        title: "Maintainability",
        body: "Infrastructure is code, reviewed like application code. Runbooks describe the unusual cases.",
      },
    ],
    method: [
      { title: "Assess", body: "Inventory, risk, cost, and the real constraints of the teams who will operate the platform." },
      { title: "Design", body: "Target architecture, migration waves, and the controls that must exist before cutover." },
      { title: "Build", body: "Landing zone, automation, and the first production-shaped environment." },
      { title: "Migrate", body: "Controlled moves with rehearsal, monitoring, and a defined rollback." },
      { title: "Operate", body: "Handover with dashboards, access reviews, and a backlog for cost and reliability." },
    ],
    related: ["devops-engineering", "data-engineering", "software-development"],
    relatedInsights: ["cloud-migration-planning", "cloud-cost-governance"],
  },
  {
    slug: "devops-engineering",
    name: "DevOps Engineering",
    navLabel: "DevOps Engineering",
    short:
      "CI/CD, infrastructure as code, and production readiness so releases are routine instead of events.",
    h1: "DevOps consulting that makes delivery ordinary",
    lede:
      "Faster releases only matter if they are boring. We help teams design pipelines, environments, and observability so a change can be built, tested, deployed, and understood — including when it should be rolled back.",
    title: "DevOps Consulting & CI/CD Implementation Services",
    serviceType: "DevOps consulting and CI/CD implementation",
    description:
      "DevOps consulting services for CI/CD pipeline implementation, infrastructure as code, deployment automation, and observability — so releases become routine, not risky.",
    image: "/images/devops-workstation.jpg",
    imageAlt: "Night-time engineering workstation with dual monitors and a focused desk lamp",
    problemsTitle: "Delivery problems that look like tooling problems",
    problems: [
      {
        title: "Pipelines that only the original author can debug",
        body: "Scripts accumulate. Secrets are copied. A green build still means a nervous Friday deploy.",
      },
      {
        title: "Environments that drift",
        body: "Staging does not resemble production. Bugs appear after release because configuration was never treated as a product.",
      },
      {
        title: "Alerts nobody trusts",
        body: "Monitoring exists, but on-call pages for noise. When something real fails, the first hour is spent finding the right dashboard.",
      },
    ],
    capabilities: [
      {
        title: "CI/CD design",
        body: "Build, test, security checks, and promotion paths that match the risk of the change — not one pipeline that tries to do everything.",
      },
      {
        title: "Infrastructure as code",
        body: "Repeatable environments with review, drift detection, and a clear owner for modules that many teams share.",
      },
      {
        title: "Containers and orchestration",
        body: "Containerization when it reduces variance. Kubernetes when the operational cost is justified by the workload, not by fashion.",
      },
      {
        title: "Deployment strategy",
        body: "Blue/green, canary, or rolling releases with rollback that has been rehearsed.",
      },
      {
        title: "Observability",
        body: "Logs, metrics, and traces tied to user-facing symptoms. Alerting that pages a human only when action is required.",
      },
      {
        title: "Developer workflow",
        body: "Local inner loop, preview environments, and documentation that new joiners can follow without a tribal walkthrough.",
      },
    ],
    approachTitle: "Reliability is a product of the path to production",
    approach: [
      "Map how a change actually reaches users today, including the unofficial steps.",
      "Remove the highest-friction, highest-risk steps first.",
      "Standardize environments before adding more pipeline stages.",
      "Treat incident response as a design input, not a later training session.",
      "Measure lead time, change failure, and restore time with definitions the team agrees on.",
    ],
    architecture:
      "Source control is the system of record. Pipelines produce immutable artefacts. Environments are declared. Production changes are visible. Observability sits beside the application, not in a separate team’s unused tool.",
    useCases: [
      {
        title: "From manual release to a guarded pipeline",
        body: "A product with a small team still depends on a specialist to ship. We make the path explicit and shareable.",
      },
      {
        title: "Platform baseline for several squads",
        body: "Shared modules, templates, and golden paths so each team is not inventing CI from scratch.",
      },
      {
        title: "Incident-ready operations",
        body: "On-call, runbooks, and a post-incident loop that actually changes the system.",
      },
    ],
    integration: [
      "Existing Git hosts and package registries",
      "Cloud accounts and on-premises runners",
      "Ticketing and change-management processes that cannot be ignored",
      "Security scanners and policy engines already mandated internally",
    ],
    operations: [
      {
        title: "Security",
        body: "Secrets in a vault, signed artefacts where needed, and least privilege for deploy roles.",
      },
      {
        title: "Scalability",
        body: "Runners and clusters sized for peak CI, not leftover laptops.",
      },
      {
        title: "Maintainability",
        body: "Pipeline definitions live with the service. Shared templates have owners and a deprecation path.",
      },
    ],
    method: [
      { title: "Trace", body: "Document the current delivery path, including the unofficial ones." },
      { title: "Stabilize", body: "Fix the steps that cause failed releases or unplanned work." },
      { title: "Automate", body: "Encode the path in CI/CD and infrastructure as code." },
      { title: "Observe", body: "Connect deploy events to runtime signals." },
      { title: "Transfer", body: "Leave the team able to change the path without us." },
    ],
    related: ["cloud-engineering", "software-development", "microservices"],
    relatedInsights: ["cicd-pipeline-design", "observability-production-readiness"],
  },
  {
    slug: "software-development",
    name: "Software Development",
    navLabel: "Software Development",
    short:
      "Custom applications, APIs, and modernization work for workflows that off-the-shelf software cannot model cleanly.",
    h1: "Custom software built around the work, not the other way around",
    lede:
      "Some processes are the business. When a packaged product forces workarounds, we design and build software that fits the workflow, integrates with what you already run, and can be maintained after the first release.",
    title: "Custom Software Development & App Modernization",
    serviceType: "Custom software development and application modernization",
    description:
      "Custom software development services for web applications, APIs, integrations, and internal tools — plus legacy application modernization without a risky rewrite.",
    image: "/images/software-studio.jpg",
    imageAlt: "Daylit software studio with empty desks and monitors facing a wall of windows",
    problemsTitle: "When generic software starts costing more than it saves",
    problems: [
      {
        title: "Workarounds piled on a package you cannot change",
        body: "Spreadsheets, side databases, and tribal knowledge fill the gaps. The official system is no longer the source of truth.",
      },
      {
        title: "A legacy application nobody wants to touch",
        body: "The product still carries revenue, but every change is slow, untested, and concentrated in a few people.",
      },
      {
        title: "Integrations held together by files and hope",
        body: "Nightly exports, manual reconciliation, and silent failures between systems that should already agree.",
      },
    ],
    capabilities: [
      {
        title: "Custom web applications",
        body: "Operational products with clear information architecture, accessible interfaces, and server-rendered performance where it matters.",
      },
      {
        title: "APIs and backends",
        body: "Stable contracts, auth that matches enterprise identity, and data access that will not collapse under a new client.",
      },
      {
        title: "Internal tools and portals",
        body: "Software for the people who run the company: operations, finance, support, and partners.",
      },
      {
        title: "Application modernization",
        body: "Strangle patterns, module boundaries, and test coverage that make the next change cheaper than the last.",
      },
      {
        title: "Integration",
        body: "APIs, events, and carefully bounded batch jobs — chosen for the latency and consistency the process actually needs.",
      },
      {
        title: "Quality and longevity",
        body: "Automated tests, observability, and documentation that a future team can use without a forensic exercise.",
      },
    ],
    approachTitle: "Discovery before a stack conversation",
    approach: [
      "Sit with the people who do the work. The process is usually more precise than the ticket.",
      "Separate must-hold constraints from habits that can change.",
      "Design the domain model before picking a fashionable framework.",
      "Ship a thin vertical slice that exercises auth, data, and the hardest integration.",
      "Plan the handover while we still remember why decisions were made.",
    ],
    architecture:
      "We prefer explicit modules, boring data stores, and interfaces that can be versioned. Client and server each do the job they are good at. Complexity is added when a measured constraint requires it.",
    useCases: [
      {
        title: "Operational product",
        body: "A workflow that several teams share, with permissions, audit, and reporting that a spreadsheet cannot carry.",
      },
      {
        title: "Customer or partner portal",
        body: "A controlled surface on top of existing systems of record.",
      },
      {
        title: "Modernizing a revenue-critical application",
        body: "Reduce risk while continuing to ship, instead of a rewrite that pauses the business.",
      },
    ],
    integration: [
      "ERP, CRM, and finance systems already in production",
      "Identity providers and single sign-on",
      "Document stores, warehouses, and file exchanges that cannot vanish overnight",
    ],
    operations: [
      {
        title: "Security",
        body: "Authn/authz designed with the data classification of the domain. Input, output, and dependency hygiene are part of the build.",
      },
      {
        title: "Scalability",
        body: "We load-test the paths that will actually grow, not every page equally.",
      },
      {
        title: "Maintainability",
        body: "Names, tests, and module boundaries that a new engineer can follow in a week, not a quarter.",
      },
    ],
    method: [
      { title: "Discover", body: "Users, constraints, systems of record, and the cost of being wrong." },
      { title: "Shape", body: "Domain model, interface sketch, and a delivery sequence." },
      { title: "Build", body: "Iterative slices with reviewable pull requests." },
      { title: "Prove", body: "Tests, accessibility, and operational checks before wider use." },
      { title: "Hand over", body: "Runbooks, backlog, and pairing so the product is not a black box." },
    ],
    related: ["microservices", "devops-engineering", "crm-solutions"],
    relatedInsights: ["modernizing-legacy-applications", "monolith-versus-microservices"],
  },
  {
    slug: "microservices",
    name: "Microservices Architecture",
    navLabel: "Microservices",
    short:
      "Service boundaries, APIs, and incremental modernization — including the cases where a modular monolith is the better first step.",
    h1: "Microservices architecture, when the boundaries earn their keep",
    lede:
      "Distributed systems are expensive. We help you decide whether independent services, a modular monolith, or a hybrid is the right shape for the domain, the team, and the operational load you can actually carry.",
    title: "Microservices Architecture Consulting & Migration",
    serviceType: "Microservices architecture consulting",
    description:
      "Microservices architecture consulting: service boundaries, APIs and events, data ownership, and incremental monolith migration — or a modular monolith.",
    image: "/images/insight-architecture.jpg",
    imageAlt: "Concrete atrium staircase with a precise steel handrail and strong geometric shadow",
    problemsTitle: "Distribution should solve a real constraint",
    problems: [
      {
        title: "A monolith that cannot be changed safely",
        body: "Coupling, shared tables, and missing tests make every release a negotiation. The question is which seams to cut first.",
      },
      {
        title: "Too many services, too early",
        body: "A small team now operates a distributed system they cannot debug. Latency and dual-writes appeared before the product needed them.",
      },
      {
        title: "Shared databases pretending to be services",
        body: "HTTP boundaries exist, but data ownership does not. A change in one place still surprises another.",
      },
    ],
    capabilities: [
      {
        title: "Architecture assessment",
        body: "Map domains, data ownership, team structure, and the operational cost of the current shape.",
      },
      {
        title: "Boundary design",
        body: "Service or module seams based on change frequency and business language, not on a generic template.",
      },
      {
        title: "API and event design",
        body: "Synchronous contracts where consistency is required; events where fan-out and temporal decoupling help.",
      },
      {
        title: "Data per service",
        body: "Persistence that matches ownership. Replication and sagas only where a single transaction cannot span the real world.",
      },
      {
        title: "Observability for distributed systems",
        body: "Correlation, tracing, and failure isolation so an incident is not a scavenger hunt.",
      },
      {
        title: "Incremental extraction",
        body: "Strangler paths, compatibility layers, and rollback that keep the business running.",
      },
    ],
    approachTitle: "Judgment before a service catalog",
    approach: [
      "If one team owns the whole system and release cadence is already healthy, we will often recommend a modular monolith.",
      "If independent scale, independent release, or a hard domain split is real, we design services around those facts.",
      "We extract the highest-churn or highest-risk capability first, not the easiest demo.",
      "We refuse dual-writes without a plan for consistency and repair.",
    ],
    architecture:
      "Each service owns its data and publishes a contract. Synchronous calls stay inside a latency budget. Events carry facts, not remote procedure calls in disguise. A gateway or composition layer exists only when clients need a stable façade.",
    useCases: [
      {
        title: "Selective extraction from a monolith",
        body: "Billing, identity, or a high-traffic read path needs independent release without a full rewrite.",
      },
      {
        title: "Event-driven operations",
        body: "Several systems must react to the same business fact without a nightly batch.",
      },
      {
        title: "Platform for multiple product teams",
        body: "Clear contracts so teams can ship without coordinating every schema change.",
      },
    ],
    integration: [
      "Existing monoliths and packaged systems",
      "Message brokers and streaming platforms already in the estate",
      "Identity, API gateways, and service meshes only when they reduce — not increase — operational load",
    ],
    operations: [
      {
        title: "Reliability",
        body: "Timeouts, retries with jitter, idempotency, and bulkheads are designed, not left to framework defaults.",
      },
      {
        title: "Scalability",
        body: "Scale the services that have independent load. Do not clone the whole estate.",
      },
      {
        title: "Maintainability",
        body: "A service that cannot be understood by its owning team is a liability, however fashionable the diagram.",
      },
    ],
    method: [
      { title: "Map", body: "Domains, data, teams, and the pain that prompted the conversation." },
      { title: "Choose shape", body: "Monolith modules, services, or both — written down with trade-offs." },
      { title: "Cut a seam", body: "One extraction with contract tests and a rollback." },
      { title: "Observe", body: "Prove the new path under load and failure." },
      { title: "Repeat", body: "Only extract the next seam if the first one earned the complexity." },
    ],
    related: ["software-development", "devops-engineering", "data-engineering"],
    relatedInsights: ["monolith-versus-microservices", "modernizing-legacy-applications"],
  },
  {
    slug: "data-engineering",
    name: "Data Engineering & Architecture",
    navLabel: "Data Engineering",
    short:
      "Pipelines, models, and platforms that make business data trustworthy enough to use in decisions and downstream products.",
    h1: "Data engineering for information you can trust",
    lede:
      "Most organizations do not lack data. They lack a path from operational systems to a model people will use. We design pipelines, warehouses or lakehouses, and governance so numbers have owners, lineage, and a known refresh.",
    title: "Data Engineering & Data Architecture Services",
    serviceType: "Data engineering and data architecture consulting",
    description:
      "Data engineering services and data architecture consulting: reliable pipelines, ELT and orchestration, warehouse or lakehouse design, and data quality you can measure.",
    image: "/images/data-engineering.jpg",
    imageAlt: "Dark operations room with a wall of abstract data visualizations",
    problemsTitle: "Familiar data problems with expensive consequences",
    problems: [
      {
        title: "Every team has a different number",
        body: "Revenue, inventory, or active customers are defined three ways. Meetings become debates about extracts.",
      },
      {
        title: "Pipelines that fail quietly",
        body: "A job missed last night. A dashboard still looks fine. Decisions are made on a stale slice.",
      },
      {
        title: "A warehouse that became a dumping ground",
        body: "Tables proliferate. Nobody knows what is certified. Analysts rebuild the same join every week.",
      },
    ],
    capabilities: [
      {
        title: "Platform and architecture",
        body: "Warehouse, lakehouse, or a hybrid — chosen for query patterns, freshness, and the skills of the team.",
      },
      {
        title: "Batch and streaming pipelines",
        body: "ELT/ETL with orchestration, retries, and late-data handling. Streaming only where latency is a real requirement.",
      },
      {
        title: "Modeling",
        body: "Conformed dimensions, facts, and contracts that match how the business talks about itself.",
      },
      {
        title: "Quality, lineage, and governance",
        body: "Tests on the data, not only on the code. Documented owners. Access that matches classification.",
      },
      {
        title: "Integration",
        body: "Operational systems, files, events, and SaaS extracts brought into a coherent model.",
      },
      {
        title: "Foundations for analytics and AI",
        body: "Reliable features and tables first. Models on top of a swamp do not become more accurate with a better algorithm.",
      },
    ],
    approachTitle: "Start from the decisions that matter",
    approach: [
      "List the decisions and reports that actually move money or risk.",
      "Trace those numbers to source systems and the people who generate them.",
      "Fix definitions before adding another tool.",
      "Build the thinnest certified layer that can earn trust.",
      "Instrument freshness and quality so trust is measurable.",
    ],
    architecture:
      "Sources land in a controlled raw area. Transformations are versioned. A curated layer holds certified models. Downstream analytics and applications read from contracts, not from whoever happened to write a table last.",
    useCases: [
      {
        title: "First certified warehouse",
        body: "Finance and operations need one place for a small set of trusted metrics.",
      },
      {
        title: "Unreliable nightly estate",
        body: "Jobs exist but fail silently. We add contracts, tests, and an on-call path.",
      },
      {
        title: "Event + batch hybrid",
        body: "Operational events need near-real-time views without abandoning historical reconstruction.",
      },
    ],
    integration: [
      "ERP, CRM, product databases, and file drops",
      "Existing BI tools that should not be replaced on day one",
      "Identity and access systems for row- and object-level controls",
    ],
    operations: [
      {
        title: "Reliability",
        body: "SLAs for freshness. Alerting on failed tests. Backfills that are documented.",
      },
      {
        title: "Performance",
        body: "Partitioning, clustering, and warehouse sizing based on actual query logs.",
      },
      {
        title: "Governance",
        body: "PII handling, retention, and access reviews that security can inspect.",
      },
    ],
    method: [
      { title: "Frame", body: "Critical metrics, owners, and the cost of being late or wrong." },
      { title: "Source", body: "Systems, extracts, and the quality of what already exists." },
      { title: "Model", body: "Contracts and transformations with tests." },
      { title: "Publish", body: "Certified tables and a path into analytics tools." },
      { title: "Run", body: "Orchestration, on-call, and a backlog for the next domains." },
    ],
    related: ["analytical-platforms", "cloud-engineering", "crm-solutions"],
    relatedInsights: ["data-pipeline-reliability", "warehouse-versus-lakehouse"],
  },
  {
    slug: "analytical-platforms",
    name: "Analytical Platforms",
    navLabel: "Analytical Platforms",
    short:
      "Metrics, models, and interfaces that help people make decisions — built on data that has already been prepared.",
    h1: "Business intelligence and analytics people will actually use",
    lede:
      "A dashboard is not a strategy. We design business intelligence platforms — metric definitions, semantic models, and interfaces — so operators and executives can answer a question without booking a meeting with an analyst.",
    title: "Business Intelligence & Analytics Consulting",
    serviceType: "Business intelligence consulting and analytics platform development",
    description:
      "Business intelligence consulting: metric definitions, semantic models, analytics engineering, and dashboards designed around real decisions.",
    image: "/images/analytics-environment.jpg",
    imageAlt: "Briefing room with a large display of abstract charts and a pale wood table",
    problemsTitle: "Why reporting estates lose their audience",
    problems: [
      {
        title: "Dashboards without definitions",
        body: "Two tiles named “active customers” disagree. Trust collapses, and people export to Excel again.",
      },
      {
        title: "A catalogue nobody navigates",
        body: "Hundreds of reports, no owners, and a homepage that looks like a filing cabinet.",
      },
      {
        title: "Performance that punishes curiosity",
        body: "A filter takes thirty seconds. Users stop exploring and wait for a weekly PDF.",
      },
    ],
    capabilities: [
      {
        title: "Metric frameworks",
        body: "Named definitions, grain, and owners. The argument happens once, in writing.",
      },
      {
        title: "Semantic models",
        body: "Relationships and calculations that self-service tools can use without reinventing joins.",
      },
      {
        title: "Executive and operational views",
        body: "Different jobs need different density. We design both instead of one overloaded canvas.",
      },
      {
        title: "Reporting automation",
        body: "Scheduled packs where a live dashboard is the wrong medium.",
      },
      {
        title: "Access and governance",
        body: "Row-level security, certified vs. exploratory content, and a retirement path for unused reports.",
      },
      {
        title: "Usability",
        body: "Hierarchy, annotation, and performance so the interface respects the reader’s time.",
      },
    ],
    approachTitle: "Decisions first, tiles second",
    approach: [
      "Interview the people who will use the numbers in a live meeting.",
      "Write metric contracts before drawing charts.",
      "Prototype with real data, including the ugly edges.",
      "Publish a small certified set, then expand.",
      "Measure adoption. Unused reports are removed, not archived forever.",
    ],
    architecture:
      "Prepared models from the data platform feed a semantic layer. Certified content is separate from sandbox work. The interface is a product with navigation, not a gallery of exports.",
    useCases: [
      {
        title: "Operating cadence",
        body: "A weekly leadership review that currently lives in slides assembled by hand.",
      },
      {
        title: "Front-line operations",
        body: "A team needs exception lists and drill-through, not another high-level donut chart.",
      },
      {
        title: "Self-service with guardrails",
        body: "Analysts explore; certified metrics stay stable.",
      },
    ],
    integration: [
      "Warehouses and lakehouses already in place",
      "Existing BI platforms the organisation has licensed",
      "Identity for row-level and workspace access",
    ],
    operations: [
      {
        title: "Governance",
        body: "Certified stamps mean something. Sandboxes are labeled as such.",
      },
      {
        title: "Performance",
        body: "Aggregates and incremental refresh based on how people actually filter.",
      },
      {
        title: "Maintainability",
        body: "Each report has an owner. Visuals that cannot be explained are not shipped.",
      },
    ],
    method: [
      { title: "Listen", body: "Meetings, decisions, and the current unofficial reports." },
      { title: "Define", body: "Metrics and grains written as contracts." },
      { title: "Model", body: "Semantic layer on trusted tables." },
      { title: "Compose", body: "Interfaces for specific jobs." },
      { title: "Adopt", body: "Training, office hours, and a retirement list." },
    ],
    related: ["data-engineering", "crm-solutions", "software-development"],
    relatedInsights: ["useful-bi-dashboards", "data-pipeline-reliability"],
  },
  {
    slug: "crm-solutions",
    name: "CRM Solutions",
    navLabel: "CRM Solutions",
    short:
      "CRM design, implementation, and integration around the way you sell, serve, and retain customers — not a generic pipeline template.",
    h1: "CRM implementation that matches how you actually sell and serve",
    lede:
      "A CRM fails when it records a process nobody follows. We help you choose, configure, and integrate a system that matches the real customer lifecycle, with data you can trust and workflows people will use.",
    title: "CRM Implementation & Integration Services",
    serviceType: "CRM implementation and integration",
    description:
      "CRM implementation and integration services for Salesforce, HubSpot, and Dynamics 365: lifecycle design, data migration, automation, and ERP integration.",
    image: "/images/crm-workspace.jpg",
    imageAlt: "Daylit customer operations desk with dual monitors and a headset at rest",
    problemsTitle: "CRM programmes that stall after go-live",
    problems: [
      {
        title: "A tool selected before the process was written",
        body: "Licences arrive. Fields multiply. Sales still lives in inboxes because the stages do not match reality.",
      },
      {
        title: "Duplicates and half-migrated history",
        body: "Reps do not trust the record. Reporting is fiction. Marketing automation fires into the void.",
      },
      {
        title: "No connection to the rest of the business",
        body: "Orders, tickets, and finance sit elsewhere. The CRM is a silo with a nicer interface.",
      },
    ],
    capabilities: [
      {
        title: "Process and platform assessment",
        body: "Map the lifecycle first. Then decide whether a major platform, a lighter CRM, or a custom ops layer is the honest fit.",
      },
      {
        title: "Implementation and configuration",
        body: "Objects, stages, permissions, and layouts that match roles — not every field a vendor demo showed.",
      },
      {
        title: "Workflow and automation",
        body: "Assignments, reminders, and handoffs that remove typing, not judgment.",
      },
      {
        title: "Data migration",
        body: "Deduplication, mapping, and a cutover that leaves a known residual — not a surprise three months later.",
      },
      {
        title: "Integration",
        body: "APIs and events with ERP, billing, support, and product usage where those facts belong in the customer record.",
      },
      {
        title: "Reporting",
        body: "Pipeline and service views built on definitions sales and finance both accept.",
      },
    ],
    approachTitle: "Adoption is an engineering requirement",
    approach: [
      "Write the customer lifecycle with the people who run it.",
      "Cut the object model until it is smaller than the wishlist.",
      "Migrate a pilot team with their real accounts.",
      "Integrate only the systems that change a conversation with a customer.",
      "Measure usage of the fields that matter, then retire the rest.",
    ],
    architecture:
      "The CRM is a system of engagement on top of agreed customer identities. Systems of record for money and fulfilment stay authoritative. Integrations are explicit; spreadsheets are not a hidden bus.",
    useCases: [
      {
        title: "First serious CRM",
        body: "A growing team has outgrown spreadsheets and shared inboxes.",
      },
      {
        title: "Cleanup after a rushed rollout",
        body: "The licence is paid. The process is not. We redesign stages, fields, and ownership.",
      },
      {
        title: "Connected revenue operations",
        body: "Marketing, sales, and service need a shared identity and a shorter handoff.",
      },
    ],
    integration: [
      "Finance and billing",
      "Support and ticketing",
      "Marketing automation already in place",
      "Product or usage data when it changes how accounts are worked",
    ],
    operations: [
      {
        title: "Data quality",
        body: "Required fields are few and enforced. Duplicates have an owner.",
      },
      {
        title: "Security",
        body: "Role-based visibility for commercial and personal data.",
      },
      {
        title: "Change",
        body: "A sandbox, a release habit, and someone accountable for the data model.",
      },
    ],
    method: [
      { title: "Map", body: "Lifecycle, roles, and the systems that already hold customer facts." },
      { title: "Design", body: "Objects, stages, and the smallest useful automation." },
      { title: "Migrate", body: "Clean, map, rehearse, cut over." },
      { title: "Integrate", body: "Connect the systems that change a customer conversation." },
      { title: "Adopt", body: "Coaching, reports people asked for, and a cleanup backlog." },
    ],
    related: ["software-development", "data-engineering", "analytical-platforms"],
    relatedInsights: ["crm-integration-migration", "useful-bi-dashboards"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getServicesBySlugs(slugs: string[]) {
  return slugs.map((slug) => getService(slug)).filter(Boolean) as Service[];
}
