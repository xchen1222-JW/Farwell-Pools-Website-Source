import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Farwell Pools & Spas Redesign",
  description:
    "A modern concept for Farwell Pools & Spas, serving Southern Wisconsin since 1968.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
