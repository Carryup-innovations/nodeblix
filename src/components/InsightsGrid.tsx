"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export type InsightCard = {
  slug: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  image: string;
  alt: string;
};

export function InsightsGrid({ items }: { items: InsightCard[] }) {
  const categories = ["All", ...Array.from(new Set(items.map((i) => i.category)))];
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? items : items.filter((i) => i.category === filter);

  return (
    <>
      <div className="chips" role="group" aria-label="Filter by topic">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            className={c === filter ? "chip is-active" : "chip"}
            aria-pressed={c === filter}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="card-grid" key={filter}>
        {shown.map((a, i) => (
          <Link
            key={a.slug}
            href={`/insights/${a.slug}`}
            className="card fade-in"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <span className="card-media">
              <Image src={a.image} alt="" fill sizes="(max-width: 980px) 100vw, 33vw" />
            </span>
            <span className="card-body">
              <span className="card-tag">{a.category}</span>
              <strong className="card-title">{a.title}</strong>
              <span className="card-copy">{a.summary}</span>
              <span className="card-meta">
                <time dateTime={a.date}>{a.date}</time>
              </span>
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
