import { Crumbs } from "@/components/Crumbs";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Terms of Use",
  description:
    "Terms of use for nodeblix.com: how to read site content and illustrative scenarios, acceptable use of the site and enquiry form, and limits of liability.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main id="main" className="section">
      <div className="wrap prose">
        <Crumbs items={[{ href: "/", label: "Home" }, { label: "Terms of Use" }]} />
        <h1>Terms of Use</h1>
        <p className="muted">Last updated 23 October 2026</p>
        <p>
          These terms apply to the public website at nodeblix.com. They are a
          starting draft and should be reviewed before launch.
        </p>
        <h2>The site</h2>
        <p>
          Content is provided for information. It is not a proposal, a
          warranty, or a commitment to perform work. Service descriptions
          explain how we typically approach problems; every engagement is
          scoped separately.
        </p>
        <h2>No invented credentials</h2>
        <p>
          Illustrative scenarios in the Work section are labeled as such. They
          are not case studies. Do not treat them as evidence of named clients
          or measured results.
        </p>
        <h2>Acceptable use</h2>
        <p>
          Do not misuse the site, attempt to disrupt it, or submit unlawful
          content through the form. Automated scraping that overloads the
          service is not permitted.
        </p>
        <h2>Liability</h2>
        <p>
          The site is provided as is. To the extent permitted by law, Nodeblix
          is not liable for decisions made solely on the basis of public
          website copy. Formal advice is given only in a signed engagement.
        </p>
      </div>
    </main>
  );
}
