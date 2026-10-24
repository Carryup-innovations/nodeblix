import { getIndustry, industries } from "@/content/industries";
import { renderOg } from "@/lib/og";

export const alt = "Nodeblix industry overview";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const industry = getIndustry((await params).slug)!;
  return renderOg({ kicker: industry.name, title: industry.h1, image: industry.image });
}
