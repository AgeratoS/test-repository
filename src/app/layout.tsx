import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { site } from "@/data/content";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} — прачечная самообслуживания`,
  description: site.description,
  keywords: [
    "прачечная",
    "стирка",
    "сушка",
    "самообслуживание",
    "КРУЧУ-ВЕРЧУ",
  ],
  openGraph: {
    title: `${site.name} — прачечная самообслуживания`,
    description: site.description,
    locale: "ru_RU",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0284c7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} h-full scroll-smooth`}>
      <body className="min-h-full bg-sky-50 font-sans text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
