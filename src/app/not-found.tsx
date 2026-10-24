import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="section">
      <div className="wrap" style={{ maxWidth: 640 }}>
        <p className="kicker">404</p>
        <h1 style={{ margin: "12px 0 16px" }}>This page is not in the estate.</h1>
        <p className="lede">
          The address may have changed, or the page was never published. Try the
          services index or start from home.
        </p>
        <div className="btn-row">
          <Link className="btn" href="/">
            Home
          </Link>
          <Link className="btn-ghost" href="/services">
            Services
          </Link>
          <Link className="btn-ghost" href="/contact">
            Discuss a project
          </Link>
        </div>
      </div>
    </main>
  );
}
