import { CardGrid } from "@/components/CardGrid";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { scenarios } from "@/content/work";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Work: Illustrative Engineering Scenarios",
  description:
    "Illustrative engineering scenarios on platform reliability, commerce data, and service extraction — clearly labelled, not named client case studies.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <main id="main">
      <PageHero
        image="/images/work-platform.jpg"
        alt="Empty operations floor with a muted status wall and city light at the windows"
        crumbs={[{ href: "/", label: "Home" }, { label: "Work" }]}
        kicker="Work"
        title="Method first. Named clients only when we can prove them."
        lede="Authorised case studies will appear here with real constraints and approved outcomes. Until then, these scenarios are clearly labeled illustrations of how we think — not delivery history."
      />
      <section className="section">
        <div className="wrap">
          <CardGrid
            items={scenarios.map((s) => ({
              href: `/work/${s.slug}`,
              image: s.image,
              alt: s.imageAlt,
              tag: `Illustrative scenario · ${s.sector}`,
              title: s.title,
              copy: s.summary,
              more: "Read the scenario",
            }))}
          />
        </div>
      </section>
      <CtaBand title="If you have work we are allowed to describe, we will." />
    </main>
  );
}
