import Link from "next/link";
import { Logo } from "./Logo";
import { industries } from "@/content/industries";
import { serviceLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-top">
        <p className="footer-tagline">Technology built for what comes next.</p>
        <Link className="btn btn-lg" href="/contact">
          Discuss a project
        </Link>
      </div>
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Logo invert />
          <p>
            Nodeblix designs, builds, and modernizes the technology systems businesses depend on to
            operate, adapt, and grow.
          </p>
        </div>
        <div>
          <h2>Services</h2>
          <ul>
            {serviceLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Industries</h2>
          <ul>
            {industries.map((item) => (
              <li key={item.slug}>
                <Link href={`/industries/${item.slug}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Company</h2>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/approach">Our approach</Link>
            </li>
            <li>
              <Link href="/work">Work</Link>
            </li>
            <li>
              <Link href="/insights">Insights</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>Enquiries</h2>
          <ul>
            <li>Project conversations start through the contact form.</li>
            <li>A public mailbox and office details will appear here once verified.</li>
            <li>
              <Link href="/privacy">How we use submitted information</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-base">
        <p>© {new Date().getFullYear()} Nodeblix. All rights reserved.</p>
        <p>
          <Link href="/privacy">Privacy</Link>
          {" · "}
          <Link href="/terms">Terms</Link>
        </p>
      </div>
    </footer>
  );
}
