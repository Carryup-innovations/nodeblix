import Image from "next/image";
import type { ReactNode } from "react";
import { Crumbs } from "./Crumbs";

type Crumb = { href?: string; label: string };

export function PageHero({
  image,
  alt,
  kicker,
  title,
  lede,
  crumbs,
  children,
  size = "page",
  quality,
}: {
  image: string;
  alt: string;
  kicker?: string;
  title: ReactNode;
  lede?: string;
  crumbs?: Crumb[];
  children?: ReactNode;
  size?: "home" | "page";
  quality?: 75 | 90;
}) {
  return (
    <section className={`page-hero page-hero-${size}`}>
      <div className="page-hero-media">
        <Image src={image} alt={alt} fill loading="eager" fetchPriority="high" sizes="100vw" quality={quality} />
      </div>
      <div className="wrap page-hero-inner">
        {crumbs && <Crumbs items={crumbs} />}
        {kicker && <p className="kicker">{kicker}</p>}
        <h1>{title}</h1>
        {lede && <p className="lede">{lede}</p>}
        {children}
      </div>
    </section>
  );
}
