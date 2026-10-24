import Link from "next/link";
import { CardGrid } from "@/components/CardGrid";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { services } from "@/content/services";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Technology Engineering & Consulting Services",
  description:
    "Cloud engineering, DevOps and CI/CD, custom software, microservices, data engineering, BI and analytics, and CRM implementation — and how they fit together.",
  path: "/services",
});

const fit = [
  {
    problem: "Infrastructure is hard to change, expensive, or fragile — or a migration is due.",
    slug: "cloud-engineering",
    anchor: "Cloud engineering and migration",
  },
  {
    problem: "Releases are slow, manual, or risky, and incidents take too long to resolve.",
    slug: "devops-engineering",
    anchor: "DevOps and CI/CD engineering",
  },
  {
    problem: "A workflow needs software that packaged products cannot model, or a legacy app needs modernizing.",
    slug: "software-development",
    anchor: "Custom software development",
  },
  {
    problem: "A monolith blocks independent releases, or a service estate has become hard to operate.",
    slug: "microservices",
    anchor: "Microservices architecture consulting",
  },
  {
    problem: "Teams report different numbers, pipelines fail quietly, or the data platform needs designing.",
    slug: "data-engineering",
    anchor: "Data engineering and architecture",
  },
  {
    problem: "Dashboards are distrusted or unused, and leaders still rely on hand-built slides.",
    slug: "analytical-platforms",
    anchor: "Analytics and BI platform development",
  },
  {
    problem: "Customer data is scattered, the CRM is under-used, or it is disconnected from billing and support.",
    slug: "crm-solutions",
    anchor: "CRM implementation and integration",
  },
];

export default function ServicesPage() {
  return (
    <main id="main">
      <PageHero
        image="/images/cloud-infrastructure.jpg"
        alt="Data center aisle with orderly racks and cool lighting"
        crumbs={[{ href: "/", label: "Home" }, { label: "Services" }]}
        kicker="Services"
        title="Technology engineering and consulting services"
        lede="Seven services across cloud, delivery, software, data, analytics, and CRM. Each has its own problems, methods, and failure modes — the useful work is knowing which one is actually blocking the business, and which adjacent systems will have to move with it."
      />
      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <div>
                <p className="kicker">Capabilities</p>
                <h2>Where the work usually starts.</h2>
              </div>
              <p className="lede">
                Pick the constraint you are carrying. Every service page covers the problems,
                the method, the architecture, the trade-offs, and the questions we hear first.
              </p>
            </div>
          </Reveal>
          <CardGrid
            items={services.map((s, i) => ({
              href: `/services/${s.slug}`,
              image: s.image,
              alt: s.imageAlt,
              tag: String(i + 1).padStart(2, "0"),
              title: s.name,
              copy: s.short,
              more: `Explore ${s.name.toLowerCase()}`,
              wide: i === 0 || i === services.length - 1,
            }))}
          />
        </div>
      </section>
      <section className="section section-wash" aria-labelledby="which-service">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker">Decision guide</p>
              <h2 id="which-service">Which service fits your problem?</h2>
            </div>
            <p className="lede">
              Most engagements touch two or three services. Start from the symptom you recognise;
              the service page explains what the work involves and where it connects.
            </p>
          </div>
          <div className="compare-scroll" tabIndex={0} role="region" aria-label="Which service fits your problem">
            <table className="compare compare-fit">
              <thead>
                <tr>
                  <th scope="col">If this sounds familiar</th>
                  <th scope="col">Start with</th>
                </tr>
              </thead>
              <tbody>
                {fit.map((row) => (
                  <tr key={row.slug}>
                    <td>{row.problem}</td>
                    <td>
                      <strong>
                        <Link href={`/services/${row.slug}`}>{row.anchor}</Link>
                      </strong>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <CtaBand title="Not sure which service you need?" />
    </main>
  );
}
