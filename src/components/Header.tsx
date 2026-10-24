import { MegaNav, type MenuData } from "./MegaNav";
import { articles } from "@/content/articles";
import { industries } from "@/content/industries";
import { services } from "@/content/services";

export function Header() {
  const menu: MenuData = {
    services: services.map((s) => ({
      href: `/services/${s.slug}`,
      label: s.navLabel,
      short: s.short,
      image: s.image,
      alt: s.imageAlt,
    })),
    industries: industries.map((i) => ({
      href: `/industries/${i.slug}`,
      label: i.name,
      short: i.h1,
      image: i.image,
      alt: i.imageAlt,
    })),
    insights: articles.slice(0, 3).map((a) => ({
      href: `/insights/${a.slug}`,
      label: a.title,
      short: a.category,
      image: a.image,
      alt: a.imageAlt,
    })),
  };

  return <MegaNav menu={menu} />;
}
