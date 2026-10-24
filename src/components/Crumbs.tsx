import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { breadcrumbList, graph } from "@/lib/schema";

export function Crumbs({
  items,
}: {
  items: { href?: string; label: string }[];
}) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <JsonLd data={graph(breadcrumbList(items))} />
      <ol>
        {items.map((item, i) => (
          <li key={`${item.label}-${i}`}>
            {i > 0 && <span aria-hidden="true"> / </span>}
            {item.href ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
