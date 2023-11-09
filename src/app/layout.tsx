import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" />
        <meta name="theme-color" content="##581c87" />
      </head>
      <body>{children}</body>
    </html>
  );
}
