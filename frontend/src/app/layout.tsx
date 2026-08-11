import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChenWeb Portfolio",
  description: "Personal portfolio built with Next.js and deployed on GitHub Pages.",
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
