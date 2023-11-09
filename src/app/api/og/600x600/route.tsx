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
        <div style={{ display: "flex", position: "absolute", top: 100 }}>
          <QRCodeSVG fgColor="white" bgColor="black" value={query} size={360} />
        </div>
        <div
          style={{
            display: "flex",
            height: "50px",
            width: "100%",
            position: "absolute",
            bottom: 0,
          }}
        >
          <svg
            width="600"
            height="50"
            viewBox="0 0 600 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="600" height="50" fill="url(#paint0_linear_2958_487)" />
            <defs>
              <linearGradient
                id="paint0_linear_2958_487"
                x1="600"
                y1="24.9999"
                x2="-2.20055e-06"
                y2="24.9999"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7775D2" />
                <stop offset="0.508015" stop-color="#0097A7" />
                <stop offset="1" stop-color="#FDB913" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    ),
    {
      width: 600,
      height: 600,
    }
  );
}
