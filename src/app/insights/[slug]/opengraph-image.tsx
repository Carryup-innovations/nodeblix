import { articles, getArticle } from "@/content/articles";
import { renderOg } from "@/lib/og";

export const alt = "Nodeblix insight article";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const item = getArticle((await params).slug)!;
  return renderOg({ kicker: item.category, title: item.title, image: item.image });
}
