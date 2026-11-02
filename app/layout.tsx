import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BAYOMECANIX — Pune's First 360° Hybrid Performance & Athlete Simulation Center",
  description:
    "Not just another gym. A complete performance ecosystem designed for athletes who push beyond ordinary limits. 5,500 sq. ft. of hybrid race simulation, endurance performance, obstacle course training, sports biomechanics, recovery, and nutrition.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
