import { renderOg } from "@/lib/og";

export const alt = "Contact Nodeblix";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    kicker: "Contact",
    title: "Discuss a cloud, software, data, or CRM project",
    image: "/images/cta-atrium.jpg",
  });
}
