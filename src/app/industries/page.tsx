import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { industries } from "@/content/industries";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Industries: Technology Consulting by Sector",
  description:
    "How AI, cloud, software, data, and CRM work changes across financial services, retail, manufacturing, healthcare, logistics, and software companies.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <main id="main">
      <PageHero
        image="/images/industry-logistics.jpg"
        alt="Twilight container port with stacked boxes and cranes over still water"
        crumbs={[{ href: "/", label: "Home" }, { label: "Industries" }]}
        title="Sector constraints, written as they actually show up."
        lede="These pages describe operating patterns we expect in each sector. They are not a substitute for named experience — if a programme requires evidence of prior delivery, we will say so plainly."
      />
      <section className="section">
        <div className="wrap">
          <div className="industry-grid">
            {industries.map((item, i) => (
              <Reveal key={item.slug} delay={(i % 3) * 90}>
                <Link href={`/industries/${item.slug}`} className="industry-tile tall">
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
      <CtaBand title="Bring the constraints, not a sector slogan." />
    </main>
  );
}
