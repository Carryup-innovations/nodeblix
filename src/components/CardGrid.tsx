import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";

export type CardItem = {
  href: string;
  image: string;
  alt: string;
  tag?: string;
  title: string;
  copy?: string;
  more?: string;
  wide?: boolean;
};

export function CardGrid({ items }: { items: CardItem[] }) {
  return (
    <div className="card-grid">
      {items.map((item, i) => (
        <Reveal key={item.href} delay={(i % 3) * 90} className={item.wide ? "span-2" : undefined}>
          <Link href={item.href} className={item.wide ? "card card-wide" : "card"}>
            <span className="card-media">
              <Image
                src={item.image}
                alt=""
                fill
                sizes={item.wide ? "(max-width: 980px) 100vw, 66vw" : "(max-width: 980px) 100vw, 33vw"}
              />
            </span>
            <span className="card-body">
              {item.tag && <span className="card-tag">{item.tag}</span>}
              <strong className="card-title">{item.title}</strong>
              {item.copy && <span className="card-copy">{item.copy}</span>}
              <span className="card-more">{item.more ?? "Read more"} →</span>
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
