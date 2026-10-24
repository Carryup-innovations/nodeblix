import type { Faq } from "./services";

export type ServiceGuide = {
  definition: {
    q: string;
    a: string;
    more: string;
    links: { href: string; label: string }[];
  };
  comparison: {
    title: string;
    intro: string;
    columns: string[];
    rows: string[][];
    note?: string;
  };
  tradeoffs: { title: string; body: string }[];
  faqs: Faq[];
};

export const serviceGuides: Record<string, ServiceGuide> = {
  "ai-engineering": {
    definition: {
      q: "What is AI engineering?",
      a: "AI engineering is the work of turning AI models into dependable product features and business workflows: choosing the model and design, connecting it to the right company data, testing output quality against real cases, adding guardrails, and operating it with monitoring, cost controls, and versioned releases. It treats a large language model as one component of a system, not the whole system.",
      more: "Data science asks whether a model can do the task. AI engineering asks whether the feature built on it can be trusted every day, by every user, at a cost the business accepts. That depends heavily on data quality and delivery discipline, so this service works closely with our data engineering and DevOps practices.",
      links: [
        { href: "/services/data-engineering", label: "data engineering for AI-ready data" },
        { href: "/insights/llm-features-in-production", label: "taking an LLM feature from demo to production" },
      ],
    },
    comparison: {
      title: "Prompting, RAG, fine-tuning, or agents?",
      intro:
        "These are the four common ways to adapt a language model to a business task. They are not rivals — most production systems combine the first two — but each solves a different problem.",
      columns: ["Approach", "Best when", "Watch out for"],
      rows: [
        [
          "Prompt engineering",
          "The task needs general knowledge plus clear instructions and examples.",
          "Fragile wording and no access to private or recent information.",
        ],
        [
          "Retrieval-augmented generation (RAG)",
          "Answers must draw on your own documents or records and cite their sources.",
          "Quality depends on chunking, ranking, permissions, and content upkeep.",
        ],
        [
          "Fine-tuning",
          "You need a consistent format, tone, or narrow skill that prompting cannot reach.",
          "Training data effort, retraining as needs change, and it does not add fresh facts.",
        ],
        [
          "AI agents",
          "The task spans several steps and tools, such as looking up, deciding, and acting.",
          "Compounding errors, harder testing, and the need for limits and human approval.",
        ],
      ],
      note: "We usually start with prompting and retrieval, then add fine-tuning or agents only when the evaluation shows they are needed.",
    },
    tradeoffs: [
      {
        title: "Hosted models versus self-hosted",
        body: "Hosted APIs give the strongest models with no infrastructure to run. Self-hosted open-weight models give more control over data and unit cost, but you own capacity, upgrades, and GPU spend.",
      },
      {
        title: "Larger models versus smaller ones",
        body: "Bigger models handle ambiguity better and cost more per request. Smaller models are faster and cheaper for narrow tasks once evaluation shows they are good enough.",
      },
      {
        title: "Automation versus human review",
        body: "Full automation saves the most time and carries the most risk. Routing low-confidence or high-impact cases to a person is often the right first release.",
      },
      {
        title: "Building versus buying",
        body: "Packaged AI features in tools you already license can be enough for common tasks. Custom builds make sense when the workflow, data, or controls are specific to your business.",
      },
    ],
    faqs: [
      {
        q: "What is retrieval-augmented generation (RAG)?",
        a: "RAG is a design where an application first searches your own content — documents, tickets, records — for passages relevant to a question, then gives those passages to a language model to write the answer. It lets the model use private and current information without retraining, and lets users see the sources behind an answer.",
      },
      {
        q: "When should we use RAG instead of fine-tuning?",
        a: "Use RAG when the model needs facts that live in your content or change often. Use fine-tuning when the model needs a consistent behaviour — a format, a tone, a narrow classification skill — that prompting cannot achieve reliably. Fine-tuning does not keep a model up to date with new facts; retrieval does. Many systems use retrieval alone; some combine both.",
      },
      {
        q: "How do you evaluate an LLM application?",
        a: "We build a test set from real examples with agreed good answers, then score each version of the system against it: correctness, use of sources, refusals where the answer is unknown, safety checks, latency, and cost per request. Automated scoring, including model-graded checks, is calibrated against human review. The same set runs on every change, so quality is compared, not guessed.",
      },
      {
        q: "Do we need AI agents?",
        a: "Only if the task genuinely needs several steps and tool calls that cannot be fixed in advance. Many valuable features are a single well-grounded model call inside a normal workflow. When agents are justified, we limit the tools they can use, require approval for consequential actions, and trace every step.",
      },
      {
        q: "How much does AI development cost?",
        a: "The main drivers are the number of workflows in scope, the state of the data the feature depends on, the integrations required, the quality bar and how much evaluation it needs, and ongoing model usage, which is priced by the provider. A short framing and prototype phase, scored against an evaluation set, gives a realistic basis for estimating the full build and its running cost.",
      },
      {
        q: "Is our data ready for AI?",
        a: "Data is ready when the sources a feature needs are accessible, reasonably current, permissioned, and described well enough to search. An AI readiness review looks at those sources for one specific use case rather than the whole estate. Where gaps exist, the fix is usually ordinary data engineering: ownership, quality checks, and access control.",
      },
      {
        q: "How do you keep company data private when using AI models?",
        a: "We check provider data-retention and training terms, prefer enterprise endpoints or cloud-hosted model services within your own account, filter or mask sensitive fields before they reach a model, and enforce the user's permissions at retrieval time. Where policy requires it, open-weight models can run inside your infrastructure.",
      },
      {
        q: "Which AI models and platforms do you work with?",
        a: "We choose models per use case from commercial APIs, managed model services on AWS, Azure, and Google Cloud, and open-weight models that can be self-hosted. The system is designed so the model can be swapped after testing. Platform partnership badges are listed only once they are verified.",
      },
    ],
  },

  "cloud-engineering": {
    definition: {
      q: "What does cloud engineering involve?",
      a: "Cloud engineering is the design, build, and operation of the infrastructure applications run on in AWS, Microsoft Azure, or Google Cloud: account and network structure, identity, compute, storage, deployment automation, resilience, and cost controls. Done well, it gives teams a platform they can change safely and a bill they can explain.",
      more: "It overlaps with DevOps but is not the same job. Cloud engineering decides what the platform is — landing zone, network, security boundaries, recovery design. DevOps engineering decides how change moves through it. Most programmes need both, and we scope them separately so each has a clear owner.",
      links: [
        { href: "/services/devops-engineering", label: "DevOps and CI/CD engineering" },
        { href: "/insights/cloud-migration-planning", label: "Cloud migration planning guide" },
      ],
    },
    comparison: {
      title: "Rehost, replatform, or refactor?",
      intro:
        "A cloud migration strategy is chosen per workload, not per programme. These are the common options and when each one is the honest choice.",
      columns: ["Approach", "What changes", "Choose it when", "Watch for"],
      rows: [
        [
          "Rehost (lift and shift)",
          "Servers move largely as they are.",
          "A hard deadline — a data-centre exit or contract end — matters more than optimisation.",
          "Running costs can rise, and old operational habits move with the servers.",
        ],
        [
          "Replatform",
          "Selected components become managed services: databases, queues, load balancers.",
          "You want less operational work without rewriting the application.",
          "Hidden coupling to the old platform, such as file paths and scheduled jobs.",
        ],
        [
          "Refactor or rebuild",
          "The application is redesigned around cloud-native services.",
          "The system is strategic and its current design blocks change or scale.",
          "The longest timeline; it needs product ownership, not only infrastructure work.",
        ],
        [
          "Retain or retire",
          "The system stays where it is, or is switched off.",
          "It has low value, is hard to move, or is already being replaced.",
          "Retained systems still need connectivity, monitoring, and an owner.",
        ],
      ],
      note: "Most estates use several of these at once. The inventory decides the mix.",
    },
    tradeoffs: [
      {
        title: "Managed services versus portability",
        body: "Managed databases and queues reduce operational work but deepen dependence on one provider. We decide per component and write down the exit cost instead of defaulting to either extreme.",
      },
      {
        title: "Resilience has a price",
        body: "Active-active, multi-region designs add infrastructure and data-consistency work. Many systems are better served by a tested restore into a second region with an agreed recovery time.",
      },
      {
        title: "Landing-zone scope",
        body: "Too little structure and accounts sprawl; too much and teams route around the controls. We start with the smallest set of guardrails people will actually use, then extend it.",
      },
      {
        title: "Cost visibility is not cost reduction",
        body: "Tagging and dashboards make spend visible. Savings come from owners with budgets and from architecture changes: rightsizing, storage lifecycle rules, and switching off idle environments.",
      },
    ],
    faqs: [
      {
        q: "When should a company migrate to the cloud?",
        a: "When there is a concrete driver: a hardware refresh or data-centre exit, a hosting contract ending, capacity you cannot add quickly, or teams blocked by slow provisioning. Cost alone is a weak reason — workloads moved unchanged can cost more in the cloud. Start with an inventory and a business case per group of workloads.",
      },
      {
        q: "How long does a cloud migration take?",
        a: "It depends on how many workloads there are, how tightly they are coupled, and how much is modernized on the way. A landing zone and a first, low-risk wave come first; the rest of the estate moves in planned waves. We give an estimate after the inventory — a date set before dependencies are known is a guess.",
      },
      {
        q: "What is a cloud landing zone?",
        a: "A landing zone is the pre-configured foundation that workloads are deployed into: the account or subscription structure, network layout, identity and access model, logging, and security guardrails. Building it before the first production workload is what keeps a cloud estate from becoming a collection of one-off environments.",
      },
      {
        q: "How much does a cloud migration cost?",
        a: "The main cost drivers are the number of workloads and how tightly they are coupled, how much is modernized rather than moved as-is, data volumes and transfer, compliance requirements, and how much of the work your own team takes on. Running costs after the move depend on architecture choices, not only on the provider’s price list. We scope cost after a short inventory rather than quoting a figure up front.",
      },
      {
        q: "Do you work only on one cloud?",
        a: "No. We design for AWS, Microsoft Azure, and Google Cloud when the workload and the team’s existing skills justify it. Multi-cloud is a cost, not a default.",
      },
      {
        q: "Can you migrate without rewriting everything?",
        a: "Yes. Many programmes start with a safer rehost or replatform, then modernize the systems that actually benefit from a rebuild.",
      },
      {
        q: "How do you keep cloud costs under control?",
        a: "By making spend attributable through account structure and tagging, giving each cost an owner with a budget, and changing the architecture where it moves the number: rightsizing, autoscaling, storage tiers, commitment discounts where usage is stable, and scheduling non-production environments.",
      },
      {
        q: "Will you take over day-to-day operations?",
        a: "We can support a handover or an initial operate period. Long-term managed operations are scoped only when both sides agree that is the right model.",
      },
    ],
  },

  "devops-engineering": {
    definition: {
      q: "What does DevOps engineering involve?",
      a: "DevOps engineering builds the path a code change takes to production: version control, automated builds and tests, CI/CD pipelines, infrastructure as code, deployment strategy, and the monitoring that shows whether a release worked. The goal is frequent, low-risk releases that any engineer on the team can carry out.",
      more: "Tools are the visible part. The harder work is agreeing what a releasable change looks like, standardizing environments, and making rollback routine. We track progress with delivery measures such as deployment frequency, lead time for changes, change failure rate, and time to restore service — with definitions the team agrees on.",
      links: [
        { href: "/services/cloud-engineering", label: "cloud platform engineering" },
        { href: "/insights/cicd-pipeline-design", label: "CI/CD pipeline design guide" },
      ],
    },
    comparison: {
      title: "Choosing a deployment strategy",
      intro:
        "How a release reaches users decides how much a bad change can hurt. Each strategy trades infrastructure cost and complexity for safety.",
      columns: ["Strategy", "How it works", "Good fit", "Cost"],
      rows: [
        [
          "Rolling",
          "Instances are replaced with the new version in batches.",
          "Stateless services with backward-compatible changes.",
          "Two versions run side by side briefly; rollback is another rollout.",
        ],
        [
          "Blue/green",
          "A complete new environment takes traffic in a single switch.",
          "Releases that need an instant, whole-system rollback.",
          "Double capacity during the release; database changes need care.",
        ],
        [
          "Canary",
          "A small share of traffic goes to the new version first.",
          "High-traffic services with trustworthy metrics.",
          "Needs reliable telemetry and automated promote-or-abort rules.",
        ],
        [
          "Feature flags",
          "Code ships switched off and is enabled separately.",
          "Separating deployment from release; exposing features by user group.",
          "Flag debt — old flags must be removed after rollout.",
        ],
      ],
    },
    tradeoffs: [
      {
        title: "Kubernetes is an operating commitment",
        body: "It standardizes deployment across many services but adds a platform that must be upgraded, secured, and debugged. For a handful of services, managed containers or platform services are often cheaper to run.",
      },
      {
        title: "Pipeline speed versus depth",
        body: "Every check adds minutes to feedback. We run fast checks on every commit and move slower suites — end-to-end, performance, some security scans — to the stage where their result changes a decision.",
      },
      {
        title: "Shared templates need owners",
        body: "Golden paths help several teams only if someone maintains them. Without an owner they fork into dozens of slightly different pipelines.",
      },
      {
        title: "More alerts, less reliability",
        body: "Paging on every metric trains people to ignore pages. Alerting on user-facing symptoms reduces noise, but it requires agreed service-level indicators first.",
      },
    ],
    faqs: [
      {
        q: "How does DevOps improve software delivery?",
        a: "By making releases small, automated, and reversible. Small changes are easier to review and test, automation removes the manual steps where errors creep in, and fast rollback limits the damage when something fails. The usual result is more frequent releases with fewer incidents — which should be measured, not assumed.",
      },
      {
        q: "What is the difference between continuous integration, delivery, and deployment?",
        a: "Continuous integration merges and tests every change automatically, so problems surface within minutes. Continuous delivery keeps every passing build ready to release through a controlled step. Continuous deployment goes further and releases every passing change to production automatically.",
      },
      {
        q: "What is infrastructure as code?",
        a: "Describing networks, permissions, and cloud services in version-controlled files instead of configuring them by hand. Changes are reviewed like application code, environments can be recreated on demand, and drift from the declared state can be detected.",
      },
      {
        q: "What are DORA metrics?",
        a: "Delivery measures popularised by the DORA research programme: deployment frequency, lead time for changes, change failure rate, and time to restore service. They are most useful as a baseline the team defines and tracks itself — not as a league table against other companies.",
      },
      {
        q: "What affects the cost of DevOps consulting?",
        a: "The number of services and teams involved, how far current delivery is from automated, the state of environments and infrastructure code, compliance evidence requirements, and whether the goal is a one-off improvement or a shared platform for several teams. A short assessment of the current path to production is usually the first, fixed-scope step.",
      },
      {
        q: "Do we need Kubernetes?",
        a: "Only if you have enough services, traffic patterns, or platform staff to justify the operational load. We will say so when a simpler hosting model is the better engineering decision.",
      },
      {
        q: "Can you work inside an existing change-management process?",
        a: "Yes. Pipelines can produce the evidence a change advisory board or internal audit already expects, instead of adding a second, unofficial process.",
      },
      {
        q: "Will this replace our engineers?",
        a: "No. The point is to remove toil so the people who already understand the product can ship more safely.",
      },
    ],
  },

  "software-development": {
    definition: {
      q: "What is custom software development?",
      a: "Custom software development is designing and building applications for an organisation’s own processes — web applications, internal tools, customer and partner portals, APIs, and the integrations between them — instead of bending a packaged product to fit. It makes sense when the workflow is a source of advantage, or when packaged software forces expensive workarounds.",
      more: "It also covers application modernization: making an existing, revenue-carrying system safer to change through tests, clearer module boundaries, runtime upgrades, and incremental replacement. When the main question is whether to split a system into independently deployed services, that is our microservices architecture work.",
      links: [
        { href: "/services/microservices", label: "microservices architecture" },
        { href: "/insights/modernizing-legacy-applications", label: "legacy application modernization guide" },
      ],
    },
    comparison: {
      title: "Build, buy, extend, or modernize?",
      intro:
        "Custom code is a long-term commitment. This is how we frame the decision before anyone writes it.",
      columns: ["Option", "Best when", "Trade-off"],
      rows: [
        [
          "Buy a packaged or SaaS product",
          "The process is standard for your industry and a product covers most of it.",
          "You adopt the vendor’s model and roadmap; licence cost grows with users.",
        ],
        [
          "Extend a product",
          "A product covers the core, but specific steps or integrations are missing.",
          "Extensions must survive vendor upgrades and API changes.",
        ],
        [
          "Build custom software",
          "The workflow differentiates the business, or no product models it cleanly.",
          "You own maintenance, security, and hosting for the life of the system.",
        ],
        [
          "Modernize what you have",
          "A legacy application still carries the business but is slow or risky to change.",
          "Needs sustained investment beside feature work; there is no big-bang finish line.",
        ],
      ],
    },
    tradeoffs: [
      {
        title: "Rewrite versus incremental modernization",
        body: "A full rewrite pauses value while the old system keeps changing underneath it. Incremental replacement — the strangler fig pattern — takes longer to finish but keeps the business running and avoids a single risky cut-over.",
      },
      {
        title: "A framework is a hiring decision",
        body: "The stack should be one your team can recruit for and operate in five years, not the one that demos best this quarter.",
      },
      {
        title: "Thin slice versus broad first release",
        body: "A narrow slice through authentication, data, and the hardest integration exposes problems early. A broad first release exposes them late, when they cost more.",
      },
      {
        title: "Ownership after launch",
        body: "Custom software needs an owner, a budget for upkeep, and regular dependency and security updates. We plan the handover from the first week.",
      },
    ],
    faqs: [
      {
        q: "When should you build custom software instead of buying it?",
        a: "Build when the process is a source of advantage, when packaged products would need heavy customization to fit, or when integration needs are unusual. Buy when the process is standard and a product covers most of it. Many good outcomes are hybrids: buy the commodity system and build the differentiating layer around it.",
      },
      {
        q: "What is application modernization?",
        a: "Improving an existing application so it is cheaper and safer to change: adding tests, separating modules, upgrading runtimes and dependencies, moving to managed infrastructure, or replacing parts incrementally. It usually happens alongside feature work rather than as a freeze.",
      },
      {
        q: "How do you estimate a custom software project?",
        a: "After discovery. We break the work into thin slices, estimate the first ones with the team, and refine the forecast as real delivery data appears. A fixed estimate made before the domain is understood moves risk around rather than removing it.",
      },
      {
        q: "How much does custom software development cost?",
        a: "Cost follows scope and risk: the number of user roles and workflows, the integrations with existing systems, security and compliance needs, data migration, and how long the software must be supported. We estimate after discovery and deliver in slices, so spending can stop or change direction at each release. If the integration is mainly about a CRM, see our CRM solutions service.",
      },
      {
        q: "Do you only build greenfield products?",
        a: "No. A large share of useful software work is making an existing system safer to change.",
      },
      {
        q: "Which languages and frameworks do you use?",
        a: "We match the stack your team can hire for and operate. We will not introduce a language for its own sake.",
      },
      {
        q: "Can you work alongside an internal product team?",
        a: "That is the preferred model. We write in the same repositories, follow the same review rules, and leave ownership with the team.",
      },
    ],
  },

  microservices: {
    definition: {
      q: "What is microservices architecture?",
      a: "Microservices architecture structures an application as a set of small services, each owning one business capability and its data, communicating through APIs or events, and deployed independently. It lets teams release and scale parts of a system separately — at the cost of operating a distributed system.",
      more: "It is one option among several. A modular monolith keeps a single deployment but enforces boundaries between modules, and suits many teams better. Our work is choosing the right shape, designing boundaries and contracts, and migrating incrementally when separate services are justified.",
      links: [
        { href: "/services/software-development", label: "custom software and modernization" },
        { href: "/insights/monolith-versus-microservices", label: "monolith versus microservices guide" },
      ],
    },
    comparison: {
      title: "Monolith, modular monolith, or microservices?",
      intro:
        "Architecture shape should follow team structure, release needs, and how much operational load you can carry.",
      columns: ["Architecture", "Deploys as", "Fits when", "Main cost"],
      rows: [
        [
          "Monolith",
          "One unit.",
          "One team, an early product, or a simple domain.",
          "Coupling grows quietly unless boundaries are enforced.",
        ],
        [
          "Modular monolith",
          "One unit with enforced internal module boundaries.",
          "Several teams share one release cadence and the domain is still settling.",
          "Needs discipline to keep modules separate; scales as one unit.",
        ],
        [
          "Microservices",
          "Many independently deployed services.",
          "Independent release or scaling needs are real, and teams can own services end to end.",
          "Network failure handling, data consistency, tracing, and platform overhead.",
        ],
      ],
      note: "Hybrids are common: a modular core with a few services extracted where independence pays.",
    },
    tradeoffs: [
      {
        title: "Consistency across services",
        body: "Once data lives in separate services, one database transaction no longer covers a business operation. Sagas, the outbox pattern, and idempotent handlers solve this, but they add design and testing work.",
      },
      {
        title: "Synchronous calls versus events",
        body: "Request/response APIs are easy to reason about but couple availability. Event-driven communication decouples services in time but makes flows harder to trace and needs schema versioning.",
      },
      {
        title: "Platform overhead multiplies",
        body: "Every service needs a pipeline, monitoring, an on-call owner, and security patching. Without a shared platform, that cost grows with the service count.",
      },
      {
        title: "Boundaries follow teams",
        body: "Service boundaries that cut across team boundaries create constant coordination. Conway’s law applies whether or not it is planned for.",
      },
    ],
    faqs: [
      {
        q: "When is microservices architecture appropriate?",
        a: "When parts of a system genuinely need to be released or scaled independently, when several teams are blocked by a shared codebase, and when the organisation can operate distributed systems — automated deployment, tracing, and on-call ownership per service. If those conditions are missing, a modular monolith is usually the better first step.",
      },
      {
        q: "How do you migrate from a monolith to microservices?",
        a: "Incrementally. Pick a seam with clear business ownership and high change frequency, route traffic through a layer you control, extract that capability with its own data, run old and new paths side by side, then cut over and delete the old code. This is the strangler fig pattern — and each extraction has to justify the next.",
      },
      {
        q: "What is a distributed monolith?",
        a: "A system split into services that still have to be changed and deployed together, usually because they share a database or call each other in long synchronous chains. It carries the costs of microservices without the independence. Data ownership, contract tests, and per-team service ownership prevent it.",
      },
      {
        q: "What is a modular monolith?",
        a: "A single deployable application divided into modules with explicit interfaces and no shared tables between them. It keeps the simplicity of one deployment while preventing the tangled coupling that makes monoliths hard to change — and it leaves a clean seam if a module later needs to become a service.",
      },
      {
        q: "Will you always recommend microservices?",
        a: "No. Independent services are a tool. If they would slow a team down, we say so and design modules instead.",
      },
      {
        q: "Can this be done without stopping feature work?",
        a: "That is the usual constraint. Extraction is sequenced beside product work, not as a freeze.",
      },
    ],
  },

  "data-engineering": {
    definition: {
      q: "What does data engineering involve?",
      a: "Data engineering builds and runs the systems that move data from operational sources into a form people and applications can trust: ingestion, transformation, orchestration, storage in a warehouse or lakehouse, data quality testing, lineage, and access control. Data architecture is the design of that whole system — what lives where, who owns it, and how it is governed.",
      more: "Analytical platforms sit downstream: they turn certified datasets into metrics, semantic models, and dashboards. We scope the two separately so pipelines are judged on reliability and freshness, and reporting is judged on whether people use it.",
      links: [
        { href: "/services/analytical-platforms", label: "analytics and BI platforms" },
        { href: "/insights/warehouse-versus-lakehouse", label: "warehouse versus lakehouse guide" },
      ],
    },
    comparison: {
      title: "Data warehouse, data lake, or lakehouse?",
      intro:
        "The storage pattern follows the workload. This is how the three common options differ in practice.",
      columns: ["Pattern", "Stores", "Strong at", "Consider it when"],
      rows: [
        [
          "Data warehouse",
          "Structured, modelled tables.",
          "SQL analytics, BI, and governed metrics.",
          "Most data is tabular and the main consumers are analysts and dashboards.",
        ],
        [
          "Data lake",
          "Raw files in object storage, in any format.",
          "Low-cost retention of large or semi-structured data.",
          "You must keep raw history or files and can accept harder governance.",
        ],
        [
          "Lakehouse",
          "Files in open table formats with warehouse-style transactions.",
          "BI, data science, and large-scale processing on one copy of the data.",
          "Workloads mix SQL with machine learning or very large volumes, and the team can run the platform.",
        ],
      ],
      note: "Hybrids are common: a lake for raw retention feeding a warehouse for certified models.",
    },
    tradeoffs: [
      {
        title: "Batch versus streaming",
        body: "Streaming reduces latency but adds operational complexity and cost. Most reporting is well served by frequent batch or micro-batch loads; streaming is for decisions that lose value within minutes.",
      },
      {
        title: "ETL versus ELT",
        body: "Loading raw data first and transforming inside the warehouse (ELT) keeps history and makes transformations versionable, but moves compute cost into the warehouse. Transforming before loading (ETL) still suits sensitive data that must be filtered or masked first.",
      },
      {
        title: "Central team versus domain ownership",
        body: "A central data team gives consistency. Domain-owned data products scale better but need shared standards for quality, contracts, and access.",
      },
      {
        title: "Data quality is an operating habit",
        body: "Tests catch known failure modes; freshness and volume monitoring catch the unknown ones. Both need someone who responds when they fire.",
      },
    ],
    faqs: [
      {
        q: "What is the difference between ETL and ELT?",
        a: "ETL transforms data before loading it into the target store; ELT loads raw data first and transforms it inside the warehouse or lakehouse. ELT keeps a raw history and makes transformations easier to version and rerun, but moves compute cost into the warehouse. ETL still suits data that must be filtered or masked before it lands.",
      },
      {
        q: "How do businesses choose a data architecture?",
        a: "Start from the decisions and products the data must support, then work back: how fresh it must be, the volumes and formats involved, who consumes it, sensitivity and residency rules, and what the team can operate. Choose the simplest pattern that meets those needs, and design so the next step — streaming, a lakehouse, more domains — does not mean starting again.",
      },
      {
        q: "How do you improve data quality?",
        a: "Define what correct means for the datasets that matter, test for it in the pipeline — schemas, nulls, uniqueness, relationships, reconciliation to source — monitor freshness and volume, and give each dataset an owner who acts on failures. Fixing the source process usually beats cleaning the same errors downstream.",
      },
      {
        q: "What drives the cost of a data engineering engagement?",
        a: "The number and variety of sources, data volumes and freshness requirements, the state of existing pipelines and definitions, governance and privacy obligations, and whether the platform must be designed or only repaired. We start with the handful of metrics that matter most, which keeps the first phase small and measurable.",
      },
      {
        q: "Is this the same as building dashboards?",
        a: "No. Data engineering prepares trustworthy datasets. Analytical platforms make those datasets usable. We often do both, but they are different jobs.",
      },
      {
        q: "Do you always recommend a lakehouse?",
        a: "No. A well-modelled warehouse is enough for many organisations. We choose the pattern that matches freshness, file types, and team skill.",
      },
      {
        q: "Can you work with data we cannot move off-premises?",
        a: "Yes. The architecture can keep sensitive systems in place and still produce a governed analytical layer.",
      },
      {
        q: "How does data engineering support AI projects?",
        a: "AI features are only as reliable as the data they draw on. Retrieval needs current, documented, permissioned sources; machine learning needs consistent historical features; and both need lineage so a bad answer can be traced back to its input. That is ordinary data engineering — ownership, quality tests, and access control — done with AI use in mind. Our AI engineering service builds on it.",
      },
    ],
  },

  "analytical-platforms": {
    definition: {
      q: "What is an analytics platform?",
      a: "An analytics platform is the layer where prepared data becomes decisions: governed metric definitions, a semantic model that business intelligence tools query, dashboards and reports designed for specific roles, and the access controls and performance tuning that keep it usable. It sits on top of the data platform that data engineering builds.",
      more: "The work includes analytics engineering — turning raw tables into tested, documented models — as well as dashboard and report design, self-service enablement, and retiring the reports nobody opens.",
      links: [
        { href: "/services/data-engineering", label: "data engineering and architecture" },
        { href: "/insights/useful-bi-dashboards", label: "guide to BI dashboards people use" },
      ],
    },
    comparison: {
      title: "Who does what between data and decisions",
      intro:
        "Analytics problems are often staffing and ownership problems. These are the disciplines involved and what each one produces.",
      columns: ["Discipline", "Focus", "Typical outputs"],
      rows: [
        [
          "Data engineering",
          "Moving and storing data reliably.",
          "Pipelines, orchestration, warehouse or lakehouse, data quality monitoring.",
        ],
        [
          "Analytics engineering",
          "Modelling data for analysis.",
          "Tested transformation models, metric definitions, documentation.",
        ],
        [
          "Business intelligence",
          "Presenting data for decisions.",
          "Semantic models, dashboards, reports, governed self-service datasets.",
        ],
        [
          "Analysis and data science",
          "Answering questions and predicting outcomes.",
          "Analyses, experiments, forecasts, machine learning models.",
        ],
      ],
    },
    tradeoffs: [
      {
        title: "Self-service versus governance",
        body: "Open self-service increases exploration but multiplies conflicting numbers. Certified datasets with a clearly labelled sandbox give people freedom without eroding trust.",
      },
      {
        title: "Where metric definitions live",
        body: "Defining metrics inside one BI tool is quick but ties the definitions to that tool. A shared semantic or metrics layer serves several tools and applications, at the cost of another component to run.",
      },
      {
        title: "Live queries versus imported data",
        body: "Querying the warehouse directly keeps data fresh but makes speed and cost depend on query patterns. Imports and aggregates are faster for users but add refresh schedules to manage.",
      },
      {
        title: "Real-time is rarely the requirement",
        body: "Most operational and executive decisions work on hourly or daily refreshes. Real-time dashboards cost more to build and run, so we keep them for decisions that change by the minute.",
      },
    ],
    faqs: [
      {
        q: "What makes an effective business intelligence platform?",
        a: "Agreed metric definitions with named owners, a semantic model so the same calculation is not rebuilt in every report, dashboards designed for specific decisions and roles, performance fast enough that people explore, and access controls that match data sensitivity. Adoption is the test: if people still export to spreadsheets, something on that list is missing.",
      },
      {
        q: "What is a semantic layer?",
        a: "A semantic layer defines business entities, relationships, and metrics — revenue, active customer, margin — once, in a central model that BI tools and applications query. It keeps calculations consistent across reports and lets people explore without writing joins.",
      },
      {
        q: "Which BI tools do you work with?",
        a: "We start with the business intelligence platform you already license, where it can meet the requirement, and help evaluate alternatives when it cannot. Tool partnerships are listed only once they are verified.",
      },
      {
        q: "Do you rebuild everything in a new BI tool?",
        a: "Only if the current platform cannot do the job. Tool changes are expensive; definitions and models usually matter more.",
      },
      {
        q: "What is the difference between data engineering and analytics engineering?",
        a: "Data engineers build and operate the infrastructure: ingestion, pipelines, orchestration, storage, and platform reliability. Analytics engineers work closer to the business, turning raw tables into tested, documented models and metric definitions that analysts and BI tools use. This service covers the analytics engineering and BI side; the platform side is our data engineering service.",
      },
    ],
  },

  "crm-solutions": {
    definition: {
      q: "What does a CRM implementation involve?",
      a: "A CRM implementation configures a customer relationship management platform around how an organisation actually sells, serves, and retains customers: mapping the customer lifecycle, designing objects, stages, and permissions, migrating clean historical data, automating handoffs, integrating with finance, support, and marketing systems, and building the reports leaders rely on.",
      more: "We work with common platforms such as Salesforce, HubSpot, and Microsoft Dynamics 365 where they fit, and we say when a lighter CRM or a custom layer is the better choice. Most CRM problems are process and data problems first, so integration and data quality work often draws on our data engineering practice.",
      links: [
        { href: "/services/data-engineering", label: "data engineering for clean customer data" },
        { href: "/insights/crm-integration-migration", label: "CRM integration and migration guide" },
      ],
    },
    comparison: {
      title: "Implement, fix, or replace your CRM?",
      intro:
        "The right CRM project depends on where you are starting. These are the four situations we see most, and the first step that usually makes sense.",
      columns: ["Situation", "Usual signal", "Sensible first step"],
      rows: [
        [
          "No CRM yet",
          "The pipeline lives in spreadsheets and inboxes; handoffs get lost.",
          "Map the customer lifecycle, then select and configure a platform for a pilot team.",
        ],
        [
          "Under-used CRM",
          "Licences are paid, but reps keep side spreadsheets and reports are distrusted.",
          "Simplify stages and fields, clean the data, and fix the workflows people avoid.",
        ],
        [
          "Outgrown CRM",
          "The platform cannot model your sales motion or integrations without heavy workarounds.",
          "Document requirements and integrations, then plan a phased migration.",
        ],
        [
          "Disconnected CRM",
          "Orders, tickets, and billing live elsewhere, so the customer view is incomplete.",
          "Agree the system of record for each fact, then integrate what changes a customer conversation.",
        ],
      ],
    },
    tradeoffs: [
      {
        title: "Configuration versus custom code",
        body: "Platform configuration survives upgrades and is easier to hand over; custom code covers edge cases but adds maintenance. We push configuration as far as it reasonably goes.",
      },
      {
        title: "How much history to migrate",
        body: "Moving everything preserves context but imports duplicates and stale records. Migrating active accounts and a defined window of history, with an archive for the rest, is usually cleaner.",
      },
      {
        title: "Real-time versus scheduled integration",
        body: "Real-time sync suits facts that change a live conversation, such as order or ticket status. Scheduled sync is simpler and adequate for slower-moving data.",
      },
      {
        title: "Adoption versus completeness",
        body: "Every required field slows data entry. A smaller data model that people keep accurate beats a complete one they avoid.",
      },
    ],
    faqs: [
      {
        q: "When should a company implement or replace its CRM?",
        a: "Implement one when customer information is spread across inboxes and spreadsheets and handoffs between marketing, sales, and service are being lost. Replace one when the current platform cannot model how you sell, integrate with core systems, or scale without heavy workarounds — after checking that the problem really is the platform, not the process or the data.",
      },
      {
        q: "Why do CRM implementations fail?",
        a: "Usually because the platform was configured before the sales and service process was agreed, because migrated data was not cleaned, or because the system asks people for more data entry than it gives back. Adoption problems are design problems: fewer fields, workflows that save time, and reports people asked for.",
      },
      {
        q: "How much does a CRM implementation cost?",
        a: "The main drivers are the number of teams and processes in scope, the volume and quality of data to migrate, the integrations with ERP, billing, and support systems, the amount of custom development versus configuration, and licensing — which is set by the vendor, not by us. A pilot with one team gives a reliable basis for estimating the full rollout.",
      },
      {
        q: "How long does a CRM implementation take?",
        a: "It depends on the number of teams, data sources, and integrations involved. We start with one pilot team, then roll out in phases; the timeline is set after the lifecycle mapping and data assessment rather than before.",
      },
      {
        q: "Which CRM platforms do you implement?",
        a: "We work with common platforms such as Salesforce, HubSpot, and Microsoft Dynamics 365 when they fit the process, and we will say when a lighter or custom system is the better engineering choice. Platform partnership badges are listed only once they are verified.",
      },
      {
        q: "Can you integrate a CRM with ERP, billing, and support systems?",
        a: "Yes. We agree which system is authoritative for each fact — customer identity, orders, invoices, tickets — and integrate through APIs or events so the CRM shows what sales and service teams need without becoming a second source of truth.",
      },
      {
        q: "Do you migrate historical data?",
        a: "Yes, with an explicit rule for what is worth moving. Old noise is expensive to keep and more expensive to clean later.",
      },
      {
        q: "Will this include marketing campaigns?",
        a: "We integrate with marketing tools and design the handoff. Campaign creative is outside this service unless separately scoped.",
      },
    ],
  },
};
