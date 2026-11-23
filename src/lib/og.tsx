import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const fontDir = join(process.cwd(), "src/assets/fonts");

export async function renderOg({
  kicker,
  title,
  image,
}: {
  kicker: string;
  title: string;
  image: string;
}) {
  const [heading, body, photo] = await Promise.all([
    readFile(join(fontDir, "PlusJakartaSans-Bold.ttf")),
    readFile(join(fontDir, "Inter-Medium.ttf")),
    readFile(join(process.cwd(), "public", image)),
  ]);
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;
  const titleSize = title.length > 70 ? 50 : title.length > 45 ? 58 : 66;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#101310" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photoSrc}
          alt=""
          width={560}
          height={630}
          style={{ position: "absolute", right: 0, top: 0, width: 560, height: 630, objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: 560,
            height: 630,
            display: "flex",
            background: "linear-gradient(90deg, #101310 0%, rgba(16,19,16,0.55) 45%, rgba(16,19,16,0.1) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 760,
            height: "100%",
            padding: "64px 0 60px 72px",
          }}
        >
          <div style={{ display: "flex", fontFamily: "Jakarta", fontSize: 40, color: "#F4F6F0", letterSpacing: -1 }}>
            nodebli<span style={{ color: "#C5F467" }}>x</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontFamily: "Inter",
                fontSize: 22,
                color: "#C5F467",
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 22,
              }}
            >
              {kicker}
            </div>
            <div
              style={{
                fontFamily: "Jakarta",
                fontSize: titleSize,
                lineHeight: 1.08,
                color: "#F4F6F0",
                letterSpacing: -1.5,
              }}
            >
              {title}
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", fontFamily: "Inter", fontSize: 22, color: "#858F86" }}>
            <div style={{ width: 36, height: 3, background: "#C5F467", marginRight: 16 }} />
            nodeblix.com
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Jakarta", data: heading, weight: 700, style: "normal" },
        { name: "Inter", data: body, weight: 500, style: "normal" },
      ],
    },
  );
}
