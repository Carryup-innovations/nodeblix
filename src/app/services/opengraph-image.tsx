import { renderOg } from "@/lib/og";

export const alt = "Nodeblix technology services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    kicker: "Services",
    title: "Seven engineering services, one accountable team",
    image: "/images/cloud-infrastructure.jpg",
  });
}
