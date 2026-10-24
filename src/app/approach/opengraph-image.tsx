import { renderOg } from "@/lib/og";

export const alt = "The Nodeblix delivery approach";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    kicker: "Our approach",
    title: "Discover, define, engineer, launch, evolve",
    image: "/images/approach-studio.jpg",
  });
}
