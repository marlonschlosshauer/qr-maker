import { getURLFromSearchParams } from "@/libs/transform";
import React from "react";
import { Generator } from "../components/Generator/Generator";

export default function Home({ searchParams }: any) {
  const url = getURLFromSearchParams(searchParams, false);
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Generator code={url} />
      </main>
    </div>
  );
}

export async function generateMetadata({ searchParams }: any) {
  const url = getURLFromSearchParams(searchParams);
  const title = url ? `URL: ${url}` : "Embed-One: QR Code Generator";
  const description =
    "Easily generate, preview and download QR codes from urls.";
  const keywords = ["QR", "code", "generation"];
  const baseUrl = new URL(process.env.BASE_URL ?? "");

  return {
    metadataBase: baseUrl,
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: baseUrl,
      siteName: title,
      images: [
        {
          url: `${process.env.BASE_URL}/api/og/600x600?q=${url}`,
          width: 600,
          height: 600,
        },
        {
          url: `${process.env.BASE_URL}/api/og/800x600?q=${url}`,
          width: 800,
          height: 600,
        },
        {
          url: `${process.env.BASE_URL}/api/og/1200x630?q=${url}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}
