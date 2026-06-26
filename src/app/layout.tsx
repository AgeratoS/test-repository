import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0284c7" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} dark h-full scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-sky-50 font-sans text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
