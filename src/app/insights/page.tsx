import Image from "next/image";
import Link from "next/link";
import { InsightsGrid } from "@/components/InsightsGrid";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { articles } from "@/content/articles";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Engineering Insights: Cloud, DevOps, Data & CRM",
  description:
    "Practical guides on cloud migration, CI/CD, microservices, data pipelines, warehouse vs lakehouse, BI dashboards, and CRM integration — written for technology leaders.",
  path: "/insights",
});

export default function InsightsPage() {
  const [lead, ...rest] = articles;

  return (
    <main id="main">
      <PageHero
        image="/images/insight-architecture.jpg"
        alt="Concrete staircase and steel rail in a modern atrium"
        crumbs={[{ href: "/", label: "Home" }, { label: "Insights" }]}
        kicker="Insights"
        title="Practical writing for people who have to live with the system."
        lede="Articles written to support real service conversations — migration, delivery, architecture, data, and CRM."
      />
      <section className="section">
        <div className="wrap">
          <Reveal>
            <Link href={`/insights/${lead.slug}`} className="feature-card">
              <span className="feature-card-media">
                <Image src={lead.image} alt="" fill sizes="(max-width: 980px) 100vw, 60vw" />
              </span>
              <span className="feature-card-body">
                <span className="card-tag">Featured · {lead.category}</span>
                <strong>{lead.title}</strong>
                <span className="card-copy">{lead.summary}</span>
                <span className="card-more">Read article →</span>
              </span>
            </Link>
          </Reveal>
          <div style={{ marginTop: 64 }}>
            <InsightsGrid
              items={rest.map((a) => ({
                slug: a.slug,
                title: a.title,
                category: a.category,
                date: a.date,
                summary: a.summary,
                image: a.image,
                alt: a.imageAlt,
              }))}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
