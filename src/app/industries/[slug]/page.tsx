import { notFound } from "next/navigation";
import { CardGrid } from "@/components/CardGrid";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { getIndustry, industries } from "@/content/industries";
import { getServicesBySlugs } from "@/content/services";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return industries.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getIndustry(slug);
  if (!item) return {};
  return pageMeta({
    title: item.title,
    description: item.description,
    path: `/industries/${item.slug}`,
  });
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getIndustry(slug);
  if (!item) notFound();
  const related = getServicesBySlugs(item.relatedServices);

  return (
    <main id="main">
      <PageHero
        image={item.image}
        alt={item.imageAlt}
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/industries", label: "Industries" },
          { label: item.name },
        ]}
        kicker={item.name}
        title={item.h1}
        lede={item.lede}
      >
        <p className="hero-note">{item.caveat}</p>
      </PageHero>
      <section className="section">
        <div className="wrap rail">
          <div className="rail-sticky">
            <p className="kicker">Challenges</p>
            <h2 style={{ marginTop: 12 }}>Operating challenges</h2>
          </div>
          <div>
            {item.challenges.map((c, i) => (
              <article className="use-row" key={c.title}>
                <span className="num">0{i + 1}</span>
                <div>
                  <h3>{c.title}</h3>
                  <p className="muted" style={{ marginTop: 8 }}>
                    {c.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-wash">
        <div className="wrap">
          <p className="kicker">Patterns</p>
          <h2 style={{ margin: "12px 0 36px" }}>Solution patterns we discuss</h2>
          <div className="tile-grid">
            {item.patterns.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <article className="tile">
                  <span className="tile-n">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{c.title}</h3>
                  <p className="muted">{c.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <h3 style={{ margin: "40px 0 12px" }}>Business considerations</h3>
          <ul>
            {item.considerations.map((c) => (
              <li key={c} className="muted">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section">
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
