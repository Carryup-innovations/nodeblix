import { renderOg } from "@/lib/og";

export const alt = "Nodeblix Terms of use";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    kicker: "Legal",
    title: "Terms of use",
    image: "/images/about-campus.jpg",
  });
}
