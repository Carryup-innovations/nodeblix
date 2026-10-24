# Content roadmap and 90-day post-launch plan

## Content roadmap

The 18 topics come from [keyword-research.md §6](keyword-research.md), with supporting evidence and angles there. Each article targets one service page and links to it.

**Ground rules**
- Do not create one page per query variant.
- Do not invent benchmarks, client stories, or failure rates.
- Cite primary sources.

**What the two groups mean**
- **Ready to draft** means it can be written honestly from public documentation and general engineering judgement. An engineer should still review it before publishing.
- **Needs SME input or artefacts** means it depends on first-hand material. That could be a working code repository, tested queries, or a view on a platform Nodeblix must first confirm it delivers.

### Ready to draft

| # | Working title | Supports | Note |
| --- | --- | --- | --- |
| 2 | Choosing a migration strategy per workload (7 Rs worksheet) | Cloud | Prefer expanding the existing `cloud-migration-planning` article rather than a new URL |
| 3 | FinOps vs cloud cost optimization: who owns the bill | Cloud | Must not duplicate `cloud-cost-governance`; focus on ownership and RACI |
| 5 | Platform engineering vs DevOps vs SRE for 20–200 engineers | DevOps | Org-design reasoning; cite sources |
| 7 | Rewrite vs refactor: a decision framework for legacy applications | Software | Complements `modernizing-legacy-applications` |
| 8 | Build vs buy software: a cost-of-ownership checklist | Software | Cost drivers only, no prices |
| 9 | Distributed monolith: symptoms, causes, recovery | Microservices | Strong informational demand observed |
| 11 | Modular monolith first: enforcing module boundaries | Microservices | A "how" piece; the existing article is the "when" |
| 12 | ELT vs ETL: when transformation location matters | Data | Synthetic worked examples only |
| 15 | KPI vs metric: writing metric definitions that survive reorgs | Analytics / BI | Include a definition template |

### Needs SME input or artefacts

| # | Working title | Supports | What is needed |
| --- | --- | --- | --- |
| 1 | Cloud landing zones: decisions before the first production workload | Cloud | A minimal example Terraform baseline that has been tested |
| 4 | A one-week DORA baseline | DevOps | Extraction queries tested against real GitHub/GitLab data |
| 6 | Terraform vs OpenTofu vs Pulumi vs Bicep vs CloudFormation | DevOps | The same stack built in each tool, in a public repo |
| 10 | Database-per-service, outbox, and sagas in practice | Microservices | A runnable example repository |
| 13 | Data contracts and data observability | Data | An example contract and CI check |
| 14 | Semantic layer vs semantic model vs metrics layer | Analytics / BI | One metric defined end to end in dbt and a BI model |
| 16 | Why CRM implementations fail | CRM | Careful reading of the cited academic and analyst sources; no invented rates |
| 17 | Salesforce vs HubSpot vs Dynamics 365, integration-first | CRM | Confirmation that Nodeblix works on all three, and disclosure of any partner status |
| 18 | CRM for manufacturers: data model and ERP sync | CRM + Manufacturing | Practitioner review of the reference data model |

Topics 1, 4, 6, 10, 13, and 14 have the best chance of standing out, because they can ship with public, reproducible material that a new firm can offer without client evidence.

## 90-day post-launch roadmap

Priorities run from top to bottom within each phase.

### Days 0–14: launch and verify

1. Work through `launch-checklist.md` section B, items 1–8. **Blocks everything else.**
2. Resolve the section A items that affect accuracy:
   - the platform list;
   - article dates;
   - the contact webhook;
   - the legal entity in Privacy and Terms.
3. Request indexing for the homepage, `/services`, and the seven service pages.
4. Record a baseline:
   - PageSpeed Insights;
   - Search Console coverage;
   - enquiries per week.
5. Enable analytics once consent and the privacy update are done (checklist item 10).

### Days 15–45: indexing and first content

1. **Check indexing.** Review the Search Console Pages report weekly, and fix any "Crawled – currently not indexed" or "Duplicate without canonical" issues.
2. **Publish two or three "ready to draft" articles**, about one a week. Suggested order:
   - #9, distributed monolith (Microservices);
   - #12, ELT vs ETL (Data engineering);
   - #7, rewrite vs refactor (Software development).

   Each one must link to its service page, and the service page should link back where relevant.
3. **Start one artefact-backed piece.** Suggest #1 (landing zone) or #14 (semantic layer), whichever an engineer can own.
4. **Deepen the manufacturing industry page** with practitioner input. It has the strongest industry demand in the research. Other industry pages can follow.
5. **Add real trust signals as they become available.** Do this in the same release they are verified:
   - team bios;
   - contact details;
   - social profiles.

### Days 46–90: learn from data and expand

1. **Read Search Console queries by page.**
   - Where a page earns impressions for a related question it doesn't answer, add a section or FAQ to that page. Don't create a new page.
   - Where a page ranks on page 2 for its primary term, improve depth and internal links before writing new content.
2. **Fix snippets.** Where impressions are high but click-through is low, rewrite the title and description. Keep the primary keyword.
3. **Publish two to four more articles**, mixing "ready to draft" and artefact-backed pieces.
4. **Replace scenarios with case studies.** Swap at least one illustrative scenario on `/work` for an authorised case study, if a client agrees. This is the biggest single trust improvement available.
5. **Look for genuine mentions.** For example:
   - open-source repositories from the artefact articles;
   - conference or meetup talks;
   - partner directory listings (only if a partnership is real).

   No paid links or link schemes.
6. **Review at day 90.**
   - Compare indexed pages, impressions, clicks, and qualified enquiries by landing page against the day-14 baseline.
   - Re-prioritise the remaining topics based on what Search Console shows people actually search for.

**What success looks like at 90 days, without invented targets:**
- All 36 or more URLs are indexed.
- Service pages are earning impressions for their primary and supporting terms.
- At least one qualified enquiry can be attributed to an organic landing page.

Ranking positions and traffic volumes for a new domain cannot be responsibly forecast in advance.
