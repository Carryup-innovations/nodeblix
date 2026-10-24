import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact Us: Discuss a Technology Project",
  description:
    "Tell us about an AI, cloud, DevOps, software, data, analytics, or CRM project — the systems and constraints involved — and we will suggest a useful first step.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main id="main">
      <PageHero
        image="/images/hero-skyline.jpg"
        alt="Two engineers looking out over a city skyline at dusk from a high office floor"
        crumbs={[{ href: "/", label: "Home" }, { label: "Contact" }]}
        title="Discuss a project"
        lede="Describe the systems involved, the constraint you cannot ignore, and what a useful next ninety days would look like."
      />
      <section className="section">
        <div className="wrap contact-page-grid">
          <div>
            <h2>What happens next</h2>
            <ol className="contact-steps light">
              <li>
                <strong>Describe the work</strong>
                <span>Systems involved, constraints, and a rough timeline.</span>
              </li>
              <li>
                <strong>We read it properly</strong>
                <span>Fit is judged on the problem, not on the size of the budget.</span>
              </li>
              <li>
                <strong>A useful first step</strong>
                <span>A short conversation, a suggested scope — or a clear “not us”.</span>
              </li>
            </ol>
            <p className="notice" style={{ marginTop: 28 }}>
              A public email address, telephone number, and office location are not published here
              yet. Do not treat any other “Nodeblix” listing on the web as ours unless it matches
              this site.
            </p>
          </div>
          <div className="contact-card">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
