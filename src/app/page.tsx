import Image from "next/image";
import Link from "next/link";
import { Carousel } from "@/components/Carousel";
import { ContactBlock } from "@/components/ContactBlock";
import { CountUp } from "@/components/CountUp";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ServiceExplorer } from "@/components/ServiceExplorer";
import { articles } from "@/content/articles";
import { industries } from "@/content/industries";
import { services } from "@/content/services";
import { scenarios } from "@/content/work";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Cloud, Software & Data Engineering Consultancy | Nodeblix",
  absoluteTitle: true,
  description:
    "Engineering-led consultancy for cloud, DevOps, custom software, microservices, data engineering, analytics, and CRM — systems your own team can run.",
  path: "/",
});

const entryPoints = [
  {
    href: "/services/cloud-engineering",
    title: "Cloud & DevOps",
    copy: "Landing zones, migration, and release paths teams trust.",
  },
  {
    href: "/services/software-development",
    title: "Software & Microservices",
    copy: "Products, APIs, and modernization without a big-bang rewrite.",
  },
  {
    href: "/services/data-engineering",
    title: "Data, Analytics & CRM",
    copy: "Numbers people agree on, and customer systems that fit.",
  },
];

const pillars = [
  {
    n: "01",
    title: "Build",
    line: "New products and platforms, designed to be changed later.",
    image: "/images/pillar-build.jpg",
    alt: "Two architects sketching a system diagram on a glass whiteboard",
    links: ["software-development", "microservices", "crm-solutions"],
  },
  {
    n: "02",
    title: "Modernize",
    line: "Move the estate forward without stopping the business that runs on it.",
    image: "/images/pillar-modernize.jpg",
    alt: "Engineer labelling fibre cables in a data centre aisle",
    links: ["cloud-engineering", "data-engineering"],
  },
  {
    n: "03",
    title: "Operate",
    line: "Release, observe, and decide with evidence — after launch, on purpose.",
    image: "/images/pillar-operate.jpg",
    alt: "Two engineers reviewing monitoring dashboards in an operations room at night",
    links: ["devops-engineering", "analytical-platforms"],
  },
];

const facts = [
  { n: 7, label: "Service lines", copy: "Cloud, DevOps, software, microservices, data, analytics, and CRM." },
  { n: 6, label: "Industries", copy: "Sector constraints documented as they actually show up." },
  { n: 5, label: "Movements", copy: "A delivery method you can inspect before code is written." },
  { n: 1, label: "Accountable team", copy: "From discovery through an operable handover." },
];

const steps = [
  ["Discover", "Goals, systems, constraints, and who will live with the result."],
  ["Define", "Architecture, milestones, and what “good” looks like — written down."],
  ["Engineer", "Design, build, integrate, and test in realistic conditions."],
  ["Launch", "Deploy with monitoring and a rollback that has been rehearsed."],
  ["Evolve", "Reliability, cost, and usability after the first release."],
];

const homeFaqs = [
  {
    q: "What does Nodeblix do?",
    a: "Nodeblix is a technology engineering and consulting company. We design, build, modernize, and help operate cloud infrastructure, CI/CD and DevOps practices, custom software, microservices architectures, data platforms, analytics and business intelligence, and CRM systems.",
  },
  {
    q: "Who are Nodeblix services for?",
    a: "Technology and business leaders — CTOs, CIOs, engineering managers, and data leaders — in organisations whose operations depend on their systems. Our industry pages cover the constraints we plan around in financial services, retail, manufacturing, healthcare, logistics, and software companies.",
  },
  {
    q: "Which technologies and platforms do you work with?",
    a: "We design for the major cloud providers — AWS, Microsoft Azure, and Google Cloud — and implement common CRM platforms such as Salesforce, HubSpot, and Microsoft Dynamics 365. For languages, data tools, and BI platforms, we start from what your team already runs and can hire for, rather than introducing a stack for its own sake.",
  },
  {
    q: "How do the seven services fit together?",
    a: "Cloud engineering provides the platform, and DevOps engineering is how change reaches it. Software development and microservices architecture shape the applications. Data engineering makes information reliable, analytical platforms turn it into decisions, and CRM solutions connect it to customers. Most engagements start with one service and touch two or three.",
  },
  {
    q: "How does an engagement start?",
    a: "Describe the systems involved, the constraint that matters, and a rough timeline through the enquiry form. We reply with a suggested first step: a conversation, a scoped assessment, or a clear note that we are not the right fit.",
  },
];

export default function HomePage() {
  const bySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
  const explorerItems = services.map((s) => ({
    slug: s.slug,
    name: s.name,
    short: s.short,
    image: s.image,
    alt: s.imageAlt,
    points: s.capabilities.slice(0, 4).map((c) => c.title),
  }));

  return (
    <main id="main">
      <PageHero
        size="home"
        image="/images/hero-skyline.jpg"
        alt="Two engineers looking out over a city skyline at dusk from a high office floor"
        kicker="Engineering-led technology partner"
        title="Build the technology your business will depend on."
        lede="Cloud, software, data, and business systems — designed, delivered, and operated to stay reliable as the organisation grows."
      >
        <div className="btn-row">
          <Link className="btn btn-lg" href="/contact">
            Discuss a project
          </Link>
          <Link className="btn-ghost btn-ghost-on-dark btn-lg" href="/services">
            Explore our services
          </Link>
        </div>
      </PageHero>

      <div className="entry-bar">
        <div className="wrap entry-grid">
          {entryPoints.map((e) => (
            <Link key={e.href} href={e.href} className="entry">
              <strong>{e.title}</strong>
              <span>{e.copy}</span>
              <svg width="18" height="18" viewBox="0 0 14 14" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </Link>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="statement">
              <p className="kicker">Who we are</p>
              <h2 className="statement-title">
                We engineer systems that survive the real world — and leave them in a state your own
                team can run.
              </h2>
              <div className="statement-side">
                <p>
                  Nodeblix is a technology engineering and consulting company. We design, build,
                  modernize, and help operate cloud platforms, delivery pipelines, custom software,
                  data platforms, analytics, and CRM systems.
                </p>
                <p className="muted">
                  Most technology programmes stall for unmysterious reasons: unclear ownership,
                  fashionable architecture, data nobody trusts, and a handover that never quite
                  happens. We are organised around those failure modes.
                </p>
                <Link href="/about" className="text-link">
                  About Nodeblix
                  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                    <path d="M2 7h10M8 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </Link>
              </div>
            </div>
          </Reveal>
          <div className="facts">
            {facts.map((f, i) => (
              <Reveal key={f.label} delay={i * 90}>
                <div className="fact">
                  <span className="fact-n">
                    <CountUp to={f.n} />
                  </span>
                  <strong>{f.label}</strong>
                  <p className="muted">{f.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-wash">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <div>
                <p className="kicker">What we do</p>
                <h2>Build. Modernize. Operate.</h2>
              </div>
              <p className="lede">
                Three kinds of work, one standard: systems that can be explained, changed, and run
                after we leave the room.
              </p>
            </div>
          </Reveal>
          <div className="pillars">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 110}>
                <article className="pillar">
                  <Image src={p.image} alt={p.alt} fill sizes="(max-width: 980px) 100vw, 33vw" />
                  <div className="pillar-body">
                    <span className="pillar-n">{p.n}</span>
                    <h3>{p.title}</h3>
                    <p>{p.line}</p>
                    <ul>
                      {p.links.map((slug) => (
                        <li key={slug}>
                          <Link href={`/services/${slug}`}>{bySlug[slug].navLabel}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <div>
                <p className="kicker">Services</p>
                <h2>Seven capabilities, one operating estate.</h2>
              </div>
              <p className="lede">
                Each service has its own failure modes. The useful work is knowing which one is
                actually blocking the business — and what has to move with it.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <ServiceExplorer items={explorerItems} />
          </Reveal>
        </div>
      </section>

      <section className="section section-navy">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <div>
                <p className="kicker">Industries</p>
                <h2>Industry context, not sector slogans.</h2>
              </div>
              <p className="lede">
                Regulated change, seasonal peaks, plant-floor reality, sensitive records. We plan
                around the constraints each sector actually carries.
              </p>
            </div>
          </Reveal>
          <div className="industry-grid">
            {industries.map((item, i) => (
              <Reveal key={item.slug} delay={(i % 3) * 90}>
                <Link href={`/industries/${item.slug}`} className="industry-tile">
                  <Image src={item.image} alt="" fill sizes="(max-width: 980px) 100vw, 33vw" />
                  <span className="industry-tile-body">
                    <strong>{item.name}</strong>
                    <span>{item.h1}</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap approach-split">
          <Reveal>
            <div className="approach-media">
              <Image
                src="/images/team-studio.jpg"
                alt="Engineering team discussing architecture drawings around a studio table"
                fill
                sizes="(max-width: 980px) 100vw, 50vw"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="kicker">How we work</p>
              <h2 style={{ margin: "12px 0 14px" }}>Five movements. No black box.</h2>
              <p className="lede">
                Short discovery, written trade-offs, and delivery that lets the organisation keep
                operating while the system changes underneath it.
              </p>
            </Reveal>
            <Reveal>
              <ol className="timeline">
                {steps.map(([t, d], i) => (
                  <li key={t} style={{ transitionDelay: `${i * 120}ms` }}>
                    <span className="timeline-n">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <strong>{t}</strong>
                      <p className="muted">{d}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <Link className="btn-ghost" href="/approach" style={{ marginTop: 28 }}>
                Read the methodology
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-wash">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <div>
                <p className="kicker">Work</p>
                <h2>How we think, shown as method.</h2>
              </div>
              <div>
                <p className="lede">
                  Illustrative scenarios — not named clients or invented results. Authorised case
                  studies will be published with approved outcomes.
                </p>
                <Link href="/work" className="text-link" style={{ marginTop: 14 }}>
                  All scenarios
                  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                    <path d="M2 7h10M8 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </Link>
              </div>
            </div>
          </Reveal>
          <div className="card-grid">
            {scenarios.map((item, i) => (
              <Reveal key={item.slug} delay={i * 100}>
                <Link href={`/work/${item.slug}`} className="card">
                  <span className="card-media">
                    <Image src={item.image} alt="" fill sizes="(max-width: 980px) 100vw, 33vw" />
                  </span>
                  <span className="card-body">
                    <span className="card-tag">Illustrative scenario · {item.sector}</span>
                    <strong className="card-title">{item.title}</strong>
                    <span className="card-copy">{item.summary}</span>
                    <span className="card-more">Read the scenario →</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <div>
                <p className="kicker">Insights</p>
                <h2>Notes from the work.</h2>
              </div>
              <p className="lede">
                Practical writing on migration, delivery, architecture, and data — for people who
                have to live with the system.
              </p>
            </div>
          </Reveal>
          <Carousel label="Latest insights">
            {articles.map((a) => (
              <Link key={a.slug} href={`/insights/${a.slug}`} className="card slide">
                <span className="card-media">
                  <Image src={a.image} alt="" fill sizes="(max-width: 640px) 85vw, 420px" />
                </span>
                <span className="card-body">
                  <span className="card-tag">{a.category}</span>
                  <strong className="card-title">{a.title}</strong>
                  <span className="card-more">Read article →</span>
                </span>
              </Link>
            ))}
          </Carousel>
        </div>
      </section>

      <section className="section section-wash" aria-labelledby="home-faq">
        <div className="wrap">
          <div className="faq-head">
            <div>
              <p className="kicker">FAQ</p>
              <h2 id="home-faq" style={{ marginTop: 12 }}>
                Questions about working with Nodeblix
              </h2>
            </div>
            <Link href="/services" className="text-link">
              Compare all services
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </Link>
          </div>
          <div className="faq">
            {homeFaqs.map((item) => (
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

      <ContactBlock />
    </main>
  );
}
