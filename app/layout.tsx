import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { GeistSans } from "geist/font/sans";
import "@fontsource/instrument-serif/400.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zaks.co"),
  title: "Zaks & Co",
  description: "Zaks & Co — Just a couple of investors turning ideas into assets.",
  alternates: {
    canonical: "https://zaks.co"
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }
    ]
  },
  openGraph: {
    title: "Zaks & Co",
    description: "Just a couple of investors turning ideas into assets.",
    url: "https://zaks.co",
    siteName: "Zaks & Co",
    type: "website",
    images: [
      {
        url: "/images/zaks-open-graph.png",
        width: 1200,
        height: 630,
        alt: "Zaks & Co — Just a couple of investors turning ideas into assets."
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Zaks & Co",
    description: "Just a couple of investors turning ideas into assets.",
    images: ["/images/zaks-open-graph.png"]
  }
};

export const viewport: Viewport = {
  themeColor: "#2D3F42"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en" className={GeistSans.variable}><body>{children}</body></html>;
}
