import React from "react";
import { Generator } from "../components/Generator/Generator";

export default function Home({ searchParams }: any) {
  const { q = process.env.BASE_URL } = searchParams;
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Generator code={q} />
      </main>
    </div>
  );
}

export async function generateMetadata({ searchParams }: any) {
  const { q } = searchParams;
  return {
    metadataBase: new URL(process.env.BASE_URL ?? ""),
    title: q ? `URL: ${q}` : "Embed: QR Code Generator",
    description: "Easily generate, preview and download QR codes from urls.",
    keywords: ["QR", "code", "generation"],
    openGraph: {
      images: [`${process.env.BASE_URL}/api/og?q=${q}`],
    },
  };
}
