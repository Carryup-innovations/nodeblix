# Service pages and answer-engine (AEO) content

## How every service page is now structured

Each of the eight pages at `/services/{slug}` renders from `src/content/services.ts` (page copy) and `src/content/service-guides.ts` (definition, decision table, trade-offs, FAQs) through `src/components/ServiceView.tsx`. Pages are about 1,200–1,700 words.

1. **Hero** with breadcrumb, keyword-aligned H1, and a one-paragraph summary.
2. **Overview**: the definition question as an H2 (for example "What does data engineering involve?"), a direct one-paragraph answer, a longer explanation, and links to related services.
3. **Problems it solves**: symptoms a buyer recognises.
4. **What the work includes**: capabilities.
5. **Approach**: the delivery method, with a diagram.
6. **Decision guide**: a real HTML table comparing the main options, with a note on when each fits. It scrolls sideways on phones, with a visible hint.
7. **Use cases, integrations, and industry context**: links to the relevant `/industries/*` pages.
8. **Trade-offs**: what each choice costs, stated plainly.
9. **Operations and handover**: how the result is run after delivery.
10. **FAQ**: each question is an H3 inside a native `<details>` element. The answers are in the HTML, so crawlers can read them without JavaScript.
11. **Related services** and a **call to action**.

## Page-by-page summary

| Page | H1 | Decision table | What makes it distinct |
| --- | --- | --- | --- |
| Cloud engineering | Cloud engineering for systems that stay available | Rehost / replatform / refactor / retain | Migration strategy per workload, landing zones, cost governance, multi-cloud honesty |
| DevOps | DevOps consulting that makes delivery ordinary | Rolling / blue-green / canary / feature flags | CI/CD, infrastructure as code, DORA metrics, working inside change management |
| Software development | Custom software built around the work, not the other way around | Buy / extend / build / modernize | Build-vs-buy reasoning, modernization without a rewrite, estimation and cost drivers |
| Microservices | Microservices architecture, when the boundaries earn their keep | Monolith / modular monolith / microservices | Openly recommends against microservices where they don't fit; distributed-monolith risks |
| Data engineering | Data engineering for information you can trust | Warehouse / lake / lakehouse | ETL vs ELT, data quality ownership, on-premises constraints |
| Analytics / BI | Business intelligence and analytics people will actually use | Data engineering / analytics engineering / BI / analysis | Semantic layer, metric definitions, not rebuilding for a new tool's sake |
| CRM | CRM implementation that matches how you actually sell and serve | No CRM / under-used / outgrown / disconnected | Why implementations fail, ERP/billing/support integration, migration of history |

**Platforms named on these pages:** AWS, Microsoft Azure, Google Cloud, Kubernetes, Salesforce, HubSpot, and Microsoft Dynamics 365. These names were in the original site content. Before launch the company must confirm it genuinely delivers on each one (see the launch checklist). Removing a name means editing `src/content/services.ts`, `src/content/service-guides.ts`, and the homepage FAQ in `src/app/page.tsx`.

## AEO approach

Google's guidance (research §5.7) is that AI Overviews and AI Mode use the normal search index. They need no special markup, ignore `llms.txt`, and reward clear, first-hand, useful content. So the work focused on making answers easy to find and quote:

- **Question headings with a direct first-sentence answer.** These are the overview H2 and every FAQ H3.
- **Comparison tables** built as real `<table>` elements with row and column headers, not images or styled divs.
- **Explicit entity statements.** The homepage and Organization schema say what Nodeblix is, what it does, and who it serves, in plain words.
- **Article summaries.** Every article opens with "Key takeaways" and ends with two "Common questions" answered in full.
- **Every answer is visible on the page.** Nothing is hidden for crawlers only.

Not done, on purpose:
- **No `FAQPage` JSON-LD.** Google stopped showing FAQ rich results on 7 May 2026, and the markup no longer earns a search feature.
- **No `llms.txt` or "AI-only" markup.** Google ignores it.
- **No promise that any page will be cited by an AI system.**

## FAQs added

### Homepage (`/`)
1. What does Nodeblix do?
2. What does "AI-first" mean in practice?
3. Who are Nodeblix services for?
4. Which technologies and platforms do you work with?
5. How do the eight services fit together?
6. How does an engagement start?

### Services index (`/services`)
- "Which service fits your problem?" table, mapping eight buyer symptoms to the service that addresses each.

### AI engineering
- What is AI engineering? *(overview)*
- What is retrieval-augmented generation (RAG)?
- When should we use RAG instead of fine-tuning?
- How do you evaluate an LLM application?
- Do we need AI agents?
- How much does AI development cost? *(cost drivers only; no prices quoted)*
- Is our data ready for AI?
- How do you keep company data private when using AI models?
- Which AI models and platforms do you work with?

### Cloud engineering
- What does cloud engineering involve? *(overview)*
- When should a company migrate to the cloud?
- How long does a cloud migration take?
- What is a cloud landing zone?
- How much does a cloud migration cost? *(cost drivers only; no prices quoted)*
- Do you work only on one cloud?
- Can you migrate without rewriting everything?
- How do you keep cloud costs under control?
- Will you take over day-to-day operations?

### DevOps
- What does DevOps engineering involve? *(overview)*
- How does DevOps improve software delivery?
- What is the difference between continuous integration, delivery, and deployment?
- What is infrastructure as code?
- What are DORA metrics?
- What affects the cost of DevOps consulting?
- Do we need Kubernetes?
- Can you work inside an existing change-management process?
- Will this replace our engineers?

### Software development
- What is custom software development? *(overview)*
- When should you build custom software instead of buying it?
- What is application modernization?
- How do you estimate a custom software project?
- How much does custom software development cost?
- Do you only build greenfield products?
- Which languages and frameworks do you use?
- Can you work alongside an internal product team?

### Microservices
- What is microservices architecture? *(overview)*
- When is microservices architecture appropriate?
- How do you migrate from a monolith to microservices?
- What is a distributed monolith?
- What is a modular monolith?
- Will you always recommend microservices?
- Can this be done without stopping feature work?

### Data engineering
- What does data engineering involve? *(overview)*
- What is the difference between ETL and ELT?
- How do businesses choose a data architecture?
- How do you improve data quality?
- What drives the cost of a data engineering engagement?
- Is this the same as building dashboards?
- Do you always recommend a lakehouse?
- Can you work with data we cannot move off-premises?
- How does data engineering support AI projects?

### Analytics / BI
- What is an analytics platform? *(overview)*
- What makes an effective business intelligence platform?
- What is a semantic layer?
- Which BI tools do you work with?
- Do you rebuild everything in a new BI tool?
- What is the difference between data engineering and analytics engineering?

### CRM
- What does a CRM implementation involve? *(overview)*
- When should a company implement or replace its CRM?
- Why do CRM implementations fail?
- How much does a CRM implementation cost?
- How long does a CRM implementation take?
- Which CRM platforms do you implement?
- Can you integrate a CRM with ERP, billing, and support systems?
- Do you migrate historical data?
- Will this include marketing campaigns?

### Articles (two or three each)

| Article | Questions |
| --- | --- |
| LLM features in production | How do you take an LLM prototype to production? · What is an LLM evaluation set? · Why do generative AI pilots fail to reach production? |
| Cloud migration planning | What should a cloud migration plan include? · What are the biggest cloud migration risks? |
| CI/CD pipeline design | What are CI/CD pipeline best practices? · Why should you build once and promote the artefact? |
| Monolith vs microservices | Should I use a monolith or microservices? · When should you not use microservices? |
| Data pipeline reliability | How do you make a data pipeline reliable? · What is data freshness? |
| Warehouse vs lakehouse | What is the difference between a data warehouse and a lakehouse? · Do I need a lakehouse? |
| BI dashboards | What makes a good BI dashboard? · Why do dashboards show different numbers? |
| CRM integration and migration | What are CRM data migration best practices? · How should a CRM integrate with ERP and support systems? |
| Legacy modernization | How do you modernize a legacy application? · Should you rewrite or refactor a legacy application? |
| Cloud cost governance | What is cloud cost governance? · How do you reduce cloud costs? |
| Observability and readiness | What is production readiness? · What is the difference between observability and monitoring? |

All answers are written as general engineering guidance. None cite client results, statistics, or company history.
