import { notFound } from "next/navigation";
import { CardGrid } from "@/components/CardGrid";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { getServicesBySlugs } from "@/content/services";
import { getScenario, scenarios } from "@/content/work";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return scenarios.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getScenario(slug);
  if (!item) return {};
  return pageMeta({
    title: `Scenario: ${item.title}`,
    description: item.summary,
    path: `/work/${item.slug}`,
  });
}

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getScenario(slug);
  if (!item) notFound();
  const related = getServicesBySlugs(item.relatedServices);

  return (
    <main id="main">
      <PageHero
        image={item.image}
        alt={item.imageAlt}
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/work", label: "Work" },
          { label: item.title },
        ]}
        kicker={`Illustrative scenario · ${item.sector}`}
        title={item.title}
        lede={item.summary}
      >
        <p className="hero-note">
          Illustrative scenario — not a client case study. No named organisation, statistic, or
          testimonial is implied.
        </p>
      </PageHero>
      <section className="section">
        <div className="wrap prose">
          <h2>Business context</h2>
          <p>{item.context}</p>
          <h2>Technical challenge</h2>
          <p>{item.challenge}</p>
          <h2>Constraints</h2>
          <ul>
            {item.constraints.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <h2>Approach</h2>
          <ul>
            {item.approach.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <h2>Technologies in play</h2>
          <p>
            Named only at the category level. We do not list products as if they
            were a certified stack for a fictional client.
          </p>
          <ul>
            {item.technologies.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <h2>Implementation notes</h2>
          <ul>
            {item.implementation.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <h2>Outcomes</h2>
          <p className="callout">{item.outcomesNote}</p>
          <h2>Lessons</h2>
          <ul>
            {item.lessons.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section section-wash">
        <div className="wrap">
          <p className="kicker">Services</p>
          <h2 style={{ margin: "12px 0 36px" }}>Related services</h2>
          <CardGrid
            items={related.map((s) => ({
              href: `/services/${s.slug}`,
              image: s.image,
              alt: s.imageAlt,
              tag: "Service",
              title: s.name,
              copy: s.short,
              more: "Explore the service",
            }))}
          />
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
