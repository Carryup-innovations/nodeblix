import { getService, services } from "@/content/services";
import { renderOg } from "@/lib/og";

export const alt = "Nodeblix service overview";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const service = getService((await params).slug)!;
  return renderOg({ kicker: service.name, title: service.h1, image: service.image });
}
