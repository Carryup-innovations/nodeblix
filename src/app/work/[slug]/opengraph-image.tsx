import { getScenario, scenarios } from "@/content/work";
import { renderOg } from "@/lib/og";

export const alt = "Nodeblix illustrative scenario";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return scenarios.map((w) => ({ slug: w.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const item = getScenario((await params).slug)!;
  return renderOg({ kicker: `Illustrative scenario · ${item.sector}`, title: item.title, image: item.image });
}
