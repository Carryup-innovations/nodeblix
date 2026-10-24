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
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#0B1220" }}>
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
            background: "linear-gradient(90deg, #0B1220 0%, rgba(11,18,32,0.55) 45%, rgba(11,18,32,0.1) 100%)",
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
          <div style={{ display: "flex", fontFamily: "Jakarta", fontSize: 40, color: "#F6F8FB", letterSpacing: -1 }}>
            nodebli<span style={{ color: "#3882F6" }}>x</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontFamily: "Inter",
                fontSize: 22,
                color: "#7fa8ff",
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
                color: "#FFFFFF",
                letterSpacing: -1.5,
              }}
            >
              {title}
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", fontFamily: "Inter", fontSize: 22, color: "#AEB8C7" }}>
            <div style={{ width: 36, height: 3, background: "#246BFD", marginRight: 16 }} />
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
