import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Bharat Bodh Samvad",
    template: "%s | Bharat Bodh Samvad",
  },
  description:
    "Bharat Bodh Samvad Series explores Indian culture, philosophy, heritage, and innovation through curated themes, talks, and discussions.",
  keywords: [
    "Bharat Bodh Samvad",
    "Indian culture",
    "philosophy",
    "heritage",
    "history",
    "innovation",
  ],
  authors: [{ name: "Bharat Bodh Samvad" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Bharat Bodh Samvad Series",
    description:
      "Bharat Bodh Samvad Series explores Indian culture, philosophy, heritage, and innovation through curated themes, talks, and discussions.",
    type: "website",
    locale: "en_IN",
    siteName: "Bharat Bodh Samvad Series",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bharat Bodh Samvad Series",
    description:
      "Bharat Bodh Samvad Series explores Indian culture, philosophy, heritage, and innovation through curated themes, talks, and discussions.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
