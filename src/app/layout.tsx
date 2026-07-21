import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Monarch AI | Proactive School Safety Platform",
  description:
    "Monarch AI helps K-12 schools intervene before harm occurs with multimodal behavioral risk detection across text, images, audio, video, and device activity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;800;900&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
