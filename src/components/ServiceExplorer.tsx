"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";

export type ExplorerItem = {
  slug: string;
  name: string;
  short: string;
  image: string;
  alt: string;
  points: string[];
};

export function ServiceExplorer({ items }: { items: ExplorerItem[] }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const keys = ["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "Home", "End"];
    if (!keys.includes(e.key)) return;
    e.preventDefault();
    let next = active;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (active + 1) % items.length;
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = (active - 1 + items.length) % items.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = items.length - 1;
    setActive(next);
    tabs.current[next]?.focus();
  };

  const current = items[active];

  return (
    <div className="explorer">
      <div className="explorer-tabs" role="tablist" aria-label="Services" aria-orientation="vertical" onKeyDown={onKeyDown}>
        {items.map((item, i) => (
          <button
            key={item.slug}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`svc-tab-${item.slug}`}
            aria-selected={i === active}
            aria-controls="svc-panel"
            tabIndex={i === active ? 0 : -1}
            className={i === active ? "explorer-tab is-active" : "explorer-tab"}
            onClick={(e) => {
              setActive(i);
              e.currentTarget.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
            }}
            onMouseEnter={() => setActive(i)}
          >
            <span className="explorer-num">{String(i + 1).padStart(2, "0")}</span>
            <span>{item.name}</span>
          </button>
        ))}
      </div>
      <div className="explorer-panel" role="tabpanel" id="svc-panel" aria-labelledby={`svc-tab-${current.slug}`}>
        <div className="explorer-media">
          {items.map((item, i) => (
            <Image
              key={item.slug}
              src={item.image}
              alt={i === active ? item.alt : ""}
              fill
              sizes="(max-width: 980px) 100vw, 55vw"
              className={i === active ? "is-shown" : undefined}
            />
          ))}
        </div>
        <div className="explorer-body" key={current.slug}>
          <h3>{current.name}</h3>
          <p>{current.short}</p>
          <ul>
            {current.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <Link href={`/services/${current.slug}`} className="btn">
            Explore {current.name}
          </Link>
        </div>
      </div>
    </div>
  );
}
