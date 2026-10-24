import { renderOg } from "@/lib/og";

export const alt = "Nodeblix illustrative scenarios";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    kicker: "Work",
    title: "Illustrative engineering scenarios, shown as method",
    image: "/images/work-platform.jpg",
  });
}
