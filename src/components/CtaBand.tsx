import Image from "next/image";
import Link from "next/link";

export function CtaBand({
  title = "Let’s build something that lasts.",
  copy = "Tell us what you are working on, where the current systems fall short, or what you want to make possible. We will help you identify the next practical step.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="cta-band">
      <div className="cta-band-media" aria-hidden="true">
        <Image src="/images/cta-atrium.jpg" alt="" fill sizes="100vw" />
      </div>
      <div className="wrap cta-band-inner">
        <div>
          <h2>{title}</h2>
          <p className="lede">{copy}</p>
        </div>
        <div className="btn-row">
          <Link className="btn" href="/contact">
            Discuss a project
          </Link>
          <Link className="btn-ghost btn-ghost-on-dark" href="/approach">
            Explore our approach
          </Link>
        </div>
      </div>
    </section>
  );
}
