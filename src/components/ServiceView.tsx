import Link from "next/link";
import { CardGrid } from "./CardGrid";
import { CtaBand } from "./CtaBand";
import {
  AiSystemDiagram,
  CloudDiagram,
  CrmFlowDiagram,
  DataFlowDiagram,
  PipelineDiagram,
  ServiceMapDiagram,
} from "./diagrams";
import { JsonLd } from "./JsonLd";
import { PageHero } from "./PageHero";
import { Reveal } from "./Reveal";
import { articles } from "@/content/articles";
import { industries } from "@/content/industries";
import { serviceGuides } from "@/content/service-guides";
import { getServicesBySlugs, inSentence, type Service } from "@/content/services";
import { graph, serviceSchema } from "@/lib/schema";

function Diagram({ slug }: { slug: string }) {
  if (slug === "ai-engineering") return <AiSystemDiagram />;
  if (slug === "cloud-engineering") return <CloudDiagram />;
  if (slug === "devops-engineering") return <PipelineDiagram />;
  if (slug === "microservices") return <ServiceMapDiagram />;
  if (slug === "data-engineering") return <DataFlowDiagram />;
  if (slug === "crm-solutions") return <CrmFlowDiagram />;
  return null;
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <path d="M2 7h10M8 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function ServiceView({ service }: { service: Service }) {
  const guide = serviceGuides[service.slug];
  const path = `/services/${service.slug}`;
  const related = getServicesBySlugs(service.related);
  const insights = articles.filter((a) => service.relatedInsights.includes(a.slug));
  const sectors = industries.filter((i) => i.relatedServices.includes(service.slug));

  return (
    <main id="main">
      <JsonLd
        data={graph(
          serviceSchema({
            path,
            name: service.name,
            serviceType: service.serviceType,
            description: service.description,
          }),
        )}
      />
      <PageHero
        image={service.image}
        alt={service.imageAlt}
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/services", label: "Services" },
          { label: service.name },
        ]}
        title={service.h1}
        lede={service.lede}
      >
        <div className="btn-row">
          <Link className="btn btn-lg" href="/contact">
            Discuss a project
          </Link>
          <Link className="btn-ghost btn-ghost-on-dark btn-lg" href="/approach">
            How we work
          </Link>
        </div>
      </PageHero>

      <section className="section" aria-labelledby="overview">
        <div className="wrap answer">
          <div>
            <p className="kicker">Overview</p>
            <h2 id="overview" style={{ marginTop: 12 }}>
              {guide.definition.q}
            </h2>
          </div>
          <div>
            <p className="answer-lead">{guide.definition.a}</p>
            <p className="answer-more">{guide.definition.more}</p>
            <div className="answer-links">
              {guide.definition.links.map((l) => (
                <Link key={l.href} href={l.href} className="text-link">
                  {l.label[0].toUpperCase() + l.label.slice(1)}
                  <Arrow />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-wash">
        <div className="wrap rail">
          <div className="rail-sticky">
            <p className="kicker">The problem</p>
            <h2 style={{ marginTop: 12 }}>{service.problemsTitle}</h2>
          </div>
          <div>
            {service.problems.map((item, i) => (
              <article className="use-row" key={item.title}>
                <span className="num muted">0{i + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p className="muted" style={{ marginTop: 8 }}>
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="kicker">Capabilities</p>
          <h2 style={{ margin: "12px 0 36px" }}>What our {inSentence(service.name)} work includes</h2>
          <div className="tile-grid m-rail" role="region" aria-label="Capabilities" tabIndex={0}>
            {service.capabilities.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 80}>
                <article className="tile">
                  <span className="tile-n">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p className="muted">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-navy">
        <div className="wrap">
          <div className="section-head">
            <h2>{service.approachTitle}</h2>
            <p className="lede">{service.architecture}</p>
          </div>
          <ul className="list" style={{ maxWidth: "42rem", marginBottom: 28 }}>
            {service.approach.map((item) => (
              <li key={item} className="muted">
                {item}
              </li>
            ))}
          </ul>
          <Diagram slug={service.slug} />
        </div>
      </section>

      <section className="section section-wash">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker">Decision guide</p>
              <h2>{guide.comparison.title}</h2>
            </div>
            <p className="lede">{guide.comparison.intro}</p>
          </div>
          <p className="compare-hint" aria-hidden="true">
            Swipe sideways to see every column
          </p>
          <div className="compare-scroll" tabIndex={0} role="region" aria-label={guide.comparison.title}>
            <table className="compare">
              <thead>
                <tr>
                  {guide.comparison.columns.map((c) => (
                    <th key={c} scope="col">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {guide.comparison.rows.map(([head, ...cells]) => (
                  <tr key={head}>
                    <th scope="row">{head}</th>
                    {cells.map((cell, i) => (
                      <td key={i}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {guide.comparison.note && <p className="compare-note">{guide.comparison.note}</p>}
        </div>
      </section>

      <section className="section">
        <div className="wrap split" style={{ alignItems: "start" }}>
          <div>
            <h2>Where this typically applies</h2>
            {service.useCases.map((item, i) => (
              <article className="use-row" key={item.title}>
                <span className="num muted">0{i + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p className="muted" style={{ marginTop: 8 }}>
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div>
            <h2>Integration and implementation</h2>
            <ul className="list" style={{ marginTop: 16 }}>
              {service.integration.map((item) => (
                <li key={item} className="muted">
                  {item}
                </li>
              ))}
            </ul>
            {sectors.length > 0 && (
              <>
                <h3 style={{ marginTop: 36 }}>Industry context</h3>
                <ul className="list" style={{ marginTop: 12 }}>
                  {sectors.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/industries/${s.slug}`}>
                        {service.name} for {inSentence(s.name)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="section section-wash">
        <div className="wrap rail">
          <div className="rail-sticky">
            <p className="kicker">Trade-offs</p>
            <h2 style={{ marginTop: 12 }}>Implementation challenges to plan for</h2>
          </div>
          <div>
            {guide.tradeoffs.map((item, i) => (
              <article className="use-row" key={item.title}>
                <span className="num muted">0{i + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p className="muted" style={{ marginTop: 8 }}>
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split" style={{ alignItems: "start" }}>
          <div>
            <h2>Security, scale, and the day after launch</h2>
            {service.operations.map((item) => (
              <div key={item.title} style={{ marginTop: 20 }}>
                <h3>{item.title}</h3>
                <p className="muted">{item.body}</p>
              </div>
            ))}
          </div>
          <div>
            <h2>How an engagement usually runs</h2>
            {service.method.map((item, i) => (
              <div className="principle" key={item.title}>
                <strong>0{i + 1}</strong>
                <div>
                  <h3>{item.title}</h3>
                  <p className="muted">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-wash" aria-labelledby="faq">
        <div className="wrap">
          <div className="faq-head">
            <div>
              <p className="kicker">FAQ</p>
              <h2 id="faq" style={{ marginTop: 12 }}>
                {service.name}: frequently asked questions
              </h2>
            </div>
            <Link href="/contact" className="text-link">
              Ask a different question
              <Arrow />
            </Link>
          </div>
          <div className="faq">
            {guide.faqs.map((item) => (
              <details key={item.q}>
                <summary>
                  <h3>{item.q}</h3>
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="kicker">Keep exploring</p>
          <h2 style={{ margin: "12px 0 36px" }}>Related services and insights</h2>
          <CardGrid
            items={[
              ...related.map((item) => ({
                href: `/services/${item.slug}`,
                image: item.image,
                alt: item.imageAlt,
                tag: "Service",
                title: item.name,
                copy: item.short,
                more: `Explore ${inSentence(item.name)}`,
              })),
              ...insights.map((item) => ({
                href: `/insights/${item.slug}`,
                image: item.image,
                alt: item.imageAlt,
                tag: `Insight · ${item.category}`,
                title: item.title,
                more: "Read article",
              })),
            ].slice(0, 6)}
          />
        </div>
      </section>

      <CtaBand
        title={`Start with ${inSentence(service.name)}`}
        copy="If this is the constraint you are carrying, describe the current systems and what must not break. We will tell you what a first useful step looks like."
      />
    </main>
  );
}
