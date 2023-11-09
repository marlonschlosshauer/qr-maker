import { ImageResponse } from "next/og";
import { QRCodeSVG } from "qrcode.react";

export const runtime = "edge";

export async function GET(request: any) {
  const { searchParams } = request.nextUrl;
  const query = searchParams.get("q") ?? process.env.BASE_URL;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#000",
        }}
      >
        <QRCodeSVG value={query} size={560} />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
