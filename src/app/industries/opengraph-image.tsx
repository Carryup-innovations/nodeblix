import { renderOg } from "@/lib/og";

export const alt = "Industries Nodeblix works with";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    kicker: "Industries",
    title: "Technology work shaped by sector constraints",
    image: "/images/industry-logistics.jpg",
  });
}
