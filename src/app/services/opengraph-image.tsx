import { renderOg } from "@/lib/og";

export const alt = "Nodeblix technology services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    kicker: "Services",
    title: "AI, cloud, software, and data engineering — one accountable team",
    image: "/images/cloud-infrastructure.jpg",
  });
}
