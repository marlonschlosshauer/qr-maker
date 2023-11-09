import { getURLFromSearchParams } from "@/libs/transform";
import React from "react";
import { Generator } from "../components/Generator/Generator";

export default function Home({ searchParams }: any) {
  const url = getURLFromSearchParams(searchParams);
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
  return {
    metadataBase: new URL(process.env.BASE_URL ?? ""),
    title: url ? `URL: ${url}` : "Embed-One: QR Code Generator",
    description: "Easily generate, preview and download QR codes from urls.",
    keywords: ["QR", "code", "generation"],
    openGraph: {
      images: [`${process.env.BASE_URL}/api/og?q=${url}`],
    },
  };
}
