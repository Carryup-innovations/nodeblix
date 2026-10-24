import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About Nodeblix | Engineering-Led Technology Consultancy",
  absoluteTitle: true,
  description:
    "Nodeblix is an engineering-led technology consultancy for cloud, DevOps, software, data, analytics, and CRM — focused on systems your own team can run after launch.",
  path: "/about",
});

const principles = [
  ["Prefer the simpler system that can be operated", "Distribution, new platforms, and extra tools need a constraint that justifies them."],
  ["Write the trade-off down", "If a decision cannot be explained to the people who will live with it, it is not finished."],
  ["Integrate before you replace", "Existing systems and teams are part of the design, not obstacles to a greenfield story."],
  ["Leave the work inspectable", "Repositories, runbooks, and access should not depend on us remaining in the room."],
];

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero
        image="/images/about-campus.jpg"
        alt="Quiet courtyard of a contemporary research campus"
        crumbs={[{ href: "/", label: "Home" }, { label: "About" }]}
        kicker="About"
        title="Built around engineering. Focused on what matters."
        lede="Nodeblix exists to help organisations design, build, and modernize the systems they will still have to run next year."
      />

      <section className="section">
        <div className="wrap approach-split">
          <Reveal>
            <div className="approach-media">
              <Image
                src="/images/approach-studio.jpg"
                alt="Architectural workshop table with drawings and a scale model"
                fill
                sizes="(max-width: 980px) 100vw, 50vw"
              />
            </div>
          </Reveal>
          <Reveal>
            <p className="kicker">Why we exist</p>
            <h2 style={{ margin: "12px 0 18px" }}>
              Technology programmes rarely fail for mysterious reasons.
            </h2>
            <p>
              They fail on unclear ownership, fashionable architecture, data nobody trusts, and a
              handover that never quite happens. Nodeblix is organised around those failure modes —
              architecture you can explain, delivery you can inspect, and software that does not
              become a second problem.
            </p>
            <p className="muted" style={{ marginTop: 16 }}>
              We do not publish years in market, headcount, awards, or office maps until those facts
              are verified. The absence of a timeline here is deliberate.
            </p>
            <Link href="/approach" className="text-link">
              How we work
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section section-wash">
        <div className="wrap">
          <p className="kicker">Principles</p>
          <h2 style={{ margin: "12px 0 36px" }}>What guides technical decisions</h2>
          <div className="tile-grid tile-grid-2">
            {principles.map(([t, d], i) => (
              <Reveal key={t} delay={(i % 2) * 90}>
                <article className="tile">
                  <span className="tile-n">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{t}</h3>
                  <p className="muted">{d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap approach-split reverse">
          <Reveal>
            <p className="kicker">Working together</p>
            <h2 style={{ margin: "12px 0 18px" }}>How we work with client teams</h2>
            <p className="muted">
              We prefer to write in your repositories, follow your review rules, and leave ownership
              with the people who will operate the system. Staffing models and named principals will
              be listed here when they are ready to be public.
            </p>
            <p className="notice" style={{ marginTop: 24 }}>
              Founder and team profiles will be added with real names and real photography. We will
              not present fictional employees or portraits as our team.
            </p>
          </Reveal>
          <Reveal>
            <div className="approach-media">
              <Image
                src="/images/software-studio.jpg"
                alt="Daylit software studio with desks and monitors facing a wall of windows"
                fill
                sizes="(max-width: 980px) 100vw, 50vw"
              />
            </div>
          </Reveal>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
