import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "How We Work: Engineering Delivery Approach",
  description:
    "How a Nodeblix engagement runs: discover, define, engineer, launch, and evolve — with written trade-offs, rehearsed rollbacks, and a handover your team can operate.",
  path: "/approach",
});

const steps = [
  ["Discover", "Goals, systems, constraints, and who will live with the result. We map the unofficial process, not just the documented one."],
  ["Define", "Requirements, architecture, milestones, and what “good” looks like — written down, with the trade-offs named."],
  ["Engineer", "Design, build, integrate, test, and validate in realistic conditions, inside your repositories and review rules."],
  ["Launch", "Deploy with monitoring, support, and a rollback that has been rehearsed rather than assumed."],
  ["Evolve", "Reliability, cost, and usability after the first release — on purpose, with a handover your team can run."],
];

export default function ApproachPage() {
  return (
    <main id="main">
      <PageHero
        image="/images/approach-studio.jpg"
        alt="Architectural workshop table with drawings and a scale model"
        crumbs={[{ href: "/", label: "Home" }, { label: "Approach" }]}
        title="A method you can inspect before we write a line of code."
        lede="Engagements start with the systems that already exist, the constraints that will not move, and a definition of done that operations can live with."
      />

      <section className="section">
        <div className="wrap approach-split">
          <Reveal>
            <div className="approach-media tall">
              <Image
                src="/images/pillar-build.jpg"
                alt="Two architects sketching a system diagram on a glass whiteboard"
                fill
                sizes="(max-width: 980px) 100vw, 50vw"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="kicker">The five movements</p>
              <h2 style={{ margin: "12px 0 14px" }}>From discovery to an operable handover.</h2>
              <p className="lede">No black box, no mystery transformation, no rewrite hidden inside a “phase 0”.</p>
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
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-wash">
        <div className="wrap tile-grid tile-grid-2">
          <Reveal>
            <article className="tile">
              <span className="tile-n">In</span>
              <h3>What we need from you</h3>
              <p className="muted">
                Access to the people who do the work, an honest inventory of systems, and a
                decision-maker who can accept a trade-off. We can work with incomplete documentation.
                We cannot work with a programme that must never change an existing process.
              </p>
            </article>
          </Reveal>
          <Reveal delay={90}>
            <article className="tile">
              <span className="tile-n">Out</span>
              <h3>What we will not do</h3>
              <p className="muted">
                We will not invent metrics, hide a rewrite inside a “phase 0”, or staff a project with
                people you never meet. If a requested architecture is a poor fit, we will say so and
                propose a smaller one.
              </p>
            </article>
          </Reveal>
        </div>
      </section>
      <CtaBand title="Talk through a live constraint" />
    </main>
  );
}
