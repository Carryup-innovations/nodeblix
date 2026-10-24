export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; text: string };

export type Article = {
  slug: string;
  title: string;
  /** Shorter search title when the display headline would truncate in results. */
  seoTitle?: string;
  category: string;
  date: string;
  updated?: string;
  description: string;
  summary: string;
  image: string;
  imageAlt: string;
  relatedServices: string[];
  relatedArticles: string[];
  takeaways: string[];
  body: Block[];
  faqs: { q: string; a: string }[];
};

export const articles: Article[] = [
  {
    slug: "cloud-migration-planning",
    title: "Cloud migration planning: the risks that appear after the kickoff",
    seoTitle: "Cloud Migration Planning: Risks After the Kickoff",
    category: "Cloud & Infrastructure",
    date: "2026-03-12",
    description:
      "A practical look at cloud migration planning: inventory, wave design, identity, rollback, and the risks that show up after the announcement.",
    summary:
      "Most migrations fail in the unglamorous middle: incomplete inventory, identity left until last, and cutovers that cannot be reversed.",
    image: "/images/insight-cloud.jpg",
    imageAlt: "Glass office façade reflecting an overcast sky",
    relatedServices: ["cloud-engineering", "devops-engineering"],
    relatedArticles: ["cloud-cost-governance", "observability-production-readiness"],
    takeaways: [
      "Most migration risk sits in inventory, identity, and networking — not in the choice between rehost, replatform, and rebuild.",
      "Move in waves grouped by blast radius, and include something that matters in the first wave so you actually learn.",
      "A migration is done when access, monitoring, cost ownership, and a tested restore are in place — not when the servers have moved.",
    ],
    body: [
      {
        type: "p",
        text: "A cloud migration is often announced as a date. The work that decides whether that date is honest happens earlier, and it is mostly inventory and politics. The technical patterns — rehost, replatform, rebuild — are the easy part of the conversation. The hard part is knowing what you actually run.",
      },
      { type: "h2", text: "Inventory is a product, not a spreadsheet" },
      {
        type: "p",
        text: "Start with runtime truth: load balancers, scheduled jobs, file exchanges, vendor appliances, and the one virtual machine that still prints invoices. CMDBs are a hint. DNS, traffic, and the people who get called at night are better sources. If a dependency is missing from the map, it will appear during the cutover as an outage with a surprising owner.",
      },
      {
        type: "ul",
        items: [
          "Name the system of record for each business process, not just each server.",
          "Record who can actually change it, which is often not the named application owner.",
          "Note the batch windows and customer commitments that constrain a weekend.",
        ],
      },
      { type: "h2", text: "Waves beat a single leap" },
      {
        type: "p",
        text: "Group systems by blast radius and by the people who understand them. A first wave should include something that matters — otherwise you learn nothing — and something you can reverse. “Move everything in one freeze” is a project plan that assumes the inventory was complete.",
      },
      { type: "h2", text: "Identity and networking are not week-twelve tasks" },
      {
        type: "p",
        text: "If people still share a root user, or if the new network cannot reach a payment processor, the first production login will be the first incident. Landing-zone work is unglamorous and should precede any serious workload move. So should a restore test. Backups that have never been restored are a story you tell yourself.",
      },
      {
        type: "callout",
        text: "A migration that cannot roll back is not a plan. It is a hope with a status slide.",
      },
      { type: "h2", text: "What “done” should mean" },
      {
        type: "p",
        text: "Done is not “the servers are in a different building.” Done is documented access, monitored user journeys, a cost view with owners, and a team that can change the environment without the people who ran the programme. If those are missing, you have relocated an estate, not modernized it.",
      },
    ],
    faqs: [
      {
        q: "What should a cloud migration plan include?",
        a: "A runtime-accurate inventory of systems and dependencies, the system of record for each business process, a migration strategy per workload, wave sequencing with rollback for each wave, a landing zone with identity and networking ready before the first move, and a definition of done that covers monitoring, access, and cost ownership.",
      },
      {
        q: "What are the biggest cloud migration risks?",
        a: "Missing dependencies discovered during cutover, identity and network access left until late, cutovers that cannot be reversed, untested backups, and costs that rise because workloads moved unchanged. Each is reduced by inventory work, early landing-zone build, rehearsed rollback, and restore tests.",
      },
    ],
  },
  {
    slug: "cicd-pipeline-design",
    title: "CI/CD pipeline design that a team will still understand in a year",
    seoTitle: "CI/CD Pipeline Design a Team Can Maintain",
    category: "DevOps & Reliability",
    date: "2026-04-02",
    description:
      "How to design CI/CD pipelines around artefacts, environments, and rollback — without a maze of scripts only one person can debug.",
    summary:
      "Pipelines should produce an artefact you can promote. Everything else is ceremony that needs a reason.",
    image: "/images/insight-devops.jpg",
    imageAlt: "Server-room doorway with a single rack and cool status lights",
    relatedServices: ["devops-engineering", "software-development"],
    relatedArticles: ["observability-production-readiness", "cloud-migration-planning"],
    takeaways: [
      "Build an immutable artefact once and promote that same artefact through every environment.",
      "Scale review gates and checks with the blast radius of a change, not uniformly.",
      "Rollback should be a pipeline step, and deploy credentials should be short-lived and scoped.",
    ],
    body: [
      {
        type: "p",
        text: "A useful pipeline has a short story: take this commit, prove it, produce a thing, put that thing in an environment. Many pipelines instead accumulate every check anyone has ever requested, plus a deploy script that still needs a human to finish the last three steps.",
      },
      { type: "h2", text: "Build once" },
      {
        type: "p",
        text: "If staging and production are built from different commits or different “latest” tags, you are not testing the thing you will ship. Produce an immutable artefact. Promote it. The pipeline that deploys production should not compile the application again.",
      },
      { type: "h2", text: "Match ceremony to risk" },
      {
        type: "p",
        text: "A documentation change does not need the same gates as a schema migration. Branch protections, mandatory reviewers, and change tickets should scale with blast radius. When every change is treated as a crisis, people route around the process.",
      },
      {
        type: "ul",
        items: [
          "Keep the fast feedback — unit tests, lint, compile — near the author.",
          "Run expensive suites on the artefact, on a schedule or on the path to production.",
          "Make rollback a pipeline, not a memory of which previous tag was good.",
        ],
      },
      { type: "h2", text: "Secrets and identity" },
      {
        type: "p",
        text: "Deploy roles should be short-lived and scoped. A long-lived key in a variable store is a future incident. If a compliance process needs evidence, generate it from the pipeline instead of asking an engineer to screenshot a console.",
      },
      {
        type: "callout",
        text: "If only one person can debug the pipeline, you have a single point of failure that happens to be written in YAML.",
      },
    ],
    faqs: [
      {
        q: "What are CI/CD pipeline best practices?",
        a: "Keep fast checks (compile, lint, unit tests) close to the author; build one immutable artefact and promote it; run slower suites on that artefact before production; match approval gates to risk; use short-lived, scoped deploy credentials; and make rollback an automated, rehearsed path.",
      },
      {
        q: "Why should you build once and promote the artefact?",
        a: "If staging and production are built separately, you are not testing the thing you ship. Promoting a single immutable artefact guarantees that what passed testing is exactly what reaches production, and makes rollback a matter of redeploying a previous artefact.",
      },
    ],
  },
  {
    slug: "monolith-versus-microservices",
    title: "Monolith versus microservices is the wrong first question",
    seoTitle: "Monolith vs Microservices: Start With the Real Problem",
    category: "Software Architecture",
    date: "2026-02-18",
    description:
      "When a modular monolith is the better architecture, when independent services earn their cost, and how to extract a seam without a rewrite.",
    summary:
      "Start from team shape, data ownership, and release pain. The topology should follow those facts.",
    image: "/images/insight-architecture.jpg",
    imageAlt: "Concrete staircase and steel rail in a modern atrium",
    relatedServices: ["microservices", "software-development"],
    relatedArticles: ["modernizing-legacy-applications", "cicd-pipeline-design"],
    takeaways: [
      "Monoliths and microservices are deployment and ownership strategies, not quality levels.",
      "If the pain is test time or tangled modules, splitting into services will not fix it; a modular monolith often will.",
      "Extract a service only around a seam with its own data ownership, a compatibility layer, and no open-ended dual writes.",
    ],
    body: [
      {
        type: "p",
        text: "The industry talks about monoliths and microservices as moral categories. They are deployment and ownership strategies. A well-modularized monolith can be a precise, cheap system. A distributed estate can also be a slower monolith with network latency.",
      },
      { type: "h2", text: "Ask what is actually hurting" },
      {
        type: "p",
        text: "If the pain is test time, unclear module boundaries, or a shared database that every feature touches, splitting into processes will not help until those are addressed. If the pain is independent scale, independent release across teams, or a domain that really does fail independently, distribution can pay for itself.",
      },
      { type: "h2", text: "A modular monolith is a real destination" },
      {
        type: "p",
        text: "Put modules behind interfaces. Stop sharing tables across those interfaces. Add contract tests. Many organisations should stop there. You get clarity without paying for distributed tracing, eventual consistency, and a pager for every repository.",
      },
      { type: "h2", text: "If you extract, extract a seam" },
      {
        type: "ul",
        items: [
          "Choose a capability with a second consumer or a distinct risk profile.",
          "Give it data ownership. A service that reads and writes the old tables is a function call with extra failure modes.",
          "Keep a compatibility layer so the rest of the system does not have to change in the same release.",
          "Do not dual-write “for a while” without a reconciliation and an end date.",
        ],
      },
      {
        type: "callout",
        text: "If the same three people own every service, you have multiplied the moving parts without multiplying the ownership.",
      },
    ],
    faqs: [
      {
        q: "Should I use a monolith or microservices?",
        a: "Start from what is hurting. Independent scaling, independent release across several teams, or domains that fail independently can justify microservices. Slow tests, unclear boundaries, or a shared database usually call for a modular monolith first, which is cheaper to run and keeps extraction possible later.",
      },
      {
        q: "When should you not use microservices?",
        a: "When one small team owns the whole system, when release cadence is already healthy, when there is no automated deployment and tracing, or when services would still share a database. In those cases distribution adds latency, failure modes, and operational load without delivering independence.",
      },
    ],
  },
  {
    slug: "data-pipeline-reliability",
    title: "Data pipeline reliability is a production problem",
    category: "Data Engineering",
    date: "2026-01-28",
    description:
      "How to treat data pipelines like production systems: contracts, tests, freshness SLAs, and on-call that wakes someone for silent failure.",
    summary:
      "A dashboard that looks fine on stale data is a quieter kind of outage. Pipelines need the same seriousness as user-facing services.",
    image: "/images/insight-data.jpg",
    imageAlt: "Climate-controlled records room with stacked archival boxes",
    relatedServices: ["data-engineering", "analytical-platforms"],
    relatedArticles: ["warehouse-versus-lakehouse", "useful-bi-dashboards"],
    takeaways: [
      "A pipeline that exits successfully on empty or stale data has failed — treat it like a production outage.",
      "Test the data itself: uniqueness, null rates, referential integrity, and volume within an expected band.",
      "Declare freshness for every certified table, show it to consumers, and give every failed test an owner.",
    ],
    body: [
      {
        type: "p",
        text: "Application engineers would not accept a service that failed last night and still returned 200. Data teams often do. The job “succeeded” because the process exited zero, while a source file was empty, a primary key collided, or yesterday’s partition was reused.",
      },
      { type: "h2", text: "Contracts on the data" },
      {
        type: "p",
        text: "Test uniqueness, null rates, referential integrity, and volume against a band that makes sense for the source. A volume drop of 90% is an incident even if the SQL ran. Put those tests in the pipeline, not in a weekly email an analyst might read.",
      },
      { type: "h2", text: "Freshness is a user-facing attribute" },
      {
        type: "p",
        text: "Every certified table should declare when it is expected to update and who is woken if it does not. Consumers should see that freshness in the BI tool. Hidden staleness is how finance and operations invent private extracts.",
      },
      {
        type: "ul",
        items: [
          "Lineage that a person can follow from a tile to a source system.",
          "Backfills that are documented and repeatable.",
          "On-call that includes the data platform, not only the web application.",
        ],
      },
      {
        type: "callout",
        text: "If nobody owns a failed quality test, you do not have a quality system. You have a linter for SQL.",
      },
    ],
    faqs: [
      {
        q: "How do you make a data pipeline reliable?",
        a: "Add data contracts and tests inside the pipeline, monitor freshness and volume, make lineage traceable from report to source, document repeatable backfills, and put the data platform on the same on-call rotation as user-facing services so silent failures wake someone.",
      },
      {
        q: "What is data freshness?",
        a: "How recently a dataset was successfully updated relative to when consumers expect it. A freshness expectation, such as updated by 07:00 daily, turns staleness into a measurable failure that can alert an owner instead of quietly misleading a dashboard.",
      },
    ],
  },
  {
    slug: "warehouse-versus-lakehouse",
    title: "Warehouse or lakehouse: choose the constraint, not the label",
    seoTitle: "Data Warehouse vs Lakehouse: How to Choose",
    category: "Data Engineering",
    date: "2026-05-09",
    description:
      "A clear comparison of data warehouse and lakehouse patterns: when files and open table formats help, and when a modeled warehouse is enough.",
    summary:
      "The useful choice is about file types, freshness, and who will operate the platform — not about winning an architecture argument.",
    image: "/images/data-engineering.jpg",
    imageAlt: "Operations room with a wall of abstract data displays",
    relatedServices: ["data-engineering", "analytical-platforms"],
    relatedArticles: ["data-pipeline-reliability", "useful-bi-dashboards"],
    takeaways: [
      "A modelled warehouse is a strong default when sources are relational, consumers are BI tools, and hourly or daily refresh is enough.",
      "A lake with open table formats helps when you must land diverse files, share data across engines, or keep cheap raw history.",
      "Either way, a curated, owned layer is mandatory — without it you have cheap storage and expensive arguments.",
    ],
    body: [
      {
        type: "p",
        text: "“Lakehouse” is often used as a synonym for modern. A warehouse with tested models and a small set of certified tables will beat a lake of files with no owners. The label matters less than the jobs: landing raw data, transforming it, and serving it.",
      },
      { type: "h2", text: "When a warehouse is enough" },
      {
        type: "p",
        text: "If your sources are relational, your consumers are BI tools, and a daily or hourly refresh is acceptable, a modeled warehouse is a strong default. You get governance and performance without teaching the whole company a new file format.",
      },
      { type: "h2", text: "When open table formats help" },
      {
        type: "p",
        text: "If you must land diverse files, share the same data with multiple engines, or keep a cheap raw history that several teams process differently, a lake with a table format and a curated layer can be the right shape. The curated layer is not optional. Without it you have cheap storage and expensive arguments.",
      },
      {
        type: "ul",
        items: [
          "Do not copy a vendor reference architecture that assumes a team you do not have.",
          "Streaming belongs where latency is a requirement, not where a demo looks better.",
          "Cost will follow storage layout and how often you rewrite partitions. Measure that early.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the difference between a data warehouse and a lakehouse?",
        a: "A data warehouse stores structured, modelled tables optimised for SQL analytics and BI. A lakehouse stores data as files in object storage using open table formats that add warehouse-like transactions and schema management, so BI, data science, and large-scale processing can share one copy of the data.",
      },
      {
        q: "Do I need a lakehouse?",
        a: "Not necessarily. If your data is mostly relational and your main consumers are analysts and dashboards, a well-modelled warehouse is usually simpler to run. A lakehouse earns its complexity when you handle large or semi-structured files, multiple processing engines, or machine learning workloads alongside BI.",
      },
    ],
  },
  {
    slug: "useful-bi-dashboards",
    title: "Designing business intelligence people will keep open",
    seoTitle: "BI Dashboard Design People Keep Using",
    category: "Analytics & Decision Intelligence",
    date: "2026-03-30",
    description:
      "How to design BI dashboards around decisions, metric contracts, and performance — instead of a catalogue of unofficial charts.",
    summary:
      "Start from the meeting the numbers must survive. Then write definitions. The tiles come last.",
    image: "/images/insight-analytics.jpg",
    imageAlt: "Conference table with out-of-focus printed charts in morning light",
    relatedServices: ["analytical-platforms", "data-engineering"],
    relatedArticles: ["data-pipeline-reliability", "crm-integration-migration"],
    takeaways: [
      "Write each metric’s name, grain, time rule, and owner before designing any chart.",
      "Design separate views for separate jobs: executives need narrative and exceptions, operators need actionable lists.",
      "Performance is part of trust — slow filters end exploration — and unused reports should be retired.",
    ],
    body: [
      {
        type: "p",
        text: "Most BI estates grow by accretion. Someone needed a chart for a board pack. Someone else copied it and changed a filter. Two years later the homepage is a directory, and the real report is a spreadsheet emailed on Sunday night.",
      },
      { type: "h2", text: "Write the metric before the chart" },
      {
        type: "p",
        text: "A metric has a name, a grain, a time rule, and an owner. “Active customer” means nothing until those are written. If two executives need different grains, that is two metrics, not one tile with a silent toggle.",
      },
      { type: "h2", text: "Design for a job" },
      {
        type: "p",
        text: "An executive review needs a short narrative and exceptions. A warehouse manager needs a list they can act on this morning. Combining both on one canvas produces a picture that helps neither person. Navigation and density should follow the job.",
      },
      { type: "h2", text: "Performance is part of trust" },
      {
        type: "p",
        text: "If a filter takes half a minute, people stop asking questions. Aggregates, incremental refresh, and a semantic model are not polish. They are why the tool gets used after the launch meeting.",
      },
      {
        type: "callout",
        text: "Unused reports should be removed. A large catalogue is not a sign of a data-driven culture.",
      },
    ],
    faqs: [
      {
        q: "What makes a good BI dashboard?",
        a: "It is designed for one job and audience, uses metric definitions that have been agreed and owned, shows exceptions rather than everything, responds quickly enough to encourage exploration, and is retired when nobody uses it.",
      },
      {
        q: "Why do dashboards show different numbers?",
        a: "Usually because the same metric is defined differently in different reports — a different grain, time rule, or filter. Writing metric definitions once, in a shared semantic model, and certifying the reports that use them removes most of these conflicts.",
      },
    ],
  },
  {
    slug: "crm-integration-migration",
    title: "CRM integration and data migration without a second source of truth",
    seoTitle: "CRM Integration & Data Migration Without Duplicates",
    category: "CRM & Enterprise Systems",
    date: "2026-04-21",
    description:
      "Practical CRM data migration and integration: what to move, how to deduplicate, and how to keep finance and support as systems of record.",
    summary:
      "A CRM should not invent a second customer. Migration is a design problem before it is an import problem.",
    image: "/images/insight-crm.jpg",
    imageAlt: "Quiet professional reception with oak and muted navy seating",
    relatedServices: ["crm-solutions", "data-engineering"],
    relatedArticles: ["useful-bi-dashboards", "data-pipeline-reliability"],
    takeaways: [
      "Decide which system is authoritative for each fact before mapping a single field.",
      "Agree how customers are matched across systems and test deduplication on real samples.",
      "Migrate what changes a conversation this quarter; archive the rest in a searchable form.",
    ],
    body: [
      {
        type: "p",
        text: "CRM programmes often treat migration as a last-mile import. That is how duplicates, dead opportunities, and conflicting billing addresses become the new normal. The first design question is which system is allowed to be right about which fact.",
      },
      { type: "h2", text: "Identity before fields" },
      {
        type: "p",
        text: "Decide how a customer is identified across finance, support, and the new CRM. If you cannot match records, you cannot migrate them. Deduplication rules should be written and tested on a sample, including the ugly matches that a vendor “AI assist” will get wrong.",
      },
      { type: "h2", text: "Move less" },
      {
        type: "p",
        text: "Closed-lost from nine years ago, personal notes, and fields nobody can define are expensive to keep. Bring the records that change a conversation this quarter. Archive the rest in a form you can search if legal asks.",
      },
      { type: "h2", text: "Integrate on purpose" },
      {
        type: "ul",
        items: [
          "Money stays in finance. The CRM may display a balance; it should not invent one.",
          "Tickets stay in support unless you have a real reason to merge the objects.",
          "Product usage belongs in the account only if someone will act on it.",
        ],
      },
      {
        type: "callout",
        text: "If sales still live in the inbox after go-live, the process was not implemented. The licence was.",
      },
    ],
    faqs: [
      {
        q: "What are CRM data migration best practices?",
        a: "Define the system of record for each fact, agree identity and matching rules, test deduplication on real samples, migrate only active and useful records, rehearse the cutover, and archive the remaining history in a searchable form rather than importing it.",
      },
      {
        q: "How should a CRM integrate with ERP and support systems?",
        a: "Keep money in finance and tickets in support, and let the CRM display those facts rather than duplicate them. Integrate through APIs or events, decide sync direction and frequency per fact, and reconcile regularly so the CRM never becomes a second source of truth.",
      },
    ],
  },
  {
    slug: "modernizing-legacy-applications",
    title: "Modernizing a legacy application without a heroic rewrite",
    seoTitle: "Legacy Application Modernization Without a Rewrite",
    category: "Software Architecture",
    date: "2026-02-04",
    description:
      "A practical sequence for application modernization: characterization tests, seams, strangler paths, and the rewrite you should usually refuse.",
    summary:
      "The system that makes money is allowed to be imperfect. Your job is to make the next change cheaper than the last.",
    image: "/images/software-studio.jpg",
    imageAlt: "Daylit studio with empty desks and large windows",
    relatedServices: ["software-development", "microservices"],
    relatedArticles: ["monolith-versus-microservices", "cicd-pipeline-design"],
    takeaways: [
      "Big-bang rewrites fail because the old system must keep running while the new one catches up.",
      "Characterize current behaviour with tests and traffic capture before changing anything.",
      "Modernize seam by seam — wrap, test, then replace — with observability and rollback in place first.",
    ],
    body: [
      {
        type: "p",
        text: "Rewrites fail for a boring reason: the old system still has to run, and the new one is not ready, and the business does not pause. Modernization that works is usually a sequence of seams, tests, and replacements small enough to reverse.",
      },
      { type: "h2", text: "Characterize first" },
      {
        type: "p",
        text: "If you cannot describe what the system does today, you cannot know when you have broken it. Characterization tests, traffic capture, and a list of the batch jobs nobody mentions are more valuable than a target architecture slide.",
      },
      { type: "h2", text: "Find a seam that pays" },
      {
        type: "p",
        text: "Pick a boundary that is already causing release pain or a security risk. Wrap it. Test it. Replace or extract behind the wrap. Resist the urge to “clean up” unrelated modules in the same change.",
      },
      {
        type: "ul",
        items: [
          "Add observability before you add ambition.",
          "Automate the build if it still lives on a desktop.",
          "Keep a rollback that does not require heroic memory.",
        ],
      },
      {
        type: "callout",
        text: "A two-year rewrite is a bet that the business will wait. Most will not.",
      },
    ],
    faqs: [
      {
        q: "How do you modernize a legacy application?",
        a: "Characterize what it does today with tests and traffic capture, add observability and an automated build, pick a boundary that already causes release pain or risk, wrap and test it, then replace or extract behind that wrapper. Repeat seam by seam while the business keeps running.",
      },
      {
        q: "Should you rewrite or refactor a legacy application?",
        a: "Refactor and replace incrementally in most cases. A full rewrite has to catch up with a moving target and delivers no value until cutover. Rewrites make sense mainly for small systems, or where the platform itself is unsupportable and no incremental path exists.",
      },
    ],
  },
  {
    slug: "cloud-cost-governance",
    title: "Cloud cost governance without a theatre of dashboards",
    seoTitle: "Cloud Cost Governance: Ownership Over Dashboards",
    category: "Cloud & Infrastructure",
    date: "2026-05-20",
    description:
      "Cloud cost governance that works: owners, tags, budgets that page someone, and architecture choices that actually move the bill.",
    summary:
      "Cost is an architecture and ownership problem. A weekly screenshot of the invoice is not FinOps.",
    image: "/images/cloud-infrastructure.jpg",
    imageAlt: "Data center aisle with orderly racks and cool lighting",
    relatedServices: ["cloud-engineering", "devops-engineering"],
    relatedArticles: ["cloud-migration-planning", "observability-production-readiness"],
    takeaways: [
      "Every production account, cluster, and datastore needs an owning team that can switch it off.",
      "Budgets only matter if a miss interrupts someone who owns the spend.",
      "Architecture — storage lifecycle, data transfer, idle environments — moves the bill more than discount programmes.",
    ],
    body: [
      {
        type: "p",
        text: "Cloud bills surprise people who cannot name an owner for a resource. Tagging programmes fail when the tags are optional and the review is a slide. Governance that works is closer to access control than to a finance newsletter.",
      },
      { type: "h2", text: "Ownership first" },
      {
        type: "p",
        text: "Every production account, cluster, and datastore needs a team name that maps to a human who can turn it off. Untagged spend should be an exception that is worked, not a permanent bucket called “shared.”",
      },
      { type: "h2", text: "Budgets that interrupt" },
      {
        type: "p",
        text: "A forecast that nobody is paged for is decoration. Set budgets on the units people actually own. Investigate the first serious miss; that is usually an idle environment, an unpartitioned log, or a test that never shut down.",
      },
      { type: "h2", text: "Architecture moves the number" },
      {
        type: "p",
        text: "Reserved capacity is not a strategy if the shape of the workload is wrong. Storage lifecycle, data transfer, and over-provisioned always-on environments are where serious money lives. Optimise those before arguing about instance families.",
      },
    ],
    faqs: [
      {
        q: "What is cloud cost governance?",
        a: "The ownership, policies, and controls that keep cloud spend attributable and intentional: tagging and account structure that map costs to teams, budgets that alert owners, and review of the architecture choices that drive the bill.",
      },
      {
        q: "How do you reduce cloud costs?",
        a: "Make every cost owned, then fix the architecture where the money is: idle and always-on non-production environments, storage without lifecycle rules, unpartitioned logs, data transfer, and over-provisioned instances. Commitment discounts help once the workload shape is right.",
      },
    ],
  },
  {
    slug: "observability-production-readiness",
    title: "Observability and production readiness are the same project",
    seoTitle: "Observability and Production Readiness",
    category: "DevOps & Reliability",
    date: "2026-01-14",
    description:
      "What production readiness looks like in practice: user-facing symptoms, traces you can follow, and alerts that deserve a human.",
    summary:
      "If you cannot tell that a customer is stuck, you are not ready — regardless of how many metrics you store.",
    image: "/images/devops-workstation.jpg",
    imageAlt: "Night workstation with dual monitors and a warm desk lamp",
    relatedServices: ["devops-engineering", "cloud-engineering"],
    relatedArticles: ["cicd-pipeline-design", "cloud-migration-planning"],
    takeaways: [
      "Ready means an on-call engineer can see a failing user journey, find the likely change, and reverse it.",
      "Alert on user-facing symptoms, not on servers; resource metrics are clues, not pages.",
      "Correlation IDs across logs, traces, and support tools turn incidents from folklore into a timeline.",
    ],
    body: [
      {
        type: "p",
        text: "Production readiness checklists often become a tour of tools. The useful test is simpler: can an on-call engineer, at 2 a.m., tell that a user journey is failing, find the change that likely caused it, and reverse that change?",
      },
      { type: "h2", text: "Symptoms, not servers" },
      {
        type: "p",
        text: "Page on checkout failure, login errors, or a freshness miss that blocks a decision. CPU is a clue. It is a poor reason to wake someone if the user journey is fine. Golden signals should be written in the language of the product.",
      },
      { type: "h2", text: "A trace is a story" },
      {
        type: "p",
        text: "Distributed systems without correlation identifiers produce folklore. Put a request or tenant id on the logs, the traces, and the support tool. The first hour of an incident should not be a hunt for the right index.",
      },
      {
        type: "ul",
        items: [
          "Deploy events belong on the same timeline as errors.",
          "Runbooks should be written from real incidents and kept short.",
          "A readiness review that cannot name the rollback is not finished.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is production readiness?",
        a: "The point at which a service can be operated safely: user-facing symptoms are monitored, alerts reach someone who can act, deploy events are visible next to errors, runbooks exist for known failure modes, and there is a rehearsed rollback.",
      },
      {
        q: "What is the difference between observability and monitoring?",
        a: "Monitoring tracks known signals against thresholds and tells you that something is wrong. Observability is the ability to ask new questions of a system’s logs, metrics, and traces to work out why — essential in distributed systems where failures are rarely predictable.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
