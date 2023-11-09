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
        <div
          style={{ display: "flex", position: "absolute", top: 90, left: 140 }}
        >
          <QRCodeSVG fgColor="white" bgColor="black" value={query} size={420} />
        </div>
        <div
          style={{
            display: "flex",
            height: "100%",
            width: "100px",
            position: "absolute",
            right: 0,
          }}
        >
          <svg
            width="100"
            height="600"
            viewBox="0 0 100 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="600"
              height="100"
              transform="matrix(0 -1 1 0 0 600)"
              fill="url(#paint0_linear_2958_495)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2958_495"
                x1="600"
                y1="49.9999"
                x2="-2.20056e-06"
                y2="49.9998"
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
      width: 800,
      height: 600,
    }
  );
}
