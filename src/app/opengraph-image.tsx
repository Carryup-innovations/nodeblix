import { renderOg } from "@/lib/og";

export const alt = "Nodeblix — cloud, software, data, and CRM engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    kicker: "Technology engineering & consulting",
    title: "Cloud, software, data, and CRM systems built to be depended on",
    image: "/images/hero-skyline.jpg",
  });
}
