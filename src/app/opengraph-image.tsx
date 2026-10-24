import { renderOg } from "@/lib/og";

export const alt = "Nodeblix — AI, cloud, software, and data engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    kicker: "Technology engineering & consulting",
    title: "We engineer AI into the systems your business runs on",
    image: "/images/hero-skyline.jpg",
  });
}
