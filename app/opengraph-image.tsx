import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Ohio Muscle Activation — Muscle Activation Techniques in Powell, Ohio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public", "logo-white.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#111111",
          borderBottom: "14px solid #cc1818",
        }}
      >
        <img src={logoSrc} width={480} height={139} alt="" />
        <div
          style={{
            marginTop: 44,
            color: "#f0ede8",
            fontSize: 36,
            fontWeight: 700,
            letterSpacing: 2,
          }}
        >
          Muscle Activation Techniques
        </div>
        <div style={{ marginTop: 14, color: "#a0988f", fontSize: 27 }}>
          Powell · Dublin · Columbus, Ohio
        </div>
      </div>
    ),
    { ...size }
  );
}
