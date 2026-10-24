"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function Carousel({ children, label }: { children: ReactNode; label: string }) {
  const track = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setProgress(max > 0 ? el.scrollLeft / max : 1);
      setAtStart(el.scrollLeft <= 2);
      setAtEnd(el.scrollLeft >= max - 2);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const step = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(":scope > *");
    const amount = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="carousel">
      <div className="carousel-track" ref={track} role="region" aria-label={label} tabIndex={0}>
        {children}
      </div>
      <div className="carousel-controls">
        <div className="carousel-progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${Math.max(progress, 0.08)})` }} />
        </div>
        <button type="button" className="carousel-btn" onClick={() => step(-1)} disabled={atStart} aria-label="Previous">
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M10 3 5 8l5 5" fill="none" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </button>
        <button type="button" className="carousel-btn" onClick={() => step(1)} disabled={atEnd} aria-label="Next">
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <path d="m6 3 5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
