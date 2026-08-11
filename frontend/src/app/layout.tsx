import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
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
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
