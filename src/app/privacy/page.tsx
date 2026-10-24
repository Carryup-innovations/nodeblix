import { Crumbs } from "@/components/Crumbs";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "How Nodeblix handles information submitted through nodeblix.com, including enquiry form data, how it is used, how long it is kept, and how to ask about it.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main id="main" className="section">
      <div className="wrap prose">
        <Crumbs items={[{ href: "/", label: "Home" }, { label: "Privacy Policy" }]} />
        <h1>Privacy Policy</h1>
        <p className="muted">Last updated 23 October 2026</p>
        <p>
          This policy describes how Nodeblix handles information submitted
          through nodeblix.com. It is not legal advice and should be reviewed
          by counsel before the site takes production traffic.
        </p>
        <h2>What we collect</h2>
        <p>
          The project form collects name, work email, company, area of
          interest, a description of the work, and an optional timeline. Server
          logs may include IP address, user agent, and the pages requested.
        </p>
        <h2>How we use it</h2>
        <p>
          Form data is used to understand and respond to an enquiry. It is not
          sold. If a webhook is configured, the submission is forwarded to that
          endpoint so the team can reply.
        </p>
        <h2>Cookies and analytics</h2>
        <p>
          This site does not currently set marketing cookies or load a
          third-party analytics tag. If analytics are added later, this page
          will be updated before they are enabled.
        </p>
        <h2>Retention</h2>
        <p>
          Enquiry records should be kept only as long as needed to handle the
          conversation and any related legal obligation. Exact retention
          periods should be confirmed when a mailbox or CRM is connected.
        </p>
        <h2>Your requests</h2>
        <p>
          To ask for access, correction, or deletion of information you
          submitted, use the contact form and describe the request. A dedicated
          privacy email will be listed here once it exists.
        </p>
      </div>
    </main>
  );
}
