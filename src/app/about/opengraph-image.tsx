import { renderOg } from "@/lib/og";

export const alt = "About Nodeblix";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    kicker: "About Nodeblix",
    title: "An AI-first, engineering-led technology partner",
    image: "/images/about-campus.jpg",
  });
}
