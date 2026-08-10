import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChenWeb Starter",
  description: "Next.js SSG frontend paired with a FastAPI backend.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}

