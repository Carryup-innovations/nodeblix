"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";

export type MenuItem = {
  href: string;
  label: string;
  short: string;
  image: string;
  alt: string;
};

export type MenuData = {
  services: MenuItem[];
  industries: MenuItem[];
  insights: MenuItem[];
};

type Panel = "services" | "industries" | "insights" | "company";

const company: MenuItem[] = [
  {
    href: "/about",
    label: "About Nodeblix",
    short: "Why we exist and the principles behind technical decisions.",
    image: "/images/about-campus.jpg",
    alt: "Quiet courtyard of a contemporary research campus",
  },
  {
    href: "/approach",
    label: "Our approach",
    short: "Five movements from discovery to an operable handover.",
    image: "/images/approach-studio.jpg",
    alt: "Architectural workshop table with drawings and a scale model",
  },
  {
    href: "/contact",
    label: "Discuss a project",
    short: "Describe the systems involved and what must not break.",
    image: "/images/cta-atrium.jpg",
    alt: "Steel and glass atrium lit in deep blue",
  },
];

function Chevron() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
      <path d="M1.5 3.5 5 7l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <path d="M2 7h10M8 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function MegaNav({ menu }: { menu: MenuData }) {
  const [panel, setPanel] = useState<Panel | null>(null);
  const [mobile, setMobile] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [primed, setPrimed] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setPanel(null), 160);
  };
  const openPanel = (p: Panel) => {
    cancelClose();
    setPanel(p);
  };
  const closeAll = useCallback(() => {
    setPanel(null);
    setMobile(false);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeAll]);

  useEffect(() => {
    document.documentElement.style.overflow = mobile ? "hidden" : "";
  }, [mobile]);

  const trigger = (p: Panel, label: string) => (
    <button
      type="button"
      className={panel === p ? "nav-trigger is-active" : "nav-trigger"}
      aria-expanded={panel === p}
      aria-controls={`mega-${p}`}
      onMouseEnter={() => openPanel(p)}
      onClick={() => (panel === p ? setPanel(null) : openPanel(p))}
    >
      {label}
      <Chevron />
    </button>
  );

  const preview = menu.services[activeService];

  return (
    <header
      className={panel ? "site-header has-panel" : "site-header"}
      onMouseLeave={scheduleClose}
      onPointerEnter={() => setPrimed(true)}
      onFocus={() => setPrimed(true)}
    >
      <div className="wrap header-bar">
        <Logo />
        <nav className="nav" aria-label="Primary">
          <ul className="nav-list">
            <li>{trigger("services", "Services")}</li>
            <li>{trigger("industries", "Industries")}</li>
            <li>
              <Link href="/work" className="nav-link" onMouseEnter={scheduleClose} onClick={closeAll}>
                Work
              </Link>
            </li>
            <li>{trigger("insights", "Insights")}</li>
            <li>{trigger("company", "Company")}</li>
          </ul>
          <Link href="/contact" className="btn nav-cta" onMouseEnter={scheduleClose} onClick={closeAll}>
            Discuss a project
          </Link>
        </nav>
        <button
          className="menu-btn"
          type="button"
          aria-expanded={mobile}
          aria-controls="mobile-nav"
          aria-label={mobile ? "Close menu" : "Open menu"}
          onClick={() => {
            setPrimed(true);
            setMobile((v) => !v);
          }}
        >
          <span className={mobile ? "burger is-x" : "burger"} aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
      </div>

      <div className={panel ? "mega is-open" : "mega"} onMouseEnter={cancelClose}>
        <div id="mega-services" className="mega-panel" hidden={panel !== "services"}>
          <div className="wrap mega-grid mega-grid-services">
            <div className="mega-intro">
              <p className="kicker">Services</p>
              <p className="mega-title">Eight capabilities, one operating estate.</p>
              <p className="muted">
                AI, cloud, software, data, and business systems designed to work together.
              </p>
              <Link href="/services" className="text-link" onClick={closeAll}>
                All services <Arrow />
              </Link>
            </div>
            <ul className="mega-list">
              {menu.services.map((item, i) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={i === activeService ? "mega-item is-active" : "mega-item"}
                    onMouseEnter={() => setActiveService(i)}
                    onFocus={() => setActiveService(i)}
                    onClick={closeAll}
                  >
                    <span className="mega-thumb">
                      {primed && <Image src={item.image} alt="" width={112} height={112} loading="eager" />}
                    </span>
                    <span className="mega-item-label">{item.label}</span>
                    <Arrow />
                  </Link>
                </li>
              ))}
            </ul>
            <Link href={preview.href} className="mega-preview" onClick={closeAll}>
              <span className="mega-preview-media">
                {primed &&
                  menu.services.map((item, i) => (
                    <Image
                      key={item.href}
                      src={item.image}
                      alt={i === activeService ? item.alt : ""}
                      fill
                      sizes="360px"
                      loading="eager"
                      className={i === activeService ? "is-shown" : undefined}
                    />
                  ))}
              </span>
              <span className="mega-preview-label">{preview.label}</span>
              <span className="mega-preview-copy">{preview.short}</span>
            </Link>
          </div>
        </div>

        <div id="mega-industries" className="mega-panel" hidden={panel !== "industries"}>
          <div className="wrap mega-grid">
            <div className="mega-intro">
              <p className="kicker">Industries</p>
              <p className="mega-title">Sector constraints, written as they show up.</p>
              <p className="muted">Operating patterns we plan around in each sector.</p>
              <Link href="/industries" className="text-link" onClick={closeAll}>
                All industries <Arrow />
              </Link>
            </div>
            <ul className="mega-cards mega-cards-3">
              {menu.industries.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="mega-card" onClick={closeAll}>
                    <span className="mega-card-media">
                      {primed && <Image src={item.image} alt="" fill sizes="280px" loading="eager" />}
                    </span>
                    <span className="mega-card-label">{item.label}</span>
                    <span className="mega-card-copy">{item.short}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div id="mega-insights" className="mega-panel" hidden={panel !== "insights"}>
          <div className="wrap mega-grid">
            <div className="mega-intro">
              <p className="kicker">Insights</p>
              <p className="mega-title">Practical notes from the work.</p>
              <ul className="mega-links">
                <li>
                  <Link href="/insights" onClick={closeAll}>
                    All articles <Arrow />
                  </Link>
                </li>
                <li>
                  <Link href="/work" onClick={closeAll}>
                    Illustrative scenarios <Arrow />
                  </Link>
                </li>
              </ul>
            </div>
            <ul className="mega-cards mega-cards-3">
              {menu.insights.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="mega-card" onClick={closeAll}>
                    <span className="mega-card-media tall">
                      {primed && <Image src={item.image} alt="" fill sizes="280px" loading="eager" />}
                    </span>
                    <span className="mega-card-meta">{item.short}</span>
                    <span className="mega-card-label">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div id="mega-company" className="mega-panel" hidden={panel !== "company"}>
          <div className="wrap mega-grid">
            <div className="mega-intro">
              <p className="kicker">Company</p>
              <p className="mega-title">Built around engineering.</p>
              <p className="muted">How we think, how we work, and how to start a conversation.</p>
            </div>
            <ul className="mega-cards mega-cards-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="mega-card" onClick={closeAll}>
                    <span className="mega-card-media tall">
                      {primed && <Image src={item.image} alt="" fill sizes="280px" loading="eager" />}
                    </span>
                    <span className="mega-card-label">{item.label}</span>
                    <span className="mega-card-copy">{item.short}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={panel ? "mega-backdrop is-open" : "mega-backdrop"} onMouseEnter={scheduleClose} onClick={closeAll} aria-hidden="true" />

      <div id="mobile-nav" className={mobile ? "mobile-nav is-open" : "mobile-nav"} hidden={!mobile}>
        <div className="wrap">
          <details>
            <summary>Services</summary>
            <ul>
              <li>
                <Link href="/services" onClick={closeAll}>
                  All services
                </Link>
              </li>
              {menu.services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={closeAll}>
                    <span className="mega-thumb small">
                      {primed && <Image src={item.image} alt="" width={80} height={80} loading="eager" />}
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
          <details>
            <summary>Industries</summary>
            <ul>
              <li>
                <Link href="/industries" onClick={closeAll}>
                  All industries
                </Link>
              </li>
              {menu.industries.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={closeAll}>
                    <span className="mega-thumb small">
                      {primed && <Image src={item.image} alt="" width={80} height={80} loading="eager" />}
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
          <Link className="mobile-link" href="/work" onClick={closeAll}>
            Work
          </Link>
          <Link className="mobile-link" href="/insights" onClick={closeAll}>
            Insights
          </Link>
          <Link className="mobile-link" href="/about" onClick={closeAll}>
            About
          </Link>
          <Link className="mobile-link" href="/approach" onClick={closeAll}>
            Approach
          </Link>
          <Link className="btn" href="/contact" onClick={closeAll} style={{ marginTop: 20, width: "100%" }}>
            Discuss a project
          </Link>
        </div>
      </div>
    </header>
  );
}
