import Image from "next/image";
import { ContactForm } from "./ContactForm";

export function ContactBlock({
  title = "Have a system that needs to last?",
  copy = "Tell us what you are working on, where the current systems fall short, and what must not break. An engineer reads every enquiry.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="contact-block" id="enquire">
      <div className="contact-block-media" aria-hidden="true">
        <Image src="/images/cta-atrium.jpg" alt="" fill sizes="100vw" />
      </div>
      <div className="wrap contact-block-grid">
        <div className="contact-block-copy">
          <p className="kicker">Start a conversation</p>
          <h2>{title}</h2>
          <p className="lede">{copy}</p>
          <ol className="contact-steps">
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
        </div>
        <div className="contact-card">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
