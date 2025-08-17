import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quantumterks",
  description:
    "Expert staffing solutions for technology and healthcare organizations. We bridge the gap between specialized qualifications and the demands of modern workplaces.",
  icons: {
    // Add cache-busting param to avoid stale browser caches in production
    icon: "/favicon.ico?v=2",
  },
  openGraph: {
    title: "Quantumterks",
    description:
      "Expert staffing solutions for technology and healthcare organizations.",
    url: "https://quantumterks.netlify.app/",
    siteName: "Quantumterks",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Quantumterks — Expert staffing solutions",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantumterks",
    description:
      "Expert staffing solutions for technology and healthcare organizations.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="light" />
        <meta name="theme-color" content="#ffffff" />
        {/* Explicit favicon link with cache-busting to mitigate aggressive caching */}
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
      </head>
      <body
        className={`${interSans.variable} ${dmSerifDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
