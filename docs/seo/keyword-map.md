# Keyword-to-page map

Source evidence: [keyword-research.md](keyword-research.md). It used Google Autocomplete, live result-page observation, and Google Search Central documentation, checked on 24 October 2026. **No search volumes, difficulty scores, or traffic forecasts are stated, because none were measured.** "Priority" is a judgement based on how directly the page converts and how open the observed result pages were. It is not a volume estimate.

Rules applied:
- One primary keyword per URL. It appears in the `<title>`, a natural variant in the H1 or first section, and the meta description.
- When two pages touch a topic, the non-owner page gives a short mention and links to the owner. It never targets the term.
- Each article supports exactly one primary service page.
- No page is created only to catch a query variant. Google's scaled-content policy treats such pages as spam (see research §5.7).

## Core pages

| URL | Search intent | Primary keyword | Supporting terms (covered in sections or FAQs) | Title tag | Priority |
| --- | --- | --- | --- | --- | --- |
| `/` | Navigational / commercial | AI, cloud and data engineering consultancy (brand + category) | AI-first engineering consultancy; what Nodeblix does; what "AI-first" means | AI, Cloud & Data Engineering Consultancy \| Nodeblix | High |
| `/services` | Commercial investigation | technology engineering and consulting services | which service fits; engineering services overview | Technology Engineering & Consulting Services | High |
| `/services/ai-engineering` | Commercial | AI development services | generative AI development services; AI integration services; RAG development; AI agent development; MLOps consulting; LLM evaluation; RAG vs fine-tuning; AI readiness | AI Development & Generative AI Integration Services | High (strategic). The head term is crowded, so the long tail is the realistic target. The page is named "AI Engineering", but that exact phrase is not targeted (see below). |
| `/services/cloud-engineering` | Commercial | cloud engineering services | cloud consulting; cloud migration services; cloud landing zone; cloud cost optimization; rehost vs replatform vs refactor | Cloud Engineering & Consulting Services | High |
| `/services/devops-engineering` | Commercial | devops consulting services | CI/CD implementation services; infrastructure as code; DORA metrics; deployment strategies; observability | DevOps Consulting & CI/CD Implementation Services | High (most open result pages observed) |
| `/services/software-development` | Commercial | custom software development services | application modernization; build vs buy; API development and integration; custom software cost drivers | Custom Software Development & App Modernization | Medium (crowded head term; long tail is realistic) |
| `/services/microservices` | Commercial | microservices architecture consulting | monolith to microservices migration; modular monolith; distributed monolith; strangler fig | Microservices Architecture Consulting & Migration | High (niche, specialist results) |
| `/services/data-engineering` | Commercial | data engineering services | data architecture consulting; data pipeline development; ETL vs ELT; warehouse vs lakehouse; data quality | Data Engineering & Data Architecture Services | High |
| `/services/analytical-platforms` | Commercial | business intelligence consulting services | analytics engineering; semantic layer; BI dashboard development; metric definitions; self-service analytics | Business Intelligence & Analytics Consulting | High |
| `/services/crm-solutions` | Commercial | CRM implementation services | CRM integration services; CRM data migration; CRM–ERP integration; why CRM implementations fail | CRM Implementation & Integration Services | High (agency-held results) |
| `/industries` | Commercial investigation | technology consulting by industry | sector constraints | Industries: Technology Consulting by Sector | Low |
| `/industries/financial-services` | Commercial | financial services technology consulting | auditability, regulated change | Financial Services Technology Consulting | Low–medium |
| `/industries/retail-and-commerce` | Commercial | retail technology consulting | peak readiness, commerce data | Retail & Commerce Technology Consulting | Low–medium |
| `/industries/manufacturing` | Commercial | manufacturing technology consulting | CRM for manufacturing; CRM–ERP integration; plant data | Manufacturing Technology: Data, CRM & Integration | Medium (strongest industry cluster in autocomplete) |
| `/industries/healthcare-and-life-sciences` | Commercial | healthcare technology consulting | sensitive data handling | Healthcare & Life Sciences Technology Consulting | Low–medium |
| `/industries/logistics-and-supply-chain` | Commercial | logistics technology consulting | supply chain data, integration | Logistics & Supply Chain Technology Consulting | Low–medium |
| `/industries/software-and-technology` | Commercial | engineering partner for software companies | team extension, platform work | Engineering Partner for Software Companies | Medium |
| `/approach` | Informational / trust | engineering delivery approach | how we work; discovery; handover | How We Work: Engineering Delivery Approach | Medium |
| `/about` | Navigational / trust | about Nodeblix | engineering-led consultancy | About Nodeblix \| AI-First Engineering Consultancy | Medium |
| `/work`, `/work/*` | Trust | (none; illustrative scenarios) | method examples | Work: Illustrative Engineering Scenarios | Low. Labelled as scenarios, not client case studies. |
| `/contact` | Transactional | contact Nodeblix | discuss a technology project | Contact Us: Discuss a Technology Project | High (conversion page) |
| `/insights` | Informational hub | engineering insights | AI, cloud, DevOps, data, CRM writing | Engineering Insights: AI, Cloud, DevOps & Data | Medium |

## Articles

| URL | Primary keyword | Supports | Title tag |
| --- | --- | --- | --- |
| `/insights/llm-features-in-production` | LLM in production / generative AI from prototype to production | AI engineering | LLM Features in Production: From Demo to Dependable |
| `/insights/cloud-migration-planning` | cloud migration planning | Cloud engineering | Cloud Migration Planning: Risks After the Kickoff |
| `/insights/cloud-cost-governance` | cloud cost governance | Cloud engineering | Cloud Cost Governance: Ownership Over Dashboards |
| `/insights/cicd-pipeline-design` | CI/CD pipeline design | DevOps | CI/CD Pipeline Design a Team Can Maintain |
| `/insights/observability-production-readiness` | production readiness / observability | DevOps | Observability and Production Readiness |
| `/insights/modernizing-legacy-applications` | legacy application modernization | Software development | Legacy Application Modernization Without a Rewrite |
| `/insights/monolith-versus-microservices` | monolith vs microservices | Microservices | Monolith vs Microservices: Start With the Real Problem |
| `/insights/data-pipeline-reliability` | data pipeline reliability | Data engineering | Data pipeline reliability is a production problem |
| `/insights/warehouse-versus-lakehouse` | data warehouse vs lakehouse | Data engineering | Data Warehouse vs Lakehouse: How to Choose |
| `/insights/useful-bi-dashboards` | BI dashboard design | Analytics / BI | BI Dashboard Design People Keep Using |
| `/insights/crm-integration-migration` | CRM integration and data migration | CRM | CRM Integration & Data Migration Without Duplicates |

## Ownership of overlapping topics

| Topic | Owner page | Pages that mention it and link to the owner |
| --- | --- | --- |
| LLM applications, RAG, AI agents, LLM evaluation, MLOps/LLMOps | AI engineering | Data engineering (AI-ready data), DevOps (model and prompt releases), Software (AI assistance in internal tools), Analytics (AI assistants on the semantic layer), CRM (AI-drafted summaries), Cloud (GPU and managed model capacity) |
| AI-ready data foundations | Data engineering | AI engineering (one capability that links to Data) |
| Cloud migration, landing zones, 7 Rs | Cloud engineering | Software development, Microservices |
| Application modernization | Software development | Microservices (as one modernization path), Cloud |
| Monolith decomposition, modular monolith | Microservices | Software development |
| Infrastructure as code, CI/CD, observability, platform engineering | DevOps | Cloud ("environments defined as code, built with the DevOps practice") |
| Cloud cost optimization | Cloud engineering | DevOps |
| Data architecture, pipelines, ETL/ELT, data quality | Data engineering | Analytics / BI |
| Analytics engineering, semantic layer, metric definitions | Analytics / BI | Data engineering |
| CRM integration and migration | CRM | Software development (generic API integration stays on Software) |

## Deliberately not targeted

- **"Salesforce implementation partner"** and similar partner terms. Those results belong to the vendors' partner directories, and claiming the term implies a credential Nodeblix has not verified.
- **"Top / best [service] companies"**. These results are directory listicles.
- **Head terms dominated by large integrators**, such as "cloud consulting services" and "application modernization services". They are covered as supporting language, not as primary targets.
- **"AI engineering services"** as an exact phrase. On 25 October 2026, Google Autocomplete for it was dominated by *AI Engineering Services Limited*, an Air India aircraft-maintenance company, so the phrase would attract the wrong searchers. The page keeps the name "AI Engineering" for users but targets "AI development services" in the title.
- **"Top / best AI development companies"**. These results are directory listicles, the same as the other "top N" terms.
- **City or country modifiers** ("in London", "in India"). Nodeblix has no verified location to publish.
